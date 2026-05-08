import { PROCESS_STEPS } from '../data/content';
import './Process.css';

export default function Process() {
  return (
    <section id="process" className="process section-py">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Çalışma Sürecimiz</span>
          <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Fikrinizden teslimatına kadar her adımda şeffaf, planlı ve
            müşteri odaklı bir süreç izliyoruz.
          </p>
        </div>

        <div className="process__steps">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="process__step" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}

              <div className="process__step-number">
                <span>{step.step}</span>
              </div>

              <div className="process__step-body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="process__cta">
          <p>Projenize başlamaya hazır mısınız?</p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Ücretsiz Keşif Talep Et
          </a>
        </div>
      </div>
    </section>
  );
}
