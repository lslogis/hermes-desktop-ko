# hermes-desktop-ko

Hermes Desktop(윈도우) 화면을 한국어로 보여 주는 로케일 패치.

Hermes Desktop이 고를 수 있는 언어는 소스에 고정되어 있다(`Locale` 타입). 플러그인 i18n은 플러그인 자기 문구만 번역하므로
앱 화면에 한국어를 넣으려면 소스에 `ko` 로케일을 추가하고 다시 빌드해야 한다.

## 구성

- `locale/ko.ts` — 한국어 로케일(부분 번역, 빠진 문구는 영어로 표시). `common`, `language`, `settings` 전체를 번역했다.
- `locale/ko-settings-*.ts` — 설정 화면 번역 조각, 설정 항목 이름·설명(`fields`).
- `apply.py` — 체크아웃(`%LOCALAPPDATA%\hermes\hermes-agent`)에 파일을 복사하고 `types.ts`·`languages.ts`·`catalog.ts` 를 고친 뒤
  `npm run pack` 으로 `release\win-unpacked` 를 다시 빌드한다. 빌드된 화면 번들(`app.asar.unpacked\dist\assets\i18n-*.js`)에 한국어가 이미 있으면 빌드를 건너뛴다.

## 업데이트 후

Hermes 업데이트는 공식 소스로 앱을 다시 빌드하므로 한국어가 빠진다. 작업 스케줄러의 **Hermes Korean Locale**
(로그인 2분 뒤, `apply.py --auto`)이 다시 넣고 재빌드한다. 바로 적용하려면:

```
python J:\project\hermes-desktop-ko\apply.py
```

로그: `apply.log`, 빌드 출력: `build.log`. 소스 구조가 바뀌어 패치가 실패하면 `apply.log` 에 `patch failed` 가 남는다.

## 언어 선택

앱 언어는 연결된 백엔드의 `display.language` 를 따른다. 맥 Hermes에 `display.language: ko` 를 설정해 두었다.
