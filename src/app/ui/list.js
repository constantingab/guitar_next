import { CgMenuGridO } from "react-icons/cg";
import { GiHuntingHorn } from "react-icons/gi";
import { GiFishing } from "react-icons/gi";
import { GiFishingPole } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

export const arrItem = [
  {
    id: 1,
    title: "Все",
    list: [
      { name: "Рыбалка", path: "fishing" },
      { name: "Охота", path: "hunting" },
      { name: "Спортивная рабылка", path: "sport" },
    ],
    icon: <CgMenuGridO />,
  },
  {
    id: 2,
    title: "Охота",
    list: [
      { name: "Пернатая дичь", path: "feathered" },
      { name: "Пушной зверь", path: "fur" },
      { name: "Копытные", path: "ungulates" },
      { name: "Волк", path: "wolf" },
      { name: "Медведь", path: "bear" },
    ],
    icon: <GiHuntingHorn />,
  },
  {
    id: 3,
    title: "Рыбалка",
    list: [
      { name: "Поплавочная", path: "float" },
      { name: "Спининг", path: "spinning" },
      { name: "Карповая", path: "carp" },
      { name: "Фидер", path: "feeder" },
      { name: "Троллинг", path: "trolling" },
      { name: "Зимняя", path: "winter" },
    ],
    icon: <GiFishing />,
  },
  {
    id: 4,
    title: "Спорт",
    list: [
      { name: "Cпиннинговая ловля", path: "sspinning" },
      { name: "Донная и поплавочная ловля", path: "sbottom" },
      { name: "Кружки", path: "smugs" },
      { name: "Нахлыстовая ловля", path: "sfly" },
      { name: "Ловля на мормышку", path: "sjig" },
      { name: "дорожка", path: "strack" },
    ],
    icon: <GiFishingPole />,
  },
  {
    id: 5,
    title: "Новости",
    list: [
      { name: "Последние новости", path: "news" },
      { name: "Архив новостей", path: "anews" },
    ],
    icon: <IoNewspaperSharp />,
  },
  {
    id: 6,
    title: "ИНФО",
    list: [
      { name: "Монтажи", path: "installation" },
      { name: "Подготовка", path: "preparation" },
    ],
    icon: <FaBook />,
  },
];
