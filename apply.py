"""Add the Korean (ko) locale to the Hermes Desktop checkout and rebuild the Windows app.

Hermes updates rebuild the app from upstream source, which drops Korean; the logon task reruns this.

    python apply.py             # patch + rebuild if the built app lacks Korean
    python apply.py --force     # patch + always rebuild
    python apply.py --no-build  # patch only
    python apply.py --auto      # quiet (scheduled task), logs to apply.log
    python apply.py --remove    # restore upstream files, rebuild English-only, disable the task
    python apply.py --missing   # en.ts sections not translated yet
"""
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
CHECKOUT = Path(os.environ["LOCALAPPDATA"]) / "hermes" / "hermes-agent"
DESKTOP = CHECKOUT / "apps" / "desktop"
I18N = DESKTOP / "src" / "i18n"
ASSETS = DESKTOP / "release" / "win-unpacked" / "resources" / "app.asar.unpacked" / "dist" / "assets"
MARKER = "다람쥐 헌 쳇바퀴에 타고파".encode()  # only in our locale
SHORTCUT = Path(os.environ["USERPROFILE"]) / "Desktop" / "Hermes.lnk"
TASK = "Hermes Korean Locale"
SECTION = re.compile(r"^  ([A-Za-z]\w*): \{", re.M)
ARGS = set(sys.argv[1:])


def log(msg: str) -> None:
    line = f"{time.strftime('%Y-%m-%d %H:%M:%S')} {msg}"
    if "--auto" not in ARGS:
        print(line)
    with (HERE / "apply.log").open("a", encoding="utf-8") as f:
        f.write(line + "\n")


def patch(name: str, check: str, pattern: str, repl: str) -> None:
    path = I18N / name
    text = path.read_text(encoding="utf-8")
    if check in text:
        return
    new, n = re.subn(pattern, repl, text, count=1)
    if n != 1:
        raise SystemExit(f"patch failed: {name} (upstream layout changed)")
    path.write_text(new, encoding="utf-8", newline="\n")
    log(f"patched {name}")


def apply_source() -> None:
    for f in (HERE / "locale").glob("*.ts"):
        shutil.copy2(f, I18N / f.name)
    patch("types.ts", "| 'ko'", r"(export type Locale = [^\n]*)", r"\1 | 'ko'")
    patch("languages.ts", "id: 'ko'", r"(\n\] as const satisfies)",
          "\n  ,{ id: 'ko', name: LOCALE_ENDONYMS.ko, englishName: 'Korean', configValue: 'ko' }\\1")
    patch("languages.ts", "'ko-kr'", r"(const LOCALE_ALIASES: Record<string, Locale> = \{\n)",
          "\\1  ko: 'ko',\n  'ko-kr': 'ko',\n  ko_kr: 'ko',\n  korean: 'ko',\n  한국어: 'ko',\n")
    patch("catalog.ts", "from './ko'", r"(import \{ ja \} from './ja'\n)", "\\1import { ko } from './ko'\n")
    patch("catalog.ts", "  ko\n", r"\n  es\n\}", "\n  es,\n  ko\n}")


def rebuild() -> None:
    r = subprocess.run(["powershell", "-NoProfile", "-Command",
                        "Get-Process Hermes -ErrorAction SilentlyContinue | Stop-Process -Force -PassThru"],
                       capture_output=True, text=True)
    time.sleep(3)
    log("building (npm run pack)")
    b = subprocess.run([shutil.which("npm.cmd") or "npm", "run", "pack"], cwd=DESKTOP,
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    (HERE / "build.log").write_text(b.stdout + "\n--- stderr ---\n" + b.stderr, encoding="utf-8")
    if b.returncode:
        raise SystemExit(f"build failed (exit {b.returncode}), see build.log")
    if r.stdout.strip() or "--auto" not in ARGS:
        subprocess.Popen(["explorer.exe", str(SHORTCUT)])
    log("build ok")


def missing() -> None:
    en = (I18N / "en.ts").read_text(encoding="utf-8")
    done = set(re.findall(r"^  ([A-Za-z]\w*):", (HERE / "locale" / "ko.ts").read_text(encoding="utf-8"), re.M))
    starts = [(m.group(1), en.count("\n", 0, m.start())) for m in SECTION.finditer(en)]
    ends = [s for _, s in starts[1:]] + [en.count("\n")]
    todo = [(name, end - start) for (name, start), end in zip(starts, ends) if name not in done]
    print(f"translated: {', '.join(sorted(done))}\nuntranslated ({len(todo)}, ~{sum(n for _, n in todo)} lines):")
    for name, n in todo:
        print(f"  {name:22s} ~{n}")


def main() -> None:
    if not DESKTOP.exists():
        raise SystemExit(f"Hermes checkout not found: {DESKTOP}")
    if "--missing" in ARGS:
        return missing()
    if "--remove" in ARGS:
        subprocess.run(["git", "-C", str(CHECKOUT), "checkout", "--",
                        *(f"apps/desktop/src/i18n/{n}" for n in ("types.ts", "languages.ts", "catalog.ts"))], check=True)
        for f in I18N.glob("ko*.ts"):
            f.unlink()
        subprocess.run(["schtasks", "/Change", "/TN", TASK, "/DISABLE"], capture_output=True)
        rebuild()
        return log("Korean removed, task disabled")
    subprocess.run(["schtasks", "/Change", "/TN", TASK, "/ENABLE"], capture_output=True)
    apply_source()
    has_ko = lambda: any(MARKER in f.read_bytes() for f in ASSETS.glob("i18n-*.js"))
    if "--no-build" in ARGS or (has_ko() and "--force" not in ARGS):
        return log("source patched, no rebuild needed")
    rebuild()
    if not has_ko():
        raise SystemExit("Korean marker missing from the built bundle")
    log("Korean applied")


if __name__ == "__main__":
    try:
        main()
    except SystemExit as e:
        if e.code:
            log(f"ERROR {e.code}")
        raise
