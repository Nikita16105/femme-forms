import "./ReviewCard.css";

const MAX_LENGTH = 260;

export default function ReviewCard({ review }) {
  const hasText = Boolean(review.text && review.text.trim());
  const isLong = hasText && review.text.length > MAX_LENGTH;
  const displayText = isLong ? `${review.text.slice(0, MAX_LENGTH).trim()}…` : review.text;

  return (
    <article className="review-card">
      <div className="review-card__stars" aria-label={`Оценка ${review.rating} из 5`}>
        {"★★★★★".slice(0, review.rating)}
      </div>

      {hasText ? (
        <p className="review-card__text">{displayText}</p>
      ) : (
        <p className="review-card__text review-card__text--empty">Оценка без комментария</p>
      )}

      <div className="review-card__footer">
        <div>
          <div className="review-card__name">{review.name}</div>
          <div className="review-card__date">{review.date}</div>
        </div>
        <div className="review-card__master">{review.master}</div>
      </div>
    </article>
  );
}
