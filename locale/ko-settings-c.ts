// Korean — Settings, part C (billing · providers · archived sessions · toolsets)
import type { TranslationOverrides } from './define-locale'

export const koSettingsC: NonNullable<TranslationOverrides['settings']> = {
  billing: {
    perMonth: (amount: string) => `월 ${amount}`,
    creditsPerMonth: (amount: string) => `월 ${amount} 크레딧`,
    usageLabel: (label: string) => `${label} 사용량`,
    freeTier: {
      signIn: '로그인',
      title: 'Nous 무료 요금제를 쓰고 있습니다',
      message: 'Nous 계정으로 로그인하면 더 많은 모델과 도구를 쓸 수 있습니다.',
      caption: 'nous/welcome 모델과 기본 커넥터로 실행됩니다. 로그인하면 커넥터를 유지하면서 계정이 필요한 도구와 다른 모든 모델이 추가됩니다.',
      name: 'Nous · 무료 요금제',
      footnote: '무료 요금제는 잔액도 결제할 것도 없습니다. 결제와 사용량은 Nous 계정으로 로그인하면 보입니다.',
      plan: '무료 요금제',
      model: '모델',
      connectors: '커넥터',
      included: '포함'
    },
    amountValidation: {
      reloadTo: '충전 목표액',
      greaterThanThreshold: '충전 목표액은 기준 금액보다 커야 합니다.',
      decimal: (label: string) => `${label}: 소수점 둘째 자리까지의 달러 금액을 입력하세요.`,
      positive: (label: string) => `${label}: 금액은 $0보다 커야 합니다.`,
      minimum: (label: string, amount: string) => `${label}: 최소 ${amount}입니다.`,
      maximum: (label: string, amount: string) => `${label}: 최대 ${amount}입니다.`
    },
    stepUp: {
      openVerification: '인증 페이지 열기',
      dismiss: '닫기',
      waiting: '인증 링크 기다리는 중…',
      verify: '계속하려면 인증하세요',
      deniedTitle: '인증이 승인되지 않았습니다',
      deniedBody: '이 단말의 원격 결제를 허용하지 않은 채 인증이 끝났습니다.',
      successTitle: '인증 완료',
      successBody: '이 단말의 원격 결제가 허용됐습니다.'
    },
    charge: {
      added: (amount?: string) => (amount ? `$${amount} 충전됨.` : '크레딧이 충전됐습니다.'),
      failedTitle: '결제 실패',
      unconfirmedTitle: '결제 결과 미확인',
      unconfirmedBody: (message: string) => `${message} 마지막 결제 결과가 확인되지 않았습니다. 다시 시도하기 전에 잔액/내역을 확인하세요.`,
      checkTitle: '결제를 확인하지 못했습니다',
      checkBody: '결제 상태를 확인하지 못했습니다.',
      untrackedTitle: '결제를 추적할 수 없음',
      untrackedBody: '결제 서비스가 요청을 받았지만 결제 ID를 돌려주지 않았습니다.',
      timeoutTitle: '5분이 지나도 처리 중',
      timeoutBody: '결제가 나중에 완료될 수 있습니다. 다시 시도하기 전에 포털을 확인하세요.',
      authenticationRequired: '카드사가 추가 인증(3DS)을 요구합니다. 포털에서 인증을 마쳐 결제를 완료하세요.',
      expired: '카드가 만료됐습니다. 포털에서 카드를 바꾸세요.',
      declined: '카드가 거절됐습니다. 포털에서 다른 카드로 시도하세요.',
      failedBody: (reason: string) => `결제가 처리되지 않았습니다(${reason}).`
    },
    title: '결제',
    preview: '미리 보기',
    summary: { balance: '잔액', plan: '요금제', autoRefill: '자동 충전' },
    sections: { invoices: '청구서', plan: '요금제', paymentAndCredits: '결제 및 크레딧', usage: '사용량' },
    usage: { title: '사용량' },
    buyCredits: {
      customAmount: '직접 입력한 크레딧 금액',
      title: '지금 크레딧 구매',
      buyButton: '구매',
      processing: '처리 중… 결제 확인 중',
      added: (amount: string) => `${amount} 충전됨. 잔액을 새로 고치는 중입니다.`,
      retry: '다시 시도',
      openPortal: '포털 열기'
    },
    plan: {
      title: '요금제',
      changePlan: '요금제 변경',
      viewPlans: '요금제 보기',
      backAria: '결제로 돌아가기',
      current: '현재 요금제',
      scheduled: '예약됨',
      empty: '지금 바꿀 수 있는 요금제가 없습니다.',
      undo: '되돌리기',
      undoing: '되돌리는 중…',
      downgrade: '하향',
      confirmDowngrade: '하향 확인',
      tryAgain: '다시 시도',
      checkingChange: '변경 사항 확인 중…',
      cannotChange: '여기서는 그렇게 바꿀 수 없습니다.',
      alreadyOn: (name: string) => `이미 ${name} 요금제입니다. 바꿀 것이 없습니다.`,
      notScheduleable: '여기서는 이 변경을 예약할 수 없습니다.',
      scheduling: '예약 중…',
      cancel: '취소',
      effectScheduled: (targetName: string, effectiveAt: string, creditsDelta?: string) =>
        `${targetName}(으)로 변경 — ${effectiveAt}부터 적용됩니다. 지금은 청구되지 않으며 그때까지 현재 요금제를 유지합니다.${creditsDelta ? ` 월 크레딧 변화: ${creditsDelta}.` : ''}`
    },
    autoReload: {
      threshold: '기준 금액',
      thresholdAria: '자동 충전 기준 금액',
      reloadTo: '충전 목표액',
      reloadToAria: '자동 충전 목표액',
      turnOffConfirm: '자동 충전을 끌까요?',
      turnOff: '끄기',
      disable: '사용 안 함',
      updated: '자동 충전 설정을 바꿨습니다.',
      turnedOff: '자동 충전을 껐습니다.',
      manage: '관리',
      save: '저장',
      saving: '저장 중…',
      cancel: '취소'
    },
    state: {
      notice: {
        loggedOut: {
          title: 'Nous 계정 연결',
          message: 'Nous 계정으로 로그인하면 여기서 잔액, 요금제, 사용량을 볼 수 있습니다.',
          action: '로그인'
        },
        openPortal: '포털 열기 ↗',
        noCard: {
          title: '등록된 결제 수단 없음',
          message: '카드를 등록하기 전까지 크레딧 충전과 자동 충전을 쓸 수 없습니다. 포털에서 추가하세요.',
          action: '카드 추가 ↗'
        }
      },
      paymentMethod: {
        title: '결제 수단',
        description: '충전과 구독 갱신에 쓰는 카드를 관리합니다.',
        addAction: '결제 수단 추가',
        updateAction: '변경',
        provenance: {
          autoRefill: '자동 충전 카드',
          customerDefault: '기본 카드',
          subPin: '구독 카드'
        }
      },
      buyCredits: { description: '카드로 한 번 결제하며 오늘 잔액에 더해집니다.' },
      autoRefill: {
        title: '잔액 부족 시 자동 충전',
        genericDescription: '잔액이 기준 금액 아래로 내려가면 자동으로 채웁니다.',
        offPill: '꺼짐',
        enabledPill: '켜짐',
        manageCaption: '자동 충전은 포털에서 관리하세요.',
        turnOnCaption: '포털에서 자동 충전 켜기',
        chargesDescription: (reloadTo: string, threshold: string) => `잔액이 ${threshold} 아래로 내려가면 자동으로 ${reloadTo}까지 충전합니다.`,
        distinctCardCaption: (cardLabel: string) => `자동 충전은 ${cardLabel}에 청구됩니다 — 포털에서 맞추세요`,
        distinctCardFallback: '다른 카드',
        reconcileAction: '맞추기 ↗'
      },
      usage: {
        subscriptionCredits: {
          title: '구독 크레딧',
          barLabel: '남은 구독 크레딧',
          captionResets: (date: string) => `${date} 초기화`,
          valueOf: (remaining: string, monthly: string) => `${monthly} 중 ${remaining} 남음`,
          valueOver: (remaining: string, monthly: string, over: string) => `${monthly} 중 ${remaining} 남음 · ${over} 초과`
        },
        topupCredits: { title: '충전 크레딧', caption: '만료 없음' },
        monthlyCap: {
          title: '월 사용 한도',
          barLabel: '사용한 월 한도',
          captionDefault: '기본 한도',
          captionSpending: '월 원격 사용액',
          valueUsed: (spent: string, limit: string) => `${limit} 중 ${spent} 사용`
        }
      },
      planCard: {
        freeTier: '무료',
        chooseAction: '고르기 ↗',
        adjustPlanAction: '요금제 조정 ↗',
        unavailableCaption: '구독 정보를 불러올 수 없지만 포털은 열 수 있습니다.',
        downgradeCaption: (tierName: string, when: string) => `${when}에 ${tierName}(으)로 바뀝니다.`,
        cancellationCaption: (when: string) => `${when}에 해지됩니다.`,
        renewsCaption: (date: string) => `${date} 갱신`,
        noSubscriptionCaption: '활성 구독 없음 — 유료 모델은 충전 크레딧에서 차감됩니다.'
      }
    },
    errors: {
      consentRequired: { title: '카드 확인 필요', message: '포털에서 이 카드를 단말 결제용으로 확인하세요' },
      insufficientScope: { title: '원격 결제 승인 필요', message: '원격 결제 허용이 필요합니다. 충전을 시작해 허용한 뒤 다시 시도하세요.' },
      remoteSpendingRevoked: {
        title: '원격 결제가 중지됨',
        messageByAdmin: '관리자가 이 단말의 원격 결제를 중지했습니다.',
        messageBySelf: '이 단말의 원격 결제를 직접 중지했습니다.'
      },
      remoteSpendingReconnect: (who: string) => `${who} 이 기기를 다시 승인하려면 설정 → 게이트웨이에서 다시 연결하세요.`,
      sessionRevoked: { title: '세션 로그아웃됨', message: '세션이 로그아웃됐습니다. 설정 → 게이트웨이에서 다시 로그인하세요.' },
      cliBillingDisabled: {
        title: '원격 결제 꺼짐',
        message: '이 계정은 원격 결제가 꺼져 있습니다. 결제 관리자가 포털의 Hermes Agent 페이지에서 켤 수 있습니다.'
      },
      roleRequired: { title: '관리자 권한 필요', message: '충전은 조직 관리자/소유자만 할 수 있습니다. 관리자에게 요청하거나 포털에서 관리하세요.' },
      idempotencyConflict: { title: '새로 충전하세요', message: '🔴 그 결제 키는 이미 다른 금액에 쓰였습니다. 새로 충전을 시작하세요.' },
      noPaymentMethod: {
        title: '저장된 카드 없음',
        message: '💳 단말 결제용으로 저장된 카드가 없습니다. 포털에서 등록하세요(일회성 크레딧 구매는 재사용 카드를 저장하지 않습니다).'
      },
      orgAccessDenied: { title: '조직 접근 거부', message: '이 토큰은 관리할 수 있는 조직에 연결되어 있지 않습니다' },
      monthlyCapExceeded: {
        title: '월 사용 한도 도달',
        messageReached: '🔴 월 사용 한도에 도달했습니다.',
        messageHeadroom: (remaining: string) => `🔴 월 사용 한도 도달 — $${remaining} 남음.`
      },
      rateLimited: {
        title: '지금 결제 요청이 너무 많습니다',
        message: (mins: number) =>
          mins > 0 ? `🟡 지금 결제 요청이 너무 많습니다(약 ${mins}분 뒤 다시 시도). 결제 실패가 아닙니다.` : '🟡 지금 결제 요청이 너무 많습니다. 결제 실패가 아닙니다.'
      },
      stripeUnavailable: {
        title: 'Stripe에 문제가 있습니다',
        message: (mins: number) => (mins > 0 ? `Stripe에 문제가 있습니다 — 약 ${mins}분 뒤 다시 시도하세요` : 'Stripe에 문제가 있습니다 — 잠시 뒤 다시 시도하세요')
      },
      upgradeCapExceeded: { title: '하루 요금제 변경 한도 도달', message: '하루 요금제 변경 한도에 도달했습니다 — 내일 다시 시도하세요' },
      endpointUnavailable: { title: '결제 엔드포인트를 쓸 수 없음', message: '결제 엔드포인트가 JSON이 아닌 응답을 보냈습니다(이 배포에서는 지원하지 않을 수 있습니다).' },
      timeout: { title: '결제 요청 시간 초과', message: '결제 요청 시간이 초과됐습니다.' },
      transport: { title: '결제 연결 실패', message: '결제 요청이 게이트웨이에 닿기 전에 실패했습니다.' },
      default: { title: '결제 요청 실패', message: '결제 요청이 실패했습니다.' }
    }
  },
  providers: {
    connectAccount: '계정 연결',
    haveApiKey: 'API 키가 있나요?',
    intro: '구독 계정으로 로그인하세요. 복사할 API 키가 필요 없습니다. Hermes가 앱 안에서 브라우저 로그인을 대신 진행합니다.',
    connected: '연결됨',
    collapse: '접기',
    connectAnother: '다른 공급자 연결',
    otherProviders: '다른 공급자',
    disconnect: '연결 해제',
    disconnectInTerminal: '연결 해제(터미널에서 삭제 명령 실행)',
    removeConfirm: (provider: string) => `${provider}을(를) 삭제할까요?`,
    removeExternalGeneric: (provider: string) => `${provider}은(는) 자체 CLI가 관리합니다. 그쪽에서 삭제하세요.`,
    removeKeyManaged: (provider: string) => `${provider}은(는) API 키로 설정되어 있습니다. API 키에서 삭제하세요.`,
    removeTerminalConfirm: (provider: string, command: string) =>
      `${provider} 연결을 해제할까요? 인증 정보를 지우기 위해 터미널에서 "${command}"를 실행합니다.`,
    removeTerminalRunning: (provider: string) => `터미널에서 ${provider} 연결 해제 실행 중…`,
    removedTitle: '계정 삭제됨',
    removedMessage: (provider: string) => `${provider}을(를) 삭제했습니다.`,
    failedRemove: (provider: string) => `${provider}을(를) 삭제하지 못했습니다`,
    noProviderKeys: '사용할 수 있는 공급자 API 키가 없습니다.',
    searchKeys: '공급자 검색…',
    noKeysMatch: '검색과 일치하는 공급자가 없습니다.',
    localEndpoint: {
      title: '로컬/사용자 지정 엔드포인트',
      description: 'Hermes를 OpenAI 호환 엔드포인트(Zyphra, vLLM, llama.cpp, Ollama, oMLX 등)에 연결합니다.'
    },
    loading: '공급자 불러오는 중...'
  },
  sessions: {
    loading: '보관된 세션 불러오는 중…',
    archivedTitle: '보관된 세션',
    archivedIntro: '보관한 채팅은 사이드바에서 숨겨지지만 메시지는 모두 남습니다. 사이드바에서 Alt/⌥+Shift+클릭하면 보관됩니다.',
    emptyArchivedTitle: '보관된 것 없음',
    emptyArchivedDesc: '채팅을 보관하면 여기에 모입니다.',
    unarchive: '보관 해제',
    deletePermanently: '영구 삭제',
    messages: (count: number) => `메시지 ${count}개`,
    restored: '복원됨',
    deleteConfirm: (title: string) => `"${title}"을(를) 영구 삭제할까요? 되돌릴 수 없습니다.`,
    autoArchiveTitle: '오래된 채팅 자동 보관',
    autoArchiveDesc: '한동안 건드리지 않은 채팅을 자동으로 보관합니다. 고정한 채팅은 보관하지 않으며, 삭제되는 것은 없고 여기로 옮겨질 뿐입니다.',
    autoArchiveDaysLabel: '보관 기준',
    autoArchiveDaysUnit: '일 동안 미사용',
    autoArchiveFailed: '자동 보관 설정을 바꾸지 못했습니다',
    defaultDirTitle: '기본 프로젝트 폴더',
    defaultDirDesc: '다른 폴더를 고르지 않으면 새 세션이 이 폴더에서 시작합니다. 비워 두면 홈 폴더를 씁니다.',
    defaultDirUpdated: '기본 프로젝트 폴더를 바꿨습니다 — 적용하려면 새 채팅(Ctrl/⌘+N)을 시작하세요',
    defaultsTo: (label: string) => `기본값: ${label}.`,
    change: '변경',
    choose: '선택',
    clear: '지우기',
    notSet: '설정 안 됨',
    failedLoad: '보관된 세션을 불러오지 못했습니다',
    unarchiveFailed: '보관 해제 실패',
    deleteFailed: '삭제 실패',
    updateDirFailed: '기본 폴더를 바꾸지 못했습니다',
    clearDirFailed: '기본 폴더를 지우지 못했습니다'
  },
  toolsets: {
    loadingConfig: '설정 불러오는 중',
    savedTitle: '인증 정보 저장됨',
    savedMessage: (key: string) => `${key} 변경됨.`,
    removedTitle: '인증 정보 삭제됨',
    removedMessage: (key: string) => `${key} 삭제됨.`,
    failedSave: (key: string) => `${key} 저장 실패`,
    failedRemove: (key: string) => `${key} 삭제 실패`,
    failedReveal: (key: string) => `${key} 보기 실패`,
    removeConfirm: (key: string) => `.env에서 ${key}을(를) 삭제할까요?`,
    set: '설정됨',
    notSet: '설정 안 됨',
    selectedTitle: '공급자 선택됨',
    selectedMessage: (provider: string) => `이제 ${provider}을(를) 씁니다.`,
    failedSelect: (provider: string) => `${provider} 선택 실패`,
    failedLoad: '도구 설정을 불러오지 못했습니다',
    noProviderOptions: '이 도구 세트는 공급자 선택이 없습니다. 켜기만 하면 현재 설정으로 작동합니다.',
    noProviders: '지금 이 도구 세트에 쓸 수 있는 공급자가 없습니다.',
    ready: '준비됨',
    needsSignIn: '로그인 필요',
    needsSetup: '설정 필요',
    activeBackend: '사용 중',
    activeBackendHint: '현재 사용 중인 백엔드입니다',
    useBackend: '이 백엔드 사용',
    nousIncluded: 'Nous 구독에 포함 — 활성화하려면 Nous 계정으로 로그인하세요.',
    nousAuthNeededTitle: 'Nous 계정으로 로그인',
    nousAuthNeededMessage: (provider: string) => `${provider}은(는) 저장됐지만 Nous 계정으로 로그인해야 작동합니다.`,
    nousAuthSignIn: '로그인',
    nousAuthDoneTitle: 'Nous 계정 연결됨',
    nousAuthDoneMessage: '구독 백엔드가 이제 활성화됐습니다.',
    nousAuthFailed: 'Nous 로그인이 완료되지 않았습니다',
    nousAuthFailedMessage: '다시 시도하세요.',
    nousAuthTryAgain: '다시 시도',
    noApiKeyRequired: 'API 키가 필요 없습니다.',
    postSetupHint: (step: string) => `이 백엔드는 한 번 설치가 필요합니다(${step}). 이 컴퓨터에서 실행되며 몇 분 걸릴 수 있습니다.`,
    postSetupInstalledHint: '설치됨. 문제가 있을 때만 설정을 다시 실행하세요.',
    postSetupRun: '설정 실행',
    postSetupRerun: '설정 다시 실행',
    postSetupInstalled: '설치됨',
    postSetupRunning: '설치 중…',
    postSetupStarting: '시작 중…',
    postSetupCompleteTitle: '설정 완료',
    postSetupCompleteMessage: (step: string) => `${step} 설치됨.`,
    postSetupErrorTitle: '설정이 오류와 함께 끝났습니다',
    postSetupErrorMessage: (step: string) => `${step} 설정이 끝나지 않았습니다. 로그에서 원인을 확인한 뒤 다시 실행하세요.`,
    postSetupOpenLogs: '로그 열기',
    postSetupRunAgain: '다시 실행',
    postSetupFailed: (step: string) => `${step} 설정 실행 실패`,
    webSearchActive: (backend: string) => `검색: ${backend}`,
    webExtractActive: (backend: string) => `추출: ${backend}`,
    webCapabilityUnset: '설정 안 됨',
    webUseForSearch: '검색에 사용',
    webUseForExtract: '추출에 사용',
    webUsedForSearch: '검색 백엔드',
    webUsedForExtract: '추출 백엔드',
    webCapabilitySelectedMessage: (provider: string, capability: string) => `이제 ${provider}이(가) 웹 ${capability}을(를) 처리합니다.`,
    failedSelectCapability: (provider: string) => `${provider} 설정 실패`,
    loadingModels: '모델 목록 불러오는 중...',
    modelSectionTitle: '모델',
    modelCount: (count: number) => `모델 ${count}개`,
    modelInUse: '사용 중',
    modelDefault: '기본',
    modelInactiveHint: '모델을 바꾸려면 먼저 이 백엔드를 선택하세요.',
    modelSelectedTitle: '모델 선택됨',
    modelSelectedMessage: (model: string) => `${model}은(는) 새 세션에 적용됩니다.`,
    failedSelectModel: (model: string) => `${model} 선택 실패`,
    terminalBackend: {
      sectionTitle: '실행 백엔드',
      loading: '실행 백엔드 확인 중…',
      failedLoad: '터미널 백엔드를 불러오지 못했습니다',
      ready: '준비됨',
      needsSetup: '설정 필요',
      unavailable: '사용 불가',
      inUse: '사용 중',
      selectedTitle: '백엔드 선택됨',
      selectedMessage: (backend: string) => `이제 터미널 명령이 ${backend}(으)로 실행됩니다. 새 세션에 적용됩니다.`,
      failedSelect: (backend: string) => `${backend} 선택 실패`,
      needsSetupHint: '이 백엔드는 설정이 끝나지 않은 채 선택되어 있습니다. 설정을 마치기 전까지 명령이 실패합니다.',
      needsSetupConfirmTitle: (backend: string) => `그래도 ${backend}을(를) 선택할까요?`,
      needsSetupConfirmDescription: (detail: string) => `${detail} 이 변경 뒤 시작하는 세션은 설정을 마칠 때까지 터미널·파일 도구를 쓸 수 없습니다.`,
      needsSetupConfirmDescriptionGeneric: '이 백엔드는 아직 설정되지 않았습니다. 이 변경 뒤 시작하는 세션은 설정을 마칠 때까지 터미널·파일 도구를 쓸 수 없습니다.',
      needsSetupConfirmAction: '그래도 선택',
      unavailableTitle: '터미널 명령을 쓸 수 없습니다',
      unavailableMessage: (backend: string) =>
        `지금 Hermes가 셸 명령을 실행할 수 없습니다: ${backend}이(가) 준비되지 않았습니다. 로컬로 바꾸거나 ${backend} 설정을 마친 뒤 다시 시도하세요.`,
      openBackendSettings: '터미널 설정 열기',
      useLocal: '로컬 사용',
      switchedToLocal: '이제 터미널 명령이 로컬에서 실행됩니다. 새 세션에 적용됩니다.'
    },
    browserRealProfile: {
      label: '내 실제 브라우저 프로필 사용',
      description:
        '기본 브라우저의 로그인과 쿠키를 에이전트용 관리 스냅숏으로 복사합니다. 실제 프로필을 직접 열지는 않습니다. 새 세션에 적용됩니다.',
      enabledTitle: '실제 프로필 브라우징 켜짐',
      enabledMessage: '새 세션은 기본 브라우저 프로필의 스냅숏으로 탐색합니다.',
      disabledTitle: '실제 프로필 브라우징 꺼짐',
      disabledMessage: '프로필 스냅숏을 삭제합니다. 새 세션은 깨끗한 브라우저를 씁니다.',
      failedSave: '실제 프로필 설정을 저장하지 못했습니다',
      prompt: {
        title: '사이트 로그인 유지',
        body: '기본 브라우저 프로필의 스냅숏으로 탐색하게 하면 사이트가 이미 로그인된 상태로 열립니다.',
        bulletSnapshot: '쿠키와 로그인 정보를 관리 스냅숏으로 복사합니다.',
        bulletLiveProfile: '실제 브라우저 프로필은 직접 열지 않습니다.',
        bulletLocal: '이 컴퓨터 밖으로 아무것도 나가지 않습니다.',
        dontShowAgain: '다시 보지 않기',
        notNow: '나중에',
        enable: '내 프로필 사용'
      }
    }
  }
}
