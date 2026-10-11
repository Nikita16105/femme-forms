// Мастера студии.
// photo — путь к файлу в public/images/, например "./images/master-tatiana.jpg"
// Рейтинг и количество отзывов не заданы здесь вручную — они считаются
// автоматически из src/data/reviews.js, чтобы не расходиться с реальными данными.

const masters = [
  {
    id: "tatiana",
    name: "Татьяна",
    description:
      "Мастер общего и спа-массажа, массажа лица. Внимательна к запросам и комфорту клиента.",
    photo: "./images/master-tatiana.jpg",
  },
  {
    id: "elizaveta",
    name: "Елизавета",
    description:
      "Мастер общего и моделирующего массажа. Работает с зажимами и триггерными зонами.",
    photo: "./images/master-elizaveta.jpg",
  },
  {
    id: "venera",
    name: "Венера",
    description: "",
    photo: "./images/master-venera.jpg",
  },
  {
    id: "anastasiya",
    name: "Анастасия",
    description: "",
    photo: "./images/master-anastasiya.jpg",
  },
];

export default masters;
