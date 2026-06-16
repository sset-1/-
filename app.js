const listings = [
  {
    id: 1,
    title: "延世 / 新村 One-room 实时搜索",
    school: "Yonsei",
    schoolName: "延世大学",
    room: "one-room",
    rent: 68,
    deposit: 1000,
    management: 8,
    distance: 12,
    station: "新村站",
    naverQuery: "연세대학교 신촌역 원룸 월세",
    coords: { lat: 37.5572, lng: 126.9368 },
    availableDays: 7,
    verified: true,
    chinese: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    tags: ["已视频验证", "可中文沟通", "近地铁"],
    risks: ["楼层偏低"],
    map: { x: 61, y: 43 },
    scores: { light: 82, transport: 91, quiet: 68 },
    ko: {
      title: "연세대 / 신촌 원룸 실시간 검색",
      schoolName: "연세대학교",
      station: "신촌역",
      tags: ["영상 확인 완료", "중국어 상담 가능", "역세권"],
      risks: ["저층"],
      description:
        "네이버 부동산과 직방에서 연세대, 신촌역 주변 원룸 월세 매물을 바로 확인하는 검색 프리셋입니다. 실제 매물 가격과 공실 여부는 외부 플랫폼에서 실시간으로 확인하세요."
    },
    description:
      "这是连接 Naver 부동산 和 직방 的真实平台搜索入口，用于查看延世大学、新村站周边 One-room 月租房源。实际价格、空房和图片以外部平台为准。"
  },
  {
    id: 2,
    title: "高丽 / 安岩 Two-room 实时搜索",
    school: "Korea",
    schoolName: "高丽大学",
    room: "two-room",
    rent: 95,
    deposit: 1500,
    management: 12,
    distance: 8,
    station: "安岩站",
    naverQuery: "고려대학교 안암역 투룸 월세",
    coords: { lat: 37.586, lng: 127.0304 },
    availableDays: 20,
    verified: true,
    chinese: false,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    tags: ["已视频验证", "适合合租", "电梯"],
    risks: ["管理费较高"],
    map: { x: 41, y: 35 },
    scores: { light: 74, transport: 86, quiet: 77 },
    ko: {
      title: "고려대 / 안암 투룸 실시간 검색",
      schoolName: "고려대학교",
      station: "안암역",
      tags: ["영상 확인 완료", "쉐어 가능", "엘리베이터"],
      risks: ["관리비 높음"],
      description:
        "네이버 부동산과 직방에서 고려대, 안암역 주변 투룸 월세 매물을 확인하는 검색 프리셋입니다. 합법적인 외부 링크로 최신 매물 화면을 엽니다."
    },
    description:
      "这是高丽大学、安岩站周边 Two-room 的真实平台检索入口。适合找合租房时先去 Naver 부동산 / 직방 看实时房源，再提交视频代看。"
  },
  {
    id: 3,
    title: "首尔大入口考试院实时搜索",
    school: "SNU",
    schoolName: "首尔大学",
    room: "gosiwon",
    rent: 42,
    deposit: 50,
    management: 0,
    distance: 18,
    station: "首尔大入口站",
    naverQuery: "서울대입구역 고시원",
    coords: { lat: 37.4812, lng: 126.9527 },
    availableDays: 3,
    verified: false,
    chinese: true,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
    tags: ["低保证金", "可短租", "可中文沟通"],
    risks: ["空间较小", "共用厨房"],
    map: { x: 57, y: 68 },
    scores: { light: 58, transport: 73, quiet: 61 },
    ko: {
      title: "서울대입구 고시원 실시간 검색",
      schoolName: "서울대학교",
      station: "서울대입구역",
      tags: ["보증금 낮음", "단기 가능", "중국어 상담 가능"],
      risks: ["공간 협소", "공용 주방"],
      description:
        "서울대입구역 주변 고시원과 원룸을 네이버 부동산, 직방에서 확인하는 외부 검색 링크입니다. 단기 거주와 저보증금 조건은 플랫폼에서 필터링하세요."
    },
    description:
      "这是首尔大入口站周边考试院 / 低预算房源的真实平台入口。页面内只保存搜索条件，真实房源列表在 Naver 부동산 / 직방 实时打开。"
  },
  {
    id: 4,
    title: "汉阳 / 往十里 One-room 实时搜索",
    school: "Hanyang",
    schoolName: "汉阳大学",
    room: "one-room",
    rent: 72,
    deposit: 800,
    management: 7,
    distance: 10,
    station: "汉阳大站",
    naverQuery: "한양대학교 한양대역 원룸 월세",
    coords: { lat: 37.5568, lng: 127.0443 },
    availableDays: 14,
    verified: true,
    chinese: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    tags: ["已视频验证", "安静住宅区", "可中文沟通"],
    risks: [],
    map: { x: 73, y: 57 },
    scores: { light: 79, transport: 80, quiet: 88 },
    ko: {
      title: "한양대 / 왕십리 원룸 실시간 검색",
      schoolName: "한양대학교",
      station: "한양대역",
      tags: ["영상 확인 완료", "조용한 주거지", "중국어 상담 가능"],
      risks: [],
      description:
        "한양대와 왕십리 생활권의 원룸 월세 매물을 네이버 부동산, 직방에서 바로 여는 검색 프리셋입니다. 조용한 주거지 여부는 영상 투어에서 확인하세요."
    },
    description:
      "这是汉阳大学、往十里周边 One-room 的真实平台检索入口。可先打开 Naver 부동산 / 직방 看实时房源，再让看房人代看。"
  },
  {
    id: 5,
    title: "弘大入口 One-room 实时搜索",
    school: "Yonsei",
    schoolName: "延世大学",
    room: "one-room",
    rent: 88,
    deposit: 1000,
    management: 10,
    distance: 17,
    station: "弘大入口站",
    naverQuery: "홍대입구역 원룸 월세",
    coords: { lat: 37.5575, lng: 126.9245 },
    availableDays: 30,
    verified: false,
    chinese: false,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80",
    tags: ["Loft", "生活便利", "可养宠咨询"],
    risks: ["夜间街区较热闹"],
    map: { x: 26, y: 51 },
    scores: { light: 85, transport: 90, quiet: 52 },
    ko: {
      title: "홍대입구 원룸 실시간 검색",
      schoolName: "연세대학교",
      station: "홍대입구역",
      tags: ["로프트", "생활 편리", "반려동물 상담 가능"],
      risks: ["야간 유동 인구 많음"],
      description:
        "홍대입구역 주변 원룸과 오피스텔 매물을 외부 플랫폼에서 확인하는 검색 프리셋입니다. 야간 소음과 거리 분위기는 영상 투어로 점검하세요."
    },
    description:
      "这是弘大入口站周边 One-room / 오피스텔 的真实平台入口。房源详情由 Naver 부동산 / 직방 提供，本应用负责筛选、预约和代看流程。"
  },
  {
    id: 6,
    title: "冠岳 / 落星垈 Two-room 实时搜索",
    school: "SNU",
    schoolName: "首尔大学",
    room: "two-room",
    rent: 105,
    deposit: 2000,
    management: 9,
    distance: 15,
    station: "落星垈站",
    naverQuery: "서울대학교 낙성대역 투룸 월세",
    coords: { lat: 37.4769, lng: 126.9638 },
    availableDays: 12,
    verified: true,
    chinese: true,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    tags: ["已视频验证", "采光好", "适合合租"],
    risks: ["保证金较高"],
    map: { x: 33, y: 72 },
    scores: { light: 94, transport: 78, quiet: 81 },
    ko: {
      title: "관악구 / 낙성대 투룸 실시간 검색",
      schoolName: "서울대학교",
      station: "낙성대역",
      tags: ["영상 확인 완료", "채광 좋음", "쉐어 가능"],
      risks: ["보증금 높음"],
      description:
        "서울대, 낙성대역 주변 투룸 월세를 네이버 부동산과 직방에서 확인하는 검색 프리셋입니다. 실제 채광과 방음은 영상 투어에서 점검하세요."
    },
    description:
      "这是首尔大学、落星垈站周边 Two-room 的真实平台检索入口。适合两人合租前先比较 Naver 부동산 / 직방 实时房源。"
  }
];

const guides = {
  zh: {
    contract: [
      {
        title: "先确认登记簿和房东身份",
        body: "签约前核对房屋登记信息、房东姓名、抵押情况和代理权限，避免把押金交给无权签约的人。"
      },
      {
        title: "月租、保证金、管理费分开看",
        body: "韩国房源常把管理费另列，需确认是否包含水、电、网、公共清洁、电梯和暖气。"
      },
      {
        title: "合同里写清维修责任",
        body: "入住前拍照记录墙面、地板、家电和霉点，约定故障维修时限和费用归属。"
      }
    ],
    life: [
      {
        title: "垃圾分类看区域规则",
        body: "首尔不同区的投放时间和垃圾袋不同，入住后先确认楼栋公告或便利店可购买的指定垃圾袋。"
      },
      {
        title: "网络和燃气可能要单独开通",
        body: "有些 One-room 已含网络，有些需要自己联系运营商；燃气开通通常需要预约检查。"
      },
      {
        title: "晚归路线比直线距离更重要",
        body: "看地图时同时检查路灯、坡道、主路比例和便利店位置，视频看房时要求顾问走一段周边路线。"
      }
    ],
    avoid: [
      {
        title: "过低价格要问清原因",
        body: "半地下、采光差、短期拆迁、噪音和霉味常会反映在价格上，远程看房要重点检查。"
      },
      {
        title: "不要只看精修照片",
        body: "照片可能过期或广角拍摄，预约视频时要求展示窗外、天花板、卫生间角落和楼栋入口。"
      },
      {
        title: "先确认外国人签约限制",
        body: "部分房东要求韩国手机号、银行账户或担保信息，最好在看房前确认可否外国人签约。"
      }
    ]
  },
  ko: {
    contract: [
      {
        title: "등기부와 집주인 신원 먼저 확인",
        body: "계약 전 등기 정보, 소유자 이름, 근저당 여부와 대리 권한을 확인해 보증금을 잘못 송금하는 일을 막아야 합니다."
      },
      {
        title: "월세, 보증금, 관리비를 따로 확인",
        body: "한국 매물은 관리비가 별도로 표시되는 경우가 많습니다. 수도, 전기, 인터넷, 공용 청소, 엘리베이터, 난방 포함 여부를 확인하세요."
      },
      {
        title: "수리 책임은 계약서에 명확히",
        body: "입주 전 벽, 바닥, 가전, 곰팡이 흔적을 사진으로 남기고 고장 수리 기한과 비용 부담을 정리해 두는 것이 좋습니다."
      }
    ],
    life: [
      {
        title: "쓰레기 배출 규칙은 지역별 확인",
        body: "서울은 구마다 배출 시간과 종량제 봉투가 다를 수 있습니다. 입주 후 건물 공지나 편의점에서 구매 가능한 봉투를 확인하세요."
      },
      {
        title: "인터넷과 가스는 별도 개통 가능",
        body: "일부 원룸은 인터넷이 포함되어 있지만 직접 통신사에 신청해야 하는 경우도 있습니다. 가스 개통은 보통 안전 점검 예약이 필요합니다."
      },
      {
        title: "직선거리보다 야간 동선이 중요",
        body: "지도에서는 가로등, 경사, 큰길 비율, 편의점 위치를 함께 확인하고 영상 투어 때 주변 길을 직접 걸어 보여 달라고 요청하세요."
      }
    ],
    avoid: [
      {
        title: "너무 낮은 가격은 이유를 확인",
        body: "반지하, 채광 부족, 철거 예정, 소음, 곰팡이 같은 요소가 가격에 반영되는 경우가 많으니 영상 투어에서 집중 확인하세요."
      },
      {
        title: "보정된 사진만 믿지 않기",
        body: "사진은 오래됐거나 광각으로 촬영됐을 수 있습니다. 창밖, 천장, 욕실 모서리, 건물 입구를 영상으로 확인하세요."
      },
      {
        title: "외국인 계약 가능 여부 확인",
        body: "일부 집주인은 한국 휴대폰 번호, 은행 계좌, 보증 정보를 요구합니다. 방문 전 외국인 계약 가능 여부를 확인하는 것이 좋습니다."
      }
    ]
  }
};

const state = {
  lang: "zh",
  school: "all",
  rent: 85,
  room: "all",
  verifiedOnly: false,
  chineseOnly: false,
  sort: "recommended",
  activeGuide: "contract",
  activeView: "listings",
  role: "seeker",
  profile: {
    seeker: { name: "", contact: "" },
    agent: { name: "", contact: "" },
    admin: { name: "", contact: "" }
  },
  currentUser: null,
  bookings: []
};

let communityListings = [];
let communitySubmissions = [];

const storageKeys = {
  lang: "hanstay-lang",
  role: "hanstay-role",
  authUser: "hanstay-auth-user",
  profile: "hanstay-profile",
  bookings: "hanstay-bookings"
};

const translations = {
  zh: {
    documentTitle: "HanStay 留学生找房",
    gateCopy: "远程可信看房平台。先选择你的身份，再进入对应工作台。",
    seekerChoiceTitle: "我是找房的",
    seekerChoiceBody: "筛选学校周边房源，提交视频看房需求，跟踪预约进度。",
    agentChoiceTitle: "我是看房的",
    agentChoiceBody: "接收看房任务，安排视频连线，回填检查结果。",
    currentRole: "当前身份",
    functionArea: "功能区",
    serviceFlow: "服务流程",
    processItems: ["找房人提交视频看房需求", "看房人端接单并安排连线", "顾问按检查表回填备注", "找房人跟踪状态和视频链接"],
    roleSeeker: "找房人端",
    roleAgent: "看房人端",
    roleAdmin: "超级审核端",
    workspaceSeeker: "找房人工作台",
    workspaceAgent: "看房人工作台",
    workspaceAdmin: "审核后台",
    studentWorkspace: "Student Workspace",
    agentWorkspace: "Agent Workspace",
    adminWorkspace: "Admin Workspace",
    navListings: "真实房源",
    navSubmitListing: "上传房源",
    navBookings: "预约中心",
    navAgentBookings: "看房任务",
    navAdminReview: "审核后台",
    navMaps: "外部地图",
    navGuides: "便利知识",
    openBooking: "预约视频看房",
    summaryListings: "平台入口",
    summaryPending: "待接单预约",
    summaryScheduled: "已安排视频",
    summaryCompleted: "已完成看房",
    listingsTitle: "真实房源入口",
    listingsCopy: "按学校、预算和房型生成 Naver 부동산 / 직방 实时检索入口；本页不复制平台房源数据。",
    schoolField: "目标学校",
    rentField: "最高月租",
    rentValue: "{rent} 万韩元以内",
    roomField: "房型",
    conditionField: "条件",
    sortField: "排序",
    resetFilters: "重置筛选",
    allSchools: "全部学校",
    allRooms: "全部",
    oneRoom: "One-room",
    twoRoom: "Two-room",
    gosiwon: "考试院",
    verifiedOnly: "只看已视频验证",
    chineseOnly: "可中文沟通",
    recommendedSort: "推荐排序",
    rentSort: "月租最低",
    distanceSort: "离学校最近",
    availableSort: "最快入住",
    nearbyListings: "学校周边真实平台入口",
    mapEntry: "看地图入口",
    emptyListings: "暂无匹配入口，放宽预算或取消部分筛选试试。",
    bookingWorkspaceTitle: "预约中心",
    bookingWorkspaceCopySeeker: "找房人提交视频看房需求，并在这里跟踪顾问处理进度。",
    bookingWorkspaceCopyAgent: "看房人处理学生提交的预约，接单、安排视频链接并回填检查结果。",
    bookingWorkspaceCopyAdmin: "超级账号主要负责审核用户上传的房源，必要时也可以查看平台内容。",
    submitListingWorkspaceTitle: "上传房源",
    submitListingWorkspaceCopy: "用户可以提交真实房源信息。提交后不会立刻公开，需要超级账号审核通过。",
    submitListingPanelTitle: "房源投稿表",
    adminReviewWorkspaceTitle: "房源审核后台",
    adminReviewWorkspaceCopy: "超级账号在这里审核用户投稿。通过后房源会进入前端列表，拒绝后不会公开展示。",
    adminReviewPanelTitle: "待审核房源",
    submitListingTitleLabel: "房源标题",
    submitListingSchoolLabel: "学校 / 区域",
    submitListingRoomLabel: "房型",
    submitListingRentLabel: "月租",
    submitListingDepositLabel: "保证金",
    submitListingManagementLabel: "管理费",
    submitListingStationLabel: "地点 / 地铁站",
    submitListingDistanceLabel: "到学校分钟",
    submitListingAddressLabel: "详细地址",
    submitListingImageLabel: "图片 URL",
    submitListingContactLabel: "联系方式",
    submitListingDescriptionLabel: "房源说明",
    submitListingTitlePlaceholder: "例如：栗田洞近成均馆一居室",
    submitListingStationPlaceholder: "例如：성균관대역 / 율전동",
    submitListingAddressPlaceholder: "例如：수원시 장안구 율전동",
    submitListingImagePlaceholder: "https://...",
    submitListingDescriptionPlaceholder: "写清楚位置、租金包含内容、入住时间、注意事项。",
    submitListingButton: "提交审核",
    communitySyncing: "正在提交到审核队列...",
    communitySubmitted: "已提交审核。超级账号通过后，这套房会显示在房源列表里。",
    communitySubmitFailed: "提交失败：{error}",
    communityLoadFailed: "房源投稿读取失败：{error}",
    communityReviewFailed: "审核操作失败：{error}",
    communityApproved: "已通过，房源会公开展示。",
    communityRejected: "已拒绝，房源不会公开展示。",
    communityEmptyAdmin: "暂无待审核房源。",
    communitySubmitter: "提交人",
    communityContact: "联系方式",
    communityStatusPending: "待审核",
    communityStatusApproved: "已通过",
    communityStatusRejected: "已拒绝",
    approveListing: "通过",
    rejectListing: "拒绝",
    communitySourceTag: "用户投稿",
    communityApprovedTag: "后台审核通过",
    adminName: "管理员姓名",
    adminContact: "管理员联系方式",
    saveProfileAdmin: "保存管理员信息",
    videoTourRequest: "视频看房需求",
    listingIntent: "意向房源",
    name: "姓名",
    agentName: "顾问姓名",
    contact: "联系方式",
    agentContact: "顾问工号 / 联系方式",
    namePlaceholder: "例如：李同学",
    agentNamePlaceholder: "例如：HanStay 顾问 A",
    contactPlaceholder: "微信 / KakaoTalk / 邮箱",
    agentContactPlaceholder: "例如：agent-001 / Kakao",
    budget: "预算",
    budgetLow: "50-70 万韩元",
    budgetMid: "70-90 万韩元",
    budgetHigh: "90-120 万韩元",
    moveIn: "入住",
    notes: "看房重点",
    notesPlaceholder: "例如：离延世步行 15 分钟内，想检查水压和隔音",
    submitBooking: "提交预约",
    bookingSubmitted: "{name}，预约已进入“我的预约”。看房人端现在可以接单处理。",
    saveProfileSeeker: "保存个人信息",
    saveProfileAgent: "保存顾问信息",
    switchRole: "返回身份选择",
    bookingCenter: "我的预约",
    agentTasks: "看房任务",
    bookingSubtitleSeeker: "预约提交后会在这里显示进度、视频链接和顾问备注。",
    bookingSubtitleAgent: "看房人接单、安排视频链接、回填看房结果。",
    emptyBookingsSeeker: "还没有预约。选择房源并提交视频看房需求后，会在这里跟踪进度。",
    emptyBookingsAgent: "暂无看房任务。找房人提交预约后会出现在这里。",
    statusPending: "待接单",
    statusAccepted: "已接单",
    statusScheduled: "已安排视频",
    statusCompleted: "已完成看房",
    statusCancelled: "已取消",
    moveInTbd: "入住时间待定",
    mapNaver: "Naver 地图",
    noNotes: "未填写看房重点",
    viewer: "看房人",
    meetingUrl: "视频链接",
    agentNote: "备注",
    waitingAgent: "待分配",
    waitingMeeting: "待顾问安排",
    noAgentNote: "暂无顾问备注",
    cancelBooking: "取消预约",
    bookAgain: "再次预约这套房",
    acceptTask: "接单",
    meetingInput: "视频会议链接",
    meetingPlaceholder: "Zoom / Google Meet / KakaoTalk 链接",
    noteToSeeker: "给找房人的备注",
    notePlaceholder: "例如：今晚 8 点连线，重点检查水压、采光和楼道安全。",
    scheduleVideo: "安排视频",
    completeTask: "标记完成",
    acceptedDefaultNote: "看房人已接单，待安排视频时间和会议链接。",
    scheduledDefaultNote: "视频看房已安排，请按时进入会议。",
    completedDefaultNote: "视频看房已完成，建议根据检查清单继续确认合同和保证金事项。",
    cancelledDefaultNote: "找房人已取消该预约。",
    defaultAgentName: "HanStay 看房顾问",
    defaultAgentContact: "待补充联系方式",
    defaultListing: "未选择入口",
    prefillingNotes: "想预约视频代看：{title}。我会先在 Naver 부동산 / 직방 里确认具体房源链接，请重点检查采光、水压、噪音和管理费包含项目。",
    detail: "检索说明",
    bookThis: "预约代看",
    naverMap: "Naver地图",
    naverLand: "Naver 부동산",
    zigbang: "직방",
    liveSource: "实时平台",
    sourceKeyword: "搜索词：{query}",
    openLiveSource: "打开真实房源",
    rentMonthly: "预算 {rent}万以内",
    deposit: "押金常见 {deposit}万起",
    management: "管理费参考 {management}万",
    distance: "通学圈 {distance} 分钟",
    availableIn: "{days} 天后可入住",
    scoreLight: "采光",
    scoreTransport: "交通",
    scoreQuiet: "安静",
    drawerMap: "在 Naver 地图查看周边",
    drawerBook: "预约视频代看这个区域",
    realListingNoticeTitle: "真实房源数据说明",
    realListingNoticeBody: "Naver 부동산 和 직방没有开放普通开发者可直接抓取并复制房源列表的官方接口，所以这里采用合法外链方式打开实时房源。上线时如果拿到平台合作 API，可以替换为服务端同步。",
    mapsTitle: "外部地图",
    mapsCopy: "把当前筛选后的区域直接带到 Naver 부동산、직방、Naver / Kakao / Google 地图。",
    mapPanelTitle: "真实房源与地图入口",
    allArea: "全部区域",
    openAreaInMap: "{provider} 打开{area}",
    noMapResults: "没有可打开的外部入口",
    mapResultMeta: "{school} · {station} · 到校 {distance} 分钟",
    guidesTitle: "便利知识",
    guidesCopy: "把签约、生活、避坑知识单独放在一个区域，方便新生集中阅读。",
    knowledgeBase: "租房知识库",
    tabContract: "签约",
    tabLife: "生活",
    tabAvoid: "避坑",
    viewingChecklist: "视频看房检查表",
    checklistItems: ["采光、通风、霉点", "水压、热水、暖气", "管理费包含项目", "楼栋入口、电梯、楼梯和门禁", "垃圾投放点和晚归路线", "合同、保证金、维修责任"],
    schools: {
      all: "全部学校",
      Yonsei: "延世大学",
      Korea: "高丽大学",
      SNU: "首尔大学",
      Hanyang: "汉阳大学",
      SKKU: "水原成均馆"
    },
    providers: {
      naverLand: "Naver 부동산",
      zigbang: "직방",
      naver: "Naver 地图",
      kakao: "Kakao 地图",
      google: "Google Maps"
    }
  },
  ko: {
    documentTitle: "HanStay 유학생 주거 찾기",
    gateCopy: "원격으로 믿고 보는 방 찾기 플랫폼입니다. 먼저 역할을 선택한 뒤 전용 워크스페이스로 이동하세요.",
    seekerChoiceTitle: "방을 찾고 있어요",
    seekerChoiceBody: "학교 주변 매물을 필터링하고 영상 투어를 신청하며 예약 진행 상황을 확인합니다.",
    agentChoiceTitle: "대신 방을 봐요",
    agentChoiceBody: "영상 투어 요청을 받고 일정과 링크를 잡은 뒤 점검 결과를 기록합니다.",
    currentRole: "현재 역할",
    functionArea: "기능 영역",
    serviceFlow: "서비스 흐름",
    processItems: ["학생이 영상 투어 요청 제출", "현장 담당자가 접수 후 일정 조율", "체크리스트에 따라 점검 메모 작성", "학생이 상태와 영상 링크 확인"],
    roleSeeker: "방 찾는 사람",
    roleAgent: "현장 확인 담당자",
    roleAdmin: "관리자",
    workspaceSeeker: "방 찾기 워크스페이스",
    workspaceAgent: "현장 확인 워크스페이스",
    workspaceAdmin: "심사 관리자",
    studentWorkspace: "Student Workspace",
    agentWorkspace: "Agent Workspace",
    adminWorkspace: "Admin Workspace",
    navListings: "실매물 링크",
    navSubmitListing: "매물 등록",
    navBookings: "예약 센터",
    navAgentBookings: "투어 업무",
    navAdminReview: "심사 관리자",
    navMaps: "외부 지도",
    navGuides: "생활 가이드",
    openBooking: "영상 투어 예약",
    summaryListings: "플랫폼 링크",
    summaryPending: "대기 예약",
    summaryScheduled: "영상 확정",
    summaryCompleted: "투어 완료",
    listingsTitle: "실매물 플랫폼 링크",
    listingsCopy: "학교, 예산, 방 유형으로 네이버 부동산 / 직방 실시간 검색 링크를 만들며, 플랫폼 매물 데이터를 복제하지 않습니다.",
    schoolField: "희망 학교",
    rentField: "최대 월세",
    rentValue: "{rent}만 원 이하",
    roomField: "방 유형",
    conditionField: "조건",
    sortField: "정렬",
    resetFilters: "필터 초기화",
    allSchools: "전체 학교",
    allRooms: "전체",
    oneRoom: "원룸",
    twoRoom: "투룸",
    gosiwon: "고시원",
    verifiedOnly: "영상 확인 매물만",
    chineseOnly: "중국어 상담 가능",
    recommendedSort: "추천순",
    rentSort: "월세 낮은순",
    distanceSort: "학교 가까운순",
    availableSort: "빠른 입주순",
    nearbyListings: "학교 주변 실매물 플랫폼",
    mapEntry: "지도에서 보기",
    emptyListings: "조건에 맞는 플랫폼 링크가 없습니다. 예산을 높이거나 필터를 줄여 보세요.",
    bookingWorkspaceTitle: "예약 센터",
    bookingWorkspaceCopySeeker: "영상 투어 요청을 제출하고 담당자의 처리 상황을 여기에서 확인하세요.",
    bookingWorkspaceCopyAgent: "학생이 제출한 요청을 접수하고 영상 링크와 점검 결과를 기록하세요.",
    bookingWorkspaceCopyAdmin: "관리자 계정은 사용자가 올린 매물을 심사하고 필요한 경우 플랫폼 내용을 확인합니다.",
    submitListingWorkspaceTitle: "매물 등록",
    submitListingWorkspaceCopy: "사용자가 직접 매물 정보를 제출할 수 있습니다. 제출 즉시 공개되지 않고 관리자 승인 후 표시됩니다.",
    submitListingPanelTitle: "매물 등록 폼",
    adminReviewWorkspaceTitle: "매물 심사 관리자",
    adminReviewWorkspaceCopy: "관리자 계정은 사용자 제출 매물을 승인하거나 거절합니다. 승인된 매물만 프론트 목록에 공개됩니다.",
    adminReviewPanelTitle: "심사 대기 매물",
    submitListingTitleLabel: "매물 제목",
    submitListingSchoolLabel: "학교 / 지역",
    submitListingRoomLabel: "방 유형",
    submitListingRentLabel: "월세",
    submitListingDepositLabel: "보증금",
    submitListingManagementLabel: "관리비",
    submitListingStationLabel: "위치 / 지하철역",
    submitListingDistanceLabel: "학교까지 분",
    submitListingAddressLabel: "상세 주소",
    submitListingImageLabel: "이미지 URL",
    submitListingContactLabel: "연락처",
    submitListingDescriptionLabel: "매물 설명",
    submitListingTitlePlaceholder: "예: 율전동 성균관대 근처 원룸",
    submitListingStationPlaceholder: "예: 성균관대역 / 율전동",
    submitListingAddressPlaceholder: "예: 수원시 장안구 율전동",
    submitListingImagePlaceholder: "https://...",
    submitListingDescriptionPlaceholder: "위치, 월세 포함 항목, 입주 가능일, 주의사항을 적어 주세요.",
    submitListingButton: "심사 제출",
    communitySyncing: "심사 대기열에 제출하는 중...",
    communitySubmitted: "심사 요청이 제출되었습니다. 관리자 승인 후 매물 목록에 표시됩니다.",
    communitySubmitFailed: "제출 실패: {error}",
    communityLoadFailed: "사용자 제출 매물을 불러오지 못했습니다: {error}",
    communityReviewFailed: "심사 처리 실패: {error}",
    communityApproved: "승인되었습니다. 매물이 공개됩니다.",
    communityRejected: "거절되었습니다. 매물은 공개되지 않습니다.",
    communityEmptyAdmin: "심사 대기 매물이 없습니다.",
    communitySubmitter: "제출자",
    communityContact: "연락처",
    communityStatusPending: "심사 대기",
    communityStatusApproved: "승인됨",
    communityStatusRejected: "거절됨",
    approveListing: "승인",
    rejectListing: "거절",
    communitySourceTag: "사용자 제출",
    communityApprovedTag: "관리자 승인",
    adminName: "관리자 이름",
    adminContact: "관리자 연락처",
    saveProfileAdmin: "관리자 정보 저장",
    videoTourRequest: "영상 투어 요청",
    listingIntent: "관심 매물",
    name: "이름",
    agentName: "담당자 이름",
    contact: "연락처",
    agentContact: "담당자 ID / 연락처",
    namePlaceholder: "예: 이학생",
    agentNamePlaceholder: "예: HanStay 담당자 A",
    contactPlaceholder: "WeChat / KakaoTalk / 이메일",
    agentContactPlaceholder: "예: agent-001 / Kakao",
    budget: "예산",
    budgetLow: "50-70만 원",
    budgetMid: "70-90만 원",
    budgetHigh: "90-120만 원",
    moveIn: "입주일",
    notes: "확인 요청 사항",
    notesPlaceholder: "예: 연세대 도보 15분 이내, 수압과 방음 확인 희망",
    submitBooking: "예약 제출",
    bookingSubmitted: "{name}님의 예약이 ‘내 예약’에 등록되었습니다. 현장 확인 담당자가 접수할 수 있습니다.",
    saveProfileSeeker: "개인 정보 저장",
    saveProfileAgent: "담당자 정보 저장",
    switchRole: "역할 선택으로 돌아가기",
    bookingCenter: "내 예약",
    agentTasks: "투어 업무",
    bookingSubtitleSeeker: "예약 제출 후 진행 상태, 영상 링크, 담당자 메모가 여기에 표시됩니다.",
    bookingSubtitleAgent: "요청을 접수하고 영상 링크를 배정한 뒤 점검 결과를 기록하세요.",
    emptyBookingsSeeker: "아직 예약이 없습니다. 매물을 선택하고 영상 투어를 신청하면 진행 상황을 확인할 수 있습니다.",
    emptyBookingsAgent: "아직 투어 업무가 없습니다. 학생이 예약을 제출하면 여기에 표시됩니다.",
    statusPending: "접수 대기",
    statusAccepted: "접수 완료",
    statusScheduled: "영상 배정",
    statusCompleted: "투어 완료",
    statusCancelled: "취소됨",
    moveInTbd: "입주일 미정",
    mapNaver: "네이버 지도",
    noNotes: "확인 요청 사항 없음",
    viewer: "현장 담당자",
    meetingUrl: "영상 링크",
    agentNote: "메모",
    waitingAgent: "배정 대기",
    waitingMeeting: "담당자 배정 대기",
    noAgentNote: "담당자 메모 없음",
    cancelBooking: "예약 취소",
    bookAgain: "이 매물 다시 예약",
    acceptTask: "접수",
    meetingInput: "영상 회의 링크",
    meetingPlaceholder: "Zoom / Google Meet / KakaoTalk 링크",
    noteToSeeker: "학생에게 남길 메모",
    notePlaceholder: "예: 오늘 밤 8시 연결, 수압과 채광, 복도 안전을 중점 확인합니다.",
    scheduleVideo: "영상 배정",
    completeTask: "완료 처리",
    acceptedDefaultNote: "현장 담당자가 접수했습니다. 영상 시간과 링크를 조율 중입니다.",
    scheduledDefaultNote: "영상 투어가 배정되었습니다. 시간에 맞춰 링크로 접속해 주세요.",
    completedDefaultNote: "영상 투어가 완료되었습니다. 체크리스트를 바탕으로 계약과 보증금 사항을 이어서 확인하세요.",
    cancelledDefaultNote: "학생이 예약을 취소했습니다.",
    defaultAgentName: "HanStay 현장 담당자",
    defaultAgentContact: "연락처 입력 필요",
    defaultListing: "선택된 링크 없음",
    prefillingNotes: "영상 대리 확인 요청: {title}. 네이버 부동산 / 직방에서 실제 매물 링크를 먼저 확인하고 채광, 수압, 소음, 관리비 포함 항목을 중점 확인해 주세요.",
    detail: "검색 안내",
    bookThis: "대리 확인 예약",
    naverMap: "네이버 지도",
    naverLand: "네이버 부동산",
    zigbang: "직방",
    liveSource: "실시간 플랫폼",
    sourceKeyword: "검색어: {query}",
    openLiveSource: "실매물 열기",
    rentMonthly: "예산 {rent}만 원 이하",
    deposit: "보증금 보통 {deposit}만부터",
    management: "관리비 참고 {management}만",
    distance: "통학권 {distance}분",
    availableIn: "{days}일 후 입주 가능",
    scoreLight: "채광",
    scoreTransport: "교통",
    scoreQuiet: "조용함",
    drawerMap: "네이버 지도에서 주변 보기",
    drawerBook: "이 지역 영상 대리 확인 예약",
    realListingNoticeTitle: "실매물 데이터 안내",
    realListingNoticeBody: "네이버 부동산과 직방은 일반 개발자가 매물 목록을 직접 복제해 가져오는 공개 API를 제공하지 않으므로, 여기서는 합법적인 외부 링크로 실시간 매물 화면을 엽니다. 추후 제휴 API를 확보하면 서버 연동으로 바꿀 수 있습니다.",
    mapsTitle: "외부 지도",
    mapsCopy: "현재 필터 지역을 네이버 부동산, 직방, 네이버 / 카카오 / Google 지도 검색으로 바로 연결합니다.",
    mapPanelTitle: "실매물 및 지도 링크",
    allArea: "전체 지역",
    openAreaInMap: "{provider}에서 {area} 열기",
    noMapResults: "열 수 있는 외부 링크가 없습니다",
    mapResultMeta: "{school} · {station} · 학교까지 {distance}분",
    guidesTitle: "생활 가이드",
    guidesCopy: "계약, 생활, 주의사항을 한 곳에 모아 신입 유학생이 빠르게 확인할 수 있습니다.",
    knowledgeBase: "주거 가이드",
    tabContract: "계약",
    tabLife: "생활",
    tabAvoid: "주의",
    viewingChecklist: "영상 투어 체크리스트",
    checklistItems: ["채광, 환기, 곰팡이", "수압, 온수, 난방", "관리비 포함 항목", "건물 입구, 엘리베이터, 계단, 출입 보안", "쓰레기 배출 장소와 야간 귀가 동선", "계약서, 보증금, 수리 책임"],
    schools: {
      all: "전체 학교",
      Yonsei: "연세대학교",
      Korea: "고려대학교",
      SNU: "서울대학교",
      Hanyang: "한양대학교",
      SKKU: "수원 성균관대"
    },
    providers: {
      naverLand: "네이버 부동산",
      zigbang: "직방",
      naver: "네이버 지도",
      kakao: "카카오맵",
      google: "Google 지도"
    }
  }
};

const schoolMapQueries = {
  all: "서울 대학가 원룸 월세",
  Yonsei: "연세대학교 신촌 원룸 월세",
  Korea: "고려대학교 안암 원룸 월세",
  SNU: "서울대학교 서울대입구 원룸 월세",
  Hanyang: "한양대학교 왕십리 원룸 월세",
  SKKU: "성균관대학교 자연과학캠퍼스 율전동 원룸 월세"
};

const schoolAreaCoords = {
  all: { lat: 37.5665, lng: 126.978 },
  Yonsei: { lat: 37.5572, lng: 126.9368 },
  Korea: { lat: 37.586, lng: 127.0304 },
  SNU: { lat: 37.4812, lng: 126.9527 },
  Hanyang: { lat: 37.5568, lng: 127.0443 },
  SKKU: { lat: 37.2936, lng: 126.9756 }
};

Object.assign(translations.zh, {
  loginHeroCopy: "登录后查看房源、安全参考、租金行情和预约功能。",
  loginTitle: "登录",
  loginStatus: "真实登录",
  emailLabel: "邮箱",
  passwordLabel: "密码",
  loginEmailPlaceholder: "输入你的邮箱",
  loginPasswordPlaceholder: "至少 6 位密码",
  loginSubmit: "登录",
  signupSubmit: "注册新账号",
  signupRoleLabel: "注册身份",
  signupRoleSeeker: "找房人",
  signupRoleAgent: "看房人",
  signupRoleHint: "只在注册新账号时保存身份；已有账号请在 Supabase 修改角色或重新注册。",
  authActionsLabel: "账号操作",
  loginWarning: "现在使用 Supabase Auth 真实登录；如果开启邮箱验证，注册后需要先去邮箱确认。",
  loginUserLabel: "登录用户",
  notLoggedIn: "未登录",
  guestMode: "游客模式",
  loginLoading: "正在登录...",
  signupLoading: "正在注册...",
  supabaseMissing: "Supabase SDK 或配置没有加载，请检查网络和 supabase-config.js。",
  loginFailed: "登录失败，请检查邮箱和密码。",
  passwordTooShort: "密码至少需要 6 位。",
  signupFailed: "注册失败。",
  signupConfirmation: "注册成功。请先去邮箱确认账号，然后再回来登录。",
  loggedOut: "已退出登录。",
  bookingCloudSyncing: "正在同步到云端...",
  bookingCloudSaved: "{name}，预约已保存到 Supabase。其他设备登录后也能看到。",
  bookingCloudSaveFailed: "预约已暂存在本机，但云端同步失败。请先在 Supabase 运行 SUPABASE_BOOKINGS.sql。",
  bookingCloudSaveFailedDetail: "预约已暂存在本机，但没有写入 Supabase：{error}",
  bookingCloudLoadFailed: "云端预约读取失败，暂时显示本机缓存。",
  bookingCloudLoadFailedDetail: "云端预约读取失败：{error}",
  bookingCloudNoSession: "没有检测到 Supabase 登录态，请退出后重新登录再提交。",
  bookingCloudUpdateFailed: "云端更新失败，请检查 Supabase bookings 表和权限规则。",
  wanUnit: "万",
  perMonthShort: "月",
  focusSurveyEyebrow: "Suwon SKKU Survey",
  focusSurveyTitle: "水原成均馆附近房源调查",
  focusSurveyStatus: "专题模式",
  focusSurveyLead: "调查范围固定为成均馆大学自然科学校区、성균관대역、栗田洞一带。结果会优先展示本地房源样本、实际租赁行情、安全参考和地图入口。",
  focusChipArea: "核心区域：水原市长安区栗田洞",
  focusChipStation: "地铁：성균관대역",
  focusChipSchool: "学校：成均馆大学自然科学校区",
  focusLoadingLabel: "读取中",
  focusLoadingTitle: "正在整理调查数据",
  focusLoadingBody: "会从 data/listings.json 和行情/安全数据中汇总。",
  refreshFocusSurvey: "刷新水原成均馆调查",
  craigslistSource: "在 Craigslist 原站查看 Seoul 公寓",
  realSearchTitle: "真实房源搜索",
  realSearchWaiting: "等待输入",
  realAreaSelectLabel: "区域选择",
  realAreaInputLabel: "区域输入",
  realPlaceLabel: "地点 / 学校 / 地铁站",
  realMaxRentLabel: "最高月租",
  realRoomLabel: "房型",
  realAreaAllCustom: "全部 / 自定义",
  realAreaInputPlaceholder: "也可以手动输入：新村、弘大、往十里",
  realPlacePlaceholder: "例如：延世大学、新村站",
  searchRealListingsButton: "搜索真实房源",
  fixedSurveyArea: "固定调查区域",
  fixedSurveyAreaOption: "成均馆大学 / 水原栗田",
  fixedAreaPlaceholder: "已锁定：水原市长安区栗田洞",
  fixedPlacePlaceholder: "已锁定：成均馆大学自然科学校区 / 성균관대역",
  viewSurveyListings: "查看调查房源",
  suwonSearchStatus: "水原成均馆专题",
  suwonMapLabel: "水原成均馆 / 栗田洞",
  suwonWorkspaceTitle: "水原成均馆房源调查",
  suwonWorkspaceHeading: "栗田洞 / 성균관대역 房源调查",
  suwonWorkspaceCopy: "专题范围固定为水原成均馆大学自然科学校区附近，优先看本地样本、实际租赁行情、安全参考和外部地图入口。",
  localListingSamples: "本地房源样本",
  monthlyRentSamples: "月租交易样本",
  medianMonthlyRent: "月租中位数",
  safetyReferenceScore: "安全参考分",
  molitLiveSummary: "国土部 API 实时汇总",
  localTransactionData: "本地交易数据",
  rentRangePending: "待补充",
  surveySampleTitle: "房源样本",
  surveySampleValue: "{count}套",
  surveySampleBody: "当前本地库只保留水原成均馆/栗田洞样本，月租范围 {range}。",
  authorizedFeedTitle: "授权接口",
  authorizedFeedConfigured: "{count}个已配置",
  authorizedFeedMissing: "未配置",
  authorizedFeedBody: "本地授权房源 {count} 条。可配置 Naver、직방 或中介授权接口后自动合并显示。",
  rentMarketTitle: "租金行情",
  rentMarketBody: "{source}：押金中位数 {deposit}，交易样本 {count} 件。",
  noRentMarketData: "未找到租赁行情数据。",
  safetyReferenceTitle: "安全参考",
  safetyReferenceBody: "统计口径为 {region}，总案件 {cases} 件。此数据按城市汇总，不等同于栗田洞小区级风险。",
  noSafetyData: "未找到安全统计数据。",
  saleMarketTitle: "买卖行情",
  saleMarketBody: "{source}：{region} 单独/多户买卖样本 {count} 件，仅作区域资产价格参考。",
  noSaleMarketData: "未找到买卖行情数据。",
  surveyDataFailed: "数据读取失败",
  checkDataFiles: "请检查 data 文件",
  riskLow: "较低",
  riskMedium: "中等",
  riskHigh: "偏高",
  riskReference: "参考",
  safetyCases: "总案件 {total} · 强力 {violent}",
  belowMarket: "低于行情",
  nearMarket: "接近行情",
  aboveMarket: "高于行情",
  marketReference: "行情参考",
  medianMonthlyRentValue: "中位月租 {rent}",
  medianDepositValue: "押金中位 {deposit}",
  medianSaleValue: "成交中位 {price}",
  saleTransactionMeta: "{count}笔 · {period}",
  unnamedRealListing: "未命名房源",
  realSource: "真实来源",
  priceCheckNeeded: "价格待确认",
  realMonthlyRent: "月租 {rent}万",
  realDeposit: "保证金 {deposit}万",
  viewSourceConditions: "查看来源与检索条件",
  needApiStatus: "需要接入接口",
  noRealApiTitle: "还没有可用的真实房源接口",
  noRealApiBody: "前端已经会请求 {endpoint}。接入后端后，这里会直接显示真实房源卡片，而不是跳转外部平台。",
  inSiteNaverMap: "在站内查 Naver 地图",
  inSiteKakao: "在站内查 Kakao",
  inSiteGoogle: "在站内查 Google",
  apiContractSummary: "后端需要返回的数据格式",
  realSearchLoading: "搜索中",
  realSearchReading: "正在读取真实房源...",
  realSearchNoResultsStatus: "没有结果",
  realSearchNoResults: "没有找到符合条件的真实房源，请换一个区域或价位。",
  realSearchCount: "{count} 套房源",
  realInitialFile: "现在是 file:// 打开，无法请求 /api/listings。请用 http://127.0.0.1:8001/index.html 打开。",
  realInitialHttp: "选择区域、地点、价位和房型后搜索；房源卡片会显示安全参考、租金行情和买卖行情。",
  realInitialDefault: "输入区域、地点、价位和房型后搜索；接入 /api/listings 后这里会直接显示真实房源。",
  siteViewerTitle: "站内浏览",
  siteViewerNote: "如果对方网站禁止嵌入，下面可能显示为空白或拒绝连接；链接仍会留在本页面内。",
  iframeBlockedTitle: "{source} 不允许嵌入到 iframe",
  iframeBlockedBody: "这类房源/地图网站通常设置了浏览器安全策略，所以不能把原始网页直接塞进你的前端里。要在你的页面里直接显示真实房源，需要后端拿到合法数据源后，再由我们自己的 UI 渲染卡片。",
  copyOriginalLink: "复制原始链接",
  backToSiteResults: "返回站内结果",
  localApiHint: "现在的本地接口会返回站内结果卡片；下一步把 server.js 里的 buildListings() 接到真实授权数据源，就能在这里显示逐套房源。",
  copied: "已复制"
});

Object.assign(translations.ko, {
  loginHeroCopy: "로그인 후 매물, 안전 참고, 임대 시세와 예약 기능을 확인할 수 있습니다.",
  loginTitle: "로그인",
  loginStatus: "실제 로그인",
  emailLabel: "이메일",
  passwordLabel: "비밀번호",
  loginEmailPlaceholder: "이메일을 입력하세요",
  loginPasswordPlaceholder: "최소 6자리 비밀번호",
  loginSubmit: "로그인",
  signupSubmit: "새 계정 만들기",
  signupRoleLabel: "가입 역할",
  signupRoleSeeker: "집 찾는 사람",
  signupRoleAgent: "방 확인 담당",
  signupRoleHint: "새 계정 가입 때 역할이 저장됩니다. 기존 계정은 Supabase에서 역할을 수정하거나 다시 가입하세요.",
  authActionsLabel: "계정 작업",
  loginWarning: "Supabase Auth로 실제 로그인합니다. 이메일 인증을 켠 경우 가입 후 먼저 메일을 확인하세요.",
  loginUserLabel: "로그인 사용자",
  notLoggedIn: "로그인 전",
  guestMode: "게스트 모드",
  loginLoading: "로그인 중...",
  signupLoading: "가입 중...",
  supabaseMissing: "Supabase SDK 또는 설정을 불러오지 못했습니다. 네트워크와 supabase-config.js를 확인하세요.",
  loginFailed: "로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.",
  passwordTooShort: "비밀번호는 최소 6자리여야 합니다.",
  signupFailed: "가입에 실패했습니다.",
  signupConfirmation: "가입이 완료되었습니다. 이메일 인증 후 다시 로그인하세요.",
  loggedOut: "로그아웃되었습니다.",
  bookingCloudSyncing: "클라우드에 동기화하는 중...",
  bookingCloudSaved: "{name}님의 예약이 Supabase에 저장되었습니다. 다른 기기에서도 로그인 후 볼 수 있습니다.",
  bookingCloudSaveFailed: "예약은 이 기기에 임시 저장되었지만 클라우드 동기화에 실패했습니다. Supabase에서 SUPABASE_BOOKINGS.sql을 먼저 실행하세요.",
  bookingCloudSaveFailedDetail: "예약은 이 기기에 임시 저장되었지만 Supabase에는 쓰지 못했습니다: {error}",
  bookingCloudLoadFailed: "클라우드 예약을 불러오지 못해 이 기기의 캐시를 표시합니다.",
  bookingCloudLoadFailedDetail: "클라우드 예약을 불러오지 못했습니다: {error}",
  bookingCloudNoSession: "Supabase 로그인 세션이 없습니다. 로그아웃 후 다시 로그인하고 제출하세요.",
  bookingCloudUpdateFailed: "클라우드 업데이트에 실패했습니다. Supabase bookings 테이블과 권한 규칙을 확인하세요.",
  wanUnit: "만",
  perMonthShort: "월",
  focusSurveyEyebrow: "Suwon SKKU Survey",
  focusSurveyTitle: "수원 성균관대 주변 매물 조사",
  focusSurveyStatus: "집중 조사",
  focusSurveyLead: "조사 범위는 성균관대 자연과학캠퍼스, 성균관대역, 율전동 일대로 고정됩니다. 로컬 매물 샘플, 실제 임대 시세, 안전 참고와 지도 링크를 우선 표시합니다.",
  focusChipArea: "핵심 지역: 수원시 장안구 율전동",
  focusChipStation: "지하철: 성균관대역",
  focusChipSchool: "학교: 성균관대 자연과학캠퍼스",
  focusLoadingLabel: "불러오는 중",
  focusLoadingTitle: "조사 데이터를 정리하고 있습니다",
  focusLoadingBody: "data/listings.json과 시세/안전 데이터를 함께 요약합니다.",
  refreshFocusSurvey: "수원 성균관대 조사 새로고침",
  craigslistSource: "Craigslist 원문에서 Seoul 아파트 보기",
  realSearchTitle: "실매물 검색",
  realSearchWaiting: "입력 대기",
  realAreaSelectLabel: "지역 선택",
  realAreaInputLabel: "지역 직접 입력",
  realPlaceLabel: "장소 / 학교 / 지하철역",
  realMaxRentLabel: "최대 월세",
  realRoomLabel: "방 유형",
  realAreaAllCustom: "전체 / 직접 입력",
  realAreaInputPlaceholder: "예: 신촌, 홍대, 왕십리",
  realPlacePlaceholder: "예: 연세대학교, 신촌역",
  searchRealListingsButton: "실매물 검색",
  fixedSurveyArea: "고정 조사 지역",
  fixedSurveyAreaOption: "성균관대 / 수원 율전",
  fixedAreaPlaceholder: "고정됨: 수원시 장안구 율전동",
  fixedPlacePlaceholder: "고정됨: 성균관대 자연과학캠퍼스 / 성균관대역",
  viewSurveyListings: "조사 매물 보기",
  suwonSearchStatus: "수원 성균관대 집중",
  suwonMapLabel: "수원 성균관대 / 율전동",
  suwonWorkspaceTitle: "수원 성균관대 매물 조사",
  suwonWorkspaceHeading: "율전동 / 성균관대역 매물 조사",
  suwonWorkspaceCopy: "범위는 수원 성균관대 자연과학캠퍼스 주변으로 고정되며, 로컬 샘플, 실제 임대 시세, 안전 참고와 외부 지도 링크를 우선 확인합니다.",
  localListingSamples: "로컬 매물 샘플",
  monthlyRentSamples: "월세 거래 샘플",
  medianMonthlyRent: "월세 중위값",
  safetyReferenceScore: "안전 참고 점수",
  molitLiveSummary: "국토부 API 실시간 요약",
  localTransactionData: "로컬 거래 데이터",
  rentRangePending: "보완 예정",
  surveySampleTitle: "매물 샘플",
  surveySampleValue: "{count}건",
  surveySampleBody: "현재 로컬 DB에는 수원 성균관대/율전동 샘플만 보관되어 있으며 월세 범위는 {range}입니다.",
  authorizedFeedTitle: "제휴 API",
  authorizedFeedConfigured: "{count}개 설정됨",
  authorizedFeedMissing: "미설정",
  authorizedFeedBody: "로컬 제휴 매물 {count}건. Naver, 직방 또는 중개사 제휴 API를 설정하면 자동으로 합쳐서 표시합니다.",
  rentMarketTitle: "임대 시세",
  rentMarketBody: "{source}: 보증금 중위값 {deposit}, 거래 샘플 {count}건.",
  noRentMarketData: "임대 시세 데이터를 찾지 못했습니다.",
  safetyReferenceTitle: "안전 참고",
  safetyReferenceBody: "통계 기준은 {region}, 전체 사건 {cases}건입니다. 이 데이터는 도시 단위 요약이며 율전동 단지별 위험도와 같지 않습니다.",
  noSafetyData: "안전 통계 데이터를 찾지 못했습니다.",
  saleMarketTitle: "매매 시세",
  saleMarketBody: "{source}: {region} 단독/다가구 매매 샘플 {count}건이며 지역 자산 가격 참고용입니다.",
  noSaleMarketData: "매매 시세 데이터를 찾지 못했습니다.",
  surveyDataFailed: "데이터 로딩 실패",
  checkDataFiles: "data 파일을 확인하세요",
  riskLow: "낮음",
  riskMedium: "보통",
  riskHigh: "높음",
  riskReference: "참고",
  safetyCases: "전체 사건 {total} · 강력 {violent}",
  belowMarket: "시세보다 낮음",
  nearMarket: "시세와 비슷함",
  aboveMarket: "시세보다 높음",
  marketReference: "시세 참고",
  medianMonthlyRentValue: "월세 중위값 {rent}",
  medianDepositValue: "보증금 중위값 {deposit}",
  medianSaleValue: "거래 중위값 {price}",
  saleTransactionMeta: "{count}건 · {period}",
  unnamedRealListing: "이름 없는 매물",
  realSource: "실제 출처",
  priceCheckNeeded: "가격 확인 필요",
  realMonthlyRent: "월세 {rent}만",
  realDeposit: "보증금 {deposit}만",
  viewSourceConditions: "출처와 검색 조건 보기",
  needApiStatus: "API 연결 필요",
  noRealApiTitle: "사용 가능한 실매물 API가 아직 없습니다",
  noRealApiBody: "프런트엔드는 이미 {endpoint}를 요청합니다. 백엔드를 연결하면 외부 플랫폼으로 이동하지 않고 이곳에 실매물 카드를 바로 표시합니다.",
  inSiteNaverMap: "내부에서 Naver 지도 보기",
  inSiteKakao: "내부에서 Kakao 보기",
  inSiteGoogle: "내부에서 Google 보기",
  apiContractSummary: "백엔드가 반환해야 할 데이터 형식",
  realSearchLoading: "검색 중",
  realSearchReading: "실매물을 불러오는 중...",
  realSearchNoResultsStatus: "결과 없음",
  realSearchNoResults: "조건에 맞는 실매물을 찾지 못했습니다. 지역이나 가격을 바꿔 보세요.",
  realSearchCount: "{count}개 매물",
  realInitialFile: "file://로 열려 있어 /api/listings를 요청할 수 없습니다. http://127.0.0.1:8001/index.html 로 열어 주세요.",
  realInitialHttp: "지역, 장소, 가격과 방 유형을 선택한 뒤 검색하세요. 매물 카드에 안전 참고, 임대 시세와 매매 시세가 표시됩니다.",
  realInitialDefault: "지역, 장소, 가격과 방 유형을 입력한 뒤 검색하세요. /api/listings 연결 후 이곳에 실매물이 바로 표시됩니다.",
  siteViewerTitle: "내부 보기",
  siteViewerNote: "상대 사이트가 임베드를 막으면 아래가 빈 화면이거나 연결 거부로 보일 수 있습니다. 링크는 이 페이지 안에 남습니다.",
  iframeBlockedTitle: "{source}는 iframe 삽입을 허용하지 않습니다",
  iframeBlockedBody: "이런 매물/지도 사이트는 보통 브라우저 보안 정책을 설정해 원본 페이지를 프런트엔드 안에 직접 넣을 수 없습니다. 페이지 안에서 실매물을 직접 표시하려면 백엔드가 합법적인 데이터 소스를 받은 뒤 자체 UI로 카드를 렌더링해야 합니다.",
  copyOriginalLink: "원본 링크 복사",
  backToSiteResults: "내부 결과로 돌아가기",
  localApiHint: "현재 로컬 API는 내부 결과 카드를 반환합니다. 다음 단계로 server.js의 buildListings()를 실제 제휴 데이터 소스에 연결하면 이곳에 매물을 하나씩 표시할 수 있습니다.",
  copied: "복사됨"
});

const realEstateProviders = [
  {
    id: "naverLand",
    icon: "building-2",
    url: (target) =>
      `https://new.land.naver.com/rooms?ms=${target.coords.lat},${target.coords.lng},15&a=APT:OPST:ABYG:OBYG:GM:OR:VL:SG:SMS:GJCG:TJ&e=RETAIL`
  },
  {
    id: "zigbang",
    icon: "home",
    url: (target) => `https://m.zigbang.com/home/oneroom/map?lat=${target.coords.lat}&lng=${target.coords.lng}&zoom=6`
  }
];

const mapProviders = [
  {
    id: "naver",
    name: "Naver 地图",
    icon: "navigation",
    url: (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`
  },
  {
    id: "kakao",
    name: "Kakao 地图",
    icon: "map-pinned",
    url: (query) => `https://map.kakao.com/?q=${encodeURIComponent(query)}`
  },
  {
    id: "google",
    name: "Google Maps",
    icon: "globe-2",
    url: (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  }
];

const realListingsEndpoint = "/api/listings";
const authEnabled = true;
const supabaseSettings = window.HANSTAY_SUPABASE || {};
const supabaseClient =
  authEnabled && window.supabase && supabaseSettings.url && supabaseSettings.publishableKey
    ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.publishableKey)
    : null;
const supabaseBookingsTable = supabaseSettings.bookingsTable || "bookings";
const supabaseCommunityListingsTable = supabaseSettings.communityListingsTable || "community_listings";
let bookingRealtimeChannel = null;
let communityListingRealtimeChannel = null;
const suwonSurveyMode = {
  enabled: true,
  areaSelect: "成均馆大学 水原 栗田",
  mapLabel: "水原成均馆 / 栗田洞",
  query: "성균관대학교 자연과학캠퍼스 율전동 원룸 월세",
  coords: { lat: 37.2936, lng: 126.9756 },
  maxRent: 85,
  room: "all",
  districtKey: "gyeonggi_suwon",
  marketRentKey: "suwon_jangan_yuljeon",
  marketSaleKey: "suwon_jangan"
};
const realRoomLabels = {
  all: "전체",
  "one-room": "원룸",
  "two-room": "투룸",
  gosiwon: "고시원",
  officetel: "오피스텔"
};

const elements = {
  loginGate: document.querySelector("#loginGate"),
  loginForm: document.querySelector("#loginForm"),
  loginEmail: document.querySelector("#loginEmail"),
  loginPassword: document.querySelector("#loginPassword"),
  signupRole: document.querySelector("#signupRole"),
  signupRoleHint: document.querySelector("#signupRoleHint"),
  loginResult: document.querySelector("#loginResult"),
  signupButton: document.querySelector("#signupButton"),
  roleGate: document.querySelector("#roleGate"),
  appShell: document.querySelector("#appShell"),
  langButtons: document.querySelectorAll("[data-lang]"),
  enterRoleButtons: document.querySelectorAll("[data-enter-role]"),
  switchRole: document.querySelector("#switchRole"),
  roleBadge: document.querySelector("#roleBadge"),
  workspaceEyebrow: document.querySelector("#workspaceEyebrow"),
  workspaceTitle: document.querySelector("#workspaceTitle"),
  bookingWorkspaceCopy: document.querySelector("#bookingWorkspaceCopy"),
  viewButtons: document.querySelectorAll("[data-view]"),
  viewPanels: document.querySelectorAll("[data-view-panel]"),
  schoolFilter: document.querySelector("#schoolFilter"),
  rentFilter: document.querySelector("#rentFilter"),
  rentValue: document.querySelector("#rentValue"),
  verifiedOnly: document.querySelector("#verifiedOnly"),
  chineseOnly: document.querySelector("#chineseOnly"),
  sortSelect: document.querySelector("#sortSelect"),
  listingList: document.querySelector("#listingList"),
  visibleCount: document.querySelector("#visibleCount"),
  realSearchForm: document.querySelector("#realSearchForm"),
  realAreaSelect: document.querySelector("#realAreaSelect"),
  realAreaInput: document.querySelector("#realAreaInput"),
  realPlaceInput: document.querySelector("#realPlaceInput"),
  realRentInput: document.querySelector("#realRentInput"),
  realRoomInput: document.querySelector("#realRoomInput"),
  realResults: document.querySelector("#realResults"),
  realSearchStatus: document.querySelector("#realSearchStatus"),
  focusSurveyPanel: document.querySelector("#focusSurveyPanel"),
  surveyCardGrid: document.querySelector("#surveyCardGrid"),
  runFocusSurvey: document.querySelector("#runFocusSurvey"),
  pendingCount: document.querySelector("#pendingCount"),
  confirmedCount: document.querySelector("#confirmedCount"),
  completedCount: document.querySelector("#completedCount"),
  miniMap: document.querySelector("#miniMap"),
  mapAreaLink: document.querySelector("#mapAreaLink"),
  mapProviderLinks: document.querySelector("#mapProviderLinks"),
  mapSchool: document.querySelector("#mapSchool"),
  bookingDashboard: document.querySelector("#bookingDashboard"),
  bookingListing: document.querySelector("#bookingListing"),
  guideList: document.querySelector("#guideList"),
  bookingForm: document.querySelector("#bookingForm"),
  bookingName: document.querySelector('input[name="name"]'),
  bookingContact: document.querySelector('input[name="contact"]'),
  bookingResult: document.querySelector("#bookingResult"),
  listingSubmitForm: document.querySelector("#listingSubmitForm"),
  listingSubmitStatus: document.querySelector("#listingSubmitStatus"),
  adminListingQueue: document.querySelector("#adminListingQueue"),
  adminListingCount: document.querySelector("#adminListingCount"),
  adminReviewStatus: document.querySelector("#adminReviewStatus"),
  profileName: document.querySelector("#profileName"),
  profileContact: document.querySelector("#profileContact"),
  profileNameLabel: document.querySelector("#profileNameLabel"),
  profileContactLabel: document.querySelector("#profileContactLabel"),
  profileStatus: document.querySelector("#profileStatus"),
  currentUserLabel: document.querySelector("#currentUserLabel"),
  logoutButton: document.querySelector("#logoutButton"),
  saveProfile: document.querySelector("#saveProfile"),
  detailDrawer: document.querySelector("#detailDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerContent: document.querySelector("#drawerContent"),
  siteViewer: document.querySelector("#siteViewer"),
  siteViewerBackdrop: document.querySelector("#siteViewerBackdrop"),
  siteViewerFrame: document.querySelector("#siteViewerFrame"),
  siteViewerFallback: document.querySelector("#siteViewerFallback"),
  siteViewerTitle: document.querySelector("#siteViewerTitle"),
  siteViewerUrl: document.querySelector("#siteViewerUrl"),
  reloadSiteViewer: document.querySelector("#reloadSiteViewer")
};

function text(key, params = {}) {
  const value = translations[state.lang]?.[key] ?? translations.zh[key] ?? key;
  if (typeof value !== "string") return value;
  return value.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function formatCloudError(error) {
  if (!error) return text("bookingCloudSaveFailed");
  if (typeof error === "string") return error;
  return [error.code, error.message, error.details, error.hint].filter(Boolean).join(" | ") || String(error);
}

function localizedListing(listing, field) {
  return state.lang === "ko" && listing.ko?.[field] ? listing.ko[field] : listing[field];
}

function localizedListingList(listing, field) {
  return state.lang === "ko" && Array.isArray(listing.ko?.[field]) ? listing.ko[field] : listing[field];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setFieldLabel(control, value) {
  const label = control?.closest(".field");
  const labelText = label?.querySelector("span");
  if (labelText) labelText.textContent = value;
}

function setButtonLabel(selector, value) {
  const button = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!button) return;
  const icon = button.querySelector("i, svg");
  button.textContent = "";
  if (icon) button.append(icon);
  button.append(` ${value}`);
}

function setSelectOptions(select, options) {
  if (!select) return;
  const selected = select.value;
  select.innerHTML = options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
  if (options.some((option) => option.value === selected)) select.value = selected;
}

const viewCopy = {
  listings: {
    eyebrow: "Listings Workspace",
    title: "房源大厅"
  },
  submit: {
    eyebrow: "Community Listings",
    title: "上传房源"
  },
  bookings: {
    eyebrow: "Booking Workspace",
    title: "预约中心"
  },
  admin: {
    eyebrow: "Admin Review",
    title: "房源审核"
  },
  maps: {
    eyebrow: "Map Workspace",
    title: "外部地图"
  },
  guides: {
    eyebrow: "Guide Workspace",
    title: "便利知识"
  }
};

function getNaverMapUrl(query) {
  return mapProviders[0].url(query);
}

function getNaverLandUrl(target) {
  return realEstateProviders[0].url(getExternalTarget(target));
}

function getZigbangUrl(target) {
  return realEstateProviders[1].url(getExternalTarget(target));
}

function getMapUrl(providerId, query) {
  const provider = mapProviders.find((item) => item.id === providerId) || mapProviders[0];
  return provider.url(query);
}

function getExternalTarget(target) {
  if (target?.coords) return target;
  return {
    coords: schoolAreaCoords[state.school] || schoolAreaCoords.all,
    naverQuery: schoolMapQueries[state.school] || schoolMapQueries.all
  };
}

function renderWorkspaceChrome() {
  const roleCopy = {
    seeker: { eyebrow: text("studentWorkspace"), title: text("workspaceSeeker"), booking: text("bookingWorkspaceCopySeeker") },
    agent: { eyebrow: text("agentWorkspace"), title: text("workspaceAgent"), booking: text("bookingWorkspaceCopyAgent") },
    admin: { eyebrow: text("adminWorkspace"), title: text("workspaceAdmin"), booking: text("bookingWorkspaceCopyAdmin") }
  };
  const copy = roleCopy[state.role] || roleCopy.seeker;
  elements.workspaceEyebrow.textContent = copy.eyebrow;
  elements.workspaceTitle.textContent = copy.title;
  elements.bookingWorkspaceCopy.textContent = copy.booking;
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang === "ko" ? "ko" : "zh-CN";
  document.title = text("documentTitle");
  elements.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  setText(".login-copy p:last-child", text("loginHeroCopy"));
  setText("#loginForm .section-head h3", text("loginTitle"));
  setText("#loginForm .status-pill", text("loginStatus"));
  setFieldLabel(elements.loginEmail, text("emailLabel"));
  setFieldLabel(elements.loginPassword, text("passwordLabel"));
  setFieldLabel(elements.signupRole, text("signupRoleLabel"));
  elements.loginEmail.placeholder = text("loginEmailPlaceholder");
  elements.loginPassword.placeholder = text("loginPasswordPlaceholder");
  setSelectOptions(elements.signupRole, [
    { value: "seeker", label: text("signupRoleSeeker") },
    { value: "agent", label: text("signupRoleAgent") }
  ]);
  if (elements.signupRoleHint) elements.signupRoleHint.textContent = text("signupRoleHint");
  setButtonLabel('#loginForm button[type="submit"]', text("loginSubmit"));
  setButtonLabel(elements.signupButton, text("signupSubmit"));
  document.querySelector(".demo-login-grid")?.setAttribute("aria-label", text("authActionsLabel"));
  setText(".login-warning", text("loginWarning"));
  setText(".login-session span", text("loginUserLabel"));

  setText(".gate-copy", text("gateCopy"));
  setText('[data-enter-role="seeker"] strong', text("seekerChoiceTitle"));
  setText('[data-enter-role="seeker"] span', text("seekerChoiceBody"));
  setText('[data-enter-role="agent"] strong', text("agentChoiceTitle"));
  setText('[data-enter-role="agent"] span', text("agentChoiceBody"));
  setText(".auth-panel .section-title span", text("currentRole"));
  setText(".nav-panel .section-title span", text("functionArea"));
  setText(".filter-group.compact .section-title span", text("serviceFlow"));
  document.querySelectorAll(".filter-group.compact .checklist li").forEach((item, index) => {
    item.textContent = text("processItems")[index] || item.textContent;
  });

  setText('[data-view="listings"] span', text("navListings"));
  setText('[data-view="submit"] span', text("navSubmitListing"));
  setText('.seeker-nav[data-view="bookings"] span', text("navBookings"));
  setText(".agent-nav span", text("navAgentBookings"));
  setText(".admin-nav span", text("navAdminReview"));
  setText('[data-view="maps"] span', text("navMaps"));
  setText('[data-view="guides"] span', text("navGuides"));
  document.querySelector("#openBooking").lastChild.textContent = ` ${text("openBooking")}`;
  renderWorkspaceChrome();

  setText("#visibleCount + p", text("summaryListings"));
  setText("#pendingCount + p", text("summaryPending"));
  setText("#confirmedCount + p", text("summaryScheduled"));
  setText("#completedCount + p", text("summaryCompleted"));

  setText('[data-view-panel="listings"] .workspace-heading h3', text("listingsTitle"));
  setText('[data-view-panel="listings"] .workspace-heading p:last-child', text("listingsCopy"));
  setText("#focusSurveyPanel .section-head .eyebrow", text("focusSurveyEyebrow"));
  setText("#focusSurveyPanel .section-head h3", text("focusSurveyTitle"));
  setText("#focusSurveyPanel .section-head .status-pill", text("focusSurveyStatus"));
  setText("#focusSurveyPanel .survey-lead", text("focusSurveyLead"));
  const surveyChips = document.querySelectorAll("#focusSurveyPanel .survey-chip-row span");
  [text("focusChipArea"), text("focusChipStation"), text("focusChipSchool")].forEach((value, index) => {
    if (surveyChips[index]) surveyChips[index].textContent = value;
  });
  const loadingSurveyCard = elements.surveyCardGrid?.querySelector("article");
  if (loadingSurveyCard && elements.surveyCardGrid.children.length === 1) {
    loadingSurveyCard.querySelector("span").textContent = text("focusLoadingLabel");
    loadingSurveyCard.querySelector("strong").textContent = text("focusLoadingTitle");
    loadingSurveyCard.querySelector("p").textContent = text("focusLoadingBody");
  }
  setButtonLabel(elements.runFocusSurvey, text("refreshFocusSurvey"));
  setButtonLabel(".craigslist-source-link", text("craigslistSource"));
  setText(".real-search-panel .section-head h3", text("realSearchTitle"));
  setText(".real-search-panel .section-head .status-pill", text("realSearchWaiting"));
  setFieldLabel(elements.realAreaSelect, text("realAreaSelectLabel"));
  setFieldLabel(elements.realAreaInput, text("realAreaInputLabel"));
  setFieldLabel(elements.realPlaceInput, text("realPlaceLabel"));
  setFieldLabel(elements.realRentInput, text("realMaxRentLabel"));
  setFieldLabel(elements.realRoomInput, text("realRoomLabel"));
  const realAreaFirstOption = elements.realAreaSelect?.querySelector('option[value=""]');
  if (realAreaFirstOption) realAreaFirstOption.textContent = text("realAreaAllCustom");
  elements.realAreaInput.placeholder = text("realAreaInputPlaceholder");
  elements.realPlaceInput.placeholder = text("realPlacePlaceholder");
  setButtonLabel('#realSearchForm button[type="submit"]', text("searchRealListingsButton"));
  setFieldLabel(elements.schoolFilter, text("schoolField"));
  setFieldLabel(elements.rentFilter, text("rentField"));
  elements.rentValue.textContent = text("rentValue", { rent: state.rent });
  setText(".listing-toolbar .field:nth-child(3) > span", text("roomField"));
  setText(".listing-toolbar .field:nth-child(4) > span", text("conditionField"));
  setText(".listing-toolbar .field:nth-child(5) > span", text("sortField"));
  document.querySelector('[data-room="all"]').textContent = text("allRooms");
  document.querySelector('[data-room="one-room"]').textContent = text("oneRoom");
  document.querySelector('[data-room="two-room"]').textContent = text("twoRoom");
  document.querySelector('[data-room="gosiwon"]').textContent = text("gosiwon");
  elements.verifiedOnly.closest(".check-row").querySelector("span").textContent = text("verifiedOnly");
  elements.chineseOnly.closest(".check-row").querySelector("span").textContent = text("chineseOnly");
  document.querySelector("#resetFilters").lastChild.textContent = ` ${text("resetFilters")}`;
  setSelectOptions(elements.schoolFilter, [
    { value: "all", label: text("schools").all },
    { value: "Yonsei", label: text("schools").Yonsei },
    { value: "Korea", label: text("schools").Korea },
    { value: "SNU", label: text("schools").SNU },
    { value: "Hanyang", label: text("schools").Hanyang },
    { value: "SKKU", label: text("schools").SKKU }
  ]);
  setSelectOptions(elements.sortSelect, [
    { value: "recommended", label: text("recommendedSort") },
    { value: "rent", label: text("rentSort") },
    { value: "distance", label: text("distanceSort") },
    { value: "available", label: text("availableSort") }
  ]);
  setText(".listing-area .section-head h3", text("nearbyListings"));
  document.querySelector("[data-jump-view='maps']").lastChild.textContent = ` ${text("mapEntry")}`;

  setText('[data-view-panel="submit"] .workspace-heading h3', text("submitListingWorkspaceTitle"));
  setText('[data-view-panel="submit"] .workspace-heading p:last-child', text("submitListingWorkspaceCopy"));
  setText(".listing-submit-panel .section-head h3", text("submitListingPanelTitle"));
  if (elements.listingSubmitForm) {
    const form = elements.listingSubmitForm;
    setFieldLabel(form.elements.title, text("submitListingTitleLabel"));
    setFieldLabel(form.elements.school, text("submitListingSchoolLabel"));
    setFieldLabel(form.elements.roomType, text("submitListingRoomLabel"));
    setFieldLabel(form.elements.rent, text("submitListingRentLabel"));
    setFieldLabel(form.elements.deposit, text("submitListingDepositLabel"));
    setFieldLabel(form.elements.management, text("submitListingManagementLabel"));
    setFieldLabel(form.elements.station, text("submitListingStationLabel"));
    setFieldLabel(form.elements.distance, text("submitListingDistanceLabel"));
    setFieldLabel(form.elements.address, text("submitListingAddressLabel"));
    setFieldLabel(form.elements.imageUrl, text("submitListingImageLabel"));
    setFieldLabel(form.elements.contact, text("submitListingContactLabel"));
    setFieldLabel(form.elements.description, text("submitListingDescriptionLabel"));
    form.elements.title.placeholder = text("submitListingTitlePlaceholder");
    form.elements.station.placeholder = text("submitListingStationPlaceholder");
    form.elements.address.placeholder = text("submitListingAddressPlaceholder");
    form.elements.imageUrl.placeholder = text("submitListingImagePlaceholder");
    form.elements.contact.placeholder = text("contactPlaceholder");
    form.elements.description.placeholder = text("submitListingDescriptionPlaceholder");
    setSelectOptions(form.elements.school, [
      { value: "SKKU", label: text("schools").SKKU },
      { value: "Yonsei", label: text("schools").Yonsei },
      { value: "Korea", label: text("schools").Korea },
      { value: "SNU", label: text("schools").SNU },
      { value: "Hanyang", label: text("schools").Hanyang }
    ]);
    setSelectOptions(form.elements.roomType, [
      { value: "one-room", label: text("oneRoom") },
      { value: "two-room", label: text("twoRoom") },
      { value: "gosiwon", label: text("gosiwon") },
      { value: "officetel", label: "Officetel" }
    ]);
    document.querySelector('#listingSubmitForm button[type="submit"]').lastChild.textContent = ` ${text("submitListingButton")}`;
  }

  setText('[data-view-panel="admin"] .workspace-heading h3', text("adminReviewWorkspaceTitle"));
  setText('[data-view-panel="admin"] .workspace-heading p:last-child', text("adminReviewWorkspaceCopy"));
  setText(".admin-review-panel .section-head h3", text("adminReviewPanelTitle"));

  setText('[data-view-panel="bookings"] .workspace-heading h3', text("bookingWorkspaceTitle"));
  setText("#bookingWorkspaceCopy", state.role === "agent" ? text("bookingWorkspaceCopyAgent") : state.role === "admin" ? text("bookingWorkspaceCopyAdmin") : text("bookingWorkspaceCopySeeker"));
  setText(".booking-panel .section-head h3", text("videoTourRequest"));
  setFieldLabel(elements.bookingListing, text("listingIntent"));
  setFieldLabel(elements.bookingName, text("name"));
  setFieldLabel(elements.bookingContact, text("contact"));
  elements.bookingName.placeholder = text("namePlaceholder");
  elements.bookingContact.placeholder = text("contactPlaceholder");
  setText("#bookingForm .form-grid .field:first-child span", text("budget"));
  setText("#bookingForm .form-grid .field:last-child span", text("moveIn"));
  setFieldLabel(document.querySelector('textarea[name="notes"]'), text("notes"));
  document.querySelector('textarea[name="notes"]').placeholder = text("notesPlaceholder");
  setSelectOptions(document.querySelector('select[name="budget"]'), [
    { value: text("budgetLow"), label: text("budgetLow") },
    { value: text("budgetMid"), label: text("budgetMid") },
    { value: text("budgetHigh"), label: text("budgetHigh") }
  ]);
  document.querySelector('#bookingForm button[type="submit"]').lastChild.textContent = ` ${text("submitBooking")}`;

  setText('[data-view-panel="maps"] .workspace-heading h3', text("mapsTitle"));
  setText('[data-view-panel="maps"] .workspace-heading p:last-child', text("mapsCopy"));
  setText(".map-panel .section-head h3", text("mapPanelTitle"));
  setText("#siteViewerTitle", text("siteViewerTitle"));
  setText(".site-viewer-note", text("siteViewerNote"));

  setText('[data-view-panel="guides"] .workspace-heading h3', text("guidesTitle"));
  setText('[data-view-panel="guides"] .workspace-heading p:last-child', text("guidesCopy"));
  setText(".knowledge-panel .section-head h3", text("knowledgeBase"));
  document.querySelector('[data-tab="contract"]').textContent = text("tabContract");
  document.querySelector('[data-tab="life"]').textContent = text("tabLife");
  document.querySelector('[data-tab="avoid"]').textContent = text("tabAvoid");
  setText(".check-panel .section-head h3", text("viewingChecklist"));
  document.querySelectorAll(".checklist.expanded li").forEach((item, index) => {
    item.textContent = text("checklistItems")[index] || item.textContent;
  });
}

function setLanguage(lang) {
  state.lang = lang === "ko" ? "ko" : "zh";
  localStorage.setItem(storageKeys.lang, state.lang);
  applyStaticLanguage();
  rebuildCommunityListings();
  renderBookingOptions();
  renderListings();
  renderGuides();
  renderRoleUI();
  setActiveView(state.activeView);
  renderWorkspaceChrome();
  refreshIcons();
  applySuwonSurveyMode();
}

function getAllowedView(view) {
  if (state.role === "agent" && (view === "listings" || view === "submit" || view === "admin")) return "bookings";
  if (state.role === "admin" && (view === "bookings" || view === "submit")) return "admin";
  if (state.role === "seeker" && view === "admin") return "listings";
  return viewCopy[view] ? view : "listings";
}

function setActiveView(view) {
  state.activeView = getAllowedView(view);
  elements.viewButtons.forEach((button) => {
    const isVisibleForRole =
      (state.role === "seeker" && !button.classList.contains("agent-nav") && !button.classList.contains("admin-nav")) ||
      (state.role === "agent" && !button.classList.contains("seeker-nav") && !button.classList.contains("admin-nav") && button.dataset.view !== "listings") ||
      (state.role === "admin" && !button.classList.contains("seeker-nav") && !button.classList.contains("agent-nav"));
    button.classList.toggle("active", isVisibleForRole && button.dataset.view === state.activeView);
  });
  elements.viewPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === state.activeView);
  });
  refreshIcons();
}

function getSuwonSurveyTarget() {
  return {
    coords: suwonSurveyMode.coords,
    naverQuery: suwonSurveyMode.query
  };
}

function renderSuwonMapLinks() {
  if (!suwonSurveyMode.enabled || !elements.mapProviderLinks) return;
  const target = getSuwonSurveyTarget();
  const mapLabel = text("suwonMapLabel");
  elements.mapSchool.textContent = mapLabel;
  elements.mapProviderLinks.innerHTML = [
    ...realEstateProviders.map(
      (provider) => `
        <a class="map-link ${provider.id}" href="${provider.url(target)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="${provider.icon}"></i>
          ${text("providers")[provider.id] || provider.name} · ${mapLabel}
        </a>
      `
    ),
    ...mapProviders.map(
      (provider) => `
        <a class="map-link ${provider.id}" href="${getMapUrl(provider.id, suwonSurveyMode.query)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="${provider.icon}"></i>
          ${text("providers")[provider.id] || provider.name} · ${mapLabel}
        </a>
      `
    )
  ].join("");
}

function renderSurveyCard(label, value, detail) {
  return `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${detail}</p>
    </article>
  `;
}

async function fetchOptionalJson(path) {
  try {
    return await fetchJson(path);
  } catch {
    return null;
  }
}

async function fetchLiveMolitSummary(kind) {
  if (location.protocol !== "http:" && location.protocol !== "https:") return null;
  const endpoint = kind === "sale" ? "/api/molit/sale" : "/api/molit/rent";
  const params = new URLSearchParams({
    lawdCd: "41111",
    from: "202506",
    to: "202606",
    dong: kind === "sale" ? "" : "율전동"
  });
  return fetchOptionalJson(`${endpoint}?${params.toString()}`);
}

async function fetchAuthorizedStatus() {
  if (location.protocol !== "http:" && location.protocol !== "https:") return null;
  return fetchOptionalJson("/api/authorized/status");
}

async function renderSuwonSurveySummary() {
  if (!suwonSurveyMode.enabled || !elements.surveyCardGrid) return;

  try {
    const [listingsData, crimeRisk, marketRent, marketSale, liveRent, liveSale, authorizedStatus] = await Promise.all([
      fetchJson("data/listings.json"),
      fetchJson("data/crime_risk.json"),
      fetchJson("data/market_rent.json"),
      fetchJson("data/market_sale.json"),
      fetchLiveMolitSummary("rent"),
      fetchLiveMolitSummary("sale"),
      fetchAuthorizedStatus()
    ]);
    const focusedListings = listingsData.filter(
      (listing) =>
        listing.marketRentKey === suwonSurveyMode.marketRentKey ||
        (listing.districtKey === suwonSurveyMode.districtKey && searchTextIncludes([listing.area, listing.school, listing.station, listing.address].join(" "), suwonSurveyMode.areaSelect))
    );
    const rentMarket = liveRent?.summary?.monthlyCount ? liveRent.summary : marketRent[suwonSurveyMode.marketRentKey];
    const saleMarket = liveSale?.summary?.transactionCount ? liveSale.summary : marketSale[suwonSurveyMode.marketSaleKey];
    const safety = crimeRisk[suwonSurveyMode.districtKey];
    const rentSourceLabel = liveRent?.summary?.monthlyCount ? text("molitLiveSummary") : text("localTransactionData");
    const saleSourceLabel = liveSale?.summary?.transactionCount ? text("molitLiveSummary") : text("localTransactionData");
    const configuredAuthorizedProviders = authorizedStatus?.providers?.filter((provider) => provider.configured).length || 0;
    const localAuthorizedCount = authorizedStatus?.localFile?.count || 0;
    const rents = focusedListings.map((listing) => Number(listing.monthlyRent)).filter(Boolean).sort((a, b) => a - b);
    const rentRange = rents.length ? `${rents[0]}-${rents[rents.length - 1]}${text("wanUnit")}` : text("rentRangePending");

    elements.visibleCount.textContent = focusedListings.length;
    setText("#visibleCount + p", text("localListingSamples"));
    elements.pendingCount.textContent = rentMarket?.monthlyCount ? Number(rentMarket.monthlyCount).toLocaleString("ko-KR") : "0";
    setText("#pendingCount + p", text("monthlyRentSamples"));
    elements.confirmedCount.textContent = rentMarket?.medianMonthlyRent ? `${rentMarket.medianMonthlyRent}万` : "-";
    setText("#confirmedCount + p", text("medianMonthlyRent"));
    elements.completedCount.textContent = safety?.safetyScore !== undefined ? `${safety.safetyScore}/100` : "-";
    setText("#completedCount + p", text("safetyReferenceScore"));

    elements.surveyCardGrid.innerHTML = [
      renderSurveyCard(text("surveySampleTitle"), text("surveySampleValue", { count: focusedListings.length }), text("surveySampleBody", { range: rentRange })),
      renderSurveyCard(
        text("authorizedFeedTitle"),
        configuredAuthorizedProviders ? text("authorizedFeedConfigured", { count: configuredAuthorizedProviders }) : text("authorizedFeedMissing"),
        text("authorizedFeedBody", { count: localAuthorizedCount })
      ),
      renderSurveyCard(
        text("rentMarketTitle"),
        rentMarket ? `${formatWan(rentMarket.medianMonthlyRent)} / ${text("perMonthShort")}` : text("rentRangePending"),
        rentMarket
          ? text("rentMarketBody", {
              source: rentSourceLabel,
              deposit: formatWan(rentMarket.medianMonthlyDeposit),
              count: Number(rentMarket.monthlyCount).toLocaleString("ko-KR")
            })
          : text("noRentMarketData")
      ),
      renderSurveyCard(
        text("safetyReferenceTitle"),
        safety ? `${safety.safetyScore}/100` : text("rentRangePending"),
        safety
          ? text("safetyReferenceBody", {
              region: safety.region,
              cases: Number(safety.totalCases).toLocaleString("ko-KR")
            })
          : text("noSafetyData")
      ),
      renderSurveyCard(
        text("saleMarketTitle"),
        saleMarket ? `${formatWan(saleMarket.medianSalePrice)}` : text("rentRangePending"),
        saleMarket
          ? text("saleMarketBody", {
              source: saleSourceLabel,
              region: saleMarket.region,
              count: Number(saleMarket.transactionCount).toLocaleString("ko-KR")
            })
          : text("noSaleMarketData")
      )
    ].join("");
  } catch (error) {
    elements.surveyCardGrid.innerHTML = `
      <article>
        <span>${text("surveyDataFailed")}</span>
        <strong>${text("checkDataFiles")}</strong>
        <p>${escapeHtml(error.message)}</p>
      </article>
    `;
  }

  refreshIcons();
}

function applySuwonSurveyMode(options = {}) {
  if (!suwonSurveyMode.enabled) return;
  const { autoSearch = false } = options;

  document.body.classList.add("suwon-focus");
  document.querySelector(".listing-toolbar")?.setAttribute("hidden", "");
  document.querySelector(".listing-area")?.removeAttribute("hidden");
  setText("#workspaceEyebrow", "Suwon SKKU Survey");
  setText("#workspaceTitle", text("suwonWorkspaceTitle"));
  setText('[data-view-panel="listings"] .workspace-heading .eyebrow', "Sungkyunkwan Natural Sciences Campus");
  setText('[data-view-panel="listings"] .workspace-heading h3', text("suwonWorkspaceHeading"));
  setText('[data-view-panel="listings"] .workspace-heading p:last-child', text("suwonWorkspaceCopy"));

  setFieldLabel(elements.realAreaSelect, text("fixedSurveyArea"));
  setSelectOptions(elements.realAreaSelect, [{ value: suwonSurveyMode.areaSelect, label: text("fixedSurveyAreaOption") }]);
  elements.realAreaSelect.value = suwonSurveyMode.areaSelect;
  elements.realAreaSelect.disabled = true;
  elements.realAreaInput.value = "";
  elements.realAreaInput.placeholder = text("fixedAreaPlaceholder");
  elements.realAreaInput.closest(".field").hidden = true;
  elements.realPlaceInput.value = "";
  elements.realPlaceInput.placeholder = text("fixedPlacePlaceholder");
  elements.realPlaceInput.closest(".field").hidden = true;
  elements.realRentInput.value = String(suwonSurveyMode.maxRent);
  elements.realRoomInput.value = suwonSurveyMode.room;
  setFieldLabel(elements.realRentInput, text("realMaxRentLabel"));
  setFieldLabel(elements.realRoomInput, text("realRoomLabel"));
  setButtonLabel('#realSearchForm button[type="submit"]', text("viewSurveyListings"));
  elements.realSearchStatus.textContent = text("suwonSearchStatus");

  renderSuwonMapLinks();
  renderSuwonSurveySummary();
  if (autoSearch) searchRealListings();
}

function normalizeRole(role) {
  if (role === "admin") return "admin";
  if (role === "agent") return "agent";
  return "seeker";
}

function enterRole(role) {
  state.role = normalizeRole(role);
  localStorage.setItem(storageKeys.role, state.role);
  document.body.dataset.role = state.role;
  elements.loginGate.hidden = true;
  elements.roleGate.hidden = true;
  elements.appShell.hidden = false;
  renderWorkspaceChrome();
  renderRoleUI();
  setActiveView(state.role === "admin" ? "admin" : state.role === "agent" ? "bookings" : "listings");
  renderWorkspaceChrome();
}

function showRoleGate() {
  if (!state.currentUser) {
    showLoginGate();
    return;
  }
  elements.loginGate.hidden = true;
  elements.appShell.hidden = true;
  elements.roleGate.hidden = false;
  document.body.removeAttribute("data-role");
  refreshIcons();
}

function getSessionUser(user, roleOverride = "") {
  const metadata = user.user_metadata || {};
  const email = user.email || "";
  const resolvedRole = normalizeRole(roleOverride || metadata.role);
  return {
    id: user.id,
    role: resolvedRole,
    name: metadata.full_name || metadata.name || email.split("@")[0] || "HanStay User",
    email,
    contact: metadata.contact || email
  };
}

async function getSupabaseUserRole(user) {
  if (user.user_metadata?.role === "admin") return "admin";
  if (user.user_metadata?.role === "agent") return "agent";
  if (!supabaseClient || !user.email) return "seeker";

  const { data: adminData, error: adminError } = await supabaseClient
    .from("admin_accounts")
    .select("email")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  if (!adminError && adminData?.email) return "admin";

  const { data, error } = await supabaseClient
    .from("agent_accounts")
    .select("email")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  if (error) return "seeker";
  return data?.email ? "agent" : "seeker";
}

function renderAuthUser() {
  if (!elements.currentUserLabel) return;
  if (!authEnabled) {
    elements.currentUserLabel.textContent = text("guestMode");
    if (elements.logoutButton) elements.logoutButton.hidden = true;
    return;
  }
  elements.currentUserLabel.textContent = state.currentUser
    ? `${state.currentUser.name} · ${state.currentUser.email}`
    : text("notLoggedIn");
  if (elements.logoutButton) elements.logoutButton.hidden = !state.currentUser;
}

function showLoginGate(message = "") {
  if (!authEnabled) {
    enterRole("seeker");
    return;
  }
  elements.loginGate.hidden = false;
  elements.roleGate.hidden = true;
  elements.appShell.hidden = true;
  document.body.removeAttribute("data-role");
  if (elements.loginResult) elements.loginResult.textContent = message;
  renderAuthUser();
  refreshIcons();
}

async function applyAuthenticatedUser(user, options = {}) {
  if (!authEnabled) {
    enterRole("seeker");
    return;
  }
  const { persist = true } = options;
  const sessionUser = getSessionUser(user, await getSupabaseUserRole(user));
  state.currentUser = sessionUser;
  state.role = sessionUser.role;
  state.profile[sessionUser.role] = {
    name: sessionUser.name,
    contact: sessionUser.contact
  };
  if (persist) {
    localStorage.setItem(storageKeys.authUser, JSON.stringify(sessionUser));
  }
  saveProfileState();
  renderAuthUser();
  enterRole(sessionUser.role);
}

async function authenticateSupabaseUser(email, password) {
  elements.loginResult.textContent = text("loginLoading");
  if (!supabaseClient) {
    elements.loginResult.textContent = text("supabaseMissing");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email.trim(),
    password
  });

  if (error) {
    elements.loginResult.textContent = error.message || text("loginFailed");
    return;
  }

  elements.loginResult.textContent = "";
  if (data.user) {
    await applyAuthenticatedUser(data.user);
    await loadRemoteBookings();
    await loadCommunityListings();
    startBookingRealtime();
    startCommunityListingRealtime();
  }
}

async function registerSupabaseUser(email, password, role = "seeker") {
  elements.loginResult.textContent = text("signupLoading");
  if (!supabaseClient) {
    elements.loginResult.textContent = text("supabaseMissing");
    return;
  }
  if (password.length < 6) {
    elements.loginResult.textContent = text("passwordTooShort");
    return;
  }

  const signupRole = role === "agent" ? "agent" : "seeker";
  const { data, error } = await supabaseClient.auth.signUp({
    email: email.trim(),
    password,
    options: {
      data: {
        role: signupRole,
        full_name: email.trim().split("@")[0]
      }
    }
  });

  if (error) {
    elements.loginResult.textContent = error.message || text("signupFailed");
    return;
  }

  if (data.session && data.user) {
    elements.loginResult.textContent = "";
    await applyAuthenticatedUser(data.user);
    await loadRemoteBookings();
    await loadCommunityListings();
    startBookingRealtime();
    startCommunityListingRealtime();
  } else {
    elements.loginResult.textContent = text("signupConfirmation");
  }
}

async function logout() {
  await stopBookingRealtime();
  await stopCommunityListingRealtime();
  if (supabaseClient) await supabaseClient.auth.signOut();
  localStorage.removeItem(storageKeys.authUser);
  state.currentUser = null;
  communityListings = [];
  communitySubmissions = [];
  elements.loginPassword.value = "";
  showLoginGate(text("loggedOut"));
}

async function getAuthHeaders() {
  if (!authEnabled || !supabaseClient) return {};
  const {
    data: { session }
  } = await supabaseClient.auth.getSession();
  return session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {};
}

async function initializeSupabaseAuth() {
  if (!authEnabled) return;

  if (!supabaseClient) {
    showLoginGate(text("supabaseMissing"));
    return;
  }

  const {
    data: { user },
    error
  } = await supabaseClient.auth.getUser();

  if (user && !error) {
    await applyAuthenticatedUser(user, { persist: false });
    await loadRemoteBookings();
    await loadCommunityListings();
    startBookingRealtime();
    startCommunityListingRealtime();
  } else {
    showLoginGate();
  }

  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if ((event === "SIGNED_IN" || event === "TOKEN_REFRESHED") && session?.user) {
      await applyAuthenticatedUser(session.user, { persist: false });
      await loadRemoteBookings();
      await loadCommunityListings();
      startBookingRealtime();
      startCommunityListingRealtime();
    }
    if (event === "SIGNED_OUT") {
      await stopBookingRealtime();
      await stopCommunityListingRealtime();
      localStorage.removeItem(storageKeys.authUser);
      state.currentUser = null;
      state.bookings = [];
      communityListings = [];
      communitySubmissions = [];
      saveBookings();
      showLoginGate();
    }
  });
}

function loadAppState() {
  try {
    const savedLang = localStorage.getItem(storageKeys.lang);
    const savedRole = localStorage.getItem(storageKeys.role);
    const savedAuthUser = JSON.parse(localStorage.getItem(storageKeys.authUser) || "null");
    const savedProfile = JSON.parse(localStorage.getItem(storageKeys.profile) || "null");
    const savedBookings = JSON.parse(localStorage.getItem(storageKeys.bookings) || "[]");

    if (savedLang === "zh" || savedLang === "ko") state.lang = savedLang;
    if (["seeker", "agent", "admin"].includes(savedRole)) state.role = savedRole;
    if (savedAuthUser?.email) state.currentUser = savedAuthUser;
    if (savedProfile?.seeker && savedProfile?.agent) {
      state.profile = {
        seeker: savedProfile.seeker,
        agent: savedProfile.agent,
        admin: savedProfile.admin || { name: "", contact: "" }
      };
    }
    if (Array.isArray(savedBookings)) state.bookings = savedBookings;
  } catch {
    state.bookings = [];
  }
}

function saveProfileState() {
  localStorage.setItem(storageKeys.role, state.role);
  localStorage.setItem(storageKeys.profile, JSON.stringify(state.profile));
}

function saveBookings() {
  localStorage.setItem(storageKeys.bookings, JSON.stringify(state.bookings));
}

function getBookingUserId(booking = {}) {
  return booking.userId || state.currentUser?.id || "";
}

function bookingFromSupabaseRow(row) {
  return {
    id: row.id,
    userId: row.user_id || "",
    requesterEmail: row.requester_email || "",
    listingId: row.listing_id || "",
    listingTitle: row.listing_title || text("defaultListing"),
    schoolName: row.school_name || "",
    requesterName: row.requester_name || "",
    requesterContact: row.requester_contact || "",
    budget: row.budget || "",
    moveIn: row.move_in || "",
    notes: row.notes || "",
    status: row.status || "pending",
    agentName: row.agent_name || "",
    agentContact: row.agent_contact || "",
    agentNote: row.agent_note || "",
    meetingUrl: row.meeting_url || "",
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || row.created_at || new Date().toISOString()
  };
}

function bookingToSupabaseRow(booking) {
  return {
    id: String(booking.id),
    user_id: getBookingUserId(booking),
    requester_email: booking.requesterEmail || state.currentUser?.email || "",
    listing_id: String(booking.listingId || ""),
    listing_title: booking.listingTitle || text("defaultListing"),
    school_name: booking.schoolName || "",
    requester_name: booking.requesterName || "",
    requester_contact: booking.requesterContact || "",
    budget: booking.budget || "",
    move_in: booking.moveIn || null,
    notes: booking.notes || "",
    status: booking.status || "pending",
    agent_name: booking.agentName || "",
    agent_contact: booking.agentContact || "",
    agent_note: booking.agentNote || "",
    meeting_url: booking.meetingUrl || "",
    created_at: booking.createdAt || new Date().toISOString(),
    updated_at: booking.updatedAt || new Date().toISOString()
  };
}

function bookingPatchToSupabaseRow(patch) {
  const row = {};
  if ("status" in patch) row.status = patch.status;
  if ("agentName" in patch) row.agent_name = patch.agentName;
  if ("agentContact" in patch) row.agent_contact = patch.agentContact;
  if ("agentNote" in patch) row.agent_note = patch.agentNote;
  if ("meetingUrl" in patch) row.meeting_url = patch.meetingUrl;
  row.updated_at = patch.updatedAt || new Date().toISOString();
  return row;
}

function canUseRemoteBookings() {
  return Boolean(authEnabled && supabaseClient && state.currentUser?.id);
}

function getRemoteBookingsUnavailableError() {
  if (!supabaseClient) return new Error(text("supabaseMissing"));
  if (!state.currentUser?.id) return new Error(text("bookingCloudNoSession"));
  return null;
}

function getLocalBookingsToMigrate(remoteIds) {
  if (state.role !== "seeker" || !state.currentUser?.id) return [];
  return state.bookings.filter((booking) => {
    if (!booking?.id || remoteIds.has(booking.id)) return false;
    if (booking.userId && booking.userId !== state.currentUser.id) return false;
    if (booking.requesterEmail && booking.requesterEmail !== state.currentUser.email) return false;
    return Boolean(booking.requesterName && booking.requesterContact && booking.listingId);
  });
}

async function loadRemoteBookings() {
  if (!canUseRemoteBookings()) return;
  const cachedBookings = [...state.bookings];

  const { data, error } = await supabaseClient
    .from(supabaseBookingsTable)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.warn("Failed to load Supabase bookings", error);
    if (elements.bookingResult) {
      elements.bookingResult.textContent = text("bookingCloudLoadFailedDetail", { error: formatCloudError(error) });
    }
    renderBookingDashboard();
    return;
  }

  const remoteBookings = Array.isArray(data) ? data.map(bookingFromSupabaseRow) : [];
  const remoteIds = new Set(remoteBookings.map((booking) => booking.id));
  const localBookingsToMigrate = getLocalBookingsToMigrate(remoteIds);
  const migratedBookings = [];

  for (const localBooking of localBookingsToMigrate) {
    try {
      const migrated = await createRemoteBooking({
        ...localBooking,
        userId: state.currentUser.id,
        requesterEmail: state.currentUser.email
      });
      migratedBookings.push(migrated);
    } catch (migrationError) {
      console.warn("Failed to migrate local booking to Supabase", migrationError);
    }
  }

  state.bookings = [...migratedBookings, ...remoteBookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (state.bookings.length === 0 && cachedBookings.length > 0 && localBookingsToMigrate.length === 0) {
    state.bookings = cachedBookings;
  }
  saveBookings();
  renderBookingDashboard();
}

async function createRemoteBooking(booking) {
  const unavailableError = getRemoteBookingsUnavailableError();
  if (unavailableError) throw unavailableError;

  const { data, error } = await supabaseClient
    .from(supabaseBookingsTable)
    .insert(bookingToSupabaseRow(booking))
    .select("*")
    .single();

  if (error) throw error;
  return data ? bookingFromSupabaseRow(data) : booking;
}

async function updateRemoteBooking(bookingId, patch) {
  if (!canUseRemoteBookings()) return null;

  const { data, error } = await supabaseClient
    .from(supabaseBookingsTable)
    .update(bookingPatchToSupabaseRow(patch))
    .eq("id", bookingId)
    .select("*")
    .single();

  if (error) throw error;
  return data ? bookingFromSupabaseRow(data) : null;
}

function startBookingRealtime() {
  if (!canUseRemoteBookings() || !supabaseClient.channel || bookingRealtimeChannel) return;
  bookingRealtimeChannel = supabaseClient
    .channel("hanstay-bookings")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: supabaseBookingsTable },
      () => loadRemoteBookings()
    )
    .subscribe();
}

async function stopBookingRealtime() {
  if (!bookingRealtimeChannel || !supabaseClient) return;
  await supabaseClient.removeChannel(bookingRealtimeChannel);
  bookingRealtimeChannel = null;
}

function safeCommunityImageUrl(url) {
  const fallback = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80";
  if (!url) return fallback;
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : fallback;
  } catch {
    return fallback;
  }
}

function normalizeCommunityNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.round(number) : fallback;
}

function getCommunityStatusLabel(status) {
  if (status === "approved") return text("communityStatusApproved");
  if (status === "rejected") return text("communityStatusRejected");
  return text("communityStatusPending");
}

function communityListingFromRow(row) {
  const school = row.school || "SKKU";
  const title = row.title || text("defaultListing");
  const schoolName = row.school_name || text("schools")[school] || school;
  const station = row.station || row.address || schoolName;
  return {
    id: `community-${row.id}`,
    communityId: row.id,
    title: escapeHtml(title),
    school,
    schoolName: escapeHtml(schoolName),
    room: row.room_type || "one-room",
    rent: normalizeCommunityNumber(row.rent),
    deposit: normalizeCommunityNumber(row.deposit),
    management: normalizeCommunityNumber(row.management),
    distance: normalizeCommunityNumber(row.distance, 15),
    station: escapeHtml(station),
    naverQuery: `${schoolName} ${station} ${row.room_type || ""} 월세`,
    coords: schoolAreaCoords[school] || schoolAreaCoords.SKKU,
    availableDays: 14,
    verified: true,
    chinese: true,
    image: safeCommunityImageUrl(row.image_url),
    tags: [text("communitySourceTag"), text("communityApprovedTag")],
    risks: [],
    map: { x: 54, y: 50 },
    scores: { light: 70, transport: 76, quiet: 68 },
    description: escapeHtml(row.description || ""),
    ko: {
      title: escapeHtml(title),
      schoolName: escapeHtml(schoolName),
      station: escapeHtml(station),
      tags: [text("communitySourceTag"), text("communityApprovedTag")],
      risks: [],
      description: escapeHtml(row.description || "")
    }
  };
}

function rebuildCommunityListings() {
  communityListings = communitySubmissions.filter((row) => row.status === "approved").map(communityListingFromRow);
}

function communityListingToSupabaseRow(formData) {
  const school = formData.school || "SKKU";
  return {
    submitter_id: state.currentUser.id,
    submitter_email: state.currentUser.email,
    title: formData.title.trim(),
    school,
    school_name: text("schools")[school] || school,
    room_type: formData.roomType || "one-room",
    rent: normalizeCommunityNumber(formData.rent),
    deposit: normalizeCommunityNumber(formData.deposit),
    management: normalizeCommunityNumber(formData.management),
    distance: normalizeCommunityNumber(formData.distance, 15),
    station: formData.station.trim(),
    address: formData.address.trim(),
    image_url: formData.imageUrl.trim(),
    contact: formData.contact.trim(),
    description: formData.description.trim(),
    status: "pending",
    updated_at: new Date().toISOString()
  };
}

async function loadCommunityListings() {
  if (!supabaseClient || !state.currentUser?.id) return;

  const { data, error } = await supabaseClient
    .from(supabaseCommunityListingsTable)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.warn("Failed to load community listings", error);
    if (elements.listingSubmitStatus) {
      elements.listingSubmitStatus.textContent = text("communityLoadFailed", { error: formatCloudError(error) });
    }
    return;
  }

  communitySubmissions = Array.isArray(data) ? data : [];
  rebuildCommunityListings();
  renderBookingOptions();
  renderListings();
  renderCommunityAdmin();
}

async function createCommunityListing(formData) {
  const unavailableError = getRemoteBookingsUnavailableError();
  if (unavailableError) throw unavailableError;

  const { data, error } = await supabaseClient
    .from(supabaseCommunityListingsTable)
    .insert(communityListingToSupabaseRow(formData))
    .select("*")
    .single();

  if (error) throw error;
  return data;
}

async function updateCommunityListingStatus(listingId, status) {
  if (state.role !== "admin") throw new Error(text("communityReviewFailed", { error: "admin only" }));
  const { data, error } = await supabaseClient
    .from(supabaseCommunityListingsTable)
    .update({
      status,
      reviewed_by: state.currentUser.id,
      reviewed_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq("id", listingId)
    .select("*")
    .single();

  if (error) throw error;
  return data;
}

function startCommunityListingRealtime() {
  if (!canUseRemoteBookings() || !supabaseClient.channel || communityListingRealtimeChannel) return;
  communityListingRealtimeChannel = supabaseClient
    .channel("hanstay-community-listings")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: supabaseCommunityListingsTable },
      () => loadCommunityListings()
    )
    .subscribe();
}

async function stopCommunityListingRealtime() {
  if (!communityListingRealtimeChannel || !supabaseClient) return;
  await supabaseClient.removeChannel(communityListingRealtimeChannel);
  communityListingRealtimeChannel = null;
}

function renderCommunityAdmin() {
  if (!elements.adminListingQueue) return;
  if (state.role !== "admin") {
    elements.adminListingQueue.innerHTML = "";
    if (elements.adminListingCount) elements.adminListingCount.textContent = "0";
    return;
  }

  const rows = [...communitySubmissions].sort((a, b) => {
    const statusScore = { pending: 0, approved: 1, rejected: 2 };
    return (statusScore[a.status] ?? 3) - (statusScore[b.status] ?? 3) || new Date(b.created_at) - new Date(a.created_at);
  });

  if (elements.adminListingCount) {
    elements.adminListingCount.textContent = String(rows.filter((row) => row.status === "pending").length);
  }

  if (rows.length === 0) {
    elements.adminListingQueue.innerHTML = `<div class="empty-state">${text("communityEmptyAdmin")}</div>`;
    return;
  }

  elements.adminListingQueue.innerHTML = rows
    .map((row) => {
      const status = row.status || "pending";
      return `
        <article class="submission-card">
          <div class="submission-card-head">
            <div>
              <h4>${escapeHtml(row.title)}</h4>
              <p>${escapeHtml(row.description || "")}</p>
            </div>
            <span class="status-pill ${status}">${getCommunityStatusLabel(status)}</span>
          </div>
          <div class="submission-meta">
            <span>${escapeHtml(row.school_name || row.school || "")}</span>
            <span>${escapeHtml(row.room_type || "")}</span>
            <span>${text("rentMonthly", { rent: row.rent || 0 })}</span>
            <span>${text("deposit", { deposit: row.deposit || 0 })}</span>
            <span>${escapeHtml(row.station || row.address || "")}</span>
            <span>${text("communitySubmitter")}: ${escapeHtml(row.submitter_email || "")}</span>
            <span>${text("communityContact")}: ${escapeHtml(row.contact || "")}</span>
          </div>
          ${
            status === "pending"
              ? `<div class="submission-actions">
                  <button class="primary-button" data-approve-listing="${row.id}"><i data-lucide="check"></i>${text("approveListing")}</button>
                  <button class="secondary-button" data-reject-listing="${row.id}"><i data-lucide="x"></i>${text("rejectListing")}</button>
                </div>`
              : ""
          }
        </article>
      `;
    })
    .join("");
  refreshIcons();
}

function getRoleText(role = state.role) {
  if (role === "admin") return text("roleAdmin");
  return role === "agent" ? text("roleAgent") : text("roleSeeker");
}

function getCurrentProfile() {
  return state.profile[state.role] || state.profile.seeker;
}

function getStatusMeta(status) {
  const meta = {
    pending: { label: text("statusPending"), icon: "clock-3" },
    accepted: { label: text("statusAccepted"), icon: "handshake" },
    scheduled: { label: text("statusScheduled"), icon: "video" },
    completed: { label: text("statusCompleted"), icon: "badge-check" },
    cancelled: { label: text("statusCancelled"), icon: "circle-x" }
  };
  return meta[status] || meta.pending;
}

function formatDateTime(value) {
  if (!value) return state.lang === "ko" ? "미입력" : "未填写";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(state.lang === "ko" ? "ko-KR" : "zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getAllListings() {
  return [...communityListings, ...listings];
}

function findListingById(listingId) {
  return getAllListings().find((item) => String(item.id) === String(listingId));
}

function renderBookingOptions() {
  elements.bookingListing.innerHTML = getAllListings()
    .map((listing) => `<option value="${listing.id}">${localizedListing(listing, "title")} · ${localizedListing(listing, "schoolName")}</option>`)
    .join("");
}

function updateSummaryCounts() {
  elements.pendingCount.textContent = state.bookings.filter((booking) => booking.status === "pending").length;
  elements.confirmedCount.textContent = state.bookings.filter((booking) => booking.status === "scheduled").length;
  elements.completedCount.textContent = state.bookings.filter((booking) => booking.status === "completed").length;
}

function renderRoleUI() {
  const profile = getCurrentProfile();
  elements.roleBadge.textContent = getRoleText();
  elements.profileName.value = profile.name;
  elements.profileContact.value = profile.contact;
  elements.profileNameLabel.textContent = state.role === "admin" ? text("adminName") : state.role === "agent" ? text("agentName") : text("name");
  elements.profileContactLabel.textContent = state.role === "admin" ? text("adminContact") : state.role === "agent" ? text("agentContact") : text("contact");
  elements.profileName.placeholder = state.role === "agent" ? text("agentNamePlaceholder") : text("namePlaceholder");
  elements.profileContact.placeholder = state.role === "agent" ? text("agentContactPlaceholder") : text("contactPlaceholder");
  elements.saveProfile.innerHTML = `<i data-lucide="save"></i>${state.role === "admin" ? text("saveProfileAdmin") : state.role === "agent" ? text("saveProfileAgent") : text("saveProfileSeeker")}`;
  elements.switchRole.hidden = state.role === "admin";
  elements.profileStatus.textContent = `${text("currentRole")}：${getRoleText()}${profile.name ? ` · ${profile.name}` : ""}`;
  renderAuthUser();

  if (state.role === "seeker") {
    elements.bookingName.value = profile.name || elements.bookingName.value;
    elements.bookingContact.value = profile.contact || elements.bookingContact.value;
  }

  renderBookingDashboard();
  renderCommunityAdmin();
  setActiveView(state.activeView);
  refreshIcons();
}

function getVisibleBookingsForRole() {
  if (state.role === "agent") return [...state.bookings];

  const contact = state.profile.seeker.contact.trim();
  const userId = state.currentUser?.id || "";
  const email = state.currentUser?.email || "";
  return state.bookings.filter((booking) => {
    if (userId && booking.userId === userId) return true;
    if (email && booking.requesterEmail === email) return true;
    if (contact && booking.requesterContact === contact) return true;
    return !booking.userId && !booking.requesterEmail && !contact;
  });
}

function renderBookingDashboard() {
  updateSummaryCounts();
  const roleBookings = getVisibleBookingsForRole().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const isAgent = state.role === "agent";
  const title = isAgent ? text("agentTasks") : text("bookingCenter");
  const subtitle = isAgent ? text("bookingSubtitleAgent") : text("bookingSubtitleSeeker");

  if (roleBookings.length === 0) {
    elements.bookingDashboard.innerHTML = `
      <div class="section-head tight">
        <div>
          <p class="eyebrow">${isAgent ? "Agent Console" : "Booking Center"}</p>
          <h3>${title}</h3>
        </div>
        <span class="status-pill">${getRoleText()}</span>
      </div>
      <div class="empty-state">${isAgent ? text("emptyBookingsAgent") : text("emptyBookingsSeeker")}</div>
    `;
    refreshIcons();
    return;
  }

  elements.bookingDashboard.innerHTML = `
    <div class="section-head tight">
      <div>
        <p class="eyebrow">${isAgent ? "Agent Console" : "Booking Center"}</p>
        <h3>${title}</h3>
        <p class="dashboard-subtitle">${subtitle}</p>
      </div>
      <span class="status-pill">${getRoleText()} · ${roleBookings.length}</span>
    </div>
    <div class="booking-list">
      ${roleBookings.map((booking) => renderBookingCard(booking, isAgent)).join("")}
    </div>
  `;
  refreshIcons();
}

function renderBookingCard(booking, isAgent) {
  const status = getStatusMeta(booking.status);
  const listing = findListingById(booking.listingId);
  const listingTitle = listing ? localizedListing(listing, "title") : booking.listingTitle;
  const mapUrl = getNaverMapUrl(listing?.naverQuery || listingTitle);

  return `
    <article class="booking-card" data-booking-card="${booking.id}">
      <div class="booking-card-head">
        <div>
          <strong>${listingTitle}</strong>
          <span>${booking.requesterName} · ${booking.budget} · ${booking.moveIn || text("moveInTbd")}</span>
        </div>
        <span class="status-pill ${booking.status}">
          <i data-lucide="${status.icon}"></i>
          ${status.label}
        </span>
      </div>
      <div class="booking-meta">
        <span><i data-lucide="message-circle"></i>${booking.requesterContact}</span>
        <span><i data-lucide="calendar-days"></i>${formatDateTime(booking.createdAt)}</span>
        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="navigation"></i>${text("mapNaver")}</a>
      </div>
      <p class="booking-notes">${booking.notes || text("noNotes")}</p>
      ${renderBookingProgress(booking)}
      ${renderBookingActions(booking, isAgent)}
    </article>
  `;
}

function renderBookingProgress(booking) {
  const meeting = booking.meetingUrl
    ? `<a href="${booking.meetingUrl}" target="_blank" rel="noopener noreferrer">${booking.meetingUrl}</a>`
    : text("waitingMeeting");
  const agent = booking.agentName ? `${booking.agentName}${booking.agentContact ? ` · ${booking.agentContact}` : ""}` : text("waitingAgent");
  const note = booking.agentNote || text("noAgentNote");

  return `
    <div class="booking-progress">
      <div><span>${text("viewer")}</span><strong>${agent}</strong></div>
      <div><span>${text("meetingUrl")}</span><strong>${meeting}</strong></div>
      <div><span>${text("agentNote")}</span><strong>${note}</strong></div>
    </div>
  `;
}

function renderBookingActions(booking, isAgent) {
  if (!isAgent) {
    return `
      <div class="booking-actions">
        ${booking.status === "pending" ? `<button class="secondary-button" data-cancel-booking="${booking.id}">${text("cancelBooking")}</button>` : ""}
        <button class="secondary-button" data-book="${booking.listingId}">${text("bookAgain")}</button>
      </div>
    `;
  }

  if (booking.status === "pending") {
    return `
      <div class="booking-actions">
        <button class="primary-button" data-accept-booking="${booking.id}">
          <i data-lucide="handshake"></i>
          ${text("acceptTask")}
        </button>
      </div>
    `;
  }

  if (booking.status === "accepted") {
    return `
      <div class="agent-schedule">
        <label class="field">
          <span>${text("meetingInput")}</span>
          <input data-meeting-input="${booking.id}" placeholder="${text("meetingPlaceholder")}" value="${booking.meetingUrl || ""}" />
        </label>
        <label class="field">
          <span>${text("noteToSeeker")}</span>
          <textarea data-note-input="${booking.id}" placeholder="${text("notePlaceholder")}">${booking.agentNote || ""}</textarea>
        </label>
        <button class="primary-button" data-schedule-booking="${booking.id}">
          <i data-lucide="calendar-check"></i>
          ${text("scheduleVideo")}
        </button>
      </div>
    `;
  }

  if (booking.status === "scheduled") {
    return `
      <div class="booking-actions">
        <button class="primary-button" data-complete-booking="${booking.id}">
          <i data-lucide="badge-check"></i>
          ${text("completeTask")}
        </button>
      </div>
    `;
  }

  return "";
}

async function updateBooking(bookingId, patch) {
  const previousBookings = [...state.bookings];
  const nextPatch = { ...patch, updatedAt: new Date().toISOString() };
  state.bookings = state.bookings.map((booking) => (booking.id === bookingId ? { ...booking, ...nextPatch } : booking));
  saveBookings();
  renderBookingDashboard();

  try {
    const savedBooking = await updateRemoteBooking(bookingId, nextPatch);
    if (savedBooking) {
      state.bookings = state.bookings.map((booking) => (booking.id === bookingId ? savedBooking : booking));
      saveBookings();
      renderBookingDashboard();
    }
  } catch (error) {
    console.warn("Failed to update Supabase booking", error);
    state.bookings = previousBookings;
    saveBookings();
    renderBookingDashboard();
    if (elements.bookingResult) elements.bookingResult.textContent = text("bookingCloudUpdateFailed");
  }
}

function getFilteredListings() {
  const filtered = getAllListings().filter((listing) => {
    const schoolMatch = state.school === "all" || listing.school === state.school;
    const rentMatch = listing.rent <= state.rent;
    const roomMatch = state.room === "all" || listing.room === state.room;
    const verifiedMatch = !state.verifiedOnly || listing.verified;
    const chineseMatch = !state.chineseOnly || listing.chinese;
    return schoolMatch && rentMatch && roomMatch && verifiedMatch && chineseMatch;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "rent") return a.rent - b.rent;
    if (state.sort === "distance") return a.distance - b.distance;
    if (state.sort === "available") return a.availableDays - b.availableDays;
    return Number(b.verified) - Number(a.verified) || a.distance - b.distance;
  });
}

function renderListings() {
  const filtered = getFilteredListings();
  elements.visibleCount.textContent = filtered.length;

  if (filtered.length === 0) {
    elements.listingList.innerHTML = `<div class="empty-state">${text("emptyListings")}</div>`;
    renderMap(filtered);
    return;
  }

  elements.listingList.innerHTML = filtered
    .map((listing) => {
      const visibleTags = localizedListingList(listing, "tags");
      const visibleRisks = localizedListingList(listing, "risks");
      const tags = [...visibleTags, ...visibleRisks].map((tag) => {
        const className = visibleRisks.includes(tag) ? "tag warn" : listing.verified && tag === visibleTags[0] ? "tag good" : "tag";
        return `<span class="${className}">${tag}</span>`;
      });

      return `
        <article class="listing-card">
          <div class="listing-photo" style="background-image: url('${listing.image}')">
            <span class="photo-badge">${localizedListing(listing, "schoolName")}</span>
          </div>
          <div class="listing-body">
            <div class="listing-title-row">
              <h4>${localizedListing(listing, "title")}</h4>
              <div class="price">${text("rentMonthly", { rent: listing.rent })}</div>
            </div>
            <div class="meta-row">
              <span><i data-lucide="wallet"></i>${text("deposit", { deposit: listing.deposit })}</span>
              <span><i data-lucide="building-2"></i>${text("management", { management: listing.management })}</span>
              <span><i data-lucide="train-front"></i>${localizedListing(listing, "station")}</span>
              <span><i data-lucide="footprints"></i>${text("distance", { distance: listing.distance })}</span>
            </div>
            <div class="source-row">
              <span><i data-lucide="database-zap"></i>${listing.communityId ? text("communitySourceTag") : text("liveSource")}</span>
              <span>${text("sourceKeyword", { query: listing.naverQuery })}</span>
            </div>
            <div class="tag-row">${tags.join("")}</div>
            <div class="listing-actions">
              <button class="secondary-button" data-detail="${listing.id}">${text("detail")}</button>
              <button class="secondary-button" data-book="${listing.id}">${text("bookThis")}</button>
              <a class="secondary-button link-button real-source naver-land" href="${getNaverLandUrl(listing)}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="building-2"></i>
                ${text("naverLand")}
              </a>
              <a class="secondary-button link-button real-source zigbang" href="${getZigbangUrl(listing)}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="home"></i>
                ${text("zigbang")}
              </a>
              <a class="secondary-button link-button" href="${getNaverMapUrl(listing.naverQuery)}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="map"></i>
                ${text("naverMap")}
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  renderMap(filtered);
  refreshIcons();
}

function renderMap(filtered) {
  const schoolLabel = state.school === "all" ? text("allArea") : text("schools")[state.school];
  const areaQuery = schoolMapQueries[state.school];
  const areaTarget = {
    coords: schoolAreaCoords[state.school] || schoolAreaCoords.all,
    naverQuery: areaQuery
  };
  elements.mapSchool.textContent = schoolLabel;
  elements.mapProviderLinks.innerHTML = [
    ...realEstateProviders.map(
      (provider) => `
        <a class="map-link ${provider.id}" href="${provider.url(areaTarget)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="${provider.icon}"></i>
          ${text("openAreaInMap", { provider: text("providers")[provider.id], area: schoolLabel })}
        </a>
      `
    ),
    ...mapProviders.map(
      (provider) => `
        <a class="map-link ${provider.id}" href="${getMapUrl(provider.id, areaQuery)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="${provider.icon}"></i>
          ${text("openAreaInMap", { provider: text("providers")[provider.id], area: schoolLabel })}
        </a>
      `
    )
  ].join("");

  if (filtered.length === 0) {
    elements.miniMap.innerHTML = `<div class="empty-map">${text("noMapResults")}</div>`;
    return;
  }

  elements.miniMap.innerHTML = filtered
    .map(
      (listing) => `
        <article class="map-result">
          <div class="map-result-pin">${state.lang === "ko" ? "방" : "房"}</div>
          <div class="map-result-main">
            <strong>${localizedListing(listing, "title")}</strong>
            <span>${text("mapResultMeta", {
              school: localizedListing(listing, "schoolName"),
              station: localizedListing(listing, "station"),
              distance: listing.distance
            })}</span>
          </div>
          <div class="map-result-actions">
            <a href="${getNaverLandUrl(listing)}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="building-2"></i>
              ${text("naverLand")}
            </a>
            <a href="${getZigbangUrl(listing)}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="home"></i>
              ${text("zigbang")}
            </a>
            <a href="${getNaverMapUrl(listing.naverQuery)}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="navigation"></i>
              Naver
            </a>
            <a href="${getMapUrl("kakao", listing.naverQuery)}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="map-pinned"></i>
              Kakao
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGuides() {
  elements.guideList.innerHTML = guides[state.lang][state.activeGuide]
    .map(
      (guide) => `
        <article class="guide-item">
          <h4>${guide.title}</h4>
          <p>${guide.body}</p>
        </article>
      `
    )
    .join("");
}

function openDrawer(listingId) {
  const listing = findListingById(listingId);
  if (!listing) return;

  elements.drawerContent.innerHTML = `
    <div class="drawer-hero" style="background-image: url('${listing.image}')"></div>
    <p class="eyebrow">${localizedListing(listing, "schoolName")} · ${localizedListing(listing, "station")}</p>
    <h3>${localizedListing(listing, "title")}</h3>
    <div class="drawer-meta">
      <span><i data-lucide="wallet"></i>${text("rentMonthly", { rent: listing.rent })}</span>
      <span><i data-lucide="key-round"></i>${text("deposit", { deposit: listing.deposit })}</span>
      <span><i data-lucide="calendar-days"></i>${text("availableIn", { days: listing.availableDays })}</span>
    </div>
    <p>${localizedListing(listing, "description")}</p>
    <div class="source-note">
      <strong>${text("realListingNoticeTitle")}</strong>
      <p>${text("realListingNoticeBody")}</p>
    </div>
    <div class="tag-row">${localizedListingList(listing, "tags").map((tag) => `<span class="tag good">${tag}</span>`).join("")}</div>
    ${
      localizedListingList(listing, "risks").length
        ? `<div class="tag-row">${localizedListingList(listing, "risks").map((tag) => `<span class="tag warn">${tag}</span>`).join("")}</div>`
        : ""
    }
    <div class="score-grid">
      ${renderScore(text("scoreLight"), listing.scores.light)}
      ${renderScore(text("scoreTransport"), listing.scores.transport)}
      ${renderScore(text("scoreQuiet"), listing.scores.quiet)}
    </div>
    <a class="secondary-button link-button full real-source naver-land" href="${getNaverLandUrl(listing)}" target="_blank" rel="noopener noreferrer">
      <i data-lucide="building-2"></i>
      ${text("openLiveSource")} · ${text("naverLand")}
    </a>
    <a class="secondary-button link-button full real-source zigbang" href="${getZigbangUrl(listing)}" target="_blank" rel="noopener noreferrer">
      <i data-lucide="home"></i>
      ${text("openLiveSource")} · ${text("zigbang")}
    </a>
    <a class="secondary-button link-button full" href="${getNaverMapUrl(listing.naverQuery)}" target="_blank" rel="noopener noreferrer">
      <i data-lucide="map"></i>
      ${text("drawerMap")}
    </a>
    <button class="primary-button full" data-book="${listing.id}">
      <i data-lucide="video"></i>
      ${text("drawerBook")}
    </button>
  `;

  elements.drawerBackdrop.hidden = false;
  elements.detailDrawer.classList.add("open");
  elements.detailDrawer.setAttribute("aria-hidden", "false");
  refreshIcons();
}

function closeDrawer() {
  elements.drawerBackdrop.hidden = true;
  elements.detailDrawer.classList.remove("open");
  elements.detailDrawer.setAttribute("aria-hidden", "true");
}

function blocksIframe(url) {
  try {
    const host = new URL(url).hostname;
    return ["new.land.naver.com", "land.naver.com", "map.naver.com", "m.zigbang.com", "www.zigbang.com", "map.kakao.com", "www.google.com", "seoul.craigslist.org", "craigslist.org"].some(
      (domain) => host === domain || host.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

function getBlockedSourceName(url) {
  try {
    const host = new URL(url).hostname;
    if (host.includes("naver")) return "Naver";
    if (host.includes("zigbang")) return "직방";
    if (host.includes("kakao")) return "Kakao";
    if (host.includes("google")) return "Google";
    if (host.includes("craigslist")) return "Craigslist";
  } catch {
    return "对方网站";
  }
  return "对方网站";
}

function renderBlockedViewer(url, title) {
  const source = getBlockedSourceName(url);
  elements.siteViewerFrame.hidden = true;
  elements.siteViewerFrame.src = "about:blank";
  elements.siteViewerFallback.hidden = false;
  elements.siteViewerFallback.innerHTML = `
    <div class="blocked-source-panel">
      <i data-lucide="shield-alert"></i>
      <h4>${text("iframeBlockedTitle", { source })}</h4>
      <p>${text("iframeBlockedBody")}</p>
      <div class="blocked-source-url">${escapeHtml(url)}</div>
      <div class="blocked-source-actions">
        <button class="secondary-button" type="button" data-copy-source-url="${escapeHtml(url)}">
          <i data-lucide="copy"></i>
          ${text("copyOriginalLink")}
        </button>
        <button class="primary-button" type="button" data-close-source-viewer>
          <i data-lucide="panel-bottom-close"></i>
          ${text("backToSiteResults")}
        </button>
      </div>
      <p class="blocked-source-hint">${text("localApiHint")}</p>
    </div>
  `;
}

function openSiteViewer(url, title = text("siteViewerTitle")) {
  if (!url || !elements.siteViewerFrame) return;
  elements.siteViewerTitle.textContent = title.trim() || text("siteViewerTitle");
  elements.siteViewerUrl.textContent = url;
  if (blocksIframe(url)) {
    renderBlockedViewer(url, title);
  } else {
    elements.siteViewerFallback.hidden = true;
    elements.siteViewerFallback.innerHTML = "";
    elements.siteViewerFrame.hidden = false;
    elements.siteViewerFrame.src = url;
  }
  elements.siteViewerBackdrop.hidden = false;
  elements.siteViewer.hidden = false;
  elements.siteViewer.classList.add("open");
  elements.siteViewer.setAttribute("aria-hidden", "false");
  refreshIcons();
}

function closeSiteViewer() {
  elements.siteViewerBackdrop.hidden = true;
  elements.siteViewer.classList.remove("open");
  elements.siteViewer.setAttribute("aria-hidden", "true");
  elements.siteViewer.hidden = true;
  elements.siteViewerFallback.hidden = true;
  elements.siteViewerFallback.innerHTML = "";
  elements.siteViewerFrame.hidden = false;
  elements.siteViewerFrame.src = "about:blank";
}

function reloadSiteViewer() {
  const url = elements.siteViewerFrame.src;
  if (!url || url === "about:blank") return;
  elements.siteViewerFrame.src = url;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[char];
  });
}

function getRealSearchParams() {
  const selectedArea = elements.realAreaSelect.value.trim();
  const typedArea = elements.realAreaInput.value.trim();
  const area = [selectedArea, typedArea].filter(Boolean).join(" ");
  const place = elements.realPlaceInput.value.trim();
  const maxRent = Number(elements.realRentInput.value || state.rent || 85);
  const room = elements.realRoomInput.value || "all";
  const fallbackQuery = schoolMapQueries[state.school] || schoolMapQueries.all;
  const query = [area, place, room !== "all" ? realRoomLabels[room] : "", "월세"].filter(Boolean).join(" ") || fallbackQuery;

  return { area, selectedArea, typedArea, place, maxRent, room, query };
}

function buildRealSearchUrl(params) {
  const searchParams = new URLSearchParams({
    area: params.area,
    areaSelect: params.selectedArea,
    areaInput: params.typedArea,
    place: params.place,
    maxRent: String(params.maxRent),
    room: params.room
  });
  return `${realListingsEndpoint}?${searchParams.toString()}`;
}

function normalizeRealListings(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.listings)) return payload.listings;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
}

async function fetchJson(path) {
  const headers = { Accept: "application/json" };
  if (String(path).startsWith("/api/")) {
    Object.assign(headers, await getAuthHeaders());
  }
  const response = await fetch(path, { headers });
  if (!response.ok) throw new Error(`${path} returned ${response.status}`);
  return response.json();
}

function normalizedSearchText(value) {
  const aliases = [
    ["延世", " yonsei "],
    ["新村", " sinchon "],
    ["梨大", " ewha "],
    ["高丽", " korea university "],
    ["安岩", " anam "],
    ["首尔大", " snu "],
    ["首尔", " seoul "],
    ["汉阳", " hanyang "],
    ["往十里", " wangsimni "],
    ["弘益", " hongik "],
    ["弘大", " hongdae "],
    ["成均馆", " sungkyunkwan "],
    ["水原", " suwon "],
    ["栗田", " yuljeon "],
    ["惠化", " hyehwa "],
    ["庆熙", " kyung hee "],
    ["回基", " hoegi "],
    ["中央", " chungang "],
    ["黑石", " heukseok "],
    ["建国", " konkuk "],
    ["建大", " konkuk "],
    ["韩国外国语", " hufs "],
    ["外大", " hufs "],
    ["东国", " dongguk "],
    ["国民", " kookmin "],
    ["崇实", " soongsil "],
    ["釜山", " busan "],
    ["大学", " university "],
    ["附近", " nearby "],
    ["入口", " entrance "],
    ["站", " station "]
  ];
  const textValue = String(value || "").trim().toLowerCase();
  return aliases.reduce((result, [needle, replacement]) => result.replaceAll(needle, replacement), textValue);
}

function searchTextIncludes(source, target) {
  const sourceText = normalizedSearchText(source);
  const targetText = normalizedSearchText(target);
  const ignoredTokens = new Set(["university", "station", "near", "nearby", "entrance"]);
  const targetTokens = targetText.split(/\s+/).filter((token) => token && !ignoredTokens.has(token));
  return targetTokens.length === 0 || targetTokens.every((token) => sourceText.includes(token));
}

function matchesStaticArea(listing, params) {
  const haystack = [listing.area, listing.school, listing.station, listing.address, listing.title, ...(listing.keywords || [])].join(" ");
  return [params.selectedArea, params.typedArea, params.area, params.place].every((part) => searchTextIncludes(haystack, part));
}

function compareStaticRent(listing, benchmark) {
  if (!benchmark?.medianMonthlyRent || !listing.monthlyRent) return null;
  const diff = Number(listing.monthlyRent) - Number(benchmark.medianMonthlyRent);
  const pct = Math.round((diff / Number(benchmark.medianMonthlyRent)) * 100);
  return {
    diff,
    pct,
    label: diff <= -5 ? "below" : diff >= 5 ? "above" : "near"
  };
}

function enrichStaticListing(listing, datasets) {
  const safety = listing.districtKey ? datasets.crimeRisk[listing.districtKey] || null : null;
  const rentMarket = listing.marketRentKey ? datasets.marketRent[listing.marketRentKey] || null : null;
  const saleMarket = listing.marketSaleKey ? datasets.marketSale[listing.marketSaleKey] || null : null;
  return {
    ...listing,
    safety,
    rentMarket,
    saleMarket,
    rentComparison: compareStaticRent(listing, rentMarket)
  };
}

async function searchStaticListings(params) {
  const [listingsData, crimeRisk, marketRent, marketSale] = await Promise.all([
    fetchJson("data/listings.json"),
    fetchJson("data/crime_risk.json"),
    fetchJson("data/market_rent.json"),
    fetchJson("data/market_sale.json")
  ]);
  const datasets = { crimeRisk, marketRent, marketSale };
  return listingsData
    .filter((listing) => matchesStaticArea(listing, params))
    .filter((listing) => !params.room || params.room === "all" || listing.room === params.room)
    .filter((listing) => !params.maxRent || Number(listing.monthlyRent || 0) <= Number(params.maxRent))
    .map((listing) => enrichStaticListing(listing, datasets))
    .sort((a, b) => Number(b.verified) - Number(a.verified) || Number(a.monthlyRent) - Number(b.monthlyRent));
}

function formatWan(value) {
  if (value === null || value === undefined || value === "") return "";
  return `${Number(value).toLocaleString("ko-KR")}${text("wanUnit")}`;
}

function renderListingInsights(item) {
  const cards = [];

  if (item.safety) {
    const riskLabel =
      { low: text("riskLow"), medium: text("riskMedium"), high: text("riskHigh") }[item.safety.riskLevel] ||
      text("riskReference");
    cards.push(`
      <div class="insight-card ${escapeHtml(item.safety.riskLevel)}">
        <span>${text("safetyReferenceTitle")}</span>
        <strong>${riskLabel} · ${escapeHtml(item.safety.safetyScore)}/100</strong>
        <small>${text("safetyCases", {
          total: Number(item.safety.totalCases).toLocaleString("ko-KR"),
          violent: Number(item.safety.violentCases).toLocaleString("ko-KR")
        })}</small>
      </div>
    `);
  }

  if (item.rentMarket) {
    const comparison = item.rentComparison
      ? { below: text("belowMarket"), near: text("nearMarket"), above: text("aboveMarket") }[item.rentComparison.label]
      : text("marketReference");
    const diffText = item.rentComparison
      ? ` · ${item.rentComparison.diff > 0 ? "+" : ""}${item.rentComparison.diff}${text("wanUnit")} (${item.rentComparison.pct > 0 ? "+" : ""}${item.rentComparison.pct}%)`
      : "";
    cards.push(`
      <div class="insight-card market">
        <span>${text("rentMarketTitle")}</span>
        <strong>${text("medianMonthlyRentValue", { rent: formatWan(item.rentMarket.medianMonthlyRent) })}</strong>
        <small>${comparison}${diffText} · ${text("medianDepositValue", { deposit: formatWan(item.rentMarket.medianMonthlyDeposit) })}</small>
      </div>
    `);
  }

  if (item.saleMarket) {
    cards.push(`
      <div class="insight-card sale">
        <span>${text("saleMarketTitle")}</span>
        <strong>${text("medianSaleValue", { price: formatWan(item.saleMarket.medianSalePrice) })}</strong>
        <small>${text("saleTransactionMeta", {
          count: Number(item.saleMarket.transactionCount).toLocaleString("ko-KR"),
          period: escapeHtml(item.saleMarket.sourcePeriod)
        })}</small>
      </div>
    `);
  }

  if (cards.length === 0) return "";
  return `<div class="listing-insights">${cards.join("")}</div>`;
}

function renderRealListingCard(item) {
  const title = escapeHtml(item.title || item.name || text("unnamedRealListing"));
  const source = escapeHtml(item.sourceName || item.source || text("realSource"));
  const address = escapeHtml(item.address || item.location || item.area || "");
  const roomType = escapeHtml(item.roomType || item.room || "");
  const rent = item.monthlyRent ?? item.rent ?? item.price ?? "";
  const deposit = item.deposit ?? "";
  const updatedAt = escapeHtml(item.updatedAt || item.updated || "");
  const url = escapeHtml(item.url || item.link || "");
  const image = escapeHtml(item.image || item.thumbnail || "");
  const tags = Array.isArray(item.tags) ? item.tags.slice(0, 4) : [];

  return `
    <article class="real-listing-card">
      ${image ? `<div class="real-listing-photo" style="background-image:url('${image}')"></div>` : `<div class="real-listing-photo empty"><i data-lucide="home"></i></div>`}
      <div class="real-listing-body">
        <div class="listing-title-row">
          <h4>${title}</h4>
          <div class="price">${rent ? text("realMonthlyRent", { rent: escapeHtml(rent) }) : text("priceCheckNeeded")}</div>
        </div>
        <div class="meta-row">
          ${deposit ? `<span><i data-lucide="key-round"></i>${text("realDeposit", { deposit: escapeHtml(deposit) })}</span>` : ""}
          ${roomType ? `<span><i data-lucide="building-2"></i>${roomType}</span>` : ""}
          ${address ? `<span><i data-lucide="map-pin"></i>${address}</span>` : ""}
          ${updatedAt ? `<span><i data-lucide="clock"></i>${updatedAt}</span>` : ""}
        </div>
        <div class="tag-row">
          <span class="tag good">${source}</span>
          ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        ${renderListingInsights(item)}
        ${url ? `<button class="secondary-button" type="button" data-open-real-url="${url}"><i data-lucide="panel-top-open"></i>${text("viewSourceConditions")}</button>` : ""}
      </div>
    </article>
  `;
}

function renderRealSearchFallback(params, reason = "") {
  const query = params.query;
  elements.realSearchStatus.textContent = text("needApiStatus");
  elements.realResults.innerHTML = `
    <div class="real-empty-state">
      <strong>${text("noRealApiTitle")}</strong>
      <p>${text("noRealApiBody", { endpoint: `<code>${realListingsEndpoint}</code>` })}</p>
      ${reason ? `<p class="real-error">${escapeHtml(reason)}</p>` : ""}
      <div class="real-source-actions">
        <a class="secondary-button link-button real-source naver-land" href="${getNaverMapUrl(query)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="navigation"></i>
          ${text("inSiteNaverMap")}
        </a>
        <a class="secondary-button link-button" href="${getMapUrl("kakao", query)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="map-pinned"></i>
          ${text("inSiteKakao")}
        </a>
        <a class="secondary-button link-button" href="${getMapUrl("google", query)}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="globe-2"></i>
          ${text("inSiteGoogle")}
        </a>
      </div>
      <details class="api-contract">
        <summary>${text("apiContractSummary")}</summary>
        <pre>{
  "listings": [
    {
      "title": "新村站 One-room",
      "monthlyRent": 65,
      "deposit": 1000,
      "roomType": "원룸",
      "address": "서울 서대문구",
      "sourceName": "Naver 부동산",
      "url": "https://...",
      "image": "https://...",
      "updatedAt": "2026-06-10"
    }
  ]
}</pre>
      </details>
    </div>
  `;
  refreshIcons();
}

async function searchRealListings() {
  const params = getRealSearchParams();
  elements.realSearchStatus.textContent = text("realSearchLoading");
  elements.realResults.innerHTML = `<div class="empty-state">${text("realSearchReading")}</div>`;

  try {
    let listingsFromApi = [];
    try {
      const response = await fetch(buildRealSearchUrl(params), {
        headers: { Accept: "application/json", ...(await getAuthHeaders()) }
      });
      if (!response.ok) throw new Error(`接口返回 ${response.status}`);
      listingsFromApi = normalizeRealListings(await response.json());
    } catch (apiError) {
      listingsFromApi = await searchStaticListings(params);
    }

    if (listingsFromApi.length === 0) {
      elements.realSearchStatus.textContent = text("realSearchNoResultsStatus");
      elements.realResults.innerHTML = `<div class="empty-state">${text("realSearchNoResults")}</div>`;
      return;
    }

    elements.realSearchStatus.textContent = text("realSearchCount", { count: listingsFromApi.length });
    elements.realResults.innerHTML = listingsFromApi.map(renderRealListingCard).join("");
    refreshIcons();
  } catch (error) {
    renderRealSearchFallback(params, error.message);
  }
}

function renderScore(label, value) {
  return `
    <div class="score-row">
      <span>${label}</span>
      <div class="meter"><span style="width:${value}%"></span></div>
      <strong>${value}</strong>
    </div>
  `;
}

function prefillBooking(listingId) {
  const listing = findListingById(listingId);
  if (!listing) return;
  elements.bookingListing.value = String(listing.id);
  elements.bookingForm.notes.value = text("prefillingNotes", { title: localizedListing(listing, "title") });
  setActiveView("bookings");
  elements.bookingForm.scrollIntoView({ behavior: "smooth", block: "center" });
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function bindEvents() {
  if (authEnabled) {
    elements.loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      authenticateSupabaseUser(elements.loginEmail.value, elements.loginPassword.value);
    });

    elements.signupButton?.addEventListener("click", () => {
      registerSupabaseUser(elements.loginEmail.value, elements.loginPassword.value, elements.signupRole?.value);
    });

    elements.logoutButton.addEventListener("click", logout);
  }

  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  elements.enterRoleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      enterRole(button.dataset.enterRole);
    });
  });

  elements.switchRole.addEventListener("click", showRoleGate);

  elements.viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.view);
      document.querySelector(".main-view").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  elements.saveProfile.addEventListener("click", () => {
    state.profile[state.role] = {
      name: elements.profileName.value.trim(),
      contact: elements.profileContact.value.trim()
    };
    saveProfileState();
    renderRoleUI();
  });

  elements.schoolFilter.addEventListener("change", (event) => {
    state.school = event.target.value;
    renderListings();
  });

  elements.rentFilter.addEventListener("input", (event) => {
    state.rent = Number(event.target.value);
    elements.rentValue.textContent = text("rentValue", { rent: state.rent });
    renderListings();
  });

  elements.verifiedOnly.addEventListener("change", (event) => {
    state.verifiedOnly = event.target.checked;
    renderListings();
  });

  elements.chineseOnly.addEventListener("change", (event) => {
    state.chineseOnly = event.target.checked;
    renderListings();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderListings();
  });

  document.querySelectorAll("[data-room]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-room]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.room = button.dataset.room;
      renderListings();
    });
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeGuide = button.dataset.tab;
      renderGuides();
    });
  });

  document.addEventListener("click", (event) => {
    const externalLink = event.target.closest('a[target="_blank"][href]');
    const realUrlButton = event.target.closest("[data-open-real-url]");
    const copySourceUrlButton = event.target.closest("[data-copy-source-url]");
    const closeSourceViewerButton = event.target.closest("[data-close-source-viewer]");
    const detailButton = event.target.closest("[data-detail]");
    const bookButton = event.target.closest("[data-book]");
    const jumpViewButton = event.target.closest("[data-jump-view]");
    const acceptButton = event.target.closest("[data-accept-booking]");
    const scheduleButton = event.target.closest("[data-schedule-booking]");
    const completeButton = event.target.closest("[data-complete-booking]");
    const cancelButton = event.target.closest("[data-cancel-booking]");
    const approveListingButton = event.target.closest("[data-approve-listing]");
    const rejectListingButton = event.target.closest("[data-reject-listing]");

    if (externalLink) {
      event.preventDefault();
      openSiteViewer(externalLink.href, externalLink.textContent.replace(/\s+/g, " ").trim());
      return;
    }
    if (realUrlButton) {
      openSiteViewer(realUrlButton.dataset.openRealUrl, realUrlButton.textContent.replace(/\s+/g, " ").trim());
      return;
    }
    if (copySourceUrlButton) {
      navigator.clipboard?.writeText(copySourceUrlButton.dataset.copySourceUrl);
      copySourceUrlButton.innerHTML = `<i data-lucide="check"></i>${text("copied")}`;
      refreshIcons();
      return;
    }
    if (closeSourceViewerButton) {
      closeSiteViewer();
      return;
    }
    if (detailButton) openDrawer(detailButton.dataset.detail);
    if (bookButton) {
      prefillBooking(bookButton.dataset.book);
      closeDrawer();
    }
    if (jumpViewButton) {
      setActiveView(jumpViewButton.dataset.jumpView);
      document.querySelector(".main-view").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (acceptButton) {
      const profile = getCurrentProfile();
      updateBooking(acceptButton.dataset.acceptBooking, {
        status: "accepted",
        agentName: profile.name || text("defaultAgentName"),
        agentContact: profile.contact || text("defaultAgentContact"),
        agentNote: text("acceptedDefaultNote")
      });
    }
    if (scheduleButton) {
      const id = scheduleButton.dataset.scheduleBooking;
      const meetingInput = document.querySelector(`[data-meeting-input="${id}"]`);
      const noteInput = document.querySelector(`[data-note-input="${id}"]`);
      updateBooking(id, {
        status: "scheduled",
        meetingUrl: meetingInput.value.trim() || `https://meet.google.com/hanstay-${id.slice(-5)}`,
        agentNote: noteInput.value.trim() || text("scheduledDefaultNote")
      });
    }
    if (completeButton) {
      updateBooking(completeButton.dataset.completeBooking, {
        status: "completed",
        agentNote: text("completedDefaultNote")
      });
    }
    if (cancelButton) {
      updateBooking(cancelButton.dataset.cancelBooking, {
        status: "cancelled",
        agentNote: text("cancelledDefaultNote")
      });
    }
    if (approveListingButton) {
      updateCommunityListingStatus(approveListingButton.dataset.approveListing, "approved")
        .then(() => loadCommunityListings())
        .then(() => {
          if (elements.adminReviewStatus) elements.adminReviewStatus.textContent = text("communityApproved");
        })
        .catch((error) => {
          if (elements.adminReviewStatus) elements.adminReviewStatus.textContent = text("communityReviewFailed", { error: formatCloudError(error) });
        });
    }
    if (rejectListingButton) {
      updateCommunityListingStatus(rejectListingButton.dataset.rejectListing, "rejected")
        .then(() => loadCommunityListings())
        .then(() => {
          if (elements.adminReviewStatus) elements.adminReviewStatus.textContent = text("communityRejected");
        })
        .catch((error) => {
          if (elements.adminReviewStatus) elements.adminReviewStatus.textContent = text("communityReviewFailed", { error: formatCloudError(error) });
        });
    }
  });

  document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
  elements.drawerBackdrop.addEventListener("click", closeDrawer);
  document.querySelector("#closeSiteViewer").addEventListener("click", closeSiteViewer);
  elements.siteViewerBackdrop.addEventListener("click", closeSiteViewer);
  elements.reloadSiteViewer.addEventListener("click", reloadSiteViewer);

  elements.realSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchRealListings();
  });

  elements.runFocusSurvey?.addEventListener("click", () => {
    applySuwonSurveyMode({ autoSearch: true });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
      closeSiteViewer();
    }
  });

  document.querySelector("#openBooking").addEventListener("click", () => {
    setActiveView("bookings");
    elements.bookingForm.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    state.school = "all";
    state.rent = 85;
    state.room = "all";
    state.verifiedOnly = false;
    state.chineseOnly = false;
    state.sort = "recommended";
    elements.schoolFilter.value = "all";
    elements.rentFilter.value = "85";
    elements.rentValue.textContent = text("rentValue", { rent: state.rent });
    elements.verifiedOnly.checked = false;
    elements.chineseOnly.checked = false;
    elements.sortSelect.value = "recommended";
    document.querySelectorAll("[data-room]").forEach((item) => item.classList.toggle("active", item.dataset.room === "all"));
    renderListings();
  });

  elements.bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(elements.bookingForm).entries());
    const listing = findListingById(data.listingId);
    const booking = {
      id: `BK-${Date.now()}`,
      userId: state.currentUser?.id || "",
      requesterEmail: state.currentUser?.email || "",
      listingId: data.listingId,
      listingTitle: listing ? localizedListing(listing, "title") : text("defaultListing"),
      schoolName: listing ? localizedListing(listing, "schoolName") : "",
      requesterName: data.name.trim(),
      requesterContact: data.contact.trim(),
      budget: data.budget,
      moveIn: data.moveIn,
      notes: data.notes.trim(),
      status: "pending",
      agentName: "",
      agentContact: "",
      agentNote: "",
      meetingUrl: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    state.bookings.unshift(booking);
    elements.bookingResult.textContent = text("bookingCloudSyncing");
    state.role = "seeker";
    state.profile.seeker = {
      name: booking.requesterName,
      contact: booking.requesterContact
    };
    saveProfileState();
    saveBookings();
    elements.bookingForm.reset();
    elements.bookingListing.value = String(getAllListings()[0]?.id || "");
    renderRoleUI();
    setActiveView("bookings");
    elements.bookingDashboard.scrollIntoView({ behavior: "smooth", block: "start" });

    try {
      const savedBooking = await createRemoteBooking(booking);
      state.bookings = state.bookings.map((item) => (item.id === booking.id ? savedBooking : item));
      saveBookings();
      renderRoleUI();
      elements.bookingResult.textContent = text("bookingCloudSaved", { name: data.name });
    } catch (error) {
      console.warn("Failed to create Supabase booking", error);
      elements.bookingResult.textContent = text("bookingCloudSaveFailedDetail", { error: formatCloudError(error) });
    }
  });

  elements.listingSubmitForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(elements.listingSubmitForm).entries());
    elements.listingSubmitStatus.textContent = text("communitySyncing");

    try {
      await createCommunityListing(formData);
      elements.listingSubmitForm.reset();
      elements.listingSubmitStatus.textContent = text("communitySubmitted");
      await loadCommunityListings();
    } catch (error) {
      console.warn("Failed to submit community listing", error);
      elements.listingSubmitStatus.textContent = text("communitySubmitFailed", { error: formatCloudError(error) });
    }
  });
}

loadAppState();
bindEvents();
setLanguage(state.lang);
if (!authEnabled) {
  localStorage.removeItem(storageKeys.authUser);
  state.currentUser = null;
  enterRole("seeker");
} else if (state.currentUser) {
  initializeSupabaseAuth();
} else {
  initializeSupabaseAuth();
}
setTimeout(() => {
  elements.realResults.innerHTML =
    location.protocol === "file:"
      ? `<div class="empty-state">${text("realInitialFile")}</div>`
      : `<div class="empty-state">${text("realInitialHttp")}</div>`;
}, 0);
elements.realResults.innerHTML = `<div class="empty-state">${text("realInitialDefault")}</div>`;
setTimeout(() => {
  applySuwonSurveyMode({ autoSearch: true });
}, 50);
