import Reveal from "../components/Reveal";
import "./Gallery.css";

// Реальные фотографии студии. Чтобы заменить — положите новый файл
// в public/images/ с тем же именем, либо поменяйте путь ниже.
const GALLERY_ITEMS = [
  { src: "./images/gallery-1.jpg", alt: "Ритуал омовения стоп", className: "gallery__item--large" },
  { src: "./images/gallery-2.jpg", alt: "Процедурный кабинет студии", className: "gallery__item--small" },
  { src: "./images/gallery-3.jpg", alt: "Парение в бочке", className: "gallery__item--small" },
  { src: "./images/gallery-4.jpg", alt: "Массаж при свечах", className: "gallery__item--tall" },
  { src: "./images/gallery-5.jpg", alt: "Массажная техника", className: "gallery__item--wide" },
  { src: "./images/gallery-6.jpg", alt: "Массаж с цветами", className: "gallery__item--small" },
  { src: "./images/gallery-7.jpg", alt: "Массаж живота", className: "gallery__item--small" },
];

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Атмосфера</p>
          <h2 className="section-heading">Пространство, в котором хочется остаться</h2>
        </Reveal>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal key={item.src} delay={i * 70} className={`gallery__item ${item.className}`}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("gallery__item--empty");
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
