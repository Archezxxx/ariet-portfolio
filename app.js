"use strict";
// Owner-supplied case-study translations remain in locales.js.
const additions = {
  ru: {
    skip: "К проектам",
    language: "Язык",
    nav_work: "Работы",
    nav_process: "Как работаю",
    write: "Написать",
    intro:
      'Разработчик из Бишкека. Превращаю сложные задачи<br class="desktop-break"> в работающие сайты, системы и автоматизацию.',
    view_work: "Смотреть работы",
    hero_location: "Бишкек, Кыргызстан",
    pause_motion: "Пауза движения",
    resume_motion: "Включить движение",
    work_title: "Мои работы",
    work_note: "От школьных экзаменов<br> до собственного бизнеса.",
    processed: "Обработано",
    sheets: "экзаменационных бланков",
    six_schools: "6 школ",
    try_demo: "Попробовать демо",
    see_project: "О проекте",
    ocr_category: "Автоматизация · Образование",
    ocr_short:
      "20 000+ бланков. 6 школ. Проверка экзаменов, которая больше не отнимает время учителей.",
    exam_category: "Веб-разработка · Образование",
    exam_short:
      "Онлайн-экзамены с контролем переключения вкладок и мониторингом камеры.",
    exam_question: "Что определяет сложность алгоритма?",
    one_person: "1 человек в кадре",
    exam_session: "Защищённая сессия",
    cosmic_short: "POS-системы для ресторанов",
    consult_short: "Сайт образовательного консалтинга",
    cargo_short: "Логистика из Китая в Кыргызстан",
    cargo_cover: "От идеи до доставки",
    lab_title: "От бланка<br> к результату.",
    lab_intro:
      "Для сети школ AALAM мы вдвоём создали систему, которая превращает бумажные экзамены в готовые результаты Excel.",
    lab_note:
      "Здесь — интерактивная модель: поменяй ответы в бланке и запусти проверку.",
    case_details: "Как устроен проект",
    aalam_schools: "школ AALAM",
    interactive_model: "Интерактивная модель",
    answer_sheet: "Бланк ответов",
    question: "Вопрос",
    evaluate: "Проверить бланк",
    tilt: "Наклонить",
    export: "Скачать CSV",
    lab_ready: "Отметь ответы и запусти проверку.",
    lab_scanning: "Выравниваем бланк и распознаём отметки…",
    lab_result: "Верных ответов: {score} из 10. Результат готов к выгрузке.",
    answer_label: "Вопрос {n}, ответ {choice}",
    about_title: "Привет,<br> я Ариет.",
    about_location: "Бишкек, Кыргызстан<br> Программирую с 2023 года",
    about_lead:
      "Учусь в 11 классе, пишу код и строю продукты, которыми пользуются в реальной жизни.",
    about_body:
      "Мне интересно пройти весь путь: найти проблему, разобраться в ней, собрать решение и довести его до людей. Так появились школьная автоматизация, логистический бизнес и команда, создающая системы для ресторанов.",
    about_future:
      "Дальше — университет, новые продукты и вклад в развитие технологий Кыргызстана.",
    development: "Разработка",
    ai_workflow: "ИИ в работе",
    ai_note:
      "От прототипа до отладки. Решения проверяю в коде и на реальных задачах.",
    beyond_code: "За пределами кода",
    business_skills:
      "Предпринимательство, B2B, логистика, внедрение и работа в команде.",
    languages: "Языки",
    spoken_languages:
      "Кыргызский — родной<br> Русский — свободно<br> Английский",
    journey_summary: "Мой путь с 2023 года",
    journey_2023: "Первые строки кода",
    journey_2024: "Первые полезные продукты",
    process_title: "Как я работаю",
    process_note: "Начинаю с задачи.<br> Заканчиваю работающим решением.",
    p1_title: "Разбираюсь",
    p1: "Кому нужен продукт, что сейчас мешает и какой результат будет полезен.",
    p2_title: "Собираю прототип",
    p2: "Проверяю ключевую идею на небольшом работающем решении.",
    p3_title: "Разрабатываю",
    p3: "Делаю систему, тестирую на реальных сценариях и дорабатываю детали.",
    p4_title: "Внедряю",
    p4: "Помогаю запустить продукт, разобраться в нём и использовать в работе.",
    contact_title: "Есть идея?",
    contact_intro:
      "Проект, сотрудничество или разговор о будущем.<br> Буду рад познакомиться.",
    telegram_write: "Написать в Telegram",
    light_theme: "Светлая тема",
    dark_theme: "Тёмная тема",
    copied: "Почта скопирована",
    copy_failed: "Не удалось скопировать. Почта: ariet5656@gmail.com",
    close: "Закрыть проект",
    open_menu: "Открыть меню",
    close_menu: "Закрыть меню",
    copy_email: "Скопировать почту",
    stack: "Технологии",
    role: "Моя роль",
    pipeline: "От бумаги до результата",
    model_explanation:
      "В этом браузерном демо ответы сравниваются с заданным ключом. В рабочем проекте сканы обрабатываются Python и OpenCV: выравнивание по меткам, гомография, распознавание отметок и экспорт в Excel.",
    demo_link: "Перейти к демо",
    open_site: "Открыть сайт",
    security_title: "Попробовать сценарий",
    security_note:
      "Модель поведения платформы. Камера и реальный экзамен здесь не используются.",
    tab_test: "Смена вкладки",
    camera_test: "Второй человек",
    reset: "Сбросить",
    security_ready: "Выбери сценарий, чтобы увидеть реакцию платформы.",
    tab_warning: "Зафиксирована смена вкладки. Предупреждение {count} из 3.",
    tab_blocked: "Третье нарушение: в этой модели экзамен завершён.",
    camera_warning:
      "В кадре обнаружен второй человек. Платформа показывает предупреждение.",
    cosmic_facts: "3 сооснователя · Кыргызстан",
    cargo_facts: "500+ кг · около 1 года",
    consult_role: "Разработка сайта",
    export_question: "Вопрос",
    export_answer: "Ответ",
    export_key: "Правильный ответ",
    export_correct: "Верно",
  },
  en: {
    skip: "Skip to work",
    language: "Language",
    nav_work: "Work",
    nav_process: "My process",
    write: "Let’s talk",
    intro:
      'Developer from Bishkek. Turning complex problems<br class="desktop-break"> into working websites, systems, and automation.',
    view_work: "Explore my work",
    hero_location: "Bishkek, Kyrgyzstan",
    pause_motion: "Pause motion",
    resume_motion: "Enable motion",
    work_title: "Selected work",
    work_note: "From school examinations<br> to building a business.",
    processed: "Processed",
    sheets: "exam answer sheets",
    six_schools: "6 schools",
    try_demo: "Try the demo",
    see_project: "Explore project",
    ocr_category: "Automation · Education",
    ocr_short:
      "20,000+ sheets. 6 schools. Exam grading that gives teachers their time back.",
    exam_category: "Web development · Education",
    exam_short:
      "Online examinations with tab-switch detection and camera monitoring.",
    exam_question: "What determines algorithm complexity?",
    one_person: "1 person detected",
    exam_session: "Protected session",
    cosmic_short: "Restaurant POS systems",
    consult_short: "Education consulting website",
    cargo_short: "China–Kyrgyzstan logistics",
    cargo_cover: "From an idea to delivery",
    lab_title: "From paper<br> to results.",
    lab_intro:
      "For the AALAM school network, our two-person team built a system that turns paper examinations into ready-to-use Excel results.",
    lab_note:
      "An interactive model: change the answers on the sheet, then run the evaluation.",
    case_details: "Inside the project",
    aalam_schools: "AALAM schools",
    interactive_model: "Interactive model",
    answer_sheet: "Answer sheet",
    question: "Question",
    evaluate: "Evaluate sheet",
    tilt: "Tilt sheet",
    export: "Download CSV",
    lab_ready: "Choose your answers, then evaluate the sheet.",
    lab_scanning: "Aligning the sheet and reading the marks…",
    lab_result:
      "Correct answers: {score} out of 10. Your results are ready to export.",
    answer_label: "Question {n}, answer {choice}",
    about_title: "Hi,<br> I’m Ariet.",
    about_location: "Bishkek, Kyrgyzstan<br> Programming since 2023",
    about_lead:
      "An 11th-grade student building software and products that people use in real life.",
    about_body:
      "I enjoy the entire journey: finding a problem, understanding it, building a solution, and getting it into people’s hands. That led to school automation, a logistics business, and a team creating restaurant systems.",
    about_future:
      "Next: university, new products, and contributing to Kyrgyzstan’s technology community.",
    development: "Development",
    ai_workflow: "AI in my workflow",
    ai_note:
      "From prototypes to debugging. I verify decisions in code and against real tasks.",
    beyond_code: "Beyond code",
    business_skills:
      "Entrepreneurship, B2B, logistics, deployment, and teamwork.",
    languages: "Languages",
    spoken_languages: "Kyrgyz — native<br> Russian — fluent<br> English",
    journey_summary: "My journey since 2023",
    journey_2023: "First lines of code",
    journey_2024: "First practical products",
    process_title: "How I work",
    process_note: "Start with the problem.<br> Finish with a working solution.",
    p1_title: "Understand",
    p1: "Who needs this, what is getting in their way, and what result would help?",
    p2_title: "Prototype",
    p2: "Test the core idea with a small, working solution.",
    p3_title: "Develop",
    p3: "Build the system, test real scenarios, and work through the details.",
    p4_title: "Put it to work",
    p4: "Help launch the product, explain how it works, and get it into daily use.",
    contact_title: "Have an idea?",
    contact_intro:
      "A project, a collaboration, or a conversation about the future.<br> I’d love to hear from you.",
    telegram_write: "Message on Telegram",
    light_theme: "Light theme",
    dark_theme: "Dark theme",
    copied: "Email copied",
    copy_failed: "Copy failed. Email: ariet5656@gmail.com",
    close: "Close project",
    open_menu: "Open menu",
    close_menu: "Close menu",
    copy_email: "Copy email",
    stack: "Technologies",
    role: "My role",
    pipeline: "From paper to results",
    model_explanation:
      "This browser demo compares selected answers with a fixed key. The production project processes scans with Python and OpenCV: fiducial alignment, homography, mark recognition, and Excel export.",
    demo_link: "Try the demo",
    open_site: "Visit website",
    security_title: "Try a scenario",
    security_note:
      "A model of the platform’s behavior. No camera or real examination is used here.",
    tab_test: "Switch tab",
    camera_test: "Second person",
    reset: "Reset",
    security_ready: "Choose a scenario to see how the platform responds.",
    tab_warning: "Tab switch detected. Warning {count} of 3.",
    tab_blocked: "Third violation: this model has ended the examination.",
    camera_warning:
      "A second person was detected. The platform shows a warning.",
    cosmic_facts: "3 cofounders · Kyrgyzstan",
    cargo_facts: "500+ kg · about 1 year",
    consult_role: "Website development",
    export_question: "Question",
    export_answer: "Answer",
    export_key: "Correct answer",
    export_correct: "Correct",
  },
  ky: {
    skip: "Долбоорлорго өтүү",
    language: "Тил",
    nav_work: "Долбоорлор",
    nav_process: "Иш тартибим",
    write: "Жазуу",
    intro:
      'Бишкектик иштеп чыгуучу. Татаал маселелерди<br class="desktop-break"> иштеген сайттарга, системаларга жана автоматташтырууга айлантам.',
    view_work: "Долбоорлорду көрүү",
    hero_location: "Бишкек, Кыргызстан",
    pause_motion: "Кыймылды токтотуу",
    resume_motion: "Кыймылды күйгүзүү",
    work_title: "Менин иштерим",
    work_note: "Мектеп сынактарынан<br> өз бизнесиме чейин.",
    processed: "Иштетилди",
    sheets: "сынактын жооп баракчасы",
    six_schools: "6 мектеп",
    try_demo: "Демону сынап көрүү",
    see_project: "Долбоор тууралуу",
    ocr_category: "Автоматташтыруу · Билим берүү",
    ocr_short:
      "20 000+ баракча. 6 мектеп. Мугалимдердин убактысын үнөмдөгөн сынак текшерүү системасы.",
    exam_category: "Веб-иштеп чыгуу · Билим берүү",
    exam_short:
      "Өтмөктөрдү алмаштырууну жана камераны көзөмөлдөгөн онлайн сынактар.",
    exam_question: "Алгоритмдин татаалдыгын эмне аныктайт?",
    one_person: "Кадрда 1 адам",
    exam_session: "Корголгон сессия",
    cosmic_short: "Ресторандар үчүн POS-системалар",
    consult_short: "Билим берүү консалтингинин сайты",
    cargo_short: "Кытайдан Кыргызстанга логистика",
    cargo_cover: "Идеядан жеткирүүгө чейин",
    lab_title: "Кагаздан<br> жыйынтыкка.",
    lab_intro:
      "AALAM мектептер тармагы үчүн экөөбүз кагаз сынактарды Excel жыйынтыктарына айланткан система түздүк.",
    lab_note:
      "Бул — интерактивдүү модель: баракчадагы жоопторду өзгөртүп, текшерүүнү башта.",
    case_details: "Долбоор кандай иштейт",
    aalam_schools: "AALAM мектеби",
    interactive_model: "Интерактивдүү модель",
    answer_sheet: "Жооп баракчасы",
    question: "Суроо",
    evaluate: "Баракчаны текшерүү",
    tilt: "Кыйшайтуу",
    export: "CSV жүктөп алуу",
    lab_ready: "Жоопторду белгилеп, текшерүүнү башта.",
    lab_scanning: "Баракчаны түздөп, белгилерди таанып жатабыз…",
    lab_result:
      "Туура жооптор: 10 суроодон {score}. Жыйынтыкты жүктөп алсаң болот.",
    answer_label: "{n}-суроо, {choice} жообу",
    about_title: "Салам,<br> мен Ариет.",
    about_location: "Бишкек, Кыргызстан<br> 2023-жылдан бери программалайм",
    about_lead:
      "11-класста окуйм, код жазам жана адамдар күнүмдүк жашоодо колдонгон өнүмдөрдү түзөм.",
    about_body:
      "Мага бардык жолду басып өтүү кызык: көйгөйдү табуу, түшүнүү, чечим түзүү жана аны адамдарга жеткирүү. Ошентип мектеп автоматташтыруусу, логистика бизнеси жана ресторандарга система түзгөн команда пайда болду.",
    about_future:
      "Алдыда — университет, жаңы өнүмдөр жана Кыргызстандын технологиялык өнүгүүсүнө салым кошуу.",
    development: "Иштеп чыгуу",
    ai_workflow: "ЖИ ишимде",
    ai_note:
      "Прототиптен мүчүлүштүктөрдү оңдоого чейин. Чечимдерди коддо жана чыныгы тапшырмаларда текшерем.",
    beyond_code: "Коддон тышкары",
    business_skills:
      "Ишкердик, B2B, логистика, ишке киргизүү жана командада иштөө.",
    languages: "Тилдер",
    spoken_languages: "Кыргызча — эне тилим<br> Орусча — эркин<br> Англисче",
    journey_summary: "2023-жылдан берки жолум",
    journey_2023: "Коддун алгачкы саптары",
    journey_2024: "Алгачкы пайдалуу өнүмдөр",
    process_title: "Кантип иштейм",
    process_note: "Маселеден баштайм.<br> Иштеген чечим менен аяктайм.",
    p1_title: "Түшүнөм",
    p1: "Өнүм кимге керек, эмне тоскоол болуп жатат жана кандай жыйынтык пайдалуу болот?",
    p2_title: "Прототип түзөм",
    p2: "Негизги идеяны чакан, иштеген чечим аркылуу текшерем.",
    p3_title: "Иштеп чыгам",
    p3: "Система түзөм, чыныгы сценарийлерде сынайм жана майда-чүйдөсүн тактайм.",
    p4_title: "Ишке киргизем",
    p4: "Өнүмдү ишке киргизүүгө, түшүнүүгө жана күнүмдүк колдонууга жардам берем.",
    contact_title: "Идеяң барбы?",
    contact_intro:
      "Долбоор, кызматташтык же келечек тууралуу сүйлөшүү.<br> Таанышууга кубанычтамын.",
    telegram_write: "Telegram аркылуу жазуу",
    light_theme: "Жарык тема",
    dark_theme: "Караңгы тема",
    copied: "Электрондук дарек көчүрүлдү",
    copy_failed: "Көчүрүлгөн жок. Дарек: ariet5656@gmail.com",
    close: "Долбоорду жабуу",
    open_menu: "Менюну ачуу",
    close_menu: "Менюну жабуу",
    copy_email: "Электрондук даректи көчүрүү",
    stack: "Технологиялар",
    role: "Менин ролум",
    pipeline: "Кагаздан жыйынтыкка чейин",
    model_explanation:
      "Бул браузердик демо белгиленген жоопторду даяр ачкыч менен салыштырат. Чыныгы долбоор скандарды Python жана OpenCV аркылуу түздөп, белгилерди таанып, Excel файлына чыгарат.",
    demo_link: "Демону сынап көрүү",
    open_site: "Сайтты ачуу",
    security_title: "Сценарийди сынап көрүү",
    security_note:
      "Платформанын жүрүм-турум модели. Бул жерде камера же чыныгы сынак колдонулбайт.",
    tab_test: "Өтмөктү алмаштыруу",
    camera_test: "Экинчи адам",
    reset: "Кайра баштоо",
    security_ready: "Платформанын реакциясын көрүү үчүн сценарийди танда.",
    tab_warning: "Өтмөк алмаштырылды. 3 эскертүүнүн {count}-си.",
    tab_blocked: "Үчүнчү бузуу: бул моделде сынак аяктады.",
    camera_warning: "Кадрда экинчи адам табылды. Платформа эскертүү көрсөтөт.",
    cosmic_facts: "3 негиздөөчү · Кыргызстан",
    cargo_facts: "500+ кг · болжол менен 1 жыл",
    consult_role: "Сайтты иштеп чыгуу",
    export_question: "Суроо",
    export_answer: "Жооп",
    export_key: "Туура жооп",
    export_correct: "Туура",
  },
};
Object.assign(additions.en, {
  reel_note: "Five projects. Built to be used.",
  reel_pause: "Pause gallery",
  reel_resume: "Resume gallery",
  choose_language: "Choose language",
});
Object.assign(additions.ru, {
  reel_note: "Пять проектов. Для реальных задач.",
  reel_pause: "Пауза галереи",
  reel_resume: "Продолжить галерею",
  choose_language: "Выбрать язык",
});
Object.assign(additions.ky, {
  reel_note: "Чыныгы маселелер үчүн беш долбоор.",
  reel_pause: "Галереяны токтотуу",
  reel_resume: "Галереяны улантуу",
  choose_language: "Тил тандоо",
});
for (const lang of Object.keys(additions))
  Object.assign(i18n[lang], additions[lang]);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const storage = {
  get(k, f) {
    try {
      return localStorage.getItem(k) ?? f;
    } catch {
      return f;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch {}
  },
};
let currentLang = storage.get("ariet_language", "en");
if (!i18n[currentLang]) currentLang = "en";
const t = (key, vars = {}) =>
  Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, v),
    i18n[currentLang][key] || i18n.en[key] || key,
  );
let theme = storage.get("ariet_theme", "dark");
if (!["light", "dark"].includes(theme)) theme = "dark";
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let motionPaused =
  storage.get("ariet_motion_paused", "false") === "true" ||
  reducedMotion.matches;
let selectedProject = null,
  updateLabLabels = () => {},
  updateField = () => {},
  updateReel = () => {},
  updateLanguagePicker = () => {};
function applyLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  storage.set("ariet_language", lang);
  $$("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  $("#language").value = lang;
  updateLanguagePicker();
  $(".menu-toggle").setAttribute(
    "aria-label",
    t(
      $(".menu-toggle").getAttribute("aria-expanded") === "true"
        ? "close_menu"
        : "open_menu",
    ),
  );
  $(".dialog-close").setAttribute("aria-label", t("close"));
  $("#copy-email").setAttribute("aria-label", t("copy_email"));
  document.title =
    lang === "ru"
      ? "Ариет — Разработка и автоматизация"
      : lang === "ky"
        ? "Ариет — Иштеп чыгуу жана автоматташтыруу"
        : "Ariet — Development & Automation";
  syncTheme();
  syncMotion();
  updateLabLabels();
  if (selectedProject) renderProject(selectedProject);
  document.dispatchEvent(
    new CustomEvent("portfolio:language", { detail: { language: lang } }),
  );
}
function syncTheme() {
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle").textContent = t(
    theme === "dark" ? "light_theme" : "dark_theme",
  );
  $("#theme-toggle").setAttribute("aria-label", $("#theme-toggle").textContent);
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.dispatchEvent(new CustomEvent("portfolio:theme"));
}
function syncMotion() {
  $("#motion-toggle").setAttribute("aria-pressed", String(motionPaused));
  $("#motion-toggle span").textContent = t(
    motionPaused ? "resume_motion" : "pause_motion",
  );
  $("#motion-toggle svg").innerHTML = motionPaused
    ? '<path d="m5 3 7 5-7 5Z"/>'
    : '<path d="M5.5 3v10M10.5 3v10"/>';
  updateField();
  updateReel();
  document.dispatchEvent(
    new CustomEvent("portfolio:motion", { detail: { paused: motionPaused } }),
  );
}
$("#language").addEventListener("change", (e) => applyLanguage(e.target.value));
$("#theme-toggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  storage.set("ariet_theme", theme);
  syncTheme();
});
$("#motion-toggle").addEventListener("click", () => {
  motionPaused = !motionPaused;
  storage.set("ariet_motion_paused", String(motionPaused));
  syncMotion();
});
reducedMotion.addEventListener("change", (e) => {
  motionPaused =
    e.matches || storage.get("ariet_motion_paused", "false") === "true";
  syncMotion();
});
$("#year").textContent = new Date().getFullYear();
const menuToggle = $(".menu-toggle"),
  mobileNav = $("#mobile-nav");
function closeMenu(focus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-label", t("open_menu"));
  if (focus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
  menuToggle.setAttribute("aria-label", t(open ? "close_menu" : "open_menu"));
});
$$("a", mobileNav).forEach((a) =>
  a.addEventListener("click", () => closeMenu()),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !mobileNav.hidden) closeMenu(true);
});
document.addEventListener("click", (e) => {
  if (!mobileNav.hidden && !e.target.closest(".site-header")) closeMenu();
});
matchMedia("(min-width: 761px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});
// Authored project-cover images are rendered in the cylinder component.
const dialog = $("#project-dialog");
function renderProject(id) {
  const para = (k) => `<p>${t(k)}</p>`,
    heading = (k) => `<h3>${t(k)}</h3>`,
    facts = (a) =>
      `<div class="dialog-facts">${a.map((v) => `<span>${v}</span>`).join("")}</div>`;
  let html = "";
  if (id === "ocr")
    html =
      '<h2 id="dialog-title">AIM OCR</h2>' +
      para("ocr_lead") +
      facts(["20 000+", t("six_schools"), "Python / OpenCV"]) +
      heading("barrier_title") +
      para("ocr_desc") +
      heading("solution_title") +
      para("solution_desc") +
      heading("pipeline") +
      "<ol>" +
      [1, 2, 3, 4, 5, 6]
        .map(
          (n) =>
            `<li><strong>${t(`ocr_s${n}_title`)}</strong> — ${t(`ocr_s${n}_desc`)}</li>`,
        )
        .join("") +
      "</ol>" +
      heading("role") +
      para("ocr_team_badge") +
      heading("stack") +
      "<p>Python, OpenCV, NumPy, homography, subpixel snapping, OpenPyXL.</p>" +
      para("model_explanation") +
      `<a class="button" href="#flagship" id="dialog-demo-link">${t("demo_link")}</a>`;
  if (id === "exam")
    html =
      '<h2 id="dialog-title">AIM Exam</h2>' +
      para("anticheat_lead") +
      heading("feat_tab_title") +
      para("feat_tab_desc") +
      heading("feat_cam_title") +
      para("feat_cam_desc") +
      heading("security_title") +
      para("security_note") +
      `<div class="security-controls"><button class="quiet-button" data-security="tab">${t("tab_test")}</button><button class="quiet-button" data-security="camera">${t("camera_test")}</button><button class="quiet-button" data-security="reset">${t("reset")}</button></div><p class="security-result" role="status" aria-live="polite">${t("security_ready")}</p>`;
  if (id === "cosmic")
    html =
      '<h2 id="dialog-title">Cosmic Team</h2>' +
      facts([t("cosmic_facts"), "ESC/POS"]) +
      para("cosmic_desc") +
      para("cosmic_desc2");
  if (id === "consult")
    html =
      '<h2 id="dialog-title">Consulteam</h2>' +
      facts([t("consult_role"), "consulteam.edu.kg"]) +
      para("consult_desc") +
      `<a class="button" href="https://consulteam.edu.kg" target="_blank" rel="noopener noreferrer">${t("open_site")}</a>`;
  if (id === "cargo")
    html =
      '<h2 id="dialog-title">AIM Cargo</h2>' +
      facts([t("cargo_facts"), "China / Kyrgyzstan"]) +
      para("cargo_desc") +
      heading("beyond_code") +
      para("cargo_callout");
  $("#dialog-content").innerHTML = html;
  $("#dialog-demo-link")?.addEventListener("click", () => dialog.close());
  let violations = 0;
  $$("[data-security]", dialog).forEach((btn) =>
    btn.addEventListener("click", () => {
      const action = btn.dataset.security,
        result = $(".security-result", dialog);
      if (action === "reset") {
        violations = 0;
        result.textContent = t("security_ready");
      }
      if (action === "tab") {
        violations = Math.min(3, violations + 1);
        result.textContent = t(
          violations === 3 ? "tab_blocked" : "tab_warning",
          { count: violations },
        );
      }
      if (action === "camera")
        result.textContent = t(
          violations === 3 ? "tab_blocked" : "camera_warning",
        );
    }),
  );
}
$$("[data-project]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    selectedProject = btn.dataset.project;
    renderProject(selectedProject);
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }),
);
$(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () => {
  selectedProject = null;
  document.body.classList.remove("dialog-open");
});
function initLab() {
  const key = ["A", "C", "B", "D", "A", "B", "D", "C", "A", "B"],
    answers = ["A", "C", "B", "D", "A", "A", "D", "C", "A", "B"];
  let evaluated = false,
    evaluating = false;
  const rows = $("#answer-rows"),
    score = () => answers.reduce((s, a, i) => s + Number(a === key[i]), 0);
  function labels() {
    $$(".answer-row", rows).forEach((row, i) => {
      row.setAttribute("aria-label", `${t("question")} ${i + 1}`);
      $$("button", row).forEach((b) =>
        b.setAttribute(
          "aria-label",
          t("answer_label", { n: i + 1, choice: b.dataset.choice }),
        ),
      );
    });
    $("#lab-status").textContent = evaluating
      ? t("lab_scanning")
      : evaluated
        ? t("lab_result", { score: score() })
        : t("lab_ready");
  }
  function invalidate() {
    evaluated = false;
    $("#export").hidden = true;
    $$(".bubble", rows).forEach((b) => {
      b.classList.remove("correct", "incorrect");
      b.removeAttribute("data-result");
    });
    $("#lab-status").classList.remove("result");
    labels();
  }
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.className = "answer-row";
    row.setAttribute("role", "radiogroup");
    const n = document.createElement("span");
    n.textContent = String(i + 1).padStart(2, "0");
    row.append(n);
    for (const choice of ["A", "B", "C", "D"]) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "bubble";
      b.dataset.choice = choice;
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(answers[i] === choice));
      b.tabIndex = answers[i] === choice ? 0 : -1;
      b.addEventListener("click", () => {
        if (evaluating) return;
        answers[i] = choice;
        $$("button", row).forEach((x) => {
          x.setAttribute("aria-checked", String(x === b));
          x.tabIndex = x === b ? 0 : -1;
        });
        invalidate();
      });
      b.addEventListener("keydown", (e) => {
        const moves = {
          ArrowRight: 1,
          ArrowDown: 1,
          ArrowLeft: -1,
          ArrowUp: -1,
        };
        if (!(e.key in moves)) return;
        e.preventDefault();
        const list = $$("button", row),
          next = list[(list.indexOf(b) + moves[e.key] + 4) % 4];
        next.click();
        next.focus();
      });
      row.append(b);
    }
    rows.append(row);
  }
  $("#tilt").addEventListener("click", () =>
    $("#answer-paper").classList.toggle("tilted"),
  );
  $("#evaluate").addEventListener("click", async () => {
    if (evaluating) return;
    evaluating = true;
    evaluated = false;
    $("#evaluate").disabled = true;
    $("#tilt").disabled = true;
    $("#export").hidden = true;
    $$(".bubble", rows).forEach((b) => {
      b.disabled = true;
      b.classList.remove("correct", "incorrect");
    });
    $("#answer-paper").classList.add("scanning");
    $("#answer-paper").classList.remove("tilted");
    labels();
    await new Promise((r) => setTimeout(r, reducedMotion.matches ? 100 : 1700));
    $$(".answer-row", rows).forEach((row, i) => {
      const b = $("[aria-checked=true]", row);
      b.classList.add(answers[i] === key[i] ? "correct" : "incorrect");
      b.dataset.result = answers[i] === key[i] ? "correct" : "incorrect";
    });
    evaluating = false;
    evaluated = true;
    $("#evaluate").disabled = false;
    $("#tilt").disabled = false;
    $("#export").hidden = false;
    $$(".bubble", rows).forEach((b) => (b.disabled = false));
    $("#answer-paper").classList.remove("scanning");
    $("#lab-status").classList.add("result");
    labels();
  });
  $("#export").addEventListener("click", () => {
    if (!evaluated) return;
    const data = [
        [
          t("export_question"),
          t("export_answer"),
          t("export_key"),
          t("export_correct"),
        ],
        ...answers.map((a, i) => [i + 1, a, key[i], Number(a === key[i])]),
      ],
      blob = new Blob(["\uFEFF" + data.map((r) => r.join(",")).join("\r\n")], {
        type: "text/csv;charset=utf-8",
      }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = "aim-ocr-demo-results.csv";
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  updateLabLabels = labels;
}
let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  $("#toast").textContent = message;
  $("#toast").classList.add("visible");
  toastTimer = setTimeout(() => $("#toast").classList.remove("visible"), 3000);
}
$("#copy-email").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("ariet5656@gmail.com");
    toast(t("copied"));
  } catch {
    toast(t("copy_failed"));
  }
});
// Pre-rendered field marks. Bounded frame rate and pixel ratio; pauses offscreen.
function initField() {
  const canvas = $("#field"),
    ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) {
    $("#motion-toggle").hidden = true;
    return;
  }
  const hero = $(".hero");
  let width = 0,
    height = 0,
    frameId = 0,
    visible = true,
    last = 0,
    time = 0,
    pointerX = 0,
    pointerY = 0,
    cameraX = 0,
    cameraY = 0,
    seed = 813;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const points = Array.from({ length: 6500 }, () => ({
    x: (random() - 0.5) * 90,
    z: 5 + random() * 90,
    size: 0.12 + random() * 0.12,
    angle: random() * Math.PI,
    phase: random() * 6.28,
    tone: random(),
  })).sort((a, b) => b.z - a.z);
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 100;
  const paint = sprite.getContext("2d");
  paint.translate(50, 50);
  paint.fillStyle = "#e9eee7";
  for (let n = 0; n < 6; n++) {
    paint.save();
    paint.rotate((n * Math.PI) / 3);
    paint.beginPath();
    paint.ellipse(0, -18, 7.5, 19, 0, 0, Math.PI * 2);
    paint.fill();
    paint.restore();
  }
  paint.fillStyle = "#aebbb0";
  paint.beginPath();
  paint.arc(0, 0, 5, 0, Math.PI * 2);
  paint.fill();
  let copyX = 0,
    copyY = 0,
    copyWidth = 0,
    copyHeight = 0;
  function updateCopyBounds() {
    const copyEl = $(".hero-copy > p");
    if (!copyEl) return;
    const copyRect = copyEl.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    copyWidth = copyRect.width;
    copyHeight = copyRect.height;
    copyX = copyRect.left + copyWidth / 2;
    copyY = copyRect.top - heroRect.top + copyHeight / 2;
  }
  function render(stamp = 0) {
    frameId = 0;
    if (stamp && stamp - last < 30) {
      frameId = requestAnimationFrame(render);
      return;
    }
    const delta = last && stamp ? Math.min((stamp - last) / 1000, 0.06) : 0;
    last = stamp;
    if (!motionPaused) time += delta;
    cameraX += (pointerX - cameraX) * 0.035;
    cameraY += (pointerY - cameraY) * 0.035;
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#080a0b";
    ctx.fillRect(0, 0, width, height);
    const focal = width < 760 ? width * 1.1 : width * 0.94,
      horizon = height * (width < 760 ? 0.48 : 0.43);
    if (!copyWidth) updateCopyBounds();
    for (const p of points) {
      const s = focal / (p.z + 4),
        wave =
          Math.sin(p.x * 0.1 + p.z * 0.065 + time * 0.18) * 1.4 +
          Math.cos(p.z * 0.13 - time * 0.14) * 0.65,
        x =
          width / 2 +
          (p.x + cameraX * 0.9 + Math.sin(time * 0.12 + p.phase) * 0.1) * s,
        y = horizon + (4.8 + wave + cameraY * 0.35) * s,
        size = p.size * s * 2.1;
      if (
        x < -size ||
        x > width + size ||
        y < horizon - 30 ||
        y > height + size
      )
        continue;
      const edge = Math.min(1, (height - y) / (height * 0.19)),
        distance = Math.max(0.15, 1 - p.z / 140),
        copyShadeX = Math.max(
          0,
          Math.min(1, (copyWidth / 2 + 32 - Math.abs(x - copyX)) / 32),
        ),
        copyShadeY = Math.max(
          0,
          Math.min(1, (copyHeight / 2 + 32 - Math.abs(y - copyY)) / 32),
        );
      ctx.globalAlpha =
        Math.max(0, edge) *
        distance *
        (0.65 + p.tone * 0.35) *
        (1 - 0.96 * copyShadeX * copyShadeY);
      if (size > 9) {
        ctx.strokeStyle = "#253c30";
        ctx.lineWidth = Math.max(1, size * 0.045);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size * 0.1, y + size * 0.9);
        ctx.stroke();
      }
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(p.angle + Math.sin(time * 0.25 + p.phase) * 0.08);
      ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    if (visible && !document.hidden && !motionPaused)
      frameId = requestAnimationFrame(render);
  }
  function schedule() {
    if (!frameId) frameId = requestAnimationFrame(render);
  }
  function resize() {
    const r = hero.getBoundingClientRect();
    width = r.width;
    height = r.height;
    updateCopyBounds();
    const dpr = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    schedule();
  }
  document.addEventListener("portfolio:language", () => {
    requestAnimationFrame(updateCopyBounds);
  });
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    last = 0;
    if (visible) schedule();
    else if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }).observe(hero);
  hero.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch" || motionPaused) return;
    pointerX = (e.clientX / width - 0.5) * 2;
    pointerY = (e.clientY / height - 0.5) * 2;
  });
  hero.addEventListener("pointerleave", () => {
    pointerX = pointerY = 0;
  });
  document.addEventListener("visibilitychange", () => {
    last = 0;
    if (!document.hidden && visible) schedule();
    else if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  });
  updateField = () => {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    last = 0;
    if (visible && !document.hidden) schedule();
  };
  resize();
}
function initLanguagePicker() {
  const trigger = $("#language-toggle"),
    panel = $("#language-options"),
    options = $$("[data-language]", panel);
  const fluid = new FlowerFluid($("#language-fluid"));
  let sequence = 0;
  const transitions = new Set();
  function close(focus = false) {
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (focus) trigger.focus();
  }
  function open() {
    closeMenu();
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    options.find((option) => option.dataset.language === currentLang).focus();
  }
  updateLanguagePicker = () => {
    $("#language-code").textContent =
      currentLang === "ky" ? "KG" : currentLang.toUpperCase();
    trigger.setAttribute(
      "aria-label",
      `${t("choose_language")}: ${currentLang === "en" ? "English" : currentLang === "ru" ? "Русский" : "Кыргызча"}`,
    );
    options.forEach((option) => {
      const selected = option.dataset.language === currentLang;
      option.setAttribute("aria-selected", String(selected));
      option.tabIndex = selected ? 0 : -1;
    });
  };
  trigger.addEventListener("click", () => (panel.hidden ? open() : close()));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      open();
    }
  });
  panel.addEventListener("keydown", (event) => {
    const current = options.indexOf(document.activeElement);
    let next = current;
    if (event.key === "ArrowDown") next = (current + 1) % options.length;
    else if (event.key === "ArrowUp")
      next = (current - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close(true);
      return;
    } else if (event.key === "Tab") {
      close();
      return;
    } else return;
    event.preventDefault();
    options[next].focus();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-picker")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) close(true);
  });
  menuToggle.addEventListener("click", () => close());
  options.forEach((option) =>
    option.addEventListener("click", async () => {
      const lang = option.dataset.language,
        token = ++sequence,
        rect = trigger.getBoundingClientRect();
      close(true);
      if (lang === currentLang) return;
      transitions.forEach((animation) => animation.cancel());
      transitions.clear();
      if (reducedMotion.matches || motionPaused) {
        applyLanguage(lang);
        return;
      }
      fluid.launch({ x: rect.left + rect.width / 2, y: rect.bottom - 2 });
      const visibleItems = [];
      const vh = innerHeight || 800;
      $$("[data-i18n]").forEach((element) => {
        if (element.closest(".language-options")) return;
        const r = element.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < vh) {
          visibleItems.push({
            element,
            delay: Math.max(0, Math.min(1, r.top / vh)) * 140,
          });
        }
      });
      for (const { element } of visibleItems) {
        const animation = element.animate([{ opacity: 1 }, { opacity: 0.2 }], {
          duration: 90,
          easing: "ease-out",
          fill: "forwards",
        });
        transitions.add(animation);
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (token !== sequence) return;
      applyLanguage(lang);
      for (const { element, delay } of visibleItems) {
        const animation = element.animate(
          [
            { opacity: 0.2, transform: "translateY(3px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 280,
            delay,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        );
        transitions.add(animation);
        animation.finished
          .then(() => {
            transitions.delete(animation);
            animation.cancel();
          })
          .catch(() => {});
      }
    }),
  );
  updateLanguagePicker();
}

initLab();
applyLanguage(currentLang);
initField();
initLanguagePicker();
