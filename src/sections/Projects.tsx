import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import './Projects.css';

const CATEGORIES = ['Tümü', 'Mutfak', 'Gardırop', 'Çocuk Odası', 'Banyo', 'Yatak Odası', 'Giriş'];

export default function Projects() {
  const [active, setActive] = useState('Tümü');

  const filtered = active === 'Tümü'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects section-py">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projelerimiz</span>
          <h2 className="section-title">Tamamlanan Çalışmalar</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Her proje; müşterimizin hayalini, zanaatımızın kalitesini
            ve tasarım anlayışımızı bir araya getirir.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="projects__filters" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`projects__filter-btn ${active === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-card__img"
                />
                <div className="project-card__overlay">
                  <div className="project-card__overlay-icon">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
              <div className="project-card__body">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
