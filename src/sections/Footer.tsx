import { Phone, Mail, MapPin } from 'lucide-react';
import logoSrc from '../assets/logo.png';

// Social icon SVGs — lucide-react v1 has no brand icons
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconYoutube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
import { NAV_LINKS } from '../data/content';
import './Footer.css';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <a
            href="#home"
            className="footer__logo"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          >
            <img src={logoSrc} alt="maranqoz" className="footer__logo-img" />
          </a>
          <p className="footer__tagline">
            Yaşam alanlarınıza özel, ölçüye göre mobilya ve ahşap çözümleri.
            Kaliteli malzeme, titiz işçilik ve müşteri odaklı hizmet anlayışıyla
            50 yılı aşkın tecrübe.
          </p>

          {/* Social */}
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="footer__social">
              <IconInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social">
              <IconFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="footer__social">
              <IconYoutube />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Hızlı Bağlantılar</h4>
          <ul className="footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Hizmetlerimiz</h4>
          <ul className="footer__links">
            {['Mutfak Dolabı', 'Gardırop', 'Yatak Odası', 'Çocuk Odası', 'Banyo Dolabı', 'Portmanto', 'Özel Mobilya'].map((s) => (
              <li key={s}>
                <a href="#services" className="footer__link" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">İletişim</h4>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <Phone size={15} />
              <div>
                <a href="tel:+905365296548">+90 536 529 65 48</a>
                <a href="tel:+905530846794">+90 553 084 67 94</a>
              </div>
            </li>
            <li className="footer__contact-item">
              <Mail size={15} />
              <a href="mailto:info@maranqoz.com">info@maranqoz.com</a>
            </li>
            <li className="footer__contact-item">
              <MapPin size={15} />
              <span>Yenidoğan, Göçmenler Sk. 82-84B,<br />34240 Gaziosmanpaşa/İstanbul</span>
            </li>
          </ul>

          <a
            href="https://wa.me/905365296548"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp"
          >
            WhatsApp'tan Yazın →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} maranqoz. Tüm hakları saklıdır.</span>
          <span>Özel Mobilya &amp; Ahşap Çözümleri — İstanbul</span>
        </div>
      </div>
    </footer>
  );
}
