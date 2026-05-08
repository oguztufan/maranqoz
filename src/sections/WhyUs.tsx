import {
  ShieldCheck, Ruler, Palette, Clock, Wrench, HeartHandshake,
} from 'lucide-react';
import { WHY_US } from '../data/content';
import './WhyUs.css';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  ShieldCheck, Ruler, Palette, Clock, Wrench, HeartHandshake,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section-py">
      <div className="why-us__bg-img" aria-hidden="true">
        <img
          src="/images/ahsap-cozumler.png"
          alt=""
          loading="lazy"
        />
        <div className="why-us__overlay" />
      </div>

      <div className="container why-us__content">
        <div className="section-header">
          <span className="section-label" style={{ color: 'var(--color-accent)' }}>Neden maranqoz?</span>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
            Bizi Tercih Etmeniz İçin<br />6 Güçlü Neden
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Kalite, güven ve estetik; her mobilyamızda bu üç değeri bir araya getiriyoruz.
          </p>
        </div>

        <div className="why-us__grid">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="why-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="why-card__icon">
                  {Icon && <Icon size={24} strokeWidth={1.5} />}
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
