/**
 * ARIET // PERSONAL ENGINEERING & ENTREPRENEURSHIP PORTFOLIO
 * Apple Cupertino Aesthetic - Interaction & Multi-Language Engine
 * Supported Languages: English (en), Русский (ru), Кыргызча (ky)
 */

// Safe Storage Helpers
function safeGetStorage(key, fallback = null) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const val = window.localStorage.getItem(key);
      return val !== null ? val : fallback;
    }
  } catch (e) {}
  return fallback;
}

function safeSetStorage(key, value) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch (e) {}
  return fallbackStorage = value;
}

let currentLang = 'en';

/* ==========================================================================
   MULTI-LANGUAGE LOCALIZATION DICTIONARY (EN, RU, KY)
   ========================================================================== */
const i18n = {
  en: {
    brand_badge: "AI & Automation Developer",
    nav_about: "About",
    nav_ocr: "AIM OCR",
    nav_anticheat: "Exam Platform",
    nav_projects: "Projects",
    nav_ai_tools: "AI Workflow",
    nav_competencies: "Skills",
    nav_journey: "Journey",
    nav_contact: "Contact",

    // Hero
    hero_pill: "11th-Grade Student • Developer • Entrepreneur",
    hero_headline: 'Building real-world products with<br><span class="gradient-text">AI, automation,</span> and software.',
    hero_subhead: "I am Ariet, an 11th-grade developer and entrepreneur based in Bishkek, Kyrgyzstan. Since 2023, I have been building software systems, AI-powered automations, and practical products that solve real-world problems for education, logistics, and businesses.",
    hero_btn_ocr: "Explore AIM OCR System",
    hero_btn_projects: "View All Projects",
    hero_btn_email: "Copy Contact Email",
    metric_years_desc: "Programming & Software Development",
    metric_sheets_desc: "Exam Sheets Automated in AALAM Schools",
    metric_schools_desc: "AALAM School Campuses Served",
    metric_cargo_desc: "Packages Delivered from China (AIM Cargo)",
    metric_founders_desc: "Founders in Cosmic Team (Restaurant POS)",

    // Vision & About
    vision_quote: "“I don't see AI only as a technology to study. I use modern AI tools as part of my daily development workflow to prototype, build, debug, and improve real products faster — combining hands-on programming with high-impact automation.”",
    author_role: "11th-Grade Student • AI & Automation Developer • Bishkek, Kyrgyzstan",
    lang_en_pill: "English",
    lang_ky_pill: "Kyrgyz (Native)",
    lang_ru_pill: "Russian (Fluent)",
    bio_tag: "About Me",
    bio_title: "Developer & Entrepreneur",
    bio_p1: "I am an 11th-grade student with big ambitions and a strong interest in Artificial Intelligence, software development, automation, and entrepreneurship.",
    bio_p2: "I have been programming since 2023 and have around 3 years of experience building software projects. My long-term goal is to study at university, continue sharpening my technical and entrepreneurial skills, and make a meaningful contribution to the technological development of Kyrgyzstan.",
    bio_footer: "Focus: <strong>Building practical products people actually use</strong>",

    // Philosophy
    phil_tag: "Development Philosophy",
    phil_title: "The 5-Question Product Framework",
    phil_desc: "I am interested not only in writing code, but in understanding real problems and creating useful solutions. When I work on any project, I evaluate it through five critical questions:",
    phil_q1: "What is the problem?",
    phil_q2: "Who experiences it?",
    phil_q3: "Can tech make it easier?",
    phil_q4: "Can it be automated?",
    phil_q5: "Can it be a real product?",
    phil_synergy: "Synergy: <strong>Technology + AI + Business + Entrepreneurship</strong>",

    // Flagship 1: AIM OCR
    ocr_eyebrow: "Flagship EdTech Automation",
    ocr_title: "AIM — EXAM OCR SYSTEM",
    ocr_lead: "Automated examination checking system developed for the AALAM school network (6 schools) in Kyrgyzstan to evaluate 20,000+ offline entrance examination sheets.",
    ocr_cap_badge: "AIM Exam OCR Production Workflow",
    ocr_cap_text: "Scanned Sheet → Subpixel Computer Vision Snapping → Instant Excel Output",
    ocr_flow_title: "End-to-End 6-Step Automated Workflow",
    ocr_flow_subtitle: "How AIM Exam OCR transforms physical paper tests into verified Excel results in seconds",
    ocr_team_badge: "Developed by Team of 2 • Ariet (Software & Automation)",
    ocr_s1_title: "Collect Sheets",
    ocr_s1_desc: "Physical examination answer sheets are collected from entrance test halls across 6 AALAM schools.",
    ocr_s2_title: "High-Speed Scan",
    ocr_s2_desc: "Batches of answer sheets are fed through high-speed sheetfed document scanners.",
    ocr_s3_title: "Image Transfer",
    ocr_s3_desc: "Scanned images are transferred directly to the processing computer running the AIM software.",
    ocr_s4_title: "CV Processing",
    ocr_s4_desc: "Hough alignment, homography rectification, and subpixel bubble snapping dynamically detect marked choices.",
    ocr_s5_title: "Auto Scoring",
    ocr_s5_desc: "Answers are scored against the official answer keys, generating scores and candidate IDs automatically.",
    ocr_s6_title: "Excel Export",
    ocr_s6_desc: "Final ranking, scores, and analytics are exported cleanly into a formatted Excel file for the school administration.",
    ocr_tag: "Applied Computer Vision",
    ocr_status: "In Production for AALAM",
    ocr_h3: "The Problem & The Automation Solution",
    ocr_desc: "AALAM schools conduct offline entrance examinations using physical paper answer sheets. More than 20,000 examination sheets needed to be evaluated. Checking such a vast volume manually would demand countless hours of tedious teacher labor with inevitable grading mistakes.",
    barrier_title: "The Problem",
    barrier_desc: "20,000+ paper answer sheets across 6 schools. Manual grading caused severe delays, teacher burnout, and error susceptibility.",
    solution_title: "The Engineering Solution",
    solution_desc: "Our 2-person team developed a custom desktop CV pipeline that digests scanner feeds, rectifies sheet tilt via homography, dynamically snaps to bubbles, and exports to Excel in real-time.",
    ocr_stat1_label: "Scale:",
    ocr_stat2_label: "Deployment:",
    omr_paper_title: "AALAM ENTRANCE EXAM SHEET",
    omr_paper_sub: "FORM #AALAM-2025 • OMR EVALUATION",
    btn_run_omr: "Run CV Evaluation",
    btn_tilt_omr: "Tilt Sheet",
    demo_initial_status: "Click bubbles to edit marks, or test sheet tilt",

    // Flagship 2: AIM Exam Website
    anticheat_eyebrow: "Online Examination Platform",
    anticheat_title: "AIM — EXAM WEBSITE",
    anticheat_lead: "Online entrance examination platform for AALAM schools featuring anti-cheating mechanisms, tab-switch monitoring, and AI-powered multi-person camera tracking.",
    anticheat_cap_badge: "AIM Exam Platform Proctoring",
    anticheat_cap_text: "Live Anti Tab-Switch Detection + AI Camera Face Tracking HUD",
    feat_tab_title: "Anti Tab-Switch Monitoring",
    feat_tab_desc: "The platform continuously monitors window blur and tab switching. If a candidate leaves the exam page, an amber modal warning is recorded. If repeated violations occur, the system can automatically disqualify the candidate.",
    feat_cam_title: "Camera Monitoring & Multi-Person AI",
    feat_cam_desc: "With camera permissions enabled, the platform streams the feed through client-side computer vision. If more than one person appears in the frame or the student looks away, an alert is triggered instantly.",
    sim_box_title: "Try Anti-Cheat Simulation:",
    sim_box_desc: "Test how the platform handles tab violations and camera events in real-time",
    sim_btn_tab: "Simulate Tab Switch",
    sim_btn_cam: "Simulate Multi-Person",

    // Projects Grid
    projects_eyebrow: "Practical Portfolio",
    projects_title: "Websites, Logistics & POS Systems",
    projects_lead: "Real projects solving real problems — from educational consulting web portals to cross-border China-Kyrgyzstan logistics and restaurant automation.",
    consult_tag: "Web Development & Consulting",
    consult_title: "CONSULTTEAM — Study Abroad Platform",
    consult_desc: "Developed a modern landing website for an educational consulting company helping students with applications and admission to universities abroad. Focused on clean presentation, university partner showcases, and conversion-oriented student consultation scheduling.",
    consult_meta1: "Domain: <strong>consulteam.edu.kg</strong>",
    consult_meta2: "Role: <strong>Full-Stack Web Developer</strong>",
    cargo_tag: "Logistics & Entrepreneurship",
    cargo_title: "AIM CARGO — Cross-Border Logistics Venture",
    cargo_desc: "Founded and operated a small logistics business delivering packages from Chinese marketplaces (Taobao, 1688, Pinduoduo) to customers in Kyrgyzstan. Transported over 500 kg of parcels over one year of operations.",
    cargo_callout: "<strong>Practical Business Experience:</strong> Sourcing with Chinese suppliers, customer service, customs clearance, package tracking, pricing strategy, and registering an individual business (ИП) in Kyrgyzstan.",
    cargo_meta1: "Duration: <strong>~1 Year Operation</strong>",
    cargo_meta2: "Volume: <strong>500+ kg Cargo Delivered</strong>",
    cosmic_tag: "B2B Restaurant Technology",
    cosmic_title: "COSMIC TEAM — Restaurant POS Software & Installation",
    cosmic_desc: "Cosmic Team was founded by me together with two friends to deliver modern technology solutions for restaurants in Kyrgyzstan, with a core focus on POS software.",
    cosmic_desc2: "Our work includes developing point-of-sale software, configuring dining room table mappings, integrating ESC/POS thermal printers, and installing turn-key solutions directly inside restaurants across Kyrgyzstan. Cosmic Team marks my transition from solo coding to building a tech company with real enterprise clients.",
    cosmic_meta1: "Founders: <strong>3 Team Members</strong>",
    cosmic_meta2: "Market: <strong>Restaurants across Kyrgyzstan</strong>",

    // AI Tools
    ai_eyebrow: "Next-Gen Development Workflow",
    ai_title: "AI-Assisted Development",
    ai_lead: "Modern AI tools are an integral part of my engineering toolkit — multiplying velocity, automating repetitive tasks, and accelerating real-world product delivery.",
    ai_antigravity_role: "Autonomous Engineering & Multi-file Systems",
    ai_antigravity_desc: "Leveraged for comprehensive codebase planning, architecture refactors, test verification, and automated paired development.",
    ai_claude_role: "Terminal-First Scripting & Refactoring",
    ai_claude_desc: "Used for rapid terminal debugging, deep reasoning across large codebases, and iterative backend script enhancements.",
    ai_codex_role: "Code Generation & Algorithm Optimization",
    ai_codex_desc: "Accelerates boilerplate drafting, API client structuring, and computer vision algorithmic transformations.",
    ai_n8n_role: "Workflow Automation & API Orchestration",
    ai_n8n_desc: "Connects business databases, customer alerts, webhook pipelines, and automatic data synchronization for operations.",
    ai_philosophy_quote: "“My approach is to combine my own programming and problem-solving skills with AI tools rather than treating AI as a replacement for understanding technology.”",
    chip1: "Prototype ideas in hours",
    chip2: "Write & improve code",
    chip3: "Debug complex issues",
    chip4: "Automate repetitive tasks",
    chip5: "Experiment with new tech",
    chip6: "Build products faster",
    chip7: "Integrate AI into real apps",

    // Skills
    comp_eyebrow: "Capabilities & Skills",
    comp_title: "Engineering & Business Toolkit",
    comp_lead: "Combining foundational programming languages, computer vision, AI-assisted development, and practical entrepreneurial execution.",
    comp_c1_title: "Programming Languages",
    comp_c2_title: "Development & Systems",
    comp_c3_title: "AI & Entrepreneurship",

    // Journey
    journey_eyebrow: "Milestones",
    journey_title: "My Journey (2023 – 2026)",
    journey_lead: "From first lines of code to building automated examination systems and co-founding real B2B tech businesses.",
    j_item5_place: "Bishkek • Restaurants",
    j_item5_title: "Co-Founder — Cosmic Team (Restaurant POS Solutions)",
    j_item5_desc: "Founded Cosmic Team together with two friends. Developing and installing turn-key POS software solutions for restaurants across Kyrgyzstan, transitioning from solo programming to leading a business-facing technology team.",
    j_item4_place: "China → Kyrgyzstan",
    j_item4_title: "Founder — AIM Cargo Logistics",
    j_item4_desc: "Created and operated a cross-border logistics business delivering packages from Chinese marketplaces to Kyrgyzstan. Transported over 500 kg of parcels and registered an individual business (ИП), acquiring invaluable hands-on entrepreneurship experience.",
    j_item3_place: "AALAM Schools • Bishkek",
    j_item3_title: "Software Engineer — AIM Exam OCR System & Website",
    j_item3_desc: "Co-developed automated examination checking for 6 AALAM schools, automating 20,000+ answer sheets. Created the AIM Exam Website with anti-tab switch detection and camera monitoring to ensure exam integrity.",
    j_item2_place: "Kyrgyzstan",
    j_item2_title: "Building Practical Projects & Exploring AI",
    j_item2_desc: "Started creating practical projects, experimenting with various technologies, backend tools, APIs, and modern AI-assisted development workflows.",
    j_item1_place: "Starting Out",
    j_item1_title: "Beginning the Programming Journey",
    j_item1_desc: "Started learning programming and exploring software development fundamentals with Python, web technologies, and computational problem solving.",

    // Vision
    future_quote: "“I want to become a strong technology professional and entrepreneur. My goal is not simply to write code. I want to identify meaningful problems, create technology-based solutions, and build products that people actually use — making a meaningful contribution to the technological development of Kyrgyzstan.”",
    future_name: "Ariet",
    future_role: "Building today. Learning every day. Thinking bigger about the future.",

    // Contact & Footer
    contact_eyebrow: "Get in Touch",
    contact_title: "Let’s Connect for Admissions, Projects & Collaboration",
    contact_desc: "I welcome inquiries from university admissions officers, mentors, collaborators, and tech partners. Based in Bishkek, Kyrgyzstan (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Click to copy →",
    contact_btn_tg: "Telegram: <strong>@thearchhe</strong>",
    chat_hint: "Direct message →",
    contact_btn_gh: "GitHub: <strong>github.com/Archezxxx</strong>",
    repo_hint: "View code →",
    form_name_label: "Full Name & Organization",
    form_email_label: "Email Address",
    form_msg_label: "Message or Project Inquiry",
    form_submit_btn: "Send Message",
    footer_text: "© 2026 Ariet. AI & Automation Developer • Building real-world products."
  },

  ru: {
    brand_badge: "AI & Automation Developer",
    nav_about: "Обо мне",
    nav_ocr: "AIM OCR",
    nav_anticheat: "Экзамены онлайн",
    nav_projects: "Проекты",
    nav_ai_tools: "ИИ-разработка",
    nav_competencies: "Навыки",
    nav_journey: "Траектория",
    nav_contact: "Контакты",

    // Hero
    hero_pill: "Ученик 11 класса • Разработчик • Предприниматель",
    hero_headline: 'Создаю реальные продукты с помощью<br><span class="gradient-text">ИИ, автоматизации</span> и программных решений.',
    hero_subhead: "Меня зовут Ариет. Я разработчик и предприниматель из Бишкека, ученик 11 класса. Программирую с 2023 года (~3 года опыта). Создаю полезные программные решения — от автоматической проверки экзаменов для школ Кыргызстана до POS-систем для ресторанов и международной логистики.",
    hero_btn_ocr: "Система AIM OCR",
    hero_btn_projects: "Все проекты",
    hero_btn_email: "Скопировать Email",
    metric_years_desc: "В программировании и разработке софта",
    metric_sheets_desc: "Бланков автоматизировано в сети «ААЛАМ»",
    metric_schools_desc: "Школ сети «ААЛАМ» используют систему",
    metric_cargo_desc: "Грузов доставлено из Китая (AIM Cargo)",
    metric_founders_desc: "Основателя в Cosmic Team (POS для ресторанов)",

    // Vision & About
    vision_quote: "«Я не рассматриваю искусственный интеллект просто как абстрактную технологию для изучения. Я использую современные ИИ-инструменты как часть ежедневного процесса разработки, чтобы быстрее прототипировать, писать код, находить ошибки и улучшать реальные продукты.»",
    author_role: "Ученик 11 класса • AI & Automation Developer • Бишкек, Кыргызстан",
    lang_en_pill: "English",
    lang_ky_pill: "Кыргызча (Эне тил)",
    lang_ru_pill: "Русский (Свободный)",
    bio_tag: "Обо мне",
    bio_title: "Разработчик и предприниматель",
    bio_p1: "Я ученик 11 класса с большими амбициями и глубоким интересом к искусственному интеллекту, разработке программного обеспечения, автоматизации и предпринимательству.",
    bio_p2: "Программирую с 2023 года, накопил около 3 лет опыта создания практических проектов. Моя долгосрочная цель — поступить в университет, продолжать развивать технические и предпринимательские навыки и внести значимый вклад в технологическое развитие Кыргызстана.",
    bio_footer: "Фокус: <strong>Создавать продукты, которыми реально пользуются люди</strong>",

    // Philosophy
    phil_tag: "Философия разработки",
    phil_title: "Продуктовый фреймворк из 5 вопросов",
    phil_desc: "Мне интересно не просто писать строки кода, а понимать реальную проблему и создавать полезное решение. Работая над любым проектом, я задаю себе 5 ключевых вопросов:",
    phil_q1: "В чем проблема?",
    phil_q2: "Кто с ней сталкивается?",
    phil_q3: "Поможет ли технология?",
    phil_q4: "Можно ли автоматизировать?",
    phil_q5: "Может ли стать продуктом?",
    phil_synergy: "Формула: <strong>Технологии + ИИ + Бизнес + Предпринимательство</strong>",

    // Flagship 1: AIM OCR
    ocr_eyebrow: "Флагманская автоматизация в EdTech",
    ocr_title: "AIM — EXAM OCR SYSTEM",
    ocr_lead: "Автоматизированная система проверки вступительных экзаменов для сети из 6 школ «ААЛАМ» в Кыргызстане (обработано 20,000+ бумажных бланков).",
    ocr_cap_badge: "Рабочий процесс AIM Exam OCR в школах",
    ocr_cap_text: "Сканирование бланков → Субпиксельный захват отметок → Мгновенный отчет в Excel",
    ocr_flow_title: "Полный автоматизированный конвейер из 6 этапов",
    ocr_flow_subtitle: "Как AIM Exam OCR превращает стопки бумажных экзаменов в проверенную ведомость за секунды",
    ocr_team_badge: "Разработано командой из 2 человек • Ариет (ПО и автоматизация)",
    ocr_s1_title: "Сбор бланков",
    ocr_s1_desc: "Физические экзаменационные листы собираются после проведения тестов в 6 школах «ААЛАМ».",
    ocr_s2_title: "Сканирование",
    ocr_s2_desc: "Пачки бланков пропускаются через скоростной поточный документ-сканер.",
    ocr_s3_title: "Передача в ПК",
    ocr_s3_desc: "Отсканированные изображения мгновенно передаются на компьютер с установленной программой.",
    ocr_s4_title: "Компьютерное зрение",
    ocr_s4_desc: "Алгоритм выравнивает лист по гомографии и динамически захватывает закрашенные кружки (допуск ±15px).",
    ocr_s5_title: "Подсчет баллов",
    ocr_s5_desc: "Ответы автоматически сверяются с ключами, рассчитываются первичные баллы и проценты.",
    ocr_s6_title: "Экспорт в Excel",
    ocr_s6_desc: "Итоговая ведомость с рейтингом учеников и ID автоматически формируется в файле Excel для руководства.",
    ocr_tag: "Прикладное компьютерное зрение",
    ocr_status: "Внедрено в сети школ «ААЛАМ»",
    ocr_h3: "Проблема и ее инженерное решение",
    ocr_desc: "Школы «ААЛАМ» проводят очные вступительные экзамены на бумажных листах ответов. Требовалось проверить свыше 20,000 бланков. Проверка такого объема вручную отняла бы у учителей колоссальное количество времени и неизбежно привела бы к ошибкам от переутомления.",
    barrier_title: "Проблема",
    barrier_desc: "20,000+ бланков в 6 школах. Ручная проверка занимала недели и требовала огромных усилий учителей.",
    solution_title: "Инженерное решение",
    solution_desc: "Наша команда из 2 человек разработала программу, которая обрабатывает сканы, выравнивает перекосы и мгновенно выгружает баллы в Excel.",
    ocr_stat1_label: "Масштаб:",
    ocr_stat2_label: "Внедрение:",
    omr_paper_title: "ВСТУПИТЕЛЬНЫЙ БЛАНК ШКОЛЫ «ААЛАМ»",
    omr_paper_sub: "ФОРМА №AALAM-2025 • ПРОВЕРКА OMR",
    btn_run_omr: "Запустить проверку алгоритмом",
    btn_tilt_omr: "Наклонить бланк",
    demo_initial_status: "Кликайте по кружкам для изменения отметок или наклоните бланк",

    // Flagship 2: AIM Exam Website
    anticheat_eyebrow: "Онлайн-платформа тестирования",
    anticheat_title: "AIM — EXAM WEBSITE",
    anticheat_lead: "Онлайн-платформа для вступительных экзаменов сети «ААЛАМ» со встроенной защитой от списывания, мониторингом вкладок и распознаванием лиц по веб-камере.",
    anticheat_cap_badge: "Интерфейс прокторинга AIM Exam Platform",
    anticheat_cap_text: "Детекция смены вкладок + ИИ-отслеживание посторонних лиц в кадре",
    feat_tab_title: "Защита от смены вкладок (Anti Tab-Switch)",
    feat_tab_desc: "Система фиксирует потерю фокуса и переход на другие вкладки браузера. Ученик получает предупреждение, а при повторных нарушениях система может автоматически снять кандидата с экзамена.",
    feat_cam_title: "Контроль камеры и детекция посторонних",
    feat_cam_desc: "Платформа анализирует видеопоток с камеры ученика через компьютерное зрение. Если в кадре появляется второй человек или ученик покидает место, система выдает предупреждение.",
    sim_box_title: "Симуляция защиты от списывания:",
    sim_box_desc: "Проверьте, как система реагирует на смену вкладок и события камеры в реальном времени",
    sim_btn_tab: "Симулировать смену вкладки",
    sim_btn_cam: "Симулировать постороннего",

    // Projects Grid
    projects_eyebrow: "Прикладные проекты",
    projects_title: "Веб-сервисы, логистика и автоматизация",
    projects_lead: "Реальные проекты для решения практических задач — от образовательного консалтинга до логистики из Китая и кассовых систем для ресторанов.",
    consult_tag: "Веб-разработка и консалтинг",
    consult_title: "CONSULTTEAM — Образовательный консалтинг",
    consult_desc: "Разработал современный сайт для образовательной консалтинговой компании, помогающей студентам с поступлением в зарубежные университеты. Презентация услуг компании через современный веб-интерфейс.",
    consult_meta1: "Домен: <strong>consulteam.edu.kg</strong>",
    consult_meta2: "Роль: <strong>Full-Stack веб-разработчик</strong>",
    cargo_tag: "Логистика и бизнес",
    cargo_title: "AIM CARGO — Доставка товаров из Китая",
    cargo_desc: "Создал и развивал малый логистический бизнес по доставке посылок с китайских маркетплейсов (Taobao, 1688, Pinduoduo) клиентам в Кыргызстан. За год работы перевезено свыше 500 кг посылок.",
    cargo_callout: "<strong>Практический бизнес-опыт:</strong> Работа с поставщиками из Китая, общение с клиентами, таможня, расчет цен, операционные процессы и регистрация индивидуального предпринимателя (ИП).",
    cargo_meta1: "Срок: <strong>Около 1 года работы</strong>",
    cargo_meta2: "Объем: <strong>500+ кг доставленных грузов</strong>",
    cosmic_tag: "B2B ресторанные технологии",
    cosmic_title: "COSMIC TEAM — ПО для автоматизации ресторанов (POS)",
    cosmic_desc: "Команда, основанная мной вместе с двумя друзьями. Мы разрабатываем и внедряем технологические решения для ресторанов Кыргызстана с фокусом на POS-софте.",
    cosmic_desc2: "Наша работа включает разработку кассового ПО, схему столов зала, интеграцию термопринтеров чеков (ESC/POS) и внедрение готовых решений в ресторанах. Cosmic Team — это шаг от индивидуального программирования к построению команды и работе с реальным B2B-бизнесом.",
    cosmic_meta1: "Основатели: <strong>3 участника команды</strong>",
    cosmic_meta2: "Рынок: <strong>Рестораны по всему Кыргызстану</strong>",

    // AI Tools
    ai_eyebrow: "Инструменты разработки нового поколения",
    ai_title: "AI-Assisted Development",
    ai_lead: "Современные ИИ-инструменты стали важнейшей частью моего процесса разработки — ускоряют создание продуктов, автоматизируют рутину и помогают создавать софт быстрее.",
    ai_antigravity_role: "Агентная разработка и сложные системы",
    ai_antigravity_desc: "Планирование архитектуры, глубокий рефакторинг кодовой базы, верификация и автономное парное программирование.",
    ai_claude_role: "Терминальный агент и скрипты",
    ai_claude_desc: "Быстрая отладка из терминала, глубокий анализ логики и доработка серверных скриптов.",
    ai_codex_role: "Генерация кода и алгоритмов",
    ai_codex_desc: "Быстрое прототипирование шаблонного кода, структуры API и вспомогательных алгоритмов компьютерного зрения.",
    ai_n8n_role: "Оркестрация процессов и API",
    ai_n8n_desc: "Визуальная автоматизация процессов, интеграция вебхуков, баз данных и оповещений клиентов.",
    ai_philosophy_quote: "«Мой подход заключается в том, чтобы объединять собственные навыки программирования и решения задач с инструментами ИИ, а не заменять искусственным интеллектом понимание технологий.»",
    chip1: "Прототипирование идей",
    chip2: "Написание и улучшение кода",
    chip3: "Отладка проектов",
    chip4: "Автоматизация рутины",
    chip5: "Эксперименты с технологиями",
    chip6: "Быстрый вывод продуктов",
    chip7: "Интеграция ИИ в реальные задачи",

    // Skills
    comp_eyebrow: "Навыки и компетенции",
    comp_title: "Технический и предпринимательский арсенал",
    comp_lead: "Синтез базовых языков программирования, прикладного компьютерного зрения, ИИ-инструментов и опыта запуска бизнеса.",
    comp_c1_title: "Языки программирования",
    comp_c2_title: "Разработка и системы",
    comp_c3_title: "ИИ и бизнес",

    // Journey
    journey_eyebrow: "Этапы развития",
    journey_title: "Мой путь (2023 – 2026)",
    journey_lead: "От первых строк кода до создания школьных автоматизированных комплексов и запуска технологических компаний.",
    j_item5_place: "Бишкек • Ресторанный бизнес",
    j_item5_title: "Сооснователь — Cosmic Team (POS-решения для ресторанов)",
    j_item5_desc: "Основал команду вместе с двумя друзьями. Разрабатываем и устанавливаем POS-софт для ресторанов по всему Кыргызстану, перейдя к работе с реальными B2B-клиентами.",
    j_item4_place: "Китай → Кыргызстан",
    j_item4_title: "Основатель — Логистика AIM Cargo",
    j_item4_desc: "Создал логистический проект по доставке посылок с китайских маркетплейсов в Кыргызстан. Перевезли более 500 кг грузов, зарегистрировал ИП и получил ценный опыт предпринимательства.",
    j_item3_place: "Школы «ААЛАМ» • Бишкек",
    j_item3_title: "Инженер-разработчик — Система AIM Exam OCR и сайт экзаменов",
    j_item3_desc: "В команде из 2 человек создал систему проверки 20,000+ бланков для 6 школ «ААЛАМ». Разработал онлайн-платформу тестирования с защитой от списывания и контролем камеры.",
    j_item2_place: "Кыргызстан",
    j_item2_title: "Создание проектов и освоение ИИ",
    j_item2_desc: "Начал создавать практические проекты, экспериментировать с технологиями, бэкендом, API и подходами к ИИ-ассистированной разработке.",
    j_item1_place: "Старт",
    j_item1_title: "Начало пути в программировании",
    j_item1_desc: "Начал изучать программирование, фундаментальные основы разработки софта на Python, веб-технологии и решение алгоритмических задач.",

    // Vision
    future_quote: "«Я хочу стать сильным техническим специалистом и предпринимателем. Моя цель — не просто писать код. Я хочу находить значимые проблемы, создавать технологические решения и строить продукты, которыми реально пользуются люди. И в будущем внести вклад в развитие Кыргызстана.»",
    future_name: "Ариет",
    future_role: "Создаю сегодня. Учусь каждый день. Мыслю масштабно о будущем.",

    // Contact & Footer
    contact_eyebrow: "Связь и сотрудничество",
    contact_title: "Контакты для университетов, проектов и сотрудничества",
    contact_desc: "Буду рад вопросам от представителей приемных комиссий университетов, наставников и потенциальных партнеров. Нахожусь в Бишкеке, Кыргызстан (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Скопировать →",
    contact_btn_tg: "Telegram: <strong>@thearchhe</strong>",
    chat_hint: "Написать сообщение →",
    contact_btn_gh: "GitHub: <strong>github.com/Archezxxx</strong>",
    repo_hint: "Открыть репозитории →",
    form_name_label: "Ваше имя и организация",
    form_email_label: "Электронная почта",
    form_msg_label: "Сообщение или предложение",
    form_submit_btn: "Отправить сообщение",
    footer_text: "© 2026 Ариет. AI & Automation Developer • Создание реальных продуктов."
  },

  ky: {
    brand_badge: "AI & Automation Developer",
    nav_about: "Мен жөнүндө",
    nav_ocr: "AIM OCR",
    nav_anticheat: "Онлайн сынак",
    nav_projects: "Долбоорлор",
    nav_ai_tools: "ЖИ-өнүктүрүү",
    nav_competencies: "Көндүмдөр",
    nav_journey: "Басып өткөн жол",
    nav_contact: "Байланыш",

    // Hero
    hero_pill: "11-класстын окуучусу • Программист • Ишкер",
    hero_headline: 'Жасалма интеллект, автоматташтыруу жана<br><span class="gradient-text">программалоо аркылуу</span> реалдуу өнүмдөрдү түзөм.',
    hero_subhead: "Менин атым Ариет. Бишкектеги 11-класстын окуучусу, программист жана ишкермин. 2023-жылдан бери программалоо менен алектенем (~3 жыл тажрыйба). Кыргызстандагы мектептердин кирүү сынактарын текшерүүдөн тартып ресторандык POS-системаларга жана эл аралык логистикага чейин чыныгы көйгөйлөрдү чечкен системаларды курам.",
    hero_btn_ocr: "AIM OCR системасы",
    hero_btn_projects: "Бардык долбоорлор",
    hero_btn_email: "Email көчүрүү",
    metric_years_desc: "Программалоо жана софт түзүү тажрыйбасы",
    metric_sheets_desc: "«ААЛАМ» мектептеринде автоматташтырылган баракча",
    metric_schools_desc: "«ААЛАМ» тармагынын мектептери системаны колдонот",
    metric_cargo_desc: "Кытайдан Кыргызстанга жеткирилген жүктөр (AIM Cargo)",
    metric_founders_desc: "Cosmic Team командасынын негиздөөчүлөрү (POS)",

    // Vision & About
    vision_quote: "«Мен жасалма интеллектти жөн гана окуй турган технология катары көрбөйм. Заманбап ЖИ куралдарын идеяларды тезирээк сынап көрүү, код жазуу, каталарды табуу жана реалдуу өнүмдөрдү жакшыртуу үчүн күнүмдүк ишимде активдүү колдоном.»",
    author_role: "11-класстын окуучусу • AI & Automation Developer • Бишкек, Кыргызстан",
    lang_en_pill: "English",
    lang_ky_pill: "Кыргызча (Эне тил)",
    lang_ru_pill: "Орус тили (Эркин)",
    bio_tag: "Мен жөнүндө",
    bio_title: "Программист жана ишкер",
    bio_p1: "Мен жасалма интеллектке, программалык камсыздоого, автоматташтырууга жана ишкердикке чоң кызыгуусу жана амбициясы бар 11-класстын окуучусумун.",
    bio_p2: "2023-жылдан бери программалоо менен алектенип келем. Менин негизги максатым — жогорку окуу жайына тапшырып, техникалык жана ишкердик жөндөмдөрүмдү өнүктүрүү жана Кыргызстандын технологиялык өнүгүүсүнө салым кошуу.",
    bio_footer: "Багыт: <strong>Адамдар чындыгында колдонгон пайдалуу өнүмдөрдү жаратуу</strong>",

    // Philosophy
    phil_tag: "Өнүктүрүү философиясы",
    phil_title: "5 суроодон турган өнүмдүк ыкма",
    phil_desc: "Мага жөн гана код жазуу эмес, реалдуу көйгөйдү түшүнүп, пайдалуу чечим табуу маанилүү. Ар бир долбоордо мен өзүмө 5 суроо берем:",
    phil_q1: "Көйгөй эмнеде?",
    phil_q2: "Ким бул көйгөйгө туш болот?",
    phil_q3: "Технология жеңилдете алабы?",
    phil_q4: "Автоматташтырууга болобу?",
    phil_q5: "Чыныгы өнүм боло алабы?",
    phil_synergy: "Формула: <strong>Технология + ЖИ + Бизнес + Ишкердик</strong>",

    // Flagship 1: AIM OCR
    ocr_eyebrow: "EdTech багытындагы негизги автоматташтыруу",
    ocr_title: "AIM — EXAM OCR SYSTEM",
    ocr_lead: "Кыргызстандагы «ААЛАМ» мектептер тармагынын 6 мектеби үчүн 20,000ден ашык кирүү сынак баракчаларын автоматтык түрдө текшерүүчү программалык система.",
    ocr_cap_badge: "AIM Exam OCR иштөө процесси",
    ocr_cap_text: "Баракты сканерлөө → Компьютердик көрүү менен тегерекчелерди табуу → Excel'ге дароо чыгаруу",
    ocr_flow_title: "6 баскычтуу автоматташтырылган конвейер",
    ocr_flow_subtitle: "AIM Exam OCR кагаз сынактарды секунданын ичинде такталган Excel жыйынтыктарына кантип айландырат",
    ocr_team_badge: "2 адамдан турган команда түзгөн • Ариет (Программа жана автоматташтыруу)",
    ocr_s1_title: "Барактарды чогултуу",
    ocr_s1_desc: "«ААЛАМ» тармагындагы 6 мектептен бүткөн тест баракчалары чогултулат.",
    ocr_s2_title: "Ыкчам сканерлөө",
    ocr_s2_desc: "Жооп баракчалары ылдам документ-сканер аркылуу санариптештирилет.",
    ocr_s3_title: "Компьютерге өткөрүү",
    ocr_s3_desc: "Сканерленген сүрөттөр AIM программасы орнотулган компьютерге өткөрүлөт.",
    ocr_s4_title: "Компьютердик көрүү",
    ocr_s4_desc: "Алгоритм барактын кыйшаюусун түздөп, боёлгон тегерекчелерди субпикселдик тактык менен кармайт (±15px).",
    ocr_s5_title: "Баллды эсептөө",
    ocr_s5_desc: "Жооптор туура ачкычтар менен салыштырылып, упайлар автоматтык түрдө эсептелет.",
    ocr_s6_title: "Excel'ге экспорттоо",
    ocr_s6_desc: "Акыркы баалар жана окуучулардын рейтинги мектеп жетекчилиги үчүн даяр Excel файлына чыгарылат.",
    ocr_tag: "Колдонмо компьютердик көрүү",
    ocr_status: "«ААЛАМ» мектептеринде колдонулууда",
    ocr_h3: "Көйгөй жана инженердик чечим",
    ocr_desc: "«ААЛАМ» мектептери кирүү сынактарын кагаз баракчаларында өткөрөт. 20,000ден ашык баракты текшерүү керек болгон. Мынчалык көп баракты кол менен текшерүү мугалимдердин көп убактысын алып, чарчоодон улам каталарга алып келмек.",
    barrier_title: "Көйгөй",
    barrier_desc: "6 мектепте 20,000ден ашуун баракча. Кол менен текшерүү жумаларды талап кылып, ката кетирүү коркунучу жогору эле.",
    solution_title: "Инженердик чечим",
    solution_desc: "Биздин 2 адамдан турган команда сканерден өткөн сүрөттөрдү түздөп, белгилерди таап, жыйынтыкты Excel'ге чыгарган программаны иштеп чыкты.",
    ocr_stat1_label: "Масштаб:",
    ocr_stat2_label: "Ишке киргизүү:",
    omr_paper_title: "«ААЛАМ» МЕКТЕБИНИН КИРҮҮ СЫНАК БАРАКЧАСЫ",
    omr_paper_sub: "ФОРМА №AALAM-2025 • OMR ТЕКШЕРҮҮ",
    btn_run_omr: "Алгоритмди текшерүү",
    btn_tilt_omr: "Баракты кыйшайтуу",
    demo_initial_status: "Жоопторду белгилөө үчүн тегерекчелерди басыңыз же баракты кыйшайтыңыз",

    // Flagship 2: AIM Exam Website
    anticheat_eyebrow: "Онлайн сынак платформасы",
    anticheat_title: "AIM — EXAM WEBSITE",
    anticheat_lead: "«ААЛАМ» мектептери үчүн көчүрүүгө каршы коргоосу, браузер өтмөктөрүн көзөмөлдөө жана камера аркылуу бөтөн адамдарды аныктоо функциялары бар онлайн платформа.",
    anticheat_cap_badge: "AIM Exam онлайн прокторинг интерфейси",
    anticheat_cap_text: "Браузер өтмөгүн алмаштырууну көзөмөлдөө + Камера аркылуу адамдарды таануу",
    feat_tab_title: "Өтмөктү алмаштыруудан коргоо (Anti Tab-Switch)",
    feat_tab_desc: "Система окуучунун тест барагынан башка өтмөккө өтүшүн дароо каттайт. Эскертүү берилет, ал эми эреже бир нече жолу бузулса, система окуучуну сынактан чыгарып коё алат.",
    feat_cam_title: "Камера көзөмөлү жана ЖИ аркылуу таануу",
    feat_cam_desc: "Платформа камерадагы видеону компьютердик көрүү аркылуу текшерет. Эгерде кадрда экинчи адам пайда болсо, окуучуга дароо эскертүү берилет.",
    sim_box_title: "Көчүрүүгө каршы симуляцияны байкап көрүңүз:",
    sim_box_desc: "Өтмөк алмашканда же камерада бөтөн адам пайда болгондо система кандай иштээрин көрүңүз",
    sim_btn_tab: "Өтмөк алмаштырууну симуляциялоо",
    sim_btn_cam: "Экинчи адамды симуляциялоо",

    // Projects Grid
    projects_eyebrow: "Практикалык долбоорлор",
    projects_title: "Веб-сайттар, логистика жана POS системалар",
    projects_lead: "Чыныгы көйгөйлөрдү чечкен долбоорлор — билим берүү консалтингинен Кытай логистикасына жана ресторандарды автоматташтырууга чейин.",
    consult_tag: "Веб-иштеп чыгуу жана консалтинг",
    consult_title: "CONSULTTEAM — Чет өлкөдө билим алуу платформасы",
    consult_desc: "Чет өлкөлүк ЖОЖдорго тапшырууга көмөктөшкөн билим берүү консалтинг компаниясы үчүн заманбап лендинг сайт иштеп чыктым. Компаниянын кызматтарын жана өнөктөш университеттерин заманбап интерфейс аркылуу тааныштырат.",
    consult_meta1: "Домен: <strong>consulteam.edu.kg</strong>",
    consult_meta2: "Ролу: <strong>Full-Stack веб-программист</strong>",
    cargo_tag: "Логистика жана ишкердик",
    cargo_title: "AIM CARGO — Кытайдан жүк жеткирүү бизнеси",
    cargo_desc: "Кытай маркетплейстеринен (Taobao, 1688, Pinduoduo) Кыргызстандагы кардарларга посылкаларды жеткирүүчү чакан логистикалык бизнести негиздеп, иштеттим. Бир жылдын ичинде 500 кг ашык жүк ташылды.",
    cargo_callout: "<strong>Практикалык бизнес тажрыйба:</strong> Кытайлык жеткирүүчүлөр менен иштөө, кардарлар менен баарлашуу, бажы, баа коюу, логистикалык процесстер жана жеке ишкердикти (ИП) каттоо.",
    cargo_meta1: "Мөөнөт: <strong>1 жылдай иштеди</strong>",
    cargo_meta2: "Көлөм: <strong>500+ кг жеткирилген жүк</strong>",
    cosmic_tag: "B2B ресторандык технологиялар",
    cosmic_title: "COSMIC TEAM — Ресторандар үчүн POS программалары",
    cosmic_desc: "Эки досум менен биргеликте түзгөн команда. Биз Кыргызстандагы ресторандар үчүн POS программаларын иштеп чыгуу жана орнотуу боюнча технологиялык чечимдерди сунуштайбыз.",
    cosmic_desc2: "Биздин иш кассалык программаны жазууну, залдагы үстөлдөрдүн схемасын түзүүнү, термопринтерлерди (ESC/POS) кошууну жана даяр чечимдерди ресторандарга орнотууну камтыйт. Cosmic Team — жеке программалоодон команда курууга жана чыныгы бизнес менен иштешүүгө карай чоң кадам.",
    cosmic_meta1: "Негиздөөчүлөр: <strong>3 команда мүчөсү</strong>",
    cosmic_meta2: "Базар: <strong>Кыргызстан боюнча ресторандар</strong>",

    // AI Tools
    ai_eyebrow: "Жаңы муундагы иштеп чыгуу куралдары",
    ai_title: "AI-Assisted Development",
    ai_lead: "Заманбап ЖИ куралдары менин күнүмдүк ишимдин маанилүү бөлүгү — өнүмдөрдү тезирээк чыгарууга, рутинаны автоматташтырууга жана софтту тез курууга шарт түзөт.",
    ai_antigravity_role: "Агенттик өнүктүрүү жана татаал системалар",
    ai_antigravity_desc: "Архитектураны пландаштыруу, кодду комплекстүү рефакторинг кылуу жана автоматташтырылган жупташып иштөө.",
    ai_claude_role: "Терминалдык агент жана скрипттер",
    ai_claude_desc: "Терминалдан тез оңдоо, логиканы терең талдоо жана сервердик скрипттерди өркүндөтүү.",
    ai_codex_role: "Код жана алгоритм генерациясы",
    ai_codex_desc: "Шаблондуу коддорду, API түзүмдөрүн жана компьютердик көрүү алгоритмдерин тез жазуу.",
    ai_n8n_role: "Процесстерди жана API'лерди байланыштыруу",
    ai_n8n_desc: "Визуалдык автоматташтыруу, вебхуктар, маалымат базалары жана кардарларга билдирүү жөнөтүү.",
    ai_philosophy_quote: "«Менин мамилем — ЖИ менен технологияны түшүнүүнү алмаштыруу эмес, өзүмдүн программалоо жана ойлонуу жөндөмүмдү ЖИ куралдары менен күчөтүү.»",
    chip1: "Идеяларды тез сынап көрүү",
    chip2: "Кодду жазуу жана жакшыртуу",
    chip3: "Каталарды табуу жана оңдоо",
    chip4: "Бир өңчөй ишти автоматташтыруу",
    chip5: "Жаңы технологияларды өздөштүрүү",
    chip6: "Өнүмдөрдү тезирээк ишке киргизүү",
    chip7: "ЖИни реалдуу ишке кошуу",

    // Skills
    comp_eyebrow: "Жөндөмдөр жана даярдык",
    comp_title: "Техникалык жана ишкердик арсенал",
    comp_lead: "Программалоо тилдеринин, компьютердик көрүүнүн, заманбап ЖИ куралдарынын жана бизнес ачуу тажрыйбасынын айкалышы.",
    comp_c1_title: "Программалоо тилдери",
    comp_c2_title: "Өнүктүрүү жана системалар",
    comp_c3_title: "ЖИ жана ишкердик",

    // Journey
    journey_eyebrow: "Негизги этаптар",
    journey_title: "Менин жолум (2023 – 2026)",
    journey_lead: "Алгачкы коддон баштап мектептердин автоматташтырылган системаларына жана жеке компанияларды негиздөөгө чейин.",
    j_item5_place: "Бишкек • Ресторандар",
    j_item5_title: "Тең-негиздөөчү — Cosmic Team (Ресторандар үчүн POS)",
    j_item5_desc: "Эки досум менен бирге түзгөн команда. Кыргызстан боюнча ресторандарга POS программаларын иштеп чыгып орнотуудабыз. Чыныгы B2B кардарлар менен иштешүү тажрыйбасы.",
    j_item4_place: "Кытай → Кыргызстан",
    j_item4_title: "Негиздөөчү — AIM Cargo логистикасы",
    j_item4_desc: "Кытай маркетплейстеринен Кыргызстанга жүк жеткирүү бизнесин ачтым. 500 кг ашык жүктөрдү ташып, жеке ишкердикти каттап, чоң бизнес тажрыйбасына ээ болдум.",
    j_item3_place: "«ААЛАМ» мектептери • Бишкек",
    j_item3_title: "Инженер-программист — AIM Exam OCR системасы жана веб-платформасы",
    j_item3_desc: "2 адамдан турган командада 6 «ААЛАМ» мектеби үчүн 20,000ден ашык баракты автоматтык текшерүү системасын жана көчүрүүгө каршы корголгон онлайн сынак сайтын түздүм.",
    j_item2_place: "Кыргызстан",
    j_item2_title: "Долбоорлорду куруу жана ЖИ куралдарын өздөштүрүү",
    j_item2_desc: "Практикалык долбоорлорду жаратып, ар кандай технологиялар, бэкенд, API жана ЖИ-өнүктүрүү ыкмалары менен тажрыйба жүргүздүм.",
    j_item1_place: "Башталышы",
    j_item1_title: "Программалоо дүйнөсүнө кадам",
    j_item1_desc: "Python тилин, веб-технологияларды жана алгоритмдерди үйрөнүп, программалоонун пайдубалын түптөдүм.",

    // Vision
    future_quote: "«Мен күчтүү технологиялык адис жана ишкер болгум келет. Менин максатым жөн гана код жазуу эмес. Чыныгы маанилүү көйгөйлөрдү таап, технологиялык чечимдерди түзүп, адамдар чындыгында колдонгон өнүмдөрдү кургум келет. Ал эми келечекте Кыргызстандын өнүгүүсүнө өз салымымды кошууну каалайм.»",
    future_name: "Ариет",
    future_role: "Бүгүн жаратып, күн сайын үйрөнүп, келечекке масштабдуу карайм.",

    // Contact & Footer
    contact_eyebrow: "Байланышуу",
    contact_title: "ЖОЖго тапшыруу, долбоорлор жана кызматташуу боюнча байланыш",
    contact_desc: "Университеттердин кабыл алуу өкүлдөрүнүн, насаатчылардын жана өнөктөштөрдүн суроолорун кубануу менен кабыл алам. Бишкек шаарындамын (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Көчүрүү →",
    contact_btn_tg: "Telegram: <strong>@thearchhe</strong>",
    chat_hint: "Билдирүү жазуу →",
    contact_btn_gh: "GitHub: <strong>github.com/Archezxxx</strong>",
    repo_hint: "Коддорду көрүү →",
    form_name_label: "Аты-жөнүңүз жана мекемеңиз",
    form_email_label: "Электрондук дарегиңиз",
    form_msg_label: "Билдирүү же сунуш",
    form_submit_btn: "Билдирүү жөнөтүү",
    footer_text: "© 2026 Ариет. AI & Automation Developer • Чыныгы өнүмдөрдү түзүү."
  }
};

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const inits = [
    initLanguage,
    initMobileNav,
    initTheme,
    initSoundEngine,
    initAppleOmrDemo,
    initAntiCheatSimulation,
    initContactActions,
    initLiquidGlassButtons,
    initScrollAnimations,
    initHeaderScrollEffect,
    initActiveNavScrollspy
  ];

  inits.forEach(fn => {
    try {
      fn();
    } catch (err) {
      console.warn('Init failed in ' + fn.name + ':', err);
    }
  });
});

/* ==========================================================================
   1. MULTI-LANGUAGE SYSTEM
   ========================================================================== */
function initLanguage() {
  const savedLang = safeGetStorage('ariet_lang', 'en');
  setLanguage(savedLang);

  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && i18n[targetLang]) {
        setLanguage(targetLang);
        playTastefulClick(560);
      }
    });
  });
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  safeSetStorage('ariet_lang', lang);

  // Set html lang
  document.documentElement.setAttribute('lang', lang === 'ky' ? 'ky' : (lang === 'ru' ? 'ru' : 'en'));

  // Update active pill state
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to all data-i18n elements
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

/* ==========================================================================
   1.1 MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggle || !drawer) return;

  const openIcon = toggle.querySelector('.icon-menu-open');
  const closeIcon = toggle.querySelector('.icon-menu-close');

  function setDrawerState(open) {
    if (open) {
      drawer.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      if (openIcon) openIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'block';
    } else {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      if (openIcon) openIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('active');
    setDrawerState(!isOpen);
    playTastefulClick(isOpen ? 440 : 520);
  });

  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      setDrawerState(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !toggle.contains(e.target)) {
      setDrawerState(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      setDrawerState(false);
    }
  });
}

/* ==========================================================================
   2. APPLE THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = safeGetStorage('ariet_apple_theme', 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    safeSetStorage('ariet_apple_theme', nextTheme);
    playTastefulClick(isLight ? 420 : 540);
  });
}

/* ==========================================================================
   3. TASTEFUL INTERFACE AUDIO
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initSoundEngine() {
  const soundBtn = document.getElementById('sound-toggle');
  const stored = safeGetStorage('ariet_sound_enabled');
  if (stored !== null) {
    soundEnabled = stored === 'true';
  }
  updateSoundIcon(soundBtn);

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      safeSetStorage('ariet_sound_enabled', soundEnabled);
      updateSoundIcon(soundBtn);
      if (soundEnabled) playTastefulClick(600);
    });
  }

  document.querySelectorAll('button, .nav-item-link, .contact-pill-btn').forEach(el => {
    el.addEventListener('click', () => {
      if (soundEnabled) playTastefulClick(500);
    });
  });
}

function updateSoundIcon(btn) {
  if (!btn) return;
  btn.innerHTML = soundEnabled
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
}

function playTastefulClick(freq = 480) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      if (AudioClass) audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {}
}

/* ==========================================================================
   4. APPLE-STYLE AIM.EXAM COMPUTER VISION LAB
   ========================================================================== */
function initAppleOmrDemo() {
  const col1 = document.getElementById('sheet-col-1');
  const col2 = document.getElementById('sheet-col-2');
  const runBtn = document.getElementById('run-omr-demo');
  const tiltBtn = document.getElementById('tilt-omr-demo');
  const paper = document.getElementById('omr-paper');
  const statusText = document.getElementById('demo-status-text');

  if (!col1 || !col2 || !runBtn || !paper) return;

  const answerKey = ['A', 'C', 'B', 'D', 'A', 'B', 'D', 'C', 'A', 'B'];
  const userAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'A', 'B'];

  let currentAngle = 0;
  const tiltAngles = [0, -6, 8, -10, 5];
  let tiltIndex = 0;

  function renderSheet() {
    col1.innerHTML = '';
    col2.innerHTML = '';

    for (let q = 1; q <= 10; q++) {
      const targetCol = q <= 5 ? col1 : col2;
      const row = document.createElement('div');
      row.className = 'bubble-row';

      const label = document.createElement('div');
      label.className = 'q-label';
      label.textContent = `${q}.`;

      const group = document.createElement('div');
      group.className = 'bubble-group';

      ['A', 'B', 'C', 'D'].forEach(letter => {
        const bubble = document.createElement('div');
        bubble.className = 'apple-bubble';
        bubble.textContent = letter;
        bubble.dataset.q = q;
        bubble.dataset.val = letter;

        if (userAnswers[q - 1] === letter) {
          bubble.classList.add('filled');
        }

        bubble.addEventListener('click', () => {
          if (userAnswers[q - 1] === letter) {
            userAnswers[q - 1] = null;
            bubble.classList.remove('filled');
          } else {
            userAnswers[q - 1] = letter;
            targetCol.querySelectorAll(`[data-q="${q}"]`).forEach(b => b.classList.remove('filled'));
            bubble.classList.add('filled');
          }
          clearEvaluation();
          playTastefulClick(520);
        });

        group.appendChild(bubble);
      });

      row.appendChild(label);
      row.appendChild(group);
      targetCol.appendChild(row);
    }
  }

  renderSheet();

  function clearEvaluation() {
    document.querySelectorAll('.apple-bubble').forEach(b => {
      b.classList.remove('eval-correct', 'eval-wrong');
    });
    if (statusText) {
      if (currentLang === 'ky') {
        statusText.textContent = 'Жооптор өзгөрдү. Баалоо үчүн "Алгоритмди текшерүү" баскычын басыңыз.';
      } else if (currentLang === 'ru') {
        statusText.textContent = 'Отметки изменены. Нажмите "Запустить проверку алгоритмом".';
      } else {
        statusText.textContent = 'Marks updated. Click "Run CV Evaluation" to test.';
      }
    }
  }

  tiltBtn.addEventListener('click', () => {
    tiltIndex = (tiltIndex + 1) % tiltAngles.length;
    currentAngle = tiltAngles[tiltIndex];
    paper.style.transform = `rotate(${currentAngle}deg)`;
    clearEvaluation();
    if (statusText) {
      if (currentLang === 'ky') {
        statusText.textContent = `Барак ${currentAngle > 0 ? '+' : ''}${currentAngle}° кыйшайтылды (Сканердеги кагаздын бурулушу)`;
      } else if (currentLang === 'ru') {
        statusText.textContent = `Бланк наклонен на ${currentAngle > 0 ? '+' : ''}${currentAngle}° (Имитация перекоса сканера)`;
      } else {
        statusText.textContent = `Sheet tilted by ${currentAngle > 0 ? '+' : ''}${currentAngle}° (Simulating scanner tilt)`;
      }
    }
    playTastefulClick(380);
  });

  let isEvaluating = false;
  runBtn.addEventListener('click', () => {
    if (isEvaluating) return;
    isEvaluating = true;
    runBtn.disabled = true;

    const msgStep1 = currentLang === 'ky' ? '1/3-баскыч: Хаф алгоритми менен бурчтук белгилерди табуу...' : (currentLang === 'ru' ? 'Этап 1/3: Преобразование Хафа и поиск меток...' : 'Step 1/3: Hough Transform fiducial detection...');
    const msgStep2 = currentLang === 'ky' ? '2/3-баскыч: 4 чекиттүү гомография менен баракты түздөө...' : (currentLang === 'ru' ? 'Этап 2/3: 4-точечная гомография и выравнивание листа...' : 'Step 2/3: Applying 4-point homography rectification...');
    const msgStep3 = currentLang === 'ky' ? '3/3-баскыч: Субпикселдик тегерекчелерди кармоо (±15px)...' : (currentLang === 'ru' ? 'Этап 3/3: Динамический субпиксельный захват отметок (±15px)...' : 'Step 3/3: Dynamic subpixel bubble snapping (±15px)...');

    statusText.textContent = msgStep1;
    playTastefulClick(440);

    setTimeout(() => {
      statusText.textContent = msgStep2;
      paper.style.transform = 'rotate(0deg)';
      playTastefulClick(520);

      setTimeout(() => {
        statusText.textContent = msgStep3;
        playTastefulClick(600);

        setTimeout(() => {
          let score = 0;

          for (let q = 1; q <= 10; q++) {
            const userChoice = userAnswers[q - 1];
            const correctChoice = answerKey[q - 1];

            if (userChoice) {
              const bubbleEl = document.querySelector(`.apple-bubble[data-q="${q}"][data-val="${userChoice}"]`);
              if (userChoice === correctChoice) {
                score++;
                if (bubbleEl) bubbleEl.classList.add('eval-correct');
              } else {
                if (bubbleEl) bubbleEl.classList.add('eval-wrong');
              }
            }
          }

          if (currentLang === 'ky') {
            statusText.innerHTML = `<strong>Жыйынтык:</strong> ${score}/10 туура (${score * 10}%). Кыйшаюу ${currentAngle}° түздөлдү. Excel'ге даяр.`;
          } else if (currentLang === 'ru') {
            statusText.innerHTML = `<strong>Результат:</strong> ${score}/10 верно (${score * 10}%). Перекос ${currentAngle}° выровнен. Готово к выгрузке в Excel.`;
          } else {
            statusText.innerHTML = `<strong>Result:</strong> ${score}/10 correct (${score * 10}%). Rectified from ${currentAngle}°. Ready for Excel export.`;
          }

          runBtn.disabled = false;
          isEvaluating = false;
          playTastefulClick(720);
        }, 400);
      }, 400);
    }, 400);
  });
}

/* ==========================================================================
   4.1 ANTI-CHEAT SIMULATION SANDBOX
   ========================================================================== */
function initAntiCheatSimulation() {
  const btnTab = document.getElementById('btn-sim-tab');
  const btnCam = document.getElementById('btn-sim-cam');

  if (btnTab) {
    btnTab.addEventListener('click', () => {
      playTastefulClick(320);
      showSecurityModal(
        currentLang === 'ky' ? 'Өтмөк алмаштыруу эскертүүсү (1/3)' : (currentLang === 'ru' ? 'Предупреждение: Смена вкладки (1/3)' : 'Anti Tab-Switch Warning (1/3)'),
        currentLang === 'ky' ? 'Сиз сынак барагынан башка терезеге өттүңүз. Прокторинг сервери бул аракетти каттады. Кайталанса сынак автоматтык түрдө токтотулат.' : (currentLang === 'ru' ? 'Зафиксирован уход с экзаменационной страницы. Сервер прокторинга зафиксировал нарушение. Повторные попытки приведут к снятию с экзамена.' : 'Candidate navigated away from the active examination window. Tab switching is logged on the proctor server. Further violations will trigger automatic disqualification.'),
        '#FF9500'
      );
    });
  }

  if (btnCam) {
    btnCam.addEventListener('click', () => {
      playTastefulClick(300);
      showSecurityModal(
        currentLang === 'ky' ? 'Камера көзөмөлү: Бөтөн адам аныкталды' : (currentLang === 'ru' ? 'Контроль камеры: Обнаружен второй человек' : 'Camera Proctored Alert: Multiple Persons Detected'),
        currentLang === 'ky' ? 'Камера кадрында бирден көп адам аныкталды. Сынактын таза өтүшү үчүн бөлмөдө жалгыз болушуңуз зарыл.' : (currentLang === 'ru' ? 'Система компьютерного зрения обнаружила более одного лица в кадре веб-камеры. Пожалуйста, убедитесь, что вы одни в комнате.' : 'The client-side computer vision detected more than 1 face in the camera frame. Please ensure you are alone in the room to maintain exam integrity.'),
        '#FF3B30'
      );
    });
  }
}

function showSecurityModal(title, message, accentColor = '#0071E3') {
  const existing = document.getElementById('security-sim-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'security-sim-modal';
  backdrop.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeInModal 0.2s ease forwards;
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: var(--bg-card);
    border: 1px solid var(--border-medium);
    border-radius: var(--radius-lg);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    max-width: 440px;
    width: 100%;
    padding: 28px;
    text-align: center;
    position: relative;
    transform: scale(0.95);
    animation: scaleUpModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  `;

  modal.innerHTML = `
    <div style="width: 48px; height: 48px; border-radius: 50%; background: ${accentColor}1A; color: ${accentColor}; margin: 0 auto 16px; display: grid; place-items: center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    </div>
    <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; color: var(--text-primary);">${escapeHtml(title)}</h3>
    <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 24px;">${escapeHtml(message)}</p>
    <button id="close-sec-modal" class="btn-apple-primary" style="width: 100%; justify-content: center;">
      <span>${currentLang === 'ky' ? 'Түшүндүм, сынакка кайтуу' : (currentLang === 'ru' ? 'Понятно, вернуться к экзамену' : 'Acknowledge & Return')}</span>
    </button>
  `;

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  const closeBtn = modal.querySelector('#close-sec-modal');
  closeBtn.addEventListener('click', () => {
    backdrop.remove();
    playTastefulClick(560);
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.remove();
    }
  });
}

/* ==========================================================================
   5. CONTACT ACTIONS & TOAST NOTIFICATIONS
   ========================================================================== */
function initContactActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            const copiedMsg = currentLang === 'ky' ? `Көчүрүлдү: ${text}` : (currentLang === 'ru' ? `Скопировано: ${text}` : `Copied to clipboard: ${text}`);
            showAppleToast(copiedMsg);
            playTastefulClick(620);
          }).catch(() => fallbackCopy(text));
        } else {
          fallbackCopy(text);
        }
      }
    });
  });

  function fallbackCopy(text) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      const copiedMsg = currentLang === 'ky' ? `Көчүрүлдү: ${text}` : (currentLang === 'ru' ? `Скопировано: ${text}` : `Copied: ${text}`);
      showAppleToast(copiedMsg);
      playTastefulClick(620);
    } catch (e) {
      showAppleToast(text);
    }
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('msg-name').value;
      const email = document.getElementById('msg-email').value;
      const text = document.getElementById('msg-text').value;

      if (!name || !email || !text) {
        const warnMsg = currentLang === 'ky' ? 'Бардык талааларды толтуруңуз.' : (currentLang === 'ru' ? 'Пожалуйста, заполните все поля.' : 'Please complete all message fields.');
        showAppleToast(warnMsg);
        return;
      }

      const mailto = `mailto:ariet5656@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(text + '\n\nFrom: ' + email)}`;
      window.location.href = mailto;
      const openMsg = currentLang === 'ky' ? 'Почта программасы ачылууда...' : (currentLang === 'ru' ? 'Открытие почтовой программы...' : 'Opening email client for dispatch...');
      showAppleToast(openMsg);
      form.reset();
      playTastefulClick(640);
    });
  }
}

function showAppleToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0071E3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.96)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   6. AUTHENTIC APPLE LIQUID GLASS BUTTON INTERACTIONS
   ========================================================================== */
function initLiquidGlassButtons() {
  const liquidSelectors = [
    '.btn-apple-primary',
    '.btn-apple-secondary',
    '.btn-apple-icon',
    '.btn-demo-run',
    '.btn-demo-tilt',
    '.sim-btn-trigger',
    '.contact-pill-btn',
    '.lang-pill-btn'
  ];

  const buttons = document.querySelectorAll(liquidSelectors.join(', '));

  buttons.forEach(btn => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);
      btn.style.setProperty('--glare-opacity', '1');
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.setProperty('--glare-opacity', '0');
    });

    btn.addEventListener('pointerdown', (e) => {
      if (btn.disabled) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'liquid-glass-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      btn.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });
}

/* ==========================================================================
   7. MINIMAL SCROLL REVEALS & APPLE MOTION DYNAMICS
   ========================================================================== */
function initScrollAnimations() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const targets = document.querySelectorAll(`
    .section-header-centered,
    .metric-pill-card,
    .vision-banner-card,
    .apple-showcase-card,
    .ocr-workflow-wrapper,
    .anticheat-feature-card,
    .ai-tool-card,
    .ai-philosophy-banner,
    .bento-box,
    .skill-apple-card,
    .timeline-card-apple,
    .contact-apple-shell
  `);

  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('reveal-on-scroll');
  });

  const grids = document.querySelectorAll('.metrics-strip, .ocr-steps-grid, .apple-bento-grid, .skills-apple-grid, .ai-workflow-grid');
  grids.forEach(grid => {
    const children = grid.querySelectorAll('.metric-pill-card, .ocr-step-card, .bento-box, .skill-apple-card, .ai-tool-card');
    children.forEach((child, i) => {
      const delayClass = `reveal-delay-${(i % 4) + 1}`;
      child.classList.add(delayClass);
    });
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ==========================================================================
   8. STICKY HEADER DYNAMIC ELEVATION
   ========================================================================== */
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const updateHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();
}

/* ==========================================================================
   9. ACTIVE NAVIGATION SCROLLSPY
   ========================================================================== */
function initActiveNavScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item-link');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');
  if (!sections.length || !navLinks.length) return;

  let ticking = false;
  const checkActiveSection = () => {
    const scrollPos = window.scrollY + 140;
    let currentId = '';

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentId}`) {
          link.classList.add('nav-active');
        } else {
          link.classList.remove('nav-active');
        }
      });

      drawerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentId}`) {
          link.style.fontWeight = '700';
          link.style.color = 'var(--apple-blue)';
        } else {
          link.style.fontWeight = '500';
          link.style.color = 'var(--text-primary)';
        }
      });
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(checkActiveSection);
      ticking = true;
    }
  }, { passive: true });

  checkActiveSection();
}
