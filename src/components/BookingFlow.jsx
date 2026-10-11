import { useEffect, useMemo, useState } from "react";
import services, { CATEGORIES } from "../data/services";
import masters from "../data/masters";
import BookingStep from "./BookingStep";
import { formatPrice } from "../utils/format";
import "./BookingFlow.css";

// Демонстрационные тайм-слоты. В будущем заменить на данные реального расписания.
const DEMO_TIME_SLOTS = ["10:00", "11:30", "13:00", "15:30", "17:00", "18:30"];

const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const MONTH_NAMES = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

function buildMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // делаем понедельник первым днём
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

function formatDate(date) {
  return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long", weekday: "long" });
}

function isSameDay(a, b) {
  return a && b && a.toDateString() === b.toDateString();
}

const emptyContact = { name: "", phone: "", contact: "" };

export default function BookingFlow({ initialService, initialMaster, onClose }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || null);
  const [master, setMaster] = useState(initialMaster || null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [contact, setContact] = useState(emptyContact);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    initialService?.category || CATEGORIES[0]
  );

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const canGoNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!master;
    if (step === 3) return !!date;
    if (step === 4) return !!time;
    return true;
  };

  const validateContact = () => {
    const next = {};
    if (!contact.name.trim()) next.name = "Укажите имя";
    if (!contact.phone.trim() || contact.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Укажите корректный телефон";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (step === 5) {
      if (!validateContact()) return;
    }
    setStep((s) => Math.min(s + 1, 6));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleConfirm = () => {
    // Точка интеграции: здесь в будущем будет вызов реального API / YCLIENTS.
    // submitBooking({ service, master, date, time, contact })
    setConfirmed(true);
  };

  const monthCells = buildMonthGrid(viewMonth.year, viewMonth.month);
  const canGoPrevMonth =
    viewMonth.year > today.getFullYear() ||
    (viewMonth.year === today.getFullYear() && viewMonth.month > today.getMonth());

  return (
    <div className="booking-overlay" role="dialog" aria-modal="true" aria-label="Запись на услугу">
      <div className="booking-overlay__backdrop" onClick={onClose} />

      <div className="booking-panel">
        <button className="booking-panel__close" onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        {!confirmed && (
          <div className="booking-panel__steps">
            <BookingStep current={step} />
          </div>
        )}

        <div className="booking-panel__body">
          {confirmed ? (
            <ConfirmedScreen
              service={service}
              master={master}
              date={date}
              time={time}
              contact={contact}
              onClose={onClose}
            />
          ) : (
            <>
              {step === 1 && (
                <StepBlock title="Выберите услугу">
                  <div className="booking-tabs">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        className={`booking-tab ${activeCategory === category ? "booking-tab--active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="booking-grid">
                    {services
                      .filter((s) => s.category === activeCategory)
                      .map((s) => (
                        <button
                          key={s.id}
                          className={`booking-option ${service?.id === s.id ? "booking-option--active" : ""}`}
                          onClick={() => setService(s)}
                        >
                          <span className="booking-option__title">{s.title}</span>
                          <span className="booking-option__meta">
                            {s.duration} · {formatPrice(s.price)}
                          </span>
                        </button>
                      ))}
                  </div>
                </StepBlock>
              )}

              {step >= 2 && step <= 5 && service && (
                <div className="booking-selected-service">
                  <span>{service.title}</span>
                  <span>
                    {service.duration} · {formatPrice(service.price)}
                  </span>
                </div>
              )}

              {step === 2 && (
                <StepBlock title="Выберите мастера">
                  <div className="booking-grid booking-grid--masters">
                    {masters.map((m) => (
                      <button
                        key={m.id}
                        className={`booking-option ${master?.id === m.id ? "booking-option--active" : ""}`}
                        onClick={() => setMaster(m)}
                      >
                        <span className="booking-option__title">{m.name}</span>
                        <span className="booking-option__meta">{m.description}</span>
                      </button>
                    ))}
                  </div>
                </StepBlock>
              )}

              {step === 3 && (
                <StepBlock title="Выберите дату">
                  <div className="booking-calendar">
                    <div className="booking-calendar__head">
                      <button
                        className="booking-calendar__nav"
                        disabled={!canGoPrevMonth}
                        onClick={() =>
                          setViewMonth((v) => {
                            const m = v.month === 0 ? 11 : v.month - 1;
                            const y = v.month === 0 ? v.year - 1 : v.year;
                            return { year: y, month: m };
                          })
                        }
                        aria-label="Предыдущий месяц"
                      >
                        ‹
                      </button>
                      <span>
                        {MONTH_NAMES[viewMonth.month]} {viewMonth.year}
                      </span>
                      <button
                        className="booking-calendar__nav"
                        onClick={() =>
                          setViewMonth((v) => {
                            const m = v.month === 11 ? 0 : v.month + 1;
                            const y = v.month === 11 ? v.year + 1 : v.year;
                            return { year: y, month: m };
                          })
                        }
                        aria-label="Следующий месяц"
                      >
                        ›
                      </button>
                    </div>

                    <div className="booking-calendar__weekdays">
                      {WEEKDAYS.map((w) => (
                        <span key={w}>{w}</span>
                      ))}
                    </div>

                    <div className="booking-calendar__grid">
                      {monthCells.map((cell, i) => {
                        if (!cell) return <span key={`empty-${i}`} />;
                        const past = cell < today;
                        const selected = isSameDay(cell, date);
                        return (
                          <button
                            key={cell.toISOString()}
                            className={`booking-calendar__day ${selected ? "booking-calendar__day--selected" : ""}`}
                            disabled={past}
                            onClick={() => setDate(cell)}
                          >
                            {cell.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </StepBlock>
              )}

              {step === 4 && (
                <StepBlock title="Выберите время" subtitle={date ? formatDate(date) : ""}>
                  <div className="booking-grid booking-grid--time">
                    {DEMO_TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        className={`booking-option booking-option--time ${time === t ? "booking-option--active" : ""}`}
                        onClick={() => setTime(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <p className="booking-note">Демонстрационное расписание. Реальные свободные слоты появятся после подключения системы записи.</p>
                </StepBlock>
              )}

              {step === 5 && (
                <StepBlock title="Ваши контакты">
                  <div className="booking-form">
                    <label className="booking-field">
                      <span>Имя</span>
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                        placeholder="Как к вам обращаться"
                      />
                      {errors.name && <span className="booking-field__error">{errors.name}</span>}
                    </label>

                    <label className="booking-field">
                      <span>Телефон</span>
                      <input
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                        placeholder="+7 900 000-00-00"
                      />
                      {errors.phone && <span className="booking-field__error">{errors.phone}</span>}
                    </label>

                    <label className="booking-field">
                      <span>Telegram / другой контакт (необязательно)</span>
                      <input
                        type="text"
                        value={contact.contact}
                        onChange={(e) => setContact((c) => ({ ...c, contact: e.target.value }))}
                        placeholder="@username"
                      />
                    </label>
                  </div>
                </StepBlock>
              )}

              {step === 6 && (
                <StepBlock title="Проверьте и подтвердите">
                  <dl className="booking-summary">
                    <div>
                      <dt>Услуга</dt>
                      <dd>{service?.title}</dd>
                    </div>
                    <div>
                      <dt>Длительность и цена</dt>
                      <dd>
                        {service?.duration} · {formatPrice(service?.price)}
                      </dd>
                    </div>
                    <div>
                      <dt>Мастер</dt>
                      <dd>{master?.name}</dd>
                    </div>
                    <div>
                      <dt>Дата</dt>
                      <dd>{date ? formatDate(date) : "—"}</dd>
                    </div>
                    <div>
                      <dt>Время</dt>
                      <dd>{time}</dd>
                    </div>
                    <div>
                      <dt>Имя</dt>
                      <dd>{contact.name}</dd>
                    </div>
                    <div>
                      <dt>Телефон</dt>
                      <dd>{contact.phone}</dd>
                    </div>
                  </dl>
                  <p className="booking-note">
                    Это демонстрационная форма записи. После подтверждения заявка не уходит в реальную систему
                    записи — для полной уверенности напишите нам в Telegram или WhatsApp.
                  </p>
                </StepBlock>
              )}
            </>
          )}
        </div>

        {!confirmed && (
          <div className="booking-panel__footer">
            <button className="btn btn-outline" onClick={step === 1 ? onClose : goBack}>
              {step === 1 ? "Отмена" : "Назад"}
            </button>

            {step < 6 ? (
              <button className="btn btn-primary" disabled={!canGoNext()} onClick={goNext}>
                Далее
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleConfirm}>
                Подтвердить запись
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StepBlock({ title, subtitle, children }) {
  return (
    <div className="booking-step-block">
      <h3>{title}</h3>
      {subtitle && <p className="booking-step-block__subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}

function ConfirmedScreen({ service, master, date, time, contact, onClose }) {
  return (
    <div className="booking-confirmed">
      <div className="booking-confirmed__icon">✓</div>
      <h3>Заявка сформирована</h3>
      <p>
        Спасибо, {contact.name}. Это демонстрационная версия записи — заявка ещё не передана в реальную систему
        записи. Чтобы гарантированно закрепить за собой время, напишите нам:
      </p>

      <dl className="booking-summary booking-summary--compact">
        <div>
          <dt>Услуга</dt>
          <dd>{service?.title}</dd>
        </div>
        <div>
          <dt>Длительность и цена</dt>
          <dd>
            {service?.duration} · {formatPrice(service?.price)}
          </dd>
        </div>
        <div>
          <dt>Мастер</dt>
          <dd>{master?.name}</dd>
        </div>
        <div>
          <dt>Дата и время</dt>
          <dd>
            {date ? date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }) : "—"}, {time}
          </dd>
        </div>
      </dl>

      <div className="booking-confirmed__actions">
        <a
          className="btn btn-primary"
          href="https://t.me/Femme_forms_Admin"
          target="_blank"
          rel="noreferrer"
        >
          Написать в Telegram
        </a>
        <button className="btn btn-outline" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
