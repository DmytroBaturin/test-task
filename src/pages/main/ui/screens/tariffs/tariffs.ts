export interface ITariffs {
  [key: string]: Tariff[];
}

export interface Tariff {
  title: string;
  features: string[];
  price: number;
  discountPercentage: number;
  discountedPrice: number;
  subscriptionPeriod: string;
  freeTrial: string;
  buttonText: string;
}

export const tariffs: ITariffs = {
  Спот: [
    {
      title: "STANDART",
      features: [
        "Ручной трейдинг",
        "Автоматическое или пользовательское копирование сделок",
        "Личный кабинет со статистикой",
        "Среднесрочные сделки с уровнем набора портфеля",
      ],
      price: 234,
      discountPercentage: 35,
      discountedPrice: 152.1,
      subscriptionPeriod: "12 месяцев",
      freeTrial: "5 дней бесплатно",
      buttonText: "Попробовать",
    },
    {
      title: "VIP",
      features: [
        "Ручной трейдинг",
        "Автоматическое или пользовательское копирование сделок",
        "Личный кабинет со статистикой",
        "Краткосрочные, среднесрочные и инвест сделки",
        "Доступ в Vip чат с командой",
        "Наш авторский курс по трейдингу",
      ],
      price: 585,
      discountPercentage: 35,
      discountedPrice: 380.25,
      subscriptionPeriod: "12 месяцев",
      freeTrial: "5 дней бесплатно",
      buttonText: "Попробовать",
    },
  ],
  Фючирсы: [
    {
      title: "VIP",
      features: [
        "Ручной трейдинг",
        "Автоматическое или пользовательское копирование сделок",
        "Личный кабинет со статистикой",
        "Краткосрочные, среднесрочные и инвест сделки",
        "Доступ в Vip чат с командой",
        "Наш авторский курс по трейдингу",
      ],
      price: 585,
      discountPercentage: 35,
      discountedPrice: 380.25,
      subscriptionPeriod: "12 месяцев",
      freeTrial: "5 дней бесплатно",
      buttonText: "Попробовать",
    },
  ],
};
