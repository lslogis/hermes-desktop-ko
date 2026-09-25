# hermes-desktop-ko

[Hermes Agent](https://github.com/NousResearch/hermes-agent) 데스크톱 앱(Windows)의 한국어 화면.

Hermes Desktop이 고를 수 있는 언어 목록은 소스 코드에 고정되어 있다(`Locale` 타입). 데스크톱 플러그인의 i18n은
플러그인 자기 문구만 번역하므로, 앱 화면에 한국어를 넣으려면 소스에 `ko` 로케일을 추가하고 다시 빌드해야 한다.
이 저장소는 그 작업을 스크립트 하나로 한다.

## 번역 범위

부분 번역이다. 번역하지 않은 문구는 영어로 표시되므로 화면이 깨지지 않는다.

- 번역함: 설정 화면 전체(설정 항목 이름·설명 포함), 공통 버튼, 언어 선택, 명령 팔레트
- 남은 영역 확인: `python apply.py --missing`

## 설치

필요: Hermes Desktop이 설치 프로그램으로 설치되어 `%LOCALAPPDATA%\hermes\hermes-agent` 에 소스 체크아웃이 있을 것, Python 3, Node/npm.

```
git clone https://github.com/lslogis/hermes-desktop-ko
cd hermes-desktop-ko
python apply.py
```

`locale\*.ts` 를 체크아웃에 복사하고 `types.ts`·`languages.ts`·`catalog.ts` 세 곳에 `ko` 를 등록한 뒤
`npm run pack` 으로 앱(`release\win-unpacked`)을 다시 빌드한다(약 1분 30초). 빌드 중에는 앱이 잠시 꺼졌다 다시 켜진다.

## 켜고 끄기

- **언어만 바꾸기**: 앱의 설정 → 외관 → 일반 → **언어**에서 한국어/English를 고른다. 앱 언어는 연결된 백엔드의
  `display.language` 값이라 CLI에서 `hermes config set display.language ko` (또는 `en`)로 바꿔도 된다.
- **완전히 제거**: `python apply.py --remove` — 원래 파일로 되돌리고 영어판으로 다시 빌드하며, 자동 재적용 작업을 멈춘다.
  다시 넣으려면 `python apply.py` (작업도 다시 켜진다).

## Hermes 업데이트 후

Hermes 업데이트는 공식 소스로 앱을 다시 빌드하므로 한국어가 빠진다. 작업 스케줄러에 **Hermes Korean Locale**
(로그인 2분 뒤 `apply.py --auto`)을 등록해 두면, 빌드된 앱에 한국어가 없을 때만 다시 넣고 재빌드한다.

```
schtasks /Create /TN "Hermes Korean Locale" /SC ONLOGON /DELAY 0002:00 /TR "pythonw.exe \"<이 폴더>\apply.py\" --auto"
```

바로 적용하려면 `python apply.py`. 로그는 `apply.log`, 빌드 출력은 `build.log`.
Hermes 소스 구조가 바뀌어 패치가 실패하면 `apply.log` 에 `patch failed` 가 남는다.

## 번역 갱신

1. `python apply.py --missing` 으로 번역 안 된 영역을 확인한다.
2. `locale\` 에 섹션 모듈을 추가하고(`ko-settings-*.ts` 참고, 타입은 `TranslationOverrides['섹션']`) `ko.ts` 에 연결한다.
3. `python apply.py --no-build` 후 체크아웃의 `apps\desktop` 에서 `npx tsc -p . --noEmit` 으로 타입을 확인한다.
4. `python apply.py --force` 로 다시 빌드한다.

## 파일

| 파일 | 내용 |
|---|---|
| `locale/ko.ts` | 한국어 로케일 진입점(`defineLocale`) |
| `locale/ko-settings-a/b/c.ts` | 설정 화면 번역 |
| `locale/ko-settings-fields.ts` | 설정 항목 이름·설명 |
| `locale/ko-command-center.ts` | 명령 팔레트, 설정 상단 경로 |
| `apply.py` | 적용·재빌드·제거·누락 점검 |

Hermes Agent v0.21.5 (2026-09) 기준으로 확인했다.
