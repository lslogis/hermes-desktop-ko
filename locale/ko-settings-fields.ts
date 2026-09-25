// Korean — Settings field labels & descriptions (mirrors app/settings/constants.ts)
import { defineFieldCopy } from '@/app/settings/field-copy'

export const koFieldLabels = defineFieldCopy({
  model: '기본 모델',
  modelContextLength: '기본 모델 컨텍스트 크기(직접 지정)',
  fallbackProviders: '대체 모델',
  toolsets: '켜진 도구 세트',
  timezone: '시간대',
  display: {
    personality: '성격',
    showReasoning: '추론 블록'
  },
  desktop: {
    repoScanEnabled: '저장소 자동 탐색',
    repoScanRoots: '저장소 탐색 폴더',
    repoScanExcludePaths: '탐색 제외 경로'
  },
  agent: {
    maxTurns: '에이전트 최대 단계',
    imageInputMode: '이미지 첨부',
    apiMaxRetries: 'API 재시도 횟수',
    serviceTier: '서비스 등급',
    toolUseEnforcement: '도구 사용 강제'
  },
  terminal: {
    cwd: '작업 폴더',
    backend: '실행 백엔드',
    timeout: '명령 제한 시간',
    persistentShell: '셸 상태 유지',
    envPassthrough: '환경 변수 전달',
    dockerImage: 'Docker 이미지',
    singularityImage: 'Singularity 이미지',
    modalImage: 'Modal 이미지',
    daytonaImage: 'Daytona 이미지'
  },
  fileReadMaxChars: '파일 읽기 한도',
  toolOutput: {
    maxBytes: '터미널 출력 한도',
    maxLines: '파일 페이지 한도',
    maxLineLength: '줄 길이 한도'
  },
  codeExecution: {
    mode: '코드 실행 모드'
  },
  approvals: {
    mode: '승인 모드',
    timeout: '승인 대기 시간',
    mcpReloadConfirm: 'MCP 다시 불러오기 확인'
  },
  commandAllowlist: '허용 명령 목록',
  security: {
    redactSecrets: '비밀 값 가리기',
    allowPrivateUrls: '사설 URL 허용'
  },
  browser: {
    allowPrivateUrls: '브라우저 사설 URL',
    autoLocalForPrivateUrls: '사설 URL은 로컬 브라우저로',
    useRealProfile: '내 실제 브라우저 프로필 사용'
  },
  checkpoints: {
    enabled: '파일 체크포인트',
    maxSnapshots: '체크포인트 최대 개수'
  },
  voice: {
    maxRecordingSeconds: '최대 녹음 길이',
    autoTts: '응답 소리 내어 읽기',
    voiceChatMode: '음성 대화 모드',
    gptLive: {
      voice: 'GPT-Live 목소리',
      instructions: 'GPT-Live 성격'
    }
  },
  stt: {
    enabled: '음성 인식',
    echoTranscripts: '받아쓴 내용 다시 보여 주기',
    provider: '음성 인식 공급자',
    local: {
      model: '로컬 받아쓰기 모델',
      language: '받아쓰기 언어'
    },
    openai: { model: 'OpenAI STT 모델' },
    groq: { model: 'Groq STT 모델' },
    mistral: { model: 'Mistral STT 모델' },
    elevenlabs: {
      modelId: 'ElevenLabs STT 모델',
      languageCode: 'ElevenLabs 언어',
      tagAudioEvents: '오디오 이벤트 태그',
      diarize: '화자 구분'
    }
  },
  tts: {
    provider: '음성 합성 공급자',
    edge: { voice: 'Edge 목소리' },
    openai: { model: 'OpenAI TTS 모델', voice: 'OpenAI 목소리' },
    elevenlabs: { voiceId: 'ElevenLabs 목소리', modelId: 'ElevenLabs 모델' },
    xai: {
      voiceId: 'xAI(Grok) 목소리',
      language: 'xAI 언어',
      speed: 'xAI 재생 속도',
      autoSpeechTags: 'xAI 자동 음성 태그',
      optimizeStreamingLatency: 'xAI 스트리밍 지연 최적화',
      sampleRate: 'xAI 샘플레이트',
      bitRate: 'xAI 비트레이트'
    },
    minimax: { model: 'MiniMax TTS 모델', voiceId: 'MiniMax 목소리' },
    mistral: { model: 'Mistral TTS 모델', voiceId: 'Mistral 목소리' },
    gemini: { model: 'Gemini TTS 모델', voice: 'Gemini 목소리' },
    neutts: { model: 'NeuTTS 모델', device: 'NeuTTS 장치' },
    kittentts: { model: 'KittenTTS 모델', voice: 'KittenTTS 목소리' },
    piper: { voice: 'Piper 목소리' },
    deepinfra: { model: 'DeepInfra TTS 모델', voice: 'DeepInfra 목소리' }
  },
  memory: {
    memoryEnabled: '영구 메모리',
    userProfileEnabled: '사용자 프로필',
    memoryCharLimit: '메모리 용량',
    userCharLimit: '프로필 용량',
    provider: '메모리 공급자'
  },
  context: {
    engine: '컨텍스트 엔진'
  },
  compression: {
    enabled: '자동 압축',
    threshold: '압축 시작 기준',
    codexGpt55Autoraise: 'Codex 압축 기준 자동 상향',
    targetRatio: '압축 목표',
    protectLastN: '보호할 최근 메시지 수'
  },
  auxiliary: {
    compression: {
      timeout: '압축 모델 제한 시간(초)'
    }
  },
  delegation: {
    model: '하위 에이전트 모델',
    provider: '하위 에이전트 공급자',
    maxIterations: '하위 에이전트 턴 한도',
    maxConcurrentChildren: '동시 하위 에이전트 수',
    childTimeoutSeconds: '하위 에이전트 제한 시간',
    reasoningEffort: '하위 에이전트 추론 강도'
  },
  updates: {
    nonInteractiveLocalChanges: '앱 내 업데이트 시 로컬 변경 처리'
  }
})

export const koFieldDescriptions = defineFieldCopy({
  model: '입력창에서 다른 모델을 고르지 않으면 새 채팅에 쓰입니다.',
  modelContextLength:
    '기본 채팅 모델의 감지된 컨텍스트 크기(토큰)만 덮어씁니다. 0이면 선택한 모델의 감지값을 씁니다. 보조/MoA 모델에는 영향이 없습니다.',
  fallbackProviders: '기본 모델이 실패하면 차례로 시도할 공급자:모델 목록입니다.',
  display: {
    personality: '새 세션의 기본 답변 스타일입니다.',
    showReasoning: '백엔드가 제공하면 추론 부분을 보여 줍니다.'
  },
  desktop: {
    repoScanEnabled: '로컬 폴더에서 Git 저장소를 찾아 프로젝트에 보여 줍니다.',
    repoScanRoots: '탐색할 폴더입니다. 비워 두면 홈 폴더를 탐색합니다.',
    repoScanExcludePaths: '저장소 탐색에서 건너뛸 폴더(하위 폴더 포함)입니다.'
  },
  timezone: 'IANA 시간대 이름(예: Asia/Seoul). 비워 두면 시스템 시간대를 씁니다.',
  browser: {
    useRealProfile:
      '로컬 브라우징에 실제 로그인을 씁니다. Hermes가 기본 브라우저 프로필(쿠키, 로그인, 환경설정)을 관리 스냅숏으로 복사해 내장 Chromium으로 조작하며, 실제 프로필은 직접 열지 않고 실행할 때마다 새로 복사합니다. 클라우드 브라우저 백엔드를 쓰는 중에도 요청하면 로컬 실제 프로필 세션을 열 수 있습니다. Chromium 계열(Chrome, Edge, Brave, Chromium)만 지원하며 그 외 기본 브라우저면 오류를 알려 줍니다. 기본은 꺼짐.'
  },
  agent: {
    imageInputMode: '이미지 첨부를 모델에 어떻게 보낼지 정합니다.',
    maxTurns: 'Hermes가 실행을 멈추기 전까지 허용하는 도구 호출 턴의 최대치입니다.'
  },
  terminal: {
    cwd: '도구와 터미널 작업의 기본 프로젝트 폴더입니다.',
    persistentShell: '백엔드가 지원하면 명령 사이에 셸 상태를 유지합니다.',
    envPassthrough: '도구 실행에 넘겨줄 환경 변수입니다.',
    dockerImage: '실행 백엔드가 Docker일 때 쓰는 컨테이너 이미지입니다.',
    singularityImage: '실행 백엔드가 Singularity일 때 쓰는 이미지입니다.',
    modalImage: '실행 백엔드가 Modal일 때 쓰는 이미지입니다.',
    daytonaImage: '실행 백엔드가 Daytona일 때 쓰는 이미지입니다.'
  },
  codeExecution: {
    mode: '코드 실행을 현재 프로젝트 범위로 얼마나 엄격히 제한할지 정합니다.'
  },
  fileReadMaxChars: '파일 한 번 읽을 때 Hermes가 읽을 수 있는 최대 글자 수입니다.',
  approvals: {
    mode: '명시적 승인이 필요한 명령을 Hermes가 어떻게 처리할지 정합니다.',
    timeout: '승인 요청이 시간 초과되기 전까지 기다리는 시간입니다.'
  },
  security: {
    redactSecrets: '가능하면 모델이 보는 내용에서 감지된 비밀 값을 가립니다.'
  },
  checkpoints: {
    enabled: '파일을 고치기 전에 되돌릴 수 있는 스냅숏을 만듭니다.'
  },
  memory: {
    memoryEnabled: '다음 세션에 도움이 될 기억을 오래 저장합니다.',
    userProfileEnabled: '사용자 선호를 요약한 프로필을 유지합니다.'
  },
  context: {
    engine: '대화가 컨텍스트 한도에 가까워질 때 관리하는 방식입니다.'
  },
  compression: {
    enabled: '대화가 길어지면 오래된 내용을 요약합니다.',
    codexGpt55Autoraise: '지원되는 ChatGPT Codex OAuth 모델은 압축 기준을 85%로 올립니다.'
  },
  auxiliary: {
    compression: {
      timeout: '보조 압축 모델 호출당 기다리는 시간(초, 기본 120). 느린 로컬 모델이면 늘리세요.'
    }
  },
  voice: {
    autoTts: '어시스턴트 응답을 자동으로 소리 내어 읽습니다.',
    voiceChatMode:
      'chained: 음성 인식 → Hermes → 음성 합성을 아래 공급자로 처리합니다. gpt-live: 전이중 OpenAI 음성 모델(gpt-live-1) 하나가 듣고 말하며 실제 요청은 모두 Hermes에 넘기므로, 선택한 모델이 전체 도구로 답합니다. OpenAI API 키가 필요하며 음성 계층은 분당 $0.05가 청구됩니다.',
    gptLive: {
      voice: 'GPT-Live 모드의 목소리. 사용자 지정 목소리 ID도 됩니다.',
      instructions: '라이브 음성 성격에 덧붙일 문장(말투, 속도, 언어). Hermes의 시스템 프롬프트는 그대로 유지됩니다.'
    }
  },
  tts: {
    xai: {
      voiceId: 'xAI 목소리 ID(예: eve) 또는 사용자 지정 목소리 ID.',
      language: '말할 언어 코드(예: ko, en) 또는 자동 감지용 "auto".',
      speed: '재생 속도. 0.7 = 느리게, 1.0 = 보통, 1.5 = 빠르게.',
      autoSpeechTags: '합성 전에 LLM이 대본에 감정 태그([웃음], [한숨])를 넣게 합니다.',
      optimizeStreamingLatency: '지연과 품질의 균형. 0 = 최고 품질, 2 = 최저 지연.',
      sampleRate: '오디오 샘플레이트(Hz). 높을수록 품질이 좋고 파일이 커집니다.',
      bitRate: 'MP3 비트레이트(bps). 코덱이 mp3일 때만 적용됩니다.'
    },
    neutts: {
      device: 'NeuTTS 로컬 추론 장치.'
    }
  },
  stt: {
    enabled: '로컬 또는 공급자 기반 음성 받아쓰기를 켭니다.',
    echoTranscripts: '음성 메시지를 받아쓴 원문 🎙️ 을 채팅에 다시 올립니다.',
    elevenlabs: {
      languageCode: '선택 사항인 ISO-639-3 언어 코드(한국어는 kor). 비워 두면 ElevenLabs가 자동 감지합니다.'
    }
  },
  updates: {
    nonInteractiveLocalChanges:
      '앱에서 Hermes를 업데이트할 때(터미널 확인 없음) 로컬 소스 수정을 보관(stash)할지 버릴지(discard) 정합니다. 터미널 업데이트는 항상 묻습니다.'
  }
})
