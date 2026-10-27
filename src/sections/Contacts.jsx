import Reveal from "../components/Reveal";
import "./Contacts.css";

// Координаты студии на Яндекс.Картах (организация "Femme Forms", Коммунарка,
// ул. Александры Монаховой, 88к3). Карта встроена через публичный
// Яндекс-виджет map-widget/v1 — API-ключ не нужен.
// Если координаты студии изменятся, возьмите новые ll=... из ссылки на
// карточку организации в Яндекс.Картах и подставьте ниже.
const MAP_LON = "37.484907";
const MAP_LAT = "55.543706";
const MAP_EMBED_SRC = `https://yandex.ru/map-widget/v1/?ll=${MAP_LON},${MAP_LAT}&z=17&l=map&pt=${MAP_LON},${MAP_LAT},pm2rdm`;
// Ссылка на карточку организации — открывается в приложении Яндекс.Карт на телефоне
// и служит подстраховкой, если встроенная карта не загрузится.
const MAP_FULL_LINK = "https://yandex.ru/maps/-/CXeAaP7s";

export default function Contacts() {
  return (
    <section id="contacts" className="section contacts">
      <div className="container contacts__grid">
        <Reveal>
          <p className="eyebrow">Контакты</p>
          <h2 className="section-heading">Femme Forms</h2>

          <ul className="contacts__list">
            <li>
              <span>Адрес</span>
              <span>ул. Александры Монаховой, 88 к 3, Москва</span>
            </li>
            <li>
              <span>Telegram</span>
              <a href="https://t.me/Femme_forms_Admin" target="_blank" rel="noreferrer">
                @Femme_forms_Admin
              </a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href="https://wa.me/79015460659" target="_blank" rel="noreferrer">
                +7 901 546-06-59
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="contacts__map">
          <iframe
            className="contacts__map-frame"
            src={MAP_EMBED_SRC}
            title="Femme Forms на карте"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className="contacts__map-link" href={MAP_FULL_LINK} target="_blank" rel="noreferrer">
            Открыть на Яндекс.Картах →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
