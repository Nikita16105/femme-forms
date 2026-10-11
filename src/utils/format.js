// Форматирование цены: число -> "4 200 ₽"
export function formatPrice(price) {
  if (typeof price !== "number") return price;
  return `${price.toLocaleString("ru-RU")} ₽`;
}

// Короткая версия описания для карточки: только первая строка/предложение,
// обрезанная до разумной длины. Полный текст остаётся в модалке "Подробнее".
export function shortDescription(text, maxLength = 90) {
  if (!text) return "";
  const firstLine = text.split("\n")[0].trim();
  if (firstLine.length <= maxLength) return firstLine;
  return `${firstLine.slice(0, maxLength).trim()}…`;
}
