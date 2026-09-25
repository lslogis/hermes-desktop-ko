// Korean desktop locale (partial; untranslated keys fall back to English via defineLocale).
import { defineLocale } from './define-locale'
import { koCommandCenter } from './ko-command-center'
import { koSettingsA } from './ko-settings-a'
import { koSettingsB } from './ko-settings-b'
import { koSettingsC } from './ko-settings-c'
import { koFieldDescriptions, koFieldLabels } from './ko-settings-fields'

export const ko = defineLocale({
  common: {
    apply: '적용',
    back: '뒤로',
    save: '저장',
    saving: '저장 중…',
    cancel: '취소',
    change: '변경',
    choose: '선택',
    clear: '지우기',
    close: '닫기',
    collapse: '접기',
    confirm: '확인',
    connect: '연결',
    connecting: '연결 중',
    continue: '계속',
    bots: '봇',
    copied: '복사됨',
    copy: '복사',
    copyFailed: '복사 실패',
    delete: '삭제',
    docs: '문서',
    done: '완료',
    error: '오류',
    expand: '펼치기',
    failed: '실패',
    formatJson: 'JSON 정리',
    free: '무료',
    loading: '불러오는 중…',
    notSet: '설정 안 됨',
    refresh: '새로 고침',
    remove: '삭제',
    replace: '바꾸기',
    retry: '다시 시도',
    run: '실행',
    send: '보내기',
    set: '설정',
    skip: '건너뛰기',
    update: '업데이트',
    tryHint: term => `“${term}”을(를) 검색해 보세요`,
    on: '켜짐',
    off: '꺼짐'
  },
  language: {
    label: '언어',
    description: '데스크톱 화면에 쓸 언어를 고르세요.',
    saving: '언어 저장 중…',
    saveError: '언어를 바꾸지 못했습니다',
    switchTo: '언어 바꾸기',
    searchPlaceholder: '언어 검색…',
    noResults: '언어를 찾을 수 없습니다'
  },
  commandCenter: koCommandCenter,
  settings: {
    ...koSettingsA,
    ...koSettingsB,
    ...koSettingsC,
    fieldLabels: koFieldLabels,
    fieldDescriptions: koFieldDescriptions
  }
})
