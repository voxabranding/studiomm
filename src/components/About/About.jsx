import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './About.css';

export default function About() {
  const sectionRef = useScrollReveal();
  const { about } = siteConfig;

  return (
    <section className="about" id="sobre" aria-labelledby="about-title" ref={sectionRef}>
      <div className="container">
        <div className="about__card floating-panel">
          <div className="about__inner">
            <div className="about__content">
              <span className="section-eyebrow" data-reveal>
                {about.eyebrow || 'Sobre Mayco Miguel'}
              </span>
              <h2 className="section-title" id="about-title" data-reveal>
                {about.title}
              </h2>
              {about.subtitle && (
                <p className="about__subtitle" data-reveal data-reveal-delay="1">
                  {about.subtitle}
                </p>
              )}
              <p className="about__text" data-reveal data-reveal-delay="1">
                {about.text}
              </p>
              {about.secondaryText && (
                <p className="about__text about__text--secondary" data-reveal data-reveal-delay="2">
                  {about.secondaryText}
                </p>
              )}

              {about.stats && about.stats.length > 0 && (
                <div className="about__stats-grid" data-reveal data-reveal-delay="3">
                  {about.stats.map((stat, idx) => (
                    <div className="about__stat-item" key={idx}>
                      <span className="about__stat-number">{stat.number}</span>
                      <span className="about__stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="about__image-wrapper" data-reveal data-reveal-delay="2">
              <div className="about__accent" aria-hidden="true" />
              <img 
                src={about.image || '/images/mayco-sobre.jpg'}
                alt="Mayco Miguel - Especialista em Micropigmentação & Spa Facial"
                className="about__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
