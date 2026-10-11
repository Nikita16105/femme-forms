import "./BookingStep.css";

const STEP_LABELS = ["Услуга", "Мастер", "Дата", "Время", "Контакты", "Готово"];

export default function BookingStep({ current }) {
  return (
    <ol className="booking-step" aria-label="Шаги записи">
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1;
        const state =
          stepNumber === current ? "current" : stepNumber < current ? "done" : "upcoming";

        return (
          <li key={label} className={`booking-step__item booking-step__item--${state}`}>
            <span className="booking-step__dot">{stepNumber < current ? "✓" : stepNumber}</span>
            <span className="booking-step__label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
