// Реальные услуги и цены Femme Forms.
// Названия, длительность, цены и описания — реальные данные бизнеса, не менять смысл.
// price хранится числом (в рублях), форматирование — через src/utils/format.js (formatPrice).

export const CATEGORIES = [
  "SPA Turkish",
  "SPA",
  "Арома программы",
  "Массаж",
  "Парение в бочке",
  "Тейпирование",
];

const services = [
  // ---------- SPA Turkish ----------
  {
    id: "shafranovaya-vual",
    category: "SPA Turkish",
    title: "Шафрановая вуаль",
    duration: "1 ч 10 мин",
    price: 4200,
    description:
      "Парение в бочке — 15 мин.\nТело мягко раскрывается, мысли замедляются.\n\n" +
      "Скрабирование шейно-воротниковой зоны парфюмированным гоммажем Sultan de Saba — 7 мин.\n\n" +
      "Массаж + скраб ладоней — 10 мин.\n\n" +
      "Миофасциальный массаж лица с маслом Кум Кумади — 20 мин.\n\n" +
      "Фрукты и чай — 10 мин.",
  },
  {
    id: "ritual-karie",
    category: "SPA Turkish",
    title: "Ритуал Карие",
    duration: "1 ч 30 мин",
    price: 6800,
    description:
      "Парение — 15 минут.\n\n" +
      "Скрабирование и массаж стопы — 10 мин.\n\n" +
      "Скрабирование парфюмированным гоммажем Sultan de Saba и массаж спины — 30 мин.\n\n" +
      "Массаж + скраб ладони — 5 мин.\n\n" +
      "Миофасциальный массаж лица на Кум Кумади — 25 мин.\n\n" +
      "В конце фрукты и чай — 10 минут.",
  },
  {
    id: "ritual-kese",
    category: "SPA Turkish",
    title: "Ритуал Кесе",
    duration: "2 ч 40 мин",
    price: 15000,
    description:
      "Парение в бочке — 20 мин.\n\n" +
      "Скрабирование всего тела перчаткой Кесе — 20 мин.\n\n" +
      "Нанесение парфюмированного гоммажа Sultan De Saba — 10 мин.\n\n" +
      "Массаж стоп — 10 мин.\n\n" +
      "Массаж всего тела — 60 мин.\n\n" +
      "Массаж ладоней — 5 мин.\n\n" +
      "Миофасциальный массаж лица с маслом Кум Кумади — 20 мин.\n\n" +
      "Массаж головы — 15 мин.\n\n" +
      "Фрукты и чай — 10 мин.",
  },

  // ---------- SPA ----------
  {
    id: "korolevskoe-spa",
    category: "SPA",
    title: "Королевское СПА",
    duration: "2 ч 5 мин",
    price: 7500,
    description:
      "Релакс-программа:\n\n" +
      "— ритуал омовения стоп горячими полотенцами\n" +
      "— арома-скрабирование тела\n" +
      "— массажный SPA-уход за телом — 60 мин\n" +
      "— массажный уход лица\n" +
      "— массажный уход головы",
  },

  // ---------- Арома программы ----------
  {
    id: "aromatach-8-masel",
    category: "Арома программы",
    title: "АромаТач 8 масел расслабление",
    duration: "55 мин",
    price: 3500,
    description:
      "Расслабляющая релакс-техника на 8 ароматических маслах doTERRA терапевтического класса.",
  },

  // ---------- Массаж ----------
  {
    id: "massazh-stop-golovy",
    category: "Массаж",
    title: "Массаж стоп + массаж головы",
    duration: "50 мин",
    price: 2800,
    description:
      "Массаж стоп + массаж головы.\n\n" +
      "Масло для стоп — имбирь, апельсин, корица и другие эфирные масла.",
  },
  {
    id: "korrekciya-vtorogo-podborodka",
    category: "Массаж",
    title: "Коррекция второго подбородка",
    duration: "1 ч 20 мин",
    price: 3500,
    description: "",
  },
  {
    id: "medovyj-spamassazh-odnoj-zony",
    category: "Массаж",
    title: "Медовый спамассаж одной зоны",
    duration: "20 мин",
    price: 2500,
    description: "Антицеллюлитный медовый массаж одной зоны.",
  },
  {
    id: "medovyj-spamassazh",
    category: "Массаж",
    title: "Медовый спамассаж",
    duration: "45 мин",
    price: 4500,
    description: "Антицеллюлитный медовый массаж двух зон.",
  },
  {
    id: "spamassazh-modeliruyushhij-styx",
    category: "Массаж",
    title: "СПАмассаж, моделирующий фигуру, на подложке STYX",
    duration: "1 ч",
    price: 4700,
    description:
      "Активная тонизирующая техника всего тела с применением австрийской косметики STYX.",
  },
  {
    id: "massazh-obshhij-muzhchiny-60",
    category: "Массаж",
    title: "Массаж общий для мужчин 60 мин",
    duration: "1 ч",
    price: 4000,
    description: "Комбинация нескольких техник проработки мышц всего тела.",
  },
  {
    id: "massazh-obshhij-muzhchiny-90",
    category: "Массаж",
    title: "Массаж общий для мужчин 90 мин",
    duration: "1 ч 30 мин",
    price: 6000,
    description: "Комбинация нескольких техник проработки мышц всего тела.",
  },
  {
    id: "tonizir-spamassazh-spiny",
    category: "Массаж",
    title: "Тонизирующий спамассаж спины",
    duration: "35 мин",
    price: 2500,
    description: "Техника прорабатывает мышцы спины и шейно-воротниковую зону.",
  },
  {
    id: "tonizir-massazh-spiny-muzhchiny",
    category: "Массаж",
    title: "Тонизирующий массаж спины для мужчин",
    duration: "35 мин",
    price: 2900,
    description: "Техника прорабатывает мышцы спины и шейно-воротниковую зону.",
  },
  {
    id: "tonizir-spamassazh-shvz",
    category: "Массаж",
    title: "Тонизирующий спамассаж шейно-воротниковой зоны",
    duration: "25 мин",
    price: 1900,
    description: "Техника классического массажа шейно-воротниковой зоны.",
  },
  {
    id: "intensiv-zhiroszhigayushhij-spamassazh-60",
    category: "Массаж",
    title: "Интенсивный жиросжигающий Спамассаж 60 мин",
    duration: "1 ч 5 мин",
    price: 4500,
    description:
      "Активная антицеллюлитная ручная техника для коррекции фигуры с использованием банок по желанию, гуа-ша и техники «бразильская попка».",
  },
  {
    id: "zhirotop-spamassazh-obertyvanie-styx",
    category: "Массаж",
    title: "Жиротоп — Спамассаж и обертывание на косметике STYX",
    duration: "1 ч 30 мин",
    price: 6000,
    description:
      "Активный разогрев проблемных зон, антицеллюлитные техники, применение вакуумных банок, гуа-ша, обертывание проблемных зон на косметике STYX.",
  },
  {
    id: "detskij-massazh",
    category: "Массаж",
    title: "Детский массаж",
    duration: "40 мин",
    price: 2500,
    description:
      "Не требующий медицинских показаний.\n\n" +
      "Снимает напряжение и нервную возбудимость, способствует расслаблению перед сном.",
  },
  {
    id: "miofascialnyj-spamassazh-lica",
    category: "Массаж",
    title: "Миофасциальный Спамассаж лица",
    duration: "45 мин",
    price: 3200,
    description:
      "Глубинный массаж лица, прорабатывает глубокие слои кожи и мышц, нормализует тонус мышц, прорабатывает гипертонус, восстанавливает овал лица, улучшает лимфоотток, избавляет от отеков.",
  },
  {
    id: "spamassazh-stop",
    category: "Массаж",
    title: "Спамассаж стоп",
    duration: "20 мин",
    price: 1800,
    description: "Способствует снятию напряжения, улучшению общего состояния и качества сна.",
  },
  {
    id: "spamassazh-golovy",
    category: "Массаж",
    title: "Спамассаж головы",
    duration: "20 мин",
    price: 1500,
    description:
      "Уникальная методика для быстрого восстановления и гармонизации психоэмоционального состояния.",
  },
  {
    id: "massazh-obshhij-zhenshhiny-90",
    category: "Массаж",
    title: "Массаж общий для женщин 90 мин",
    duration: "1 ч 35 мин",
    price: 5000,
    description: "Общий массаж для женщин — расслабление, забота и красота.",
  },
  {
    id: "massazh-obshhij-zhenshhiny-60",
    category: "Массаж",
    title: "Массаж общий для женщин 60 мин",
    duration: "1 ч 5 мин",
    price: 3500,
    description: "Общий массаж для женщин — 60 минут заботы и расслабления.",
  },
  {
    id: "limfodrenazhnyj-massazh",
    category: "Массаж",
    title: "Лимфодренажный массаж",
    duration: "1 ч",
    price: 3500,
    description: "",
  },
  {
    id: "anticellyulitnyj-massazh-90",
    category: "Массаж",
    title: "Антицеллюлитный массаж 90 минут",
    duration: "1 ч 30 мин",
    price: 6000,
    description: "",
  },
  {
    id: "massazh-nog",
    category: "Массаж",
    title: "Массаж ног",
    duration: "30 мин",
    price: 2400,
    description: "",
  },

  // ---------- Парение в бочке ----------
  {
    id: "bochka-20-massazh-45",
    category: "Парение в бочке",
    title: "Бочка (20) + массаж (45)",
    duration: "1 ч 30 мин",
    price: 4700,
    description: "Парение в ароматной кедровой бочке, после прогрева — массаж тела.",
  },
  {
    id: "parenie-kedrovaya-bochka-30",
    category: "Парение в бочке",
    title: "Парение в кедровой бочке 30 минут",
    duration: "40 мин",
    price: 1700,
    description: "Парение в ароматной кедровой бочке.",
  },
  {
    id: "bochka-30-skrabirovanie-15",
    category: "Парение в бочке",
    title: "Бочка (30) + скрабирование (15)",
    duration: "1 ч",
    price: 3700,
    description: "Прогрев в бочке + скрабирование тела.",
  },
  {
    id: "parenie-bochka-massazh-muzhskoj",
    category: "Парение в бочке",
    title: "Парение в бочке + массаж мужской",
    duration: "1 ч 10 мин",
    price: 5700,
    description: "",
  },

  // ---------- Тейпирование ----------
  {
    id: "tejpirovanie-holki",
    category: "Тейпирование",
    title: "Тейпирование холки",
    duration: "15 мин",
    price: 1000,
    description: "Консультация + тейпирование + тейпы.",
  },
  {
    id: "orto-tejpirovanie",
    category: "Тейпирование",
    title: "Орто-тейпирование",
    duration: "30 мин",
    price: 1500,
    description:
      "Консультация и тейпирование.\n\nТейпы оплачиваются отдельно — 3,5 ₽ за см.",
  },
  {
    id: "tejpirovanie-lica",
    category: "Тейпирование",
    title: "Тейпирование лица",
    duration: "20 мин",
    price: 500,
    description:
      "Аппликации на лицо: межбровка, носогубка.\n\nВ стоимость входят консультация, тейпы и тейпирование.",
  },
];

export default services;
