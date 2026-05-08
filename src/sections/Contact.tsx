import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section-py">
      <div className="container">
        <div className="section-header">
          <span className="section-label">İletişim</span>
          <h2 className="section-title">Projenizi Konuşalım</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ücretsiz keşif ve teklif için bizimle iletişime geçin.
            En kısa sürede size dönüş yapacağız.
          </p>
        </div>

        <div className="contact__layout contact__layout--single">
          <div className="contact__info">
            <div className="contact__info-header">
              <h3 className="contact__info-title">Bize Ulaşın</h3>
              <p className="contact__info-desc">
                Sorularınız, proje fikirleriniz veya teklif almak için aşağıdaki
                kanalları kullanabilirsiniz.
              </p>
            </div>

            <div className="contact__cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-info-card__label">Telefon</span>
                  <a href="tel:+905365296548" className="contact-info-card__value contact-info-card__link">+90 536 529 65 48</a>
                  <a href="tel:+905530846794" className="contact-info-card__value contact-info-card__link">+90 553 084 67 94</a>
                </div>
              </div>

              <a href="mailto:info@maranqoz.com" className="contact-info-card">
                <div className="contact-info-card__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-info-card__label">E-posta</span>
                  <span className="contact-info-card__value">info@maranqoz.com</span>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-info-card__label">Adres</span>
                  <span className="contact-info-card__value">Yenidoğan, Göçmenler Sk. 82-84B, 34240 Gaziosmanpaşa/İstanbul</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905365296548?text=Merhaba%2C%20mobilya%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              <MessageCircle size={20} />
              WhatsApp ile Yazın
            </a>

            {/* Map */}
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d188.03314107257927!2d28.92367844912987!3d41.05740053098394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1777555644192!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="maranqoz konum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
