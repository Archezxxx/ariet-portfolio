export type ProjectId = "ocr" | "exam" | "cosmic" | "consult" | "cargo";
export type Lang = "en" | "ru" | "ky";

export interface ProjectStep {
  title: string;
  desc: string;
}

export interface ProjectChallenge {
  problem: string;
  fix: string;
}

export interface ProjectLocaleContent {
  category: string;
  tagline: string;
  facts: Array<{ label: string; value: string }>;
  overviewTitle: string;
  overview: string[];
  solutionTitle: string;
  solution: string[];
  pipelineTitle: string;
  pipeline: ProjectStep[];
  challengesTitle: string;
  challenges: ProjectChallenge[];
  deliverablesTitle: string;
  deliverables: string[];
  ctaLabel?: string;
}

export interface ProjectDefinition {
  id: ProjectId;
  number: string;
  title: string;
  accent: string;
  stack: string[];
  ctaHref?: string;
  ctaExternal?: boolean;
  locales: Record<Lang, ProjectLocaleContent>;
}

export const PROJECT_ORDER: ProjectId[] = [
  "ocr",
  "exam",
  "cosmic",
  "consult",
  "cargo",
];

export const PROJECTS: Record<ProjectId, ProjectDefinition> = {
  ocr: {
    id: "ocr",
    number: "01",
    title: "AIM OCR",
    accent: "#b8d3be",
    stack: [
      "Python",
      "OpenCV",
      "NumPy",
      "Perspective Homography",
      "Adaptive Thresholding",
      "Subpixel Snapping",
      "OpenPyXL",
    ],
    ctaHref: "index.html#flagship",
    locales: {
      en: {
        category: "Applied Computer Vision · EdTech",
        tagline:
          "Automated optical mark recognition turning thousands of paper exam sheets into clean, grade-ready Excel spreadsheets.",
        facts: [
          { label: "Processed", value: "20,000+ sheets" },
          { label: "Deployment", value: "6 AALAM schools" },
          { label: "Team", value: "2-person build" },
          { label: "Output", value: "Auto-graded Excel" },
        ],
        overviewTitle: "Problem & Context",
        overview: [
          "Across six AALAM school campuses, teachers spent evenings manually checking thousands of multiple-choice answer sheets. Even small grading delays slowed down feedback cycles for students and created administrative bottlenecks after every mock or term exam.",
          "Standard off-the-shelf OMR scanners required expensive proprietary hardware and rigid paper templates. The schools needed a reliable pipeline that worked with ordinary office scanners and everyday printouts.",
        ],
        solutionTitle: "Architecture & Engineering",
        solution: [
          "We built a deterministic computer-vision pipeline in Python and OpenCV. Each scanned sheet is aligned using fiducial corner markers and a perspective homography matrix so slight paper tilt, rotation, or scanner skew is corrected before any bubble is read.",
          "Once normalized, adaptive thresholding isolates pencil and pen marks from paper noise, subpixel grid snapping locates each answer bubble, and intensity ratios distinguish deliberate fills from smudges or erasures before exporting structured per-student tables via OpenPyXL.",
        ],
        pipelineTitle: "6-Stage Production Pipeline",
        pipeline: [
          {
            title: "Sheet Collection",
            desc: "Physical answer sheets are gathered from classrooms across all six AALAM campuses.",
          },
          {
            title: "High-Speed Batch Scan",
            desc: "Standard office scanners digitize stacks of sheets into image batches without specialized OMR hardware.",
          },
          {
            title: "Perspective Alignment",
            desc: "OpenCV detects corner anchors and applies a homography warp to normalize scale and skew.",
          },
          {
            title: "Subpixel Bubble Read",
            desc: "Adaptive thresholding and pixel-density comparison classify A/B/C/D marks and flag ambiguous double-marks.",
          },
          {
            title: "Deterministic Scoring",
            desc: "Extracted answers are compared against the exam key with instant per-subject and total score calculation.",
          },
          {
            title: "Excel Report Export",
            desc: "OpenPyXL writes formatted spreadsheets ready for teachers and school administrators.",
          },
        ],
        challengesTitle: "Engineering Challenges",
        challenges: [
          {
            problem: "Skewed scans & inconsistent lighting",
            fix: "Replaced fixed pixel coordinates with corner-anchor homography and local adaptive thresholding.",
          },
          {
            problem: "Light pencil marks vs. erased smudges",
            fix: "Calibrated fill-ratio thresholds and flagged borderline cells for quick human review instead of silent misgrading.",
          },
        ],
        deliverablesTitle: "Key Outcomes",
        deliverables: [
          "Deployed across 6 AALAM campuses",
          "Over 20,000 paper answer sheets processed",
          "Eliminated manual bubble-by-bubble checking for teachers",
        ],
        ctaLabel: "Try interactive OCR model",
      },
      ru: {
        category: "Компьютерное зрение · EdTech",
        tagline:
          "Система автоматического распознавания бумажных экзаменационных бланков с мгновенным экспортом результатов в Excel.",
        facts: [
          { label: "Обработано", value: "20 000+ бланков" },
          { label: "Внедрение", value: "6 школ AALAM" },
          { label: "Команда", value: "2 человека" },
          { label: "Результат", value: "Готовый Excel" },
        ],
        overviewTitle: "Проблема и контекст",
        overview: [
          "В шести филиалах сети школ AALAM учителя тратили целые вечера на ручную проверку тысяч бумажных бланков с тестами. Задержки с проверкой тормозили обратную связь для учеников и перегружали преподавателей после каждого пробного или итогового экзамена.",
          "Готовые промышленные OMR-сканеры требовали дорогого оборудования и жёсткой спецбумаги. Школам нужна была надёжная система, работающая с обычными офисными сканерами и стандартной печатью.",
        ],
        solutionTitle: "Архитектура и реализация",
        solution: [
          "Мы разработали детерминированный конвейер компьютерного зрения на Python и OpenCV. Каждый скан выравнивается по угловым реперным меткам через матрицу перспективной гомографии — это убирает перекосы, поворот и сдвиги бумаги при сканировании.",
          "После выравнивания адаптивная бинаризация отделяет пометки ручкой или карандашом от шума бумаги, субпиксельная привязка находит координаты каждого кружка, а анализ плотности заполнения отличает чёткий ответ от смазанного следа перед выгрузкой в Excel через OpenPyXL.",
        ],
        pipelineTitle: "6 этапов рабочего конвейера",
        pipeline: [
          {
            title: "Сбор бланков",
            desc: "Бумажные листы ответов собираются после экзамена во всех шести школах AALAM.",
          },
          {
            title: "Потоковое сканирование",
            desc: "Обычные офисные сканеры переводят пачки бланков в изображения без дорогого OMR-железа.",
          },
          {
            title: "Выравнивание перспективы",
            desc: "OpenCV находит угловые маркеры и выравнивает геометрию листа через гомографию.",
          },
          {
            title: "Субпиксельное чтение",
            desc: "Адаптивный порог и расчёт плотности пикселей распознают варианты A/B/C/D и спорные двойные пометки.",
          },
          {
            title: "Автоматический подсчёт",
            desc: "Распознанные ответы сверяются с ключом экзамена с расчётом баллов по каждому предмету.",
          },
          {
            title: "Экспорт в Excel",
            desc: "OpenPyXL формирует структурированные таблицы с результатами для учителей и администрации.",
          },
        ],
        challengesTitle: "Инженерные задачи",
        challenges: [
          {
            problem: "Перекос листов и разная яркость сканеров",
            fix: "Заменили жёсткие координаты на гомографию по угловым меткам и локальную адаптивную бинаризацию.",
          },
          {
            problem: "Бледный карандаш против следов стёрки",
            fix: "Настроили пороговые коэффициенты заполнения и пометку пограничных ячеек для быстрой проверки.",
          },
        ],
        deliverablesTitle: "Результаты",
        deliverables: [
          "Внедрено в 6 школах сети AALAM",
          "Проверено более 20 000 экзаменационных бланков",
          "Снята рутинная нагрузка ручной проверки с преподавателей",
        ],
        ctaLabel: "Открыть интерактивную модель OCR",
      },
      ky: {
        category: "Компьютердик көрүү · EdTech",
        tagline:
          "Кагаз экзамен баракчаларын автоматтык түрдө таанып, даяр Excel жыйынтыгына айландырган система.",
        facts: [
          { label: "Иштелди", value: "20 000+ барак" },
          { label: "Колдонуу", value: "6 AALAM мектеби" },
          { label: "Команда", value: "2 адам" },
          { label: "Натыйжа", value: "Даяр Excel" },
        ],
        overviewTitle: "Маселе жана контекст",
        overview: [
          "AALAM тармагындагы алты мектепте мугалимдер миңдеген тест баракчаларын кол менен текшерүүгө көп убакыт коротушчу. Бул окуучуларга жоопторду жеткирүүнү кечеңдетип, экзамен учурунда чоң түйшүк жараткан.",
          "Даяр OMR-сканерлер кымбат жабдууну талап кылгандыктан, кадимки кеңсе сканерлери менен иштеген ишенимдүү программа керек болду.",
        ],
        solutionTitle: "Архитектура жана чечим",
        solution: [
          "Python жана OpenCV негизинде компьютердик көрүү конвейерин курдук. Ар бир скан бурчтагы белгилер аркылуу перспективдүү гомография менен түздөлөт.",
          "Андан кийин адаптивдүү босого калем же карандаш изин бөлүп, субпикселдик торчо ар бир жоопту так аныктайт жана OpenPyXL аркылуу Excel таблицасына экспорттойт.",
        ],
        pipelineTitle: "6 баскычтуу автоматташтырылган цикл",
        pipeline: [
          {
            title: "Баракчаларды чогултуу",
            desc: "Экзаменден кийин алты мектептен кагаз жооп баракчалары жыйналат.",
          },
          {
            title: "Тез сканерлөө",
            desc: "Кадимки кеңсе сканерлери баракчаларды сүрөткө өткөрөт.",
          },
          {
            title: "Геометрияны түздөө",
            desc: "OpenCV бурчтагы белгилер боюнча баракты түздөйт.",
          },
          {
            title: "Субпикселдик таануу",
            desc: "Ар бир уячадагы боёктун тыгыздыгы текшерилип, A/B/C/D жооптору окулат.",
          },
          {
            title: "Упай эсептөө",
            desc: "Жооптор ачкыч менен салыштырылып, жалпы упай эсептелет.",
          },
          {
            title: "Excel экспорт",
            desc: "OpenPyXL мугалимдер үчүн даяр отчет таблицасын түзөт.",
          },
        ],
        challengesTitle: "Техникалык маселелер",
        challenges: [
          {
            problem: "Кыйшык сканерлөө жана жарыктын айырмасы",
            fix: "Гомографиялык түздөө жана адаптивдүү бинаризация колдонулду.",
          },
          {
            problem: "Өчүрүлгөн тактар менен алсыз белгилер",
            fix: "Толтуруу коэффициенти такталып, шектүү уячалар өзүнчө белгиленди.",
          },
        ],
        deliverablesTitle: "Негизги жыйынтыктар",
        deliverables: [
          "6 AALAM мектебинде ишке киргизилди",
          "20 000+ экзамен баракчасы текшерилди",
          "Мугалимдердин убактысы үнөмдөлдү",
        ],
        ctaLabel: "Интерактивдүү OCR моделин көрүү",
      },
    },
  },

  exam: {
    id: "exam",
    number: "02",
    title: "AIM Exam",
    accent: "#c1d2e3",
    stack: [
      "JavaScript",
      "Page Visibility API",
      "Focus / Blur Telemetry",
      "WebRTC Camera Checks",
      "Fullscreen Enforcement",
      "Audit Event Log",
    ],
    locales: {
      en: {
        category: "Online Proctoring · Browser Security",
        tagline:
          "Browser-based online examination environment with tab-switch detection, camera monitoring, and structured violation escalation.",
        facts: [
          { label: "Focus Guard", value: "Tab & window events" },
          { label: "Proctoring", value: "Camera monitoring" },
          { label: "Policy", value: "3-strike escalation" },
          { label: "Privacy", value: "No local installs" },
        ],
        overviewTitle: "Problem & Context",
        overview: [
          "Running remote or computer-lab assessments without supervision makes it trivial for test-takers to switch tabs, look up answers, or open messaging apps. Installing heavy desktop proctoring clients creates friction and OS compatibility headaches.",
          "AIM Exam brings lightweight, transparent proctoring directly into the browser so students can take timed exams with clear rules and immediate feedback.",
        ],
        solutionTitle: "Architecture & Controls",
        solution: [
          "The exam client combines browser lifecycle listeners (visibilitychange, window blur, fullscreen exit) with optional WebRTC camera stream checks. Every anomalous event is timestamped and counted against a configurable warning threshold.",
          "Instead of silently failing a student on a single accidental alt-tab, the system issues clear progressive warnings before locking the session on repeated violations.",
        ],
        pipelineTitle: "Proctoring Lifecycle",
        pipeline: [
          {
            title: "Pre-Exam Readiness Check",
            desc: "Verifies browser state, fullscreen capability, and optional camera permission before the timer starts.",
          },
          {
            title: "Tab & Focus Telemetry",
            desc: "Detects tab switches, window minimization, or focus loss in real time.",
          },
          {
            title: "Camera Presence Monitoring",
            desc: "Tracks active video feed availability and alerts if the stream drops or is blocked.",
          },
          {
            title: "3-Strike Escalation",
            desc: "Logs warnings 1 and 2 visibly for the student, then locks submission on the 3rd violation.",
          },
        ],
        challengesTitle: "Engineering Challenges",
        challenges: [
          {
            problem: "Avoiding false positives from OS notifications",
            fix: "Paired blur events with visibility state checks and a progressive warning threshold.",
          },
          {
            problem: "Transparent user experience",
            fix: "Built an explicit status bar and interactive simulation so students understand the rules upfront.",
          },
        ],
        deliverablesTitle: "Key Capabilities",
        deliverables: [
          "Zero-install browser examination interface",
          "Real-time tab-switch & focus loss counter",
          "Interactive proctoring status & violation audit",
        ],
      },
      ru: {
        category: "Онлайн-прокторинг · Браузерная безопасность",
        tagline:
          "Платформа для онлайн-экзаменов с контролем переключения вкладок, мониторингом камеры и поэтапной фиксацией нарушений.",
        facts: [
          { label: "Контроль фокуса", value: "Вкладки и окна" },
          { label: "Прокторинг", value: "Мониторинг камеры" },
          { label: "Политика", value: "3 предупреждения" },
          { label: "Доступ", value: "Прямо в браузере" },
        ],
        overviewTitle: "Проблема и контекст",
        overview: [
          "При проведении дистанционных или компьютерных тестов без наблюдения легко переключить вкладку, открыть подсказку или мессенджер. При этом тяжёлые десктопные прокторинг-программы сложно устанавливать и поддерживать на разных устройствах.",
          "AIM Exam решает эту задачу прямо в браузере — без установки стороннего ПО, с понятными правилами и мгновенной реакцией на нарушения.",
        ],
        solutionTitle: "Архитектура и защита",
        solution: [
          "Клиент объединяет события браузера (visibilitychange, потеря фокуса окна, выход из полноэкранного режима) с проверкой активности веб-камеры через WebRTC. Каждое событие фиксируется с отметкой времени.",
          "Вместо мгновенной блокировки за случайный клик система использует прозрачную шкалу из трёх шагов: предупреждает ученика и блокирует тест только при повторных нарушениях.",
        ],
        pipelineTitle: "Механика прокторинга",
        pipeline: [
          {
            title: "Проверка готовности",
            desc: "Перед стартом таймера проверяется состояние окна и готовность камеры.",
          },
          {
            title: "Контроль вкладок и фокуса",
            desc: "Мгновенно фиксирует уход со страницы, сворачивание окна или переключение вкладки.",
          },
          {
            title: "Мониторинг камеры",
            desc: "Отслеживает наличие активного видеопотока и предупреждает при его отключении.",
          },
          {
            title: "Эскалация нарушений",
            desc: "Выводит первые два предупреждения на экран и блокирует сессию на третьем нарушении.",
          },
        ],
        challengesTitle: "Инженерные задачи",
        challenges: [
          {
            problem: "Ложные срабатывания от системных уведомлений",
            fix: "Связали события фокуса с проверкой видимости вкладки и трёхступенчатым порогом.",
          },
          {
            problem: "Прозрачность правил для студента",
            fix: "Добавили живой индикатор статуса и наглядный симулятор поведения системы.",
          },
        ],
        deliverablesTitle: "Возможности системы",
        deliverables: [
          "Запуск экзамена в браузере без установки программ",
          "Счётчик переключений вкладок и потери фокуса",
          "Прозрачный журнал нарушений и блокировка при 3/3",
        ],
      },
      ky: {
        category: "Онлайн-прокторинг · Браузер коопсуздугу",
        tagline:
          "Өтмөктөрдү алмаштырууну көзөмөлдөгөн, камераны текшерген жана эреже бузууларды эсептеген онлайн экзамен системасы.",
        facts: [
          { label: "Фокус көзөмөлү", value: "Өтмөк жана терезе" },
          { label: "Прокторинг", value: "Камера мониторинги" },
          { label: "Эреже", value: "3 эскертүү" },
          { label: "Ыңгайлуулук", value: "Браузерде иштейт" },
        ],
        overviewTitle: "Маселе жана контекст",
        overview: [
          "Онлайн тесттерде көзөмөл болбосо, окуучу башка өтмөккө өтүп жооп издеши оңой. Ал эми кошумча программа орнотуу ар кайсы компьютерде кыйынчылык жаратат.",
          "AIM Exam кошумча орнотуусуз эле браузердин ичинде таза жана түшүнүктүү көзөмөлдү камсыздайт.",
        ],
        solutionTitle: "Архитектура жана коргоо",
        solution: [
          "Система браузердин visibilitychange, blur окуяларын жана WebRTC камера агымын бириктирет. Ар бир бузуу убактысы менен жазылат.",
          "Кокустуктан коргоо үчүн 3 баскычтуу эскертүү колдонулат: эки жолу эскертип, үчүнчүсүндө тестти бөгөттөйт.",
        ],
        pipelineTitle: "Иштөө тартиби",
        pipeline: [
          {
            title: "Даярдыкты текшерүү",
            desc: "Таймер башталганга чейин терезе жана камера текшерилет.",
          },
          {
            title: "Өтмөктү көзөмөлдөө",
            desc: "Башка өтмөккө же терезеге өткөндү ошол замат аныктайт.",
          },
          {
            title: "Камера агымы",
            desc: "Камера өчүп калса же бөгөттөлсө эскертүү берет.",
          },
          {
            title: "3 баскычтуу бөгөттөө",
            desc: "2 эскертүүдөн кийин 3-бузууда экзамен токтотулат.",
          },
        ],
        challengesTitle: "Техникалык чечимдер",
        challenges: [
          {
            problem: "Системалык билдирүүлөрдөн улам жалган эскертүүлөр",
            fix: "Фокус жоготууну өтмөктүн көрүнүү абалы менен бирге текшерүү киргизилди.",
          },
          {
            problem: "Окуучуга эреженин түшүнүктүүлүгү",
            fix: "Статус панели жана интерактивдүү симулятор кошулду.",
          },
        ],
        deliverablesTitle: "Негизги мүмкүнчүлүктөр",
        deliverables: [
          "Программа орнотпостон браузерде иштейт",
          "Өтмөк алмаштырууну реалдуу убакытта санайт",
          "Эреже бузууларды так эсепке алат",
        ],
      },
    },
  },

  cosmic: {
    id: "cosmic",
    number: "03",
    title: "Cosmic Team",
    accent: "#f59e0b",
    stack: [
      "POS Software",
      "ESC/POS Protocol",
      "Thermal Receipt Printing",
      "Kitchen Ticket Routing",
      "Local Network Setup",
      "Hardware Integration",
    ],
    locales: {
      en: {
        category: "B2B Restaurant Technology · POS",
        tagline:
          "End-to-end restaurant point-of-sale software, kitchen ticket routing, and on-site hardware installation across Kyrgyzstan.",
        facts: [
          { label: "Founders", value: "3 cofounders" },
          { label: "Market", value: "Restaurants in KG" },
          { label: "Hardware", value: "ESC/POS printers" },
          { label: "Scope", value: "Software + Setup" },
        ],
        overviewTitle: "Problem & Context",
        overview: [
          "Local cafes and restaurants often struggled with slow, fragmented order-taking workflows—handwritten kitchen tickets, delayed billing, and expensive imported POS subscriptions that didn't match local hardware.",
          "With two cofounders, we formed Cosmic Team to deliver both the POS software and complete on-site installation so venues could go live in a single day.",
        ],
        solutionTitle: "Product & Field Deployment",
        solution: [
          "Our software handles fast table & counter ordering, modifiers, split checks, and daily shift summaries. Orders route straight to kitchen and bar thermal printers over the local network using raw ESC/POS commands.",
          "Beyond writing code, we configured routers, mounted touchscreen terminals, calibrated thermal printers, and trained staff directly inside active restaurants.",
        ],
        pipelineTitle: "From Order to Kitchen",
        pipeline: [
          {
            title: "Counter & Table Entry",
            desc: "Cashiers and waiters ring up items, modifiers, and table numbers with minimal taps.",
          },
          {
            title: "ESC/POS Ticket Dispatch",
            desc: "Order tickets format cleanly and print instantaneously on kitchen and bar thermal printers.",
          },
          {
            title: "On-Site Hardware Setup",
            desc: "Full installation of POS terminals, cash drawers, and LAN printer routing.",
          },
          {
            title: "Shift & Revenue Reports",
            desc: "End-of-day totals, item breakdowns, and cash/card reconciliation for owners.",
          },
        ],
        challengesTitle: "Operational & Technical Challenges",
        challenges: [
          {
            problem: "Unreliable Wi-Fi in busy kitchens",
            fix: "Standardized wired LAN printer connections and local-first ticket queuing.",
          },
          {
            problem: "Cyrillic encoding on thermal printers",
            fix: "Configured explicit ESC/POS codepage tables so Russian/Kyrgyz item names printed crisply.",
          },
        ],
        deliverablesTitle: "What We Delivered",
        deliverables: [
          "Complete POS software tailored for local restaurants",
          "ESC/POS thermal printer & cash drawer integration",
          "Turnkey installation and staff onboarding across Kyrgyzstan",
        ],
      },
      ru: {
        category: "B2B-технологии для ресторанов · POS",
        tagline:
          "Программное обеспечение для автоматизации ресторанов и кафе: учёт заказов, печать чеков на кухню по ESC/POS и установка под ключ.",
        facts: [
          { label: "Команда", value: "3 сооснователя" },
          { label: "Рынок", value: "Рестораны по КР" },
          { label: "Оборудование", value: "ESC/POS принтеры" },
          { label: "Формат", value: "Софт + внедрение" },
        ],
        overviewTitle: "Проблема и контекст",
        overview: [
          "Многие локальные кафе и рестораны сталкивались с хаосом на кухне, бумажными блокнотами, ошибками в счетах и дорогими зарубежными POS-подписками, которые плохо дружили с местным оборудованием.",
          "Вместе с двумя сооснователями мы запустили Cosmic Team, чтобы закрывать задачу полностью: от разработки кассового софта до физического монтажа оборудования на точке.",
        ],
        solutionTitle: "Продукт и внедрение на местах",
        solution: [
          "Система обеспечивает быстрый приём заказов по столам и на кассе, работу с модификаторами, разделение счетов и закрытие смены. Заказы мгновенно уходят на кухонные и барные термопринтеры по протоколу ESC/POS.",
          "Помимо разработки кода, мы настраивали локальные сети, подключали сенсорные моноблоки, денежные ящики и обучали персонал прямо в залах заведений.",
        ],
        pipelineTitle: "Путь заказа в ресторане",
        pipeline: [
          {
            title: "Приём заказа",
            desc: "Официант или кассир быстро оформляет позиции, модификаторы и привязку к столу.",
          },
          {
            title: "Печать бегунков (ESC/POS)",
            desc: "Встречка автоматически распределяется и печатается на принтерах кухни и бара.",
          },
          {
            title: "Монтаж оборудования",
            desc: "Подключение POS-терминалов, роутеров, термопринтеров и денежных ящиков.",
          },
          {
            title: "Отчётность по смене",
            desc: "Итоговая выручка, популярные позиции и сверка наличных/безналичных оплат.",
          },
        ],
        challengesTitle: "Технические и полевые задачи",
        challenges: [
          {
            problem: "Перебои Wi-Fi на загруженной кухне",
            fix: "Перевели кухонные принтеры на проводной LAN и локальную очередь печати.",
          },
          {
            problem: "Кодировка кириллицы на термопринтерах",
            fix: "Настроили явный выбор кодовых страниц ESC/POS для чёткой печати русских и кыргызских названий.",
          },
        ],
        deliverablesTitle: "Результаты",
        deliverables: [
          "Рабочая POS-система для ресторанов и кафе",
          "Прямая интеграция с чековыми и кухонными принтерами (ESC/POS)",
          "Установка под ключ и обучение персонала в Кыргызстане",
        ],
      },
      ky: {
        category: "B2B Ресторан технологиясы · POS",
        tagline:
          "Кафе жана ресторандар үчүн POS программасы, ашкана принтерлери (ESC/POS) жана жеринде орнотуп берүү кызматы.",
        facts: [
          { label: "Негиздөөчүлөр", value: "3 өнөктөш" },
          { label: "Рынок", value: "КР ресторандары" },
          { label: "Жабдуу", value: "ESC/POS принтер" },
          { label: "Формат", value: "Программа + орнотуу" },
        ],
        overviewTitle: "Маселе жана контекст",
        overview: [
          "Көпчүлүк кафе-ресторандарда буйрутмаларды кагазга жазуу, эсептен адашуу жана кымбат чет элдик POS системалар көйгөй жаратчу.",
          "Эки өнөктөшүм менен бирге Cosmic Team түзүп, программаны да, жабдууну да толук орнотуп берүүнү колго алдык.",
        ],
        solutionTitle: "Чечим жана орнотуу",
        solution: [
          "Программа столдор боюнча буйрутма алууну, модификаторлорду, эсепти бөлүүнү жана сменаны жабууну тездетет. Буйрутмалар ESC/POS аркылуу ашкана принтерлерине заматта басылып чыгат.",
          "Код жазуудан тышкары терминалдарды, тармакты, чек принтерлерин туташтырып, кызматкерлерди окуттук.",
        ],
        pipelineTitle: "Буйрутманын жүрүшү",
        pipeline: [
          {
            title: "Буйрутма киргизүү",
            desc: "Кассир же официант тамактарды тез тандап, столго байлайт.",
          },
          {
            title: "Ашканага басып чыгаруу",
            desc: "ESC/POS буйруктары менен ашкана жана бар принтерлерине чек чыгат.",
          },
          {
            title: "Жабдуу орнотуу",
            desc: "POS-терминал, роутер, принтер жана касса кутусун туташтыруу.",
          },
          {
            title: "Смена отчету",
            desc: "Күндүн аягындагы жалпы киреше жана төлөм түрлөрү боюнча эсеп.",
          },
        ],
        challengesTitle: "Техникалык маселелер",
        challenges: [
          {
            problem: "Ашканадагы Wi-Fi үзгүлтүктөрү",
            fix: "Принтерлерди кабелдик LAN тармагына өткөрүп турукташтырдык.",
          },
          {
            problem: "Термопринтердеги кириллица тамгалары",
            fix: "ESC/POS код баракчаларын тууралап, кыргыз/орус аталыштарын так чыгардык.",
          },
        ],
        deliverablesTitle: "Жыйынтыктар",
        deliverables: [
          "Ресторандар үчүн даяр POS программасы",
          "ESC/POS принтерлер менен толук интеграция",
          "Кыргызстан боюнча орнотуу жана окутуу",
        ],
      },
    },
  },

  consult: {
    id: "consult",
    number: "04",
    title: "Consulteam",
    accent: "#a7f3d0",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Layout",
      "Production Deployment",
      "SEO & Domain Setup",
    ],
    ctaHref: "https://consulteam.edu.kg",
    ctaExternal: true,
    locales: {
      en: {
        category: "Web Development · Education Consulting",
        tagline:
          "Production web platform for an international education consulting agency helping students apply to universities abroad.",
        facts: [
          { label: "Domain", value: "consulteam.edu.kg" },
          { label: "Role", value: "Full-Stack Web Dev" },
          { label: "Audience", value: "Students & Parents" },
          { label: "Status", value: "Live in Production" },
        ],
        overviewTitle: "Problem & Context",
        overview: [
          "Students and parents exploring study-abroad programs need clear, trustworthy information on destinations, admission timelines, and consultation steps—especially on mobile devices.",
          "Consulteam needed a fast, credible online presence at consulteam.edu.kg to present its services and convert inquiries into scheduled consultations.",
        ],
        solutionTitle: "Architecture & Delivery",
        solution: [
          "Designed and built the complete responsive website from scratch: structured program sections, clear service explanations, fast-loading assets, and direct consultation contact paths.",
          "Handled domain configuration (.edu.kg), production hosting deployment, and mobile-first layout testing so prospective applicants can browse smoothly from any phone.",
        ],
        pipelineTitle: "Delivery Breakdown",
        pipeline: [
          {
            title: "Information Architecture",
            desc: "Organized study destinations, admissions guidance, and agency credentials into a clear user journey.",
          },
          {
            title: "Responsive UI Build",
            desc: "Implemented clean mobile and desktop layouts with readable typography and direct CTAs.",
          },
          {
            title: "Lead & Contact Flow",
            desc: "Streamlined inquiry pathways so students can reach advisors quickly.",
          },
          {
            title: "Domain & Deployment",
            desc: "Configured DNS and deployed the live production site to consulteam.edu.kg.",
          },
        ],
        challengesTitle: "Engineering Focus",
        challenges: [
          {
            problem: "Presenting complex admissions info without clutter",
            fix: "Broke programs and steps into scannable cards and concise FAQ-style blocks.",
          },
          {
            problem: "Fast loading on mobile cellular connections",
            fix: "Kept the frontend lightweight with zero bloated frameworks and optimized assets.",
          },
        ],
        deliverablesTitle: "Delivered Outcomes",
        deliverables: [
          "Live production website at consulteam.edu.kg",
          "Mobile-responsive design for students and parents",
          "End-to-end build, domain setup, and deployment",
        ],
        ctaLabel: "Visit consulteam.edu.kg",
      },
      ru: {
        category: "Веб-разработка · Образовательный консалтинг",
        tagline:
          "Рабочий веб-сайт для агентства по поступлению за рубеж: понятная структура программ, консультации и запуск на домене consulteam.edu.kg.",
        facts: [
          { label: "Домен", value: "consulteam.edu.kg" },
          { label: "Роль", value: "Full-Stack разработчик" },
          { label: "Аудитория", value: "Абитуриенты и родители" },
          { label: "Статус", value: "В продакшене" },
        ],
        overviewTitle: "Проблема и контекст",
        overview: [
          "Абитуриентам и родителям, которые планируют поступление за границу, нужна понятная и вызывающая доверие информация о странах, сроках подачи и этапах подготовки — особенно со смартфона.",
          "Агентству Consulteam требовался быстрый и аккуратный сайт на домене consulteam.edu.kg для презентации услуг и записи на консультации.",
        ],
        solutionTitle: "Реализация и запуск",
        solution: [
          "Сайт разработан с нуля: продумана структура разделов, подача программ обучения, адаптивная вёрстка под телефоны и удобные точки связи с консультантами.",
          "Выполнена полная настройка домена (.edu.kg), деплой на продакшен и проверка скорости загрузки на мобильных устройствах.",
        ],
        pipelineTitle: "Этапы создания",
        pipeline: [
          {
            title: "Структура контента",
            desc: "Упорядочены направления обучения, этапы поступления и ключевые преимущества агентства.",
          },
          {
            title: "Адаптивный интерфейс",
            desc: "Сверстаны чистые экраны для мобильных устройств и десктопа с удобной навигацией.",
          },
          {
            title: "Запись на консультацию",
            desc: "Настроены быстрые переходы и формы связи с командой.",
          },
          {
            title: "Домен и продакшен",
            desc: "Настроен DNS и выполнен релиз на consulteam.edu.kg.",
          },
        ],
        challengesTitle: "Ключевые решения",
        challenges: [
          {
            problem: "Большой объём информации о поступлении",
            fix: "Разбили материал на чёткие блоки и пошаговые секции без перегруза текста.",
          },
          {
            problem: "Быстрая загрузка на мобильном интернете",
            fix: "Сделали лёгкий фронтенд без лишних тяжёлых зависимостей.",
          },
        ],
        deliverablesTitle: "Результаты",
        deliverables: [
          "Работающий сайт на домене consulteam.edu.kg",
          "Адаптивный дизайн под смартфоны и компьютеры",
          "Полный цикл: дизайн, код, домен и деплой",
        ],
        ctaLabel: "Открыть consulteam.edu.kg",
      },
      ky: {
        category: "Веб-иштеп чыгуу · Билим берүү консалтинги",
        tagline:
          "Чет өлкөгө окууга тапшыруу боюнча агенттик үчүн толук иштеген consulteam.edu.kg веб-платформасы.",
        facts: [
          { label: "Домен", value: "consulteam.edu.kg" },
          { label: "Роль", value: "Full-Stack иштеп чыгуучу" },
          { label: "Аудитория", value: "Окуучулар жана ата-энелер" },
          { label: "Абалы", value: "Иштеп жатат" },
        ],
        overviewTitle: "Маселе жана контекст",
        overview: [
          "Чет өлкөгө тапшырууну каалаган студенттерге программалар, мөөнөттөр жана консультация тууралуу так маалымат керек.",
          "Consulteam агенттигине consulteam.edu.kg дарегинде тез жана ишенимдүү сайт зарыл болду.",
        ],
        solutionTitle: "Ишке ашыруу",
        solution: [
          "Сайт нөлдөн баштап жасалды: окуу багыттары, кызматтар, мобилдик адаптация жана байланыш жолдору иштелип чыкты.",
          "Домен (.edu.kg) туураланып, продакшнга жайгаштырылды.",
        ],
        pipelineTitle: "Жасоо баскычтары",
        pipeline: [
          {
            title: "Маалымат архитектурасы",
            desc: "Окуу өлкөлөрү жана тапшыруу кадамдары так түзүлдү.",
          },
          {
            title: "Мобилдик интерфейс",
            desc: "Телефондо да, компьютерде да ыңгайлуу көрүнгөн дизайн жасалды.",
          },
          {
            title: "Байланыш каналы",
            desc: "Консультацияга тез жазылуу мүмкүнчүлүгү кошулду.",
          },
          {
            title: "Домен жана жайгаштыруу",
            desc: "consulteam.edu.kg домени туташтырылды.",
          },
        ],
        challengesTitle: "Негизги чечимдер",
        challenges: [
          {
            problem: "Көп маалыматты жөнөкөй көрсөтүү",
            fix: "Маалымат кыска, түшүнүктүү блокторго бөлүндү.",
          },
          {
            problem: "Мобилдик интернетте тез ачылышы",
            fix: "Ашыкча оор китепканаларсыз жеңил код жазылды.",
          },
        ],
        deliverablesTitle: "Жыйынтыктар",
        deliverables: [
          "consulteam.edu.kg дарегиндеги иштеп жаткан сайт",
          "Толук мобилдик адаптация",
          "Дизайндан баштап хостингге чейин толук бүтүрүү",
        ],
        ctaLabel: "consulteam.edu.kg сайтын ачуу",
      },
    },
  },

  cargo: {
    id: "cargo",
    number: "05",
    title: "AIM Cargo",
    accent: "#fb923c",
    stack: [
      "Cross-Border Logistics",
      "Supplier Coordination",
      "Customs & Route Tracking",
      "Weight / Volume Accounting",
      "Client Operations",
    ],
    locales: {
      en: {
        category: "Entrepreneurship · Cross-Border Logistics",
        tagline:
          "Real-world China–Kyrgyzstan cargo delivery venture managing consolidation, customs transit, and last-mile handoff.",
        facts: [
          { label: "Corridor", value: "China → Kyrgyzstan" },
          { label: "Volume", value: "500+ kg delivered" },
          { label: "Duration", value: "~1 year active" },
          { label: "Role", value: "Founder & Operations" },
        ],
        overviewTitle: "Context & Venture",
        overview: [
          "Small merchants and individual buyers ordering goods from Chinese marketplaces and factories faced opaque shipping fees, lost parcels, and unpredictable border delays.",
          "AIM Cargo started as an entrepreneurial venture to bridge that gap—handling warehouse consolidation in China, cross-border transit, and direct delivery to clients in Bishkek.",
        ],
        solutionTitle: "Operations & Execution",
        solution: [
          "Over roughly one year of active operations, we coordinated warehouse receiving, parcel consolidation, weight/volume pricing, customs transit across the China–Kyrgyzstan corridor, and customer handoff.",
          "Running real-world logistics taught lessons no classroom project can: accountability when shipments are delayed, clear client communication, and tight unit-economics tracking.",
        ],
        pipelineTitle: "Cross-Border Flow",
        pipeline: [
          {
            title: "China Warehouse Consolidation",
            desc: "Receiving supplier packages, verifying labels, and consolidating shipments.",
          },
          {
            title: "Border & Customs Transit",
            desc: "Coordinating freight movement along the China–Kyrgyzstan route.",
          },
          {
            title: "Weight & Margin Tracking",
            desc: "Calculating per-kg tariffs, consolidation weights, and client invoices.",
          },
          {
            title: "Bishkek Distribution",
            desc: "Sorting arrived cargo and handing off 500+ kg of parcels to customers.",
          },
        ],
        challengesTitle: "Real-World Lessons",
        challenges: [
          {
            problem: "Border congestion & unpredictable transit times",
            fix: "Built buffer windows into delivery estimates and proactive status updates for buyers.",
          },
          {
            problem: "Managing dozens of small parcels simultaneously",
            fix: "Standardized tracking codes and weight-log sheets to prevent mix-ups.",
          },
        ],
        deliverablesTitle: "Impact & Experience",
        deliverables: [
          "500+ kg of commercial and personal cargo delivered",
          "~1 year of end-to-end operational management",
          "Direct experience in unit economics, suppliers, and customer trust",
        ],
      },
      ru: {
        category: "Предпринимательство · Международная логистика",
        tagline:
          "Реальный логистический проект по доставке грузов из Китая в Кыргызстан: консолидация, граница и выдача клиентам.",
        facts: [
          { label: "Маршрут", value: "Китай → Кыргызстан" },
          { label: "Объём", value: "500+ кг доставлено" },
          { label: "Срок", value: "~1 год работы" },
          { label: "Роль", value: "Основатель и операции" },
        ],
        overviewTitle: "Контекст и задача",
        overview: [
          "Малому бизнесу и частным заказчикам, покупающим товары в Китае, часто не хватало прозрачной доставки: терялись посылки, плавали тарифы и задерживалась граница.",
          "AIM Cargo стал реальным предпринимательским проектом, который взял на себя приёмку на складе в Китае, прохождение маршрута и выдачу грузов в Бишкеке.",
        ],
        solutionTitle: "Операционная работа",
        solution: [
          "Около года мы вели полный цикл логистики: приём и объединение посылок на складе в Китае, расчёт тарифов по весу и объёму, контроль транзита через границу и выдачу клиентам.",
          "Этот опыт дал понимание реальной экономики бизнеса, ответственности перед заказчиками за каждый килограмм и важности чёткого учёта.",
        ],
        pipelineTitle: "Цепочка доставки",
        pipeline: [
          {
            title: "Склад в Китае",
            desc: "Приёмка товаров от поставщиков, проверка маркировки и консолидация партий.",
          },
          {
            title: "Транзит через границу",
            desc: "Координация перевозки по маршруту Китай — Кыргызстан.",
          },
          {
            title: "Учёт веса и расчёты",
            desc: "Подсчёт веса, тарификация и ведение клиентских ведомостей.",
          },
          {
            title: "Выдача в Бишкеке",
            desc: "Сортировка прибывших грузов и выдача более 500 кг заказов клиентам.",
          },
        ],
        challengesTitle: "Практические уроки",
        challenges: [
          {
            problem: "Очереди на границе и сдвиги сроков",
            fix: "Закладывали реалистичный запас времени и заранее информировали клиентов о статусе.",
          },
          {
            problem: "Учёт большого числа мелких посылок",
            fix: "Ввели единую систему трек-кодов и весовых таблиц без путаницы при выдаче.",
          },
        ],
        deliverablesTitle: "Результаты",
        deliverables: [
          "Доставлено более 500 кг грузов из Китая в Кыргызстан",
          "Около года непрерывной операционной работы",
          "Практический опыт в логистике, работе с поставщиками и клиентами",
        ],
      },
      ky: {
        category: "Ишкердик · Эл аралык логистика",
        tagline:
          "Кытайдан Кыргызстанга жүк жеткирүү долбоору: кампада чогултуу, чек ара транзити жана кардарларга тапшыруу.",
        facts: [
          { label: "Маршрут", value: "Кытай → Кыргызстан" },
          { label: "Көлөм", value: "500+ кг жеткирилди" },
          { label: "Мөөнөт", value: "~1 жыл иштеди" },
          { label: "Роль", value: "Негиздөөчү" },
        ],
        overviewTitle: "Контекст",
        overview: [
          "Кытайдан товар алган кардарлар үчүн баалардын ачыктыгы жана посылкалардын жоголбой жетүүсү чоң маселе болчу.",
          "AIM Cargo ушул муктаждыкты чечүү үчүн Кытайдагы кампадан баштап Бишкекте колго тапшырууга чейинки толук кызматты аткарды.",
        ],
        solutionTitle: "Иш процесси",
        solution: [
          "Болжол менен бир жыл бою жүктөрдү кабыл алуу, салмак-көлөмүн эсептөө, чек арадан өткөрүү жана кардарларга берүү иштерин жүргүздүк.",
          "Бул тажрыйба реалдуу бизнес экономикасын, жоопкерчиликти жана кардарлар менен иштөөнү үйрөттү.",
        ],
        pipelineTitle: "Жеткирүү чынжыры",
        pipeline: [
          {
            title: "Кытайдагы кампа",
            desc: "Жүктөрдү кабыл алуу, текшерүү жана топтоо.",
          },
          {
            title: "Чек ара транзити",
            desc: "Кытай–Кыргызстан багыты боюнча ташууну координациялоо.",
          },
          {
            title: "Салмак эсеби",
            desc: "Тарифтерди эсептөө жана кардар тизмесин жүргүзүү.",
          },
          {
            title: "Бишкекте тапшыруу",
            desc: "500+ кг жүктү сорттоп кардарларга берүү.",
          },
        ],
        challengesTitle: "Практикалык сабактар",
        challenges: [
          {
            problem: "Чек арадагы кезектер",
            fix: "Мөөнөттөрдү алдын ала эсептеп, кардарларга так маалымат берип турдук.",
          },
          {
            problem: "Көп майда посылкаларды адаштырбоо",
            fix: "Трек-код жана салмак таблицасы боюнча так эсеп киргизилди.",
          },
        ],
        deliverablesTitle: "Жыйынтыктар",
        deliverables: [
          "500+ кг жүк ийгиликтүү жеткирилди",
          "~1 жылдык реалдуу операциялык тажрыйба",
          "Логистика жана кардарлар менен иштөө көндүмү",
        ],
      },
    },
  },
};
