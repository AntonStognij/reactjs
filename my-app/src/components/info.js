const myDescription = 
  {
    name:"Стогній Антон Миколайович",
    description:[{
      en:"education",
      ukr:"Освіта"
    },
    {
      en:"experience",
      ukr:"Досвід роботи"
    },
    {
      en:"skills",
      ukr:"Професійні навички"
    },
    {
      en:"hobby",
      ukr:"Хобі"
    },
    {
      en:"other",
      ukr:"Інше"
    },
    ],
    education:[`Полтавський університет економіки і торгівлі (cпеціальність «Банківська справа», червоний диплом (освітньо-кваліфікаційний рівень – магістр)).`,
  `Дніпродзержинський технологічний коледж Дніпродзержинського технічного університету (cпеціальність « Фінанси та кредит», червоний диплом (освітньо-кваліфікаційний рівень – молодший спеціаліст)).`,
`Аульську середня загальноосвітня школа (атестат з відзнакою).`
  ],
     experience:["Посада: Cпеціаліст з операційної підтримки POS терміналів, вдосконалення бізнес-процессів і технологій ІТ ГО, АТ КБ «ПРИВАТБАНК».",
     "Обов'язки: переведенням логіки процесів створених на платформі Corezoid на платформу Node-Red, а також створенням і веденням нових процесів необхідних для роботи напрямку POS.  Процеси створюються на платформах Node-Red і Corezoid (код пишеться на JS) і використовується банківський конструктор створення сайтів, де за допомогою HTML і CSS робиться інтерфейс для користувача. Фактично зараз в обов’язки входить створення інтерфейсу, самого процесу «під капотом», його тестування і супроводження."
],
     skills:["Досвід роботи з Node-Red, Corezoid, Confluence;",
      "JavaScript – середній рівень;",
      "HTML/CSS – середній рівень;",
      "PostgreSQL - базовий рівень;",
      "Adobe Photoshop - базовий рівень;",
      "Adobe Illustrator - базовий рівень;",
      "Figma - базовий рівень;"
    ],
    other:["09.04.1992 р.",
      "м. Кам’янське",
      "Номер телефону: +380 63 56 187",
      "Пошта: antonstognij5@gmail.com",
      "Telegram: @StognijAnton"
    ],
    hobby:[
      "Баскетбол;",
      "Зарубіжна класична література;",
      "Малювання;",
      "Риболовля;"
    ]
  }
  //назначаем параметр для отрисовки
  let content = myDescription.other;
  export {myDescription, content}