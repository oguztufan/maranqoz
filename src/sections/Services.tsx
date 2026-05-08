import {
  UtensilsCrossed, ShoppingBag, BedDouble, Star,
  Bath, DoorOpen, Ruler, TreePine,
} from 'lucide-react';
import { SERVICES } from '../data/content';
import './Services.css';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  UtensilsCrossed, ShoppingBag, BedDouble, Star,
  Bath, DoorOpen, Ruler, TreePine,
};

export default function Services() {
  return (
    <section id="services" className="services section-py">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Hizmetlerimiz</span>
          <h2 className="section-title">Ne Üretiyoruz?</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Her mekan için özel çözümler üretiyor, hayalinizdeki mobilyayı
            kaliteli malzeme ve işçilikle hayata geçiriyoruz.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <article
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="service-card__img-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="service-card__img"
                  />
                  <div className="service-card__img-overlay" />
                </div>
                <div className="service-card__body">
                  <div className="service-card__icon">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
