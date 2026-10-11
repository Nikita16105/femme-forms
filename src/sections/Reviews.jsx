import { useMemo, useState } from "react";
import reviews from "../data/reviews";
import masters from "../data/masters";
import ReviewCard from "../components/ReviewCard";
import Reveal from "../components/Reveal";
import "./Reviews.css";

const PREVIEW_COUNT = 8;

// Вкладки собираются только для мастеров, у которых реально есть отзывы —
// так новый мастер без отзывов не создаёт пустую вкладку.
const FILTERS = [
  "Все",
  ...masters
    .filter((m) => reviews.some((r) => r.master === m.name))
    .map((m) => m.name),
];

export default function Reviews() {
  const [filter, setFilter] = useState("Все");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === "Все" ? reviews : reviews.filter((r) => r.master === filter)),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, PREVIEW_COUNT);

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Отзывы</p>
          <h2 className="section-heading">Что говорят наши клиенты</h2>
        </Reveal>

        <div className="reviews__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`reviews__filter ${filter === f ? "reviews__filter--active" : ""}`}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="reviews__grid">
          {visible.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {filtered.length > PREVIEW_COUNT && (
          <div className="reviews__more">
            <button className="btn btn-outline" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Свернуть" : "Все отзывы"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
