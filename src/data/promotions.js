// Акции / popup-предложения.
// enabled: true — акция активна и может показываться в popup.
// Это демонстрационная запись-пример. Замените на реальную акцию, когда она будет подтверждена,
// либо оставьте enabled: false, чтобы popup не показывался вовсе.

const promotions = [
  {
    id: "welcome-offer",
    enabled: false,
    title: "Специальное предложение",
    text: "Скидка 10% на первое посещение",
    discount: "-10%",
    image: "./images/promo-welcome.jpg",
    buttonText: "Записаться",
    validUntil: "",
  },
];

export default promotions;
