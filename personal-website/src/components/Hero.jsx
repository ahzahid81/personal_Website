import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaArrowRight, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            Open to opportunities
          </span>

          <h1 className="hero-name">
            Abdul Hasib
            <span className="hero-name-highlight">Zahid</span>
          </h1>

          <p className="hero-subtitle">Aspiring Data Scientist &amp; Full-Stack Web Developer</p>
          <p className="hero-subtitle">CS Student | AI/ML Research Aspirant</p>

          <p className="hero-location">
            <FaMapMarkerAlt /> Al Madinah Al Munawwarah, Saudi Arabia
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn-primary">
              Get in Touch <FaArrowRight />
            </a>
            <a href="#projects" className="hero-btn-outline">
              View My Work
            </a>
          </div>

          <div className="hero-tech">
            {['Python', 'React.js', 'Node.js', 'Django', 'AI / ML', 'Computer Vision', 'Full-Stack'].map((tech) => (
              <span className="hero-tech-chip" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="hero-social-links">
            <a
              href="https://www.linkedin.com/in/ahzahid24"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ahzahid81"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:abdulhasibzahid@gmail.com"
              className="hero-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-card-wrapper">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-inner">
              <div className="hero-avatar">
                <img src="/profile.jpg" alt="Abdul Hasib Zahid" />
              </div>
              <h2 className="hero-card-name">Abdul Hasib Zahid</h2>
              <p className="hero-card-title">Data Science, AI/ML &amp; Full-Stack Development</p>

              <div className="hero-card-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">9</div>
                  <div className="hero-stat-label">Web Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">13</div>
                  <div className="hero-stat-label">Certifications</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">5</div>
                  <div className="hero-stat-label">Professional Roles</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">3</div>
                  <div className="hero-stat-label">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <FaChevronDown />
      </a>
    </section>
  )
}