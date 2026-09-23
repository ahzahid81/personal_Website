import { FaLinkedin, FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa'

const quickLinks = ['About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact']

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-avatar">
              <img src="/profile.jpg" alt="Abdul Hasib Zahid" />
            </span>
              <span className="footer-logo-text">Abdul Hasib Zahid</span>
            </div>
            <p>
              Aspiring data scientist and full-stack web developer — CS student at
              the Islamic University of Madinah, building a career across data
              science, AI/ML, and modern web technologies.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/ahzahid24"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ahzahid81"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:abdulhasibzahid@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:abdulhasibzahid@gmail.com">abdulhasibzahid@gmail.com</a></li>
              <li><a href="tel:+966509242168"><FaPhoneAlt /> +966 50 924 2168</a></li>
              <li><a href="https://www.linkedin.com/in/ahzahid24" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahzahid24</a></li>
              <li><a href="https://github.com/ahzahid81" target="_blank" rel="noopener noreferrer">github.com/ahzahid81</a></li>
              <li>Al Madinah Al Munawwarah, Saudi Arabia</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Focus Areas</h4>
            <ul>
              <li>Data Science</li>
              <li>Full-Stack Web Development</li>
              <li>AI/ML Research</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
