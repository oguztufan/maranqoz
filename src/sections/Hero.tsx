import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Ana bölüm">
      <div className="hero__bg">
        <img
          src="/images/hero.png"
          alt="maranqoz mobilya"
          className="hero__bg-img"
          loading="eager"
        />
      </div>
    </section>
  );
}
