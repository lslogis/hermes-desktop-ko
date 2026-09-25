"""Add the Korean (ko) locale to the Hermes Desktop checkout and rebuild the Windows app.

Hermes updates replace the checkout with upstream source, which drops the Korean files.
Run this after an update (a logon task runs it with --auto): it re-copies locale/*.ts,
re-patches the three wiring files, and rebuilds only when the built app lacks Korean.

    python apply.py            # patch + rebuild if needed
    python apply.py --force    # patch + always rebuild
    python apply.py --auto     # quiet mode for the scheduled task (logs to apply.log)
    python apply.py --remove   # undo: restore upstream files, rebuild English-only, disable the logon task
    python apply.py --missing  # list en.ts sections the Korean locale does not translate yet
"""
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
LOCALE_SRC = HERE / "locale"
LOG = HERE / "apply.log"
CHECKOUT = Path(os.environ["LOCALAPPDATA"]) / "hermes" / "hermes-agent"
DESKTOP = CHECKOUT / "apps" / "desktop"
I18N = DESKTOP / "src" / "i18n"
# The renderer bundle ships unpacked next to app.asar (resources/app.asar.unpacked/dist/assets/i18n-*.js).
ASSETS = DESKTOP / "release" / "win-unpacked" / "resources" / "app.asar.unpacked" / "dist" / "assets"
# A string that exists only in our Korean locale: its presence in the bundle means the build has Korean.
MARKER = "다람쥐 헌 쳇바퀴에 타고파".encode("utf-8")

AUTO = "--auto" in sys.argv
FORCE = "--force" in sys.argv


def log(msg: str) -> None:
    line = f"{time.strftime('%Y-%m-%d %H:%M:%S')} {msg}"
    if not AUTO:
        print(line)
    with LOG.open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def patch(path: Path, check: str, pattern: str, repl: str) -> None:
    text = path.read_text(encoding="utf-8")
    if check in text:
        return
    new, n = re.subn(pattern, repl, text, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"patch failed: {path.name} (upstream layout changed — pattern {pattern!r} not found)")
    path.write_text(new, encoding="utf-8", newline="\n")
    log(f"patched {path.relative_to(CHECKOUT)}")


def apply_source() -> None:
    for f in LOCALE_SRC.glob("*.ts"):
        shutil.copy2(f, I18N / f.name)

    # 1. Locale union
    patch(I18N / "types.ts", "| 'ko'",
          r"(export type Locale = [^\n]*?)(\n)", r"\1 | 'ko'\2")

    # 2. Picker option + aliases
    patch(I18N / "languages.ts", "id: 'ko'",
          r"(\n\] as const satisfies)",
          "\n  ,{\n    id: 'ko',\n    name: LOCALE_ENDONYMS.ko,\n    englishName: 'Korean',\n    configValue: 'ko'\n  }\\1")
    patch(I18N / "languages.ts", "'ko-kr': 'ko'",
          r"(const LOCALE_ALIASES: Record<string, Locale> = \{\n)",
          "\\1  ko: 'ko',\n  'ko-kr': 'ko',\n  ko_kr: 'ko',\n  korean: 'ko',\n  한국어: 'ko',\n")

    # 3. Translation catalog
    patch(I18N / "catalog.ts", "from './ko'",
          r"(import \{ ja \} from './ja'\n)", "\\1import { ko } from './ko'\n")
    patch(I18N / "catalog.ts", "  ko\n",
          r"(\n  es\n\})", "\n  es,\n  ko\n}")


def built_has_korean() -> bool:
    return any(MARKER in f.read_bytes() for f in ASSETS.glob("i18n-*.js"))


def stop_app() -> bool:
    r = subprocess.run(["powershell", "-NoProfile", "-Command",
                        "$p = Get-Process Hermes -ErrorAction SilentlyContinue; "
                        "if ($p) { $p | Stop-Process -Force; 'stopped' }"],
                       capture_output=True, text=True)
    time.sleep(3)
    return "stopped" in r.stdout


def rebuild() -> None:
    log("building desktop (npm run pack) — takes a few minutes")
    npm = shutil.which("npm.cmd") or shutil.which("npm") or "npm"
    r = subprocess.run([npm, "run", "pack"], cwd=DESKTOP, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    (HERE / "build.log").write_text(r.stdout + "\n--- stderr ---\n" + r.stderr, encoding="utf-8")
    if r.returncode != 0:
        raise SystemExit(f"build failed (exit {r.returncode}) — see {HERE / 'build.log'}")
    log("build ok")


TASK = "Hermes Korean Locale"
WIRING = ["types.ts", "languages.ts", "catalog.ts"]


def remove() -> None:
    rel = [f"apps/desktop/src/i18n/{n}" for n in WIRING]
    subprocess.run(["git", "-C", str(CHECKOUT), "checkout", "--", *rel], check=True)
    for f in I18N.glob("ko*.ts"):
        f.unlink()
    log("restored upstream i18n files and removed ko*.ts")
    subprocess.run(["schtasks", "/Change", "/TN", TASK, "/DISABLE"], capture_output=True)
    log(f"disabled scheduled task '{TASK}' (re-enable: schtasks /Change /TN \"{TASK}\" /ENABLE)")
    was_running = stop_app()
    rebuild()
    if was_running:
        subprocess.Popen(["explorer.exe", str(Path(os.environ["USERPROFILE"]) / "Desktop" / "Hermes.lnk")])
    log("Korean locale removed")


def missing() -> None:
    """Top-level en.ts sections vs. what ko.ts (and its section modules) overrides."""
    en = (I18N / "en.ts").read_text(encoding="utf-8")
    sections = re.findall(r"^  ([A-Za-z]\w*): [{]", en, flags=re.M)
    ko = (LOCALE_SRC / "ko.ts").read_text(encoding="utf-8")
    done = set(re.findall(r"^  ([A-Za-z]\w*):", ko, flags=re.M))
    todo = [s for s in dict.fromkeys(sections) if s not in done]
    lines = en.splitlines()
    starts = {m.group(1): i for i, l in enumerate(lines) if (m := re.match(r"^  ([A-Za-z]\w*): [{]", l))}
    print(f"translated sections: {', '.join(sorted(done))}")
    print(f"untranslated sections ({len(todo)}):")
    ordered = sorted(starts.items(), key=lambda kv: kv[1])
    for i, (name, start) in enumerate(ordered):
        if name in todo:
            end = ordered[i + 1][1] if i + 1 < len(ordered) else len(lines)
            print(f"  {name:22s} ~{end - start} lines")


def main() -> None:
    if not DESKTOP.exists():
        raise SystemExit(f"Hermes checkout not found: {DESKTOP}")
    if "--missing" in sys.argv:
        missing()
        return
    if "--remove" in sys.argv:
        remove()
        return
    subprocess.run(["schtasks", "/Change", "/TN", TASK, "/ENABLE"], capture_output=True)
    apply_source()
    if "--no-build" in sys.argv:
        log("source patched (--no-build)")
        return
    if built_has_korean() and not FORCE:
        log("built app already has Korean — nothing to rebuild")
        return
    was_running = stop_app()
    rebuild()
    if not built_has_korean():
        raise SystemExit("build finished but Korean marker is missing from the renderer bundle")
    if was_running or not AUTO:
        subprocess.Popen(["explorer.exe", str(Path(os.environ["USERPROFILE"]) / "Desktop" / "Hermes.lnk")])
    log("Korean locale applied")


if __name__ == "__main__":
    try:
        main()
    except SystemExit as e:
        if e.code not in (0, None):
            log(f"ERROR {e.code}")
        raise
