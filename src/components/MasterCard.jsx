import "./MasterCard.css";

export default function MasterCard({ master, reviewCount, onSelect }) {
  return (
    <article className="master-card">
      <div className="master-card__photo">
        <img
          src={master.photo}
          alt={master.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("master-card__photo--empty");
          }}
        />
      </div>

      <div className="master-card__body">
        <h3 className="master-card__name">{master.name}</h3>
        {master.description && <p className="master-card__desc">{master.description}</p>}

        {reviewCount > 0 && (
          <div className="master-card__rating">
            <span>5.0 ★</span>
            <a href="#reviews" className="master-card__count master-card__count--link">
              {reviewCount} {reviewCount === 1 ? "отзыв" : "отзывов"} · смотреть
            </a>
          </div>
        )}

        <button className="btn btn-outline master-card__btn" onClick={() => onSelect(master)}>
          Записаться
        </button>
      </div>
    </article>
  );
}
