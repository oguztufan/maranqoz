import { STATS } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-py">
      <div className="container about__inner">
        {/* Image column */}
        <div className="about__images" aria-hidden="true">
          <div className="about__img-main">
            <img
              src="/images/ahsap-cozumler.png"
              alt="Ahşap işçiliği atölyesi"
              loading="lazy"
            />
          </div>
          <div className="about__img-secondary">
            <img
              src="/images/ozel-olcu-mobilya.png"
              alt="Özel mobilya detayı"
              loading="lazy"
            />
            <div className="about__badge-card">
              <span className="about__badge-num">50+</span>
              <span className="about__badge-text">Yıllık Tecrübe</span>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="about__text">
          <span className="section-label">Hakkımızda</span>
          <h2 className="section-title">
            Biz Kimiz?
          </h2>
          <div className="divider" style={{ marginTop: '0.5rem' }} />

          <p className="about__desc">
            1960 yılında <strong>Tufan Mobilya</strong> adıyla temelleri atılan firmamız, yarım asrı aşkın
            tecrübesiyle bugün <strong>Maranqoz</strong> markası altında hizmet vermeye devam etmektedir.
            Dededen toruna aktarılan bu köklü aile mesleği, yılların verdiği ustalık ve güven
            anlayışıyla modern üretim anlayışını bir araya getirmektedir.
          </p>
          <p className="about__desc">
            Özel üretim mobilya alanında müşterilerimizin ihtiyaç ve zevklerine uygun, estetik
            ve fonksiyonel çözümler sunuyoruz. Her projeyi titizlikle ele alarak yaşam alanlarına
            değer katan özgün tasarımlar ve kaliteli işçilik ortaya çıkarıyoruz.
          </p>
          <p className="about__desc">
            Mobilya üretiminin yanı sıra, A'dan Z'ye ev tadilatı hizmetleri de sunmaktayız.
            Mutfak, banyo, salon, dekorasyon, boya, alçı, elektrik ve tüm yenileme süreçlerinde
            profesyonel ekibimizle anahtar teslim çözümler sağlamaktayız.
          </p>
          <p className="about__desc">
            1960'tan günümüze uzanan tecrübemizle; kaliteli malzeme, sağlam işçilik, güvenilir
            hizmet ve müşteri memnuniyetini her zaman ön planda tutuyoruz. <strong>Maranqoz</strong> olarak,
            yaşam alanlarınızı hayal ettiğiniz konfor ve şıklığa dönüştürmek için çalışmaya
            devam ediyoruz.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="about__stats-bar">
        <div className="container">
          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
