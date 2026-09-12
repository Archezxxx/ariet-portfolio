/**
 * ARIET // UNIVERSITY ADMISSIONS PORTFOLIO
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
}

let currentLang = 'en';

/* ==========================================================================
   MULTI-LANGUAGE LOCALIZATION DICTIONARY (EN, RU, KY)
   ========================================================================== */
const i18n = {
  en: {
    brand_badge: "CS Applicant & Builder",
    nav_about: "About",
    nav_research: "Research",
    nav_projects: "Projects",
    nav_competencies: "Skills",
    nav_journey: "Journey",
    nav_contact: "Contact",
    hero_pill: "University Admissions Portfolio • Computer Science & Applied AI",
    hero_headline: 'Bridging mathematical vision,<br><span class="gradient-text">educational equity,</span> and distributed systems.',
    hero_subhead: "I am Ariet, an independent software engineer and student based in Bishkek, Kyrgyzstan. I build algorithms that solve real structural challenges: from high-precision computer vision for school exam evaluations to modern cloud infrastructures.",
    hero_btn_research: "Explore AIM.EXAM Research",
    hero_btn_profile: "Applicant Profile",
    hero_btn_email: "Copy Contact Email",
    metric_sheets_desc: "Exam Sheets Graded by Algorithm",
    metric_acc_desc: "Subpixel OMR Accuracy",
    metric_lang_desc: "Fluent Languages (EN • RU • KY • TR)",
    metric_tasks_desc: "Async Automated Tasks Orchestrated",
    vision_quote: "“True engineering is not about complex syntax for its own sake. It is about taking mathematical principles — like homography, adaptive thresholds, and asynchronous event loops — and applying them to remove friction, bias, and inefficiency from everyday human lives.”",
    author_role: "Computer Science Candidate • Bishkek, Kyrgyzstan",
    lang_en_pill: "English (Academic / IELTS Prep)",
    lang_ky_pill: "Kyrgyz (Native)",
    lang_ru_pill: "Russian (Fluent)",
    lang_tr_pill: "Turkish (Fluent / Sapat Network)",
    bio_why_tag: "Academic Background",
    bio_why_title: "Why Computer Science?",
    bio_why_p1: "Growing up in Kyrgyzstan, I saw firsthand how educational institutions often lack expensive specialized equipment. While high-income countries deploy optical mark readers costing thousands of dollars, our regional schools relied on days of manual, error-prone teacher grading.",
    bio_why_p2: "This drove my mission: to study Computer Science at an advanced collegiate level so I can develop software-defined solutions that replace prohibitive hardware with elegant algorithms accessible to schools and communities worldwide.",
    bio_why_footer: "Intended Major: <strong>Computer Science / AI</strong>",
    bio_audio_tag: "Cross-Disciplinary Dimension",
    bio_audio_title: "Audio Engineering & Algorithmic Discipline",
    bio_audio_p1: "Beyond software, I have a deep creative passion for music production and acoustic signal engineering using Cubase and FL Studio.",
    bio_audio_p2: "Synthesizing sounds and balancing audio frequencies taught me the exact same virtues required in Computer Vision and distributed systems: harmonic balance, temporal precision, noise reduction, and rigorous attention to micro-details.",
    bio_audio_footer: "Creative Field: <strong>Signal Synthesis & Production</strong>",
    flagship_eyebrow: "Flagship EdTech Engineering",
    flagship_title: "AIM.EXAM: Democratizing National Exam Grading Through Computer Vision",
    flagship_lead: "A software-defined Optical Mark Recognition (OMR) system created to evaluate regional school olympiads and admissions tests without specialized hardware.",
    flagship_status: "De-facto standard in production",
    flagship_h3: "The Engineering Challenge & Solution",
    flagship_desc: "When teachers in regional schools scan stacks of thousands of exam sheets, the papers inevitably rotate by 5–15 degrees, shift by 10–20 pixels, or get crumpled. Standard OMR software simply misses the bubbles, causing false zeroes.",
    barrier_title: "The Barrier",
    barrier_desc: "Conventional open-source OMR relies on rigid static bounding boxes that fail completely when sheets skew or scan lighting fluctuates.",
    solution_title: "Ariet's Algorithmic Innovation",
    solution_desc: "Designed a four-stage pipeline: Hough Line fiducial alignment → 4-point homography transformation → dynamic subpixel bubble snapping (±15px tolerance) → adaptive brightness differential evaluation.",
    flagship_stat_sheets: "Real-world impact:",
    flagship_stat_acc: "Accuracy rate:",
    omr_paper_title: "OLYMPIAD ANSWER SHEET",
    omr_paper_sub: "FORM #4920-KG • ACADEMIC EVALUATION",
    btn_run_omr: "Run CV Evaluation",
    btn_tilt_omr: "Tilt Sheet",
    demo_initial_status: "Click bubbles to edit marks, or test sheet tilt",
    projects_eyebrow: "Engineering Portfolio",
    projects_title: "Systems & Software Solutions",
    projects_lead: "Applied software projects built to solve institutional, logistical, and commercial problems with modern web standards and asynchronous architectures.",
    alatoo_tag: "Campus Infrastructure",
    alatoo_title: "Ala-Too Booking AI — University Resource Management",
    alatoo_desc: "Engineered a comprehensive campus facility reservation platform for Ala-Too International University. Replaces paper sign-ups and dispersed email threads with a real-time, conflict-free booking scheduler.",
    alatoo_callout: "<strong>Architecture Highlights:</strong> Developed on React 19 and TanStack Start, deployed over Cloudflare Workers edge runtime. Utilizes optimistic state updates and Radix UI primitives for full keyboard and screen-reader accessibility.",
    alatoo_meta1: "Beneficiaries: <strong>University Students & Faculty</strong>",
    alatoo_meta2: "Stack: <strong>Modern React Edge Architecture</strong>",
    magic_tag: "Distributed Systems",
    magic_title: "MagicWorlds — Bot Network Manager",
    magic_desc: "High-throughput automation platform coordinating multi-bot tasks across hundreds of Telegram channels without hitting rate limits.",
    magic_callout: "<strong>Dual-Tier Model Pattern:</strong> Django ORM acts as the database source of truth, while an asynchronous SQLAlchemy + Telethon pipeline executes high-speed worker queues.",
    magic_meta: "Volume: <strong>500K+ tasks</strong>",
    taxi_tag: "Real-Time Logistics",
    taxi_title: "XAN-TAXI — Event-Driven Dispatch System",
    taxi_desc: "Automated taxi booking and dispatch bot system built on Aiogram 3. Handles driver queues, fare estimations, geolocation reverse-geocoding, and complete multi-language localization (i18n) for passengers and drivers.",
    taxi_meta: "Focus: <strong>State Machine Resilience</strong>",
    pos_tag: "Hardware Integration",
    pos_title: "Asia POS — Offline Retail Checkout System",
    pos_desc: "Retail checkout desktop application interfacing directly with physical thermal receipt printers (XPrinter via ESC/POS protocol). Features offline data caching, inventory tracking, and automated sales auditing in Excel.",
    pos_meta: "Focus: <strong>Embedded & POS Hardware</strong>",
    comp_eyebrow: "Preparedness & Capabilities",
    comp_title: "Technical & Academic Toolkit",
    comp_lead: "A balance of rigorous algorithmic foundations, modern full-stack development, and international communication skills.",
    comp_c1_title: "Algorithms & Vision",
    comp_c2_title: "Software Engineering",
    comp_c3_title: "Languages & Global Mindset",
    lang_item_en: "English",
    lang_item_ky: "Kyrgyz",
    lang_item_ru: "Russian",
    lang_item_tr: "Turkish",
    lang_item_audio: "Acoustics & Sound Synthesis",
    journey_eyebrow: "Trajectory",
    journey_title: "Academic Journey & Milestones",
    journey_lead: "A progression defined by curiosity, community service through code, and independent technical initiative.",
    journey_item1_place: "EdTech • Bishkek",
    journey_item1_title: "Creator & Lead Engineer — AIM.EXAM OMR Pipeline",
    journey_item1_desc: "Initiated, architected, and field-tested the optical exam grading software now evaluated across thousands of school olympiad participants in Kyrgyzstan. Solved camera angle distortion and subpixel bubble detection without external dependencies or costly hardware.",
    journey_item2_place: "Ala-Too International Uni",
    journey_item2_title: "Full-Stack System Architect — Campus Space AI",
    journey_item2_desc: "Built modern resource booking platform on React 19, TypeScript, and Cloudflare Workers. Designed intuitive UI for scheduling university auditoriums, conference halls, and laboratory rooms.",
    journey_item3_place: "Distributed Infrastructure",
    journey_item3_title: "Backend Developer — Telegram High-Load Automations",
    journey_item3_desc: "Built scalable messaging infrastructure handling over 500,000 automated queries with Telethon, Django, and SQLAlchemy. Developed taxi dispatch systems with finite state machines and regional localization.",
    journey_item4_place: "Sound Production",
    journey_item4_title: "Acoustic Signal Processing & Audio Synthesis",
    journey_item4_desc: "Multi-year exploration of digital signal processing in FL Studio and Cubase. Gained intuition for frequency spectrums, time alignment, and harmonic structure that directly reinforces mathematical computer vision work.",
    contact_eyebrow: "Direct Inquiries",
    contact_title: "Let’s Connect for Admissions & Collaboration",
    contact_desc: "I welcome inquiries from university admissions officers, computer science professors, and research mentors. Based in Bishkek, Kyrgyzstan (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Click to copy →",
    contact_btn_tg: "Telegram: <strong>@ariet_dev</strong>",
    chat_hint: "Direct message →",
    contact_btn_gh: "GitHub: <strong>github.com/ariet5656</strong>",
    repo_hint: "View repositories →",
    form_name_label: "Full Name & Institution",
    form_email_label: "Official Email Address",
    form_msg_label: "Inquiry or Academic Opportunity",
    form_submit_btn: "Send Academic Inquiry",
    footer_text: "© 2026 Ariet. Computer Science & Applied AI Admissions Portfolio."
  },

  ru: {
    brand_badge: "Абитуриент CS & Инженер",
    nav_about: "Обо мне",
    nav_research: "Исследования",
    nav_projects: "Проекты",
    nav_competencies: "Навыки",
    nav_journey: "Траектория",
    nav_contact: "Контакты",
    hero_pill: "Портфолио для поступления в университет • Computer Science & Прикладной ИИ",
    hero_headline: 'На стыке компьютерного зрения,<br><span class="gradient-text">доступного образования</span> и распределенных систем.',
    hero_subhead: "Меня зовут Ариет. Я независимый инженер-разработчик и абитуриент из Бишкека, Кыргызстан. Создаю алгоритмы, решающие реальные задачи: от компьютерного зрения высокой точности для проверки школьных олимпиад до современных облачных платформ.",
    hero_btn_research: "Исследование AIM.EXAM",
    hero_btn_profile: "Профиль абитуриента",
    hero_btn_email: "Скопировать Email",
    metric_sheets_desc: "Проверено экзаменационных бланков",
    metric_acc_desc: "Точность субпиксельного OMR",
    metric_lang_desc: "Языка (EN • RU • KY • TR)",
    metric_tasks_desc: "Обработано асинхронных задач",
    vision_quote: "«Настоящая инженерия заключается не в сложности кода ради сложности. Она в том, чтобы взять фундаментальные математические принципы — гомографию, адаптивные пороги, асинхронные очереди — и применить их для устранения субъективности, неравенства и рутины в жизни людей.»",
    author_role: "Кандидат в бакалавриат/магистратуру CS • Бишкек, Кыргызстан",
    lang_en_pill: "Английский (Академический / IELTS)",
    lang_ky_pill: "Кыргызский (Родной)",
    lang_ru_pill: "Русский (Свободный)",
    lang_tr_pill: "Турецкий (Свободный / Сеть «Сапат»)",
    bio_why_tag: "Академический бэкграунд",
    bio_why_title: "Почему Computer Science?",
    bio_why_p1: "В Кыргызстане я лично наблюдал, как образовательные учреждения сталкиваются с нехваткой дорогостоящего специализированного оборудования. В то время как развитые страны используют аппаратные оптические сканеры за тысячи долларов, региональные школы неделями вручную проверяли бланки с неизбежными человеческими ошибками.",
    bio_why_p2: "Это сформировало мою цель: получить фундаментальное университетское образование в области Computer Science, чтобы создавать программные алгоритмические решения, которые заменяют дорогое железо доступными и честными технологиями для школ и людей во всем мире.",
    bio_why_footer: "Целевое направление: <strong>Computer Science / ИИ</strong>",
    bio_audio_tag: "Межпредметные навыки",
    bio_audio_title: "Звукорежиссура и алгоритмическая дисциплина",
    bio_audio_p1: "Помимо программирования, я глубоко увлечен созданием музыки и обработкой акустических сигналов в Cubase и FL Studio.",
    bio_audio_p2: "Синтез звуков и эквализация частот развили во мне навыки, напрямую необходимые в компьютерном зрении и распределенных системах: гармонический баланс, строгую временную точность, фильтрацию шума и исключительное внимание к микродеталям.",
    bio_audio_footer: "Творческая сфера: <strong>Синтез сигналов и продакшн</strong>",
    flagship_eyebrow: "Флагманский EdTech-проект",
    flagship_title: "AIM.EXAM: Проверка национальных экзаменов и олимпиад через компьютерное зрение",
    flagship_lead: "Программная система оптического распознавания отметок (OMR), созданная для автоматической проверки школьных олимпиад и вступительных тестов на обычных сканерах.",
    flagship_status: "Проверено на практике в школах",
    flagship_h3: "Инженерная задача и ее решение",
    flagship_desc: "Когда в школах сканируют пачки из тысяч экзаменационных бланков, листы неизбежно перекашиваются на 5–15 градусов, смещаются на 10–20 пикселей или мнутся. Стандартные программы с фиксированной сеткой промахиваются мимо кружков и выдают ложные нули.",
    barrier_title: "Технический барьер",
    barrier_desc: "Существующий открытый софт полагается на жесткие статические координаты, которые дают сбой при малейшем перекосе или перепаде освещения.",
    solution_title: "Алгоритмическая инновация Ариета",
    solution_desc: "Разработал 4-этапный конвейер: поиск меток через преобразование Хафа → гомографическое выравнивание перспективы → динамический субпиксельный захват отметок (допуск ±15px) → адаптивная оценка контрастности заливки.",
    flagship_stat_sheets: "Реальный масштаб:",
    flagship_stat_acc: "Точность распознавания:",
    omr_paper_title: "ОЛИМПИАДНЫЙ БЛАНК ОТВЕТОВ",
    omr_paper_sub: "ФОРМА №4920-KG • АКАДЕМИЧЕСКАЯ ОЦЕНКА",
    btn_run_omr: "Запустить проверку алгоритмом",
    btn_tilt_omr: "Наклонить бланк",
    demo_initial_status: "Кликайте по кружкам для изменения отметок или наклоните бланк",
    projects_eyebrow: "Инженерное портфолио",
    projects_title: "Разработанные системы и платформы",
    projects_lead: "Прикладные программные проекты, созданные для решения институциональных, логистических и практических задач на современных веб-стандартах.",
    alatoo_tag: "Университетская инфраструктура",
    alatoo_title: "Ala-Too Booking AI — Управление аудиториями кампуса",
    alatoo_desc: "Разработал платформу бронирования университетских ресурсов для Международного университета «Ала-Тоо». Заменяет бумажные журналы и почтовую переписку единым онлайн-графиком без конфликтов расписания.",
    alatoo_callout: "<strong>Архитектура:</strong> Стек React 19 и TanStack Start с развертыванием на Cloudflare Workers (edge computing). Оптимистичные обновления интерфейса и компоненты Radix UI для полной доступности (a11y).",
    alatoo_meta1: "Пользователи: <strong>Студенты и преподаватели</strong>",
    alatoo_meta2: "Стек: <strong>Modern React Edge Architecture</strong>",
    magic_tag: "Распределенные системы",
    magic_title: "MagicWorlds — Менеджер сети Telegram-ботов",
    magic_desc: "Высоконагруженная платформа автоматизации, координирующая работу десятков ботов в сотнях каналов с соблюдением жестких лимитов Telegram API.",
    magic_callout: "<strong>Двухуровневая архитектура:</strong> Django ORM служит источником истины для структуры БД и миграций, а асинхронный конвейер SQLAlchemy + Telethon выполняет задачи в фоне.",
    magic_meta: "Объем: <strong>500K+ задач</strong>",
    taxi_tag: "Логистика реального времени",
    taxi_title: "XAN-TAXI — Диспетчерская система вызова такси",
    taxi_desc: "Телеграм-система заказа такси на базе Aiogram 3. Управляет очередями водителей, расчетом стоимости, геокодированием адресов и мультиязычным интерфейсом (i18n).",
    taxi_meta: "Фокус: <strong>Конечные автоматы (FSM)</strong>",
    pos_tag: "Интеграция оборудования",
    pos_title: "Asia POS — Автономная кассовая система",
    pos_desc: "Десктопное приложение для торговых точек с прямым управлением термопринтерами чеков (XPrinter по протоколу ESC/POS). Поддерживает автономный режим и экспорт отчетов в Excel.",
    pos_meta: "Фокус: <strong>Кассовое оборудование</strong>",
    comp_eyebrow: "Навыки и подготовка",
    comp_title: "Технический и академический арсенал",
    comp_lead: "Баланс строгой алгоритмической подготовки, современной веб-разработки и международных языковых навыков.",
    comp_c1_title: "Алгоритмы и зрение",
    comp_c2_title: "Программная инженерия",
    comp_c3_title: "Языки и коммуникация",
    lang_item_en: "Английский",
    lang_item_ky: "Кыргызский",
    lang_item_ru: "Русский",
    lang_item_tr: "Турецкий",
    lang_item_audio: "Акустика и синтез звука",
    journey_eyebrow: "Траектория",
    journey_title: "Академический путь и этапы развития",
    journey_lead: "Путь, определяемый любознательностью, пользой обществу через код и самостоятельной инженерной инициативой.",
    journey_item1_place: "EdTech • Бишкек",
    journey_item1_title: "Создатель и ведущий разработчик — OMR-система AIM.EXAM",
    journey_item1_desc: "Спроектировал и успешно внедрил программный комплекс проверки бланков для олимпиадников Кыргызстана. Решил задачу компенсации наклона камеры и субпиксельного захвата отметок без сторонних платных сервисов.",
    journey_item2_place: "Международный университет «Ала-Тоо»",
    journey_item2_title: "Архитектор веб-системы — Campus Space AI",
    journey_item2_desc: "Построил современную систему бронирования на React 19, TypeScript и Cloudflare Workers для аудиторий, конференц-залов и университетских лабораторий.",
    journey_item3_place: "Распределенная инфраструктура",
    journey_item3_title: "Backend-разработчик — Высоконагруженная инфраструктура ботов",
    journey_item3_desc: "Создал масштабируемую систему на Telethon, Django и SQLAlchemy, обработавшую свыше 500,000 запросов. Разработал систему заказа такси с конечными автоматами и локализацией.",
    journey_item4_place: "Звукорежиссура",
    journey_item4_title: "Обработка акустических сигналов и синтез звука",
    journey_item4_desc: "Многолетняя работа с обработкой цифровых сигналов в FL Studio и Cubase. Выработала интуитивное понимание спектров частот, временной синхронизации и подавления шумов, что усиливает работу в компьютерном зрении.",
    contact_eyebrow: "Прямая связь",
    contact_title: "Контакты для приемных комиссий и сотрудничества",
    contact_desc: "Буду рад вопросам от представителей приемных комиссий университетов, профессоров и академических наставников. Нахожусь в Бишкеке, Кыргызстан (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Скопировать →",
    contact_btn_tg: "Telegram: <strong>@ariet_dev</strong>",
    chat_hint: "Написать сообщение →",
    contact_btn_gh: "GitHub: <strong>github.com/ariet5656</strong>",
    repo_hint: "Открыть репозитории →",
    form_name_label: "Ваше имя и учебное заведение",
    form_email_label: "Официальный рабочий Email",
    form_msg_label: "Тема обращения или академическая программа",
    form_submit_btn: "Отправить запрос",
    footer_text: "© 2026 Ариет. Портфолио для поступления на Computer Science & Прикладной ИИ."
  },

  ky: {
    brand_badge: "CS боюнча талапкер & Инженер",
    nav_about: "Мен жөнүндө",
    nav_research: "Изилдөө",
    nav_projects: "Долбоорлор",
    nav_competencies: "Көндүмдөр",
    nav_journey: "Билим жолу",
    nav_contact: "Байланыш",
    hero_pill: "ЖОЖго тапшыруу портфолиосу • Компьютердик илимдер жана Колдонмо Жасалма интеллект",
    hero_headline: 'Математикалык көрүү,<br><span class="gradient-text">билим берүүдөгү теңчилик</span> жана бөлүштүрүлгөн системалар.',
    hero_subhead: "Менин атым Ариет, Бишкектеги көз карандысыз инженер-программист жана студентмин. Мектеп олимпиадаларын текшерүүчү так компьютердик көрүү алгоритмдеринен баштап заманбап булут платформаларына чейин реалдуу көйгөйлөрдү чечкен системаларды түзөм.",
    hero_btn_research: "AIM.EXAM изилдөөсү",
    hero_btn_profile: "Талапкердин профили",
    hero_btn_email: "Email көчүрүү",
    metric_sheets_desc: "Алгоритм текшерген баракчалар",
    metric_acc_desc: "Субпикселдик OMR тактыгы",
    metric_lang_desc: "Тилде эркин сүйлөө (EN • RU • KY • TR)",
    metric_tasks_desc: "Асинхрондук тапшырмалар аткарылды",
    vision_quote: "«Чыныгы инженерия жөн гана татаал код жазууда эмес. Ал фундаменталдык математикалык эрежелерди — гомографияны, адаптивдик чектерди жана асинхрондук процесстерди — адамдардын жашоосундагы субъективдүүлүктү жана адилетсиздикти жоюуга багыттоодо жатат.»",
    author_role: "Компьютердик илимдер боюнча талапкер • Бишкек, Кыргызстан",
    lang_en_pill: "Англис тили (Академиялык / IELTS)",
    lang_ky_pill: "Кыргыз тили (Эне тил)",
    lang_ru_pill: "Орус тили (Эркин)",
    lang_tr_pill: "Түрк тили («Сапат» билим тармагы)",
    bio_why_tag: "Академиялык багыт",
    bio_why_title: "Эмне үчүн Computer Science?",
    bio_why_p1: "Кыргызстанда окуп жүрүп, мектептерде кымбат баалуу атайын жабдуулардын жетишсиздигин өз көзүм менен көрдүм. Өнүккөн өлкөлөр миңдеген долларлык оптикалык сканерлерди колдонушса, биздин аймактык мектептерде мугалимдер тесттерди кол менен күндөп-түндөп текшерип, ката кетирүү ыктымалдыгы жогору болчу.",
    bio_why_p2: "Бул менин максатымды аныктады: университеттен Компьютердик илимдерди терең өздөштүрүп, кымбат техниканы жөнөкөй жана жеткиликтүү алгоритмдер менен алмаштырган технологияларды бүткүл дүйнөдөгү мектептерге жеткирүү.",
    bio_why_footer: "Максаттуу багыт: <strong>Компьютердик илимдер / Жасалма интеллект</strong>",
    bio_audio_tag: "Предметтер аралык көндүмдөр",
    bio_audio_title: "Үн инженериясы жана алгоритмдик тартип",
    bio_audio_p1: "Программалоодон тышкары, мен Cubase жана FL Studio аркылуу музыка жаратууга жана акустикалык сигналдарды иштетүүгө терең кызыгам.",
    bio_audio_p2: "Үндөрдү синтездөө жана жыштыктарды теңдөө мага компьютердик көрүүдө жана тармактык системаларда зарыл болгон сапаттарды үйрөттү: гармониялык баланс, убакыттын тактыгы, ызы-чууну чыпкалоо жана майда деталдарга терең көңүл буруу.",
    bio_audio_footer: "Чыгармачыл багыт: <strong>Сигналдарды синтездөө жана продакшн</strong>",
    flagship_eyebrow: "Негизги EdTech долбоору",
    flagship_title: "AIM.EXAM: Компьютердик көрүү аркылуу мектеп олимпиадаларын автоматтык баалоо",
    flagship_lead: "Аймактык мектеп олимпиадаларын жана сынактарды атайын кымбат жабдуусуз текшерүү үчүн түзүлгөн оптикалык белгилерди таануу (OMR) системасы.",
    flagship_status: "Мектептерде текшерилген",
    flagship_h3: "Инженердик көйгөй жана чечим",
    flagship_desc: "Мектептерде миңдеген баракчаларды сканерден өткөргөндө кагаздар сөзсүз 5–15 градуска кыйшайып, 10–20 пикселге жылып же бүктөлүп калат. Туруктуу координаталуу жөнөкөй программалар тегерекчелерди таба албай, ката баалап коёт.",
    barrier_title: "Техникалык тоскоолдук",
    barrier_desc: "Ачык булактагы OMR системалары кагаздын кичине эле кыйшайышында же жарыктын өзгөрүшүндө толугу менен жараксыз болуп калат.",
    solution_title: "Ариеттин алгоритмдик чечими",
    solution_desc: "4 баскычтуу система түздүм: Хаф алгоритми менен бурчтук белгилерди табуу → 4 чекиттүү гомография менен баракты түздөө → субпикселдик тегерекчелерди кармоо (±15px чегинде) → контрасттык айырманы эсептөө.",
    flagship_stat_sheets: "Практикалык масштаб:",
    flagship_stat_acc: "Таануу тактыгы:",
    omr_paper_title: "ОЛИМПИАДАЛЫК ЖООП БАРАКЧАСЫ",
    omr_paper_sub: "ФОРМА №4920-KG • АКАДЕМИЯЛЫК БААЛОО",
    btn_run_omr: "Алгоритмди текшерүү",
    btn_tilt_omr: "Баракты кыйшайтуу",
    demo_initial_status: "Жоопторду белгилөө үчүн тегерекчелерди басыңыз же баракты кыйшайтыңыз",
    projects_eyebrow: "Инженердик портфолио",
    projects_title: "Иштелип чыккан системалар жана платформалар",
    projects_lead: "Заманбап веб-стандарттар жана асинхрондук архитектура менен университеттик жана практикалык маселелерди чечкен системалар.",
    alatoo_tag: "Университеттик инфраструктура",
    alatoo_title: "Ала-Тоо Booking AI — Университет ресурстарын башкаруу",
    alatoo_desc: "Ала-Тоо эл аралык университети үчүн аудиторияларды жана залдарды онлайн ээлөө платформасын иштеп чыктым. Кагаз жазууларды жана графиктердин кагылышуусун толук жойду.",
    alatoo_callout: "<strong>Архитектура:</strong> React 19 жана TanStack Start технологиялары Cloudflare Workers булутунда иштетилет. Тез жаңылануучу интерфейс жана Radix UI компоненттери.",
    alatoo_meta1: "Колдонуучулар: <strong>Студенттер жана окутуучулар</strong>",
    alatoo_meta2: "Стек: <strong>Modern React Edge Architecture</strong>",
    magic_tag: "Бөлүштүрүлгөн системалар",
    magic_title: "MagicWorlds — Телеграм боттор тармагынын менеджери",
    magic_desc: "Жүздөгөн каналдарда боттордун ишин координациялаган жана Telegram чектөөлөрүнөн ашпаган жогорку ылдамдыктагы платформа.",
    magic_callout: "<strong>Эки деңгээлдүү архитектура:</strong> Django ORM маалыматтар базасынын түзүмүн сактайт, ал эми асинхрондук SQLAlchemy + Telethon тапшырмаларды тез аткарат.",
    magic_meta: "Көлөм: <strong>500K+ тапшырма</strong>",
    taxi_tag: "Ыкчам логистика",
    taxi_title: "XAN-TAXI — Такси чакыруу диспетчердик системасы",
    taxi_desc: "Aiogram 3 базасында такси чакыруу бот-системасы. Айдоочулардын кезегин, бааны эсептөөнү, даректерди аныктоону жана көп тилдүү интерфейсти (i18n) камсыздайт.",
    taxi_meta: "Фокус: <strong>Абалды башкаруу (FSM)</strong>",
    pos_tag: "Жабдууларды интеграциялоо",
    pos_title: "Asia POS — Чек басып чыгаруучу автономдуу касса",
    pos_desc: "Дүкөндөр үчүн термопринтерлерге (ESC/POS протоколу) чекти түз басып чыгаруучу программа. Интернетсиз иштөөнү жана отчетторду Excel'ге чыгарууну колдойт.",
    pos_meta: "Фокус: <strong>Кассалык жабдуулар</strong>",
    comp_eyebrow: "Даярдык жана жөндөмдөр",
    comp_title: "Техникалык жана академиялык куралдар",
    comp_lead: "Алгоритмдик фундаменталдуу даярдыктын, заманбап программалоонун жана эл аралык тилдерди билүүнүн айкалышы.",
    comp_c1_title: "Алгоритмдер жана көрүү",
    comp_c2_title: "Программалык инженерия",
    comp_c3_title: "Тилдер жана коммуникация",
    lang_item_en: "Англис тили",
    lang_item_ky: "Кыргыз тили",
    lang_item_ru: "Орус тили",
    lang_item_tr: "Түрк тили",
    lang_item_audio: "Акустика жана үн синтези",
    journey_eyebrow: "Басып өткөн жол",
    journey_title: "Билим жолу жана негизги этаптар",
    journey_lead: "Билимге умтулуу, программалоо аркылуу коомго пайда келтирүү жана көз карандысыз инженердик демилге.",
    journey_item1_place: "EdTech • Бишкек",
    journey_item1_title: "Түзүүчү жана башкы инженер — AIM.EXAM OMR системасы",
    journey_item1_desc: "Кыргызстандагы миңдеген олимпиада катышуучуларынын тесттерин текшерүүчү программаны башынан баштап түзүп, ийгиликтүү ишке киргиздим. Кагаздын кыйшаюусун жана бүктөлүшүн түздөө маселесин өзүм иштеп чыккан алгоритм менен чечтим.",
    journey_item2_place: "Ала-Тоо эл аралык университети",
    journey_item2_title: "Веб-системанын архитектору — Campus Space AI",
    journey_item2_desc: "React 19, TypeScript жана Cloudflare Workers аркылуу университеттин аудиторияларын, лабораторияларын жана залдарын онлайн ээлөө системасын курдум.",
    journey_item3_place: "Бөлүштүрүлгөн инфраструктура",
    journey_item3_title: "Backend программист — Жогорку ылдамдыктагы боттор инфраструктурасы",
    journey_item3_desc: "Telethon, Django жана SQLAlchemy аркылуу 500,000ден ашык суроо-талапты иштеткен масштабдуу инфраструктура түздүм. Локализацияланган такси системасын иштеп чыктым.",
    journey_item4_place: "Үн продакшн",
    journey_item4_title: "Акустикалык сигналдарды иштетүү жана үн синтези",
    journey_item4_desc: "FL Studio жана Cubase программаларында санариптик сигналдарды иштетүү боюнча көп жылдык тажрыйба. Бул тажрыйба компьютердик көрүүдөгү математикалык алгоритмдерди жана сигналдарды чыпкалоону терең түшүнүүгө чоң салым кошот.",
    contact_eyebrow: "Түз байланыш",
    contact_title: "ЖОЖго тапшыруу жана кызматташуу боюнча байланыш",
    contact_desc: "Университеттердин кабыл алуу комиссияларынын өкүлдөрүнөн, профессорлордон жана илимий жетекчилерден келген суроолорду кубануу менен кабыл алам. Бишкек шаарындамын (UTC+6).",
    contact_btn_email: "Email: <strong>ariet5656@gmail.com</strong>",
    copy_hint: "Көчүрүү →",
    contact_btn_tg: "Telegram: <strong>@ariet_dev</strong>",
    chat_hint: "Билдирүү жазуу →",
    contact_btn_gh: "GitHub: <strong>github.com/ariet5656</strong>",
    repo_hint: "Репозиторийлерди көрүү →",
    form_name_label: "Толук аты-жөнүңүз жана мекемеңиз",
    form_email_label: "Расмий жумушчу Email дарегиңиз",
    form_msg_label: "Суроо-талап же академиялык программа тууралуу",
    form_submit_btn: "Суроо-талап жөнөтүү",
    footer_text: "© 2026 Ариет. Компьютердик илимдер жана Колдонмо Жасалма интеллект боюнча ЖОЖго тапшыруу портфолиосу."
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

  // Close when clicking any nav link
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      setDrawerState(false);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !toggle.contains(e.target)) {
      setDrawerState(false);
    }
  });

  // Close on Escape key
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
        statusText.textContent = `Sheet tilted by ${currentAngle > 0 ? '+' : ''}${currentAngle}° (Simulating hand scan distortion)`;
      }
    }
    playTastefulClick(380);
  });

  let isEvaluating = false;
  runBtn.addEventListener('click', () => {
    if (isEvaluating) return;
    isEvaluating = true;
    runBtn.disabled = true;

    const msgStep1 = currentLang === 'ky' ? '1/3-баскыч: Хаф алгоритми менен бурчтук белгилерди табуу...' : (currentLang === 'ru' ? 'Этап 1/3: Преобразование Хафа и поиск меток...' : 'Step 1/3: Hough Transform fiducial angle detection...');
    const msgStep2 = currentLang === 'ky' ? '2/3-баскыч: 4 чекиттүү гомография менен баракты түздөө...' : (currentLang === 'ru' ? 'Этап 2/3: 4-точечная гомография и выравнивание листа...' : 'Step 2/3: Applying 4-point homography & perspective warping...');
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
          let answered = 0;

          for (let q = 1; q <= 10; q++) {
            const userChoice = userAnswers[q - 1];
            const correctChoice = answerKey[q - 1];

            if (userChoice) {
              answered++;
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
            statusText.innerHTML = `<strong>Жыйынтык:</strong> ${score}/10 туура (${score * 10}%). Барак ${currentAngle}° кыйшаюудан түзөлдү. Тактыгы: 99.82%.`;
          } else if (currentLang === 'ru') {
            statusText.innerHTML = `<strong>Результат:</strong> ${score}/10 верно (${score * 10}%). Перекос ${currentAngle}° выровнен. Точность: 99.82%.`;
          } else {
            statusText.innerHTML = `<strong>Result:</strong> ${score}/10 correct (${score * 10}%). Orientation rectified from ${currentAngle}°. Accuracy: 99.82%.`;
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

      const mailto = `mailto:ariet5656@gmail.com?subject=University Admissions Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(text + '\n\nFrom: ' + email)}`;
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
    '.contact-pill-btn',
    '.lang-pill-btn'
  ];

  const buttons = document.querySelectorAll(liquidSelectors.join(', '));

  buttons.forEach(btn => {
    // Dynamic interactive lens reflection following cursor coordinates
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

    // Fluid liquid ripple wave burst upon click/tap
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

  // Select key narrative cards and headers
  const targets = document.querySelectorAll(`
    .section-header-centered,
    .metric-pill-card,
    .vision-banner-card,
    .apple-showcase-card,
    .bento-box,
    .skill-apple-card,
    .timeline-card-apple,
    .contact-apple-shell
  `);

  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('reveal-on-scroll');
  });

  // Stagger delays for grid children
  const grids = document.querySelectorAll('.metrics-strip, .apple-bento-grid, .skills-apple-grid, .timeline-apple-stack');
  grids.forEach(grid => {
    const children = grid.querySelectorAll('.metric-pill-card, .bento-box, .skill-apple-card, .timeline-card-apple');
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

