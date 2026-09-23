import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => setIsOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress">
        <span style={{ width: `${progress}%` }}></span>
      </div>

      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={handleClick}>
          <span className="logo-avatar">
            <img src="/profile.jpg" alt="Abdul Hasib Zahid" />
          </span>
          <span className="logo-text-group">
            <span className="logo-name">Abdul Hasib Zahid</span>
            <span className="logo-tagline">Data Science &amp; Full-Stack</span>
          </span>
        </a>

        <ul className={`nav-pill ${isOpen ? 'mobile-open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id} onClick={handleClick}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="https://www.linkedin.com/in/ahzahid24"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abdulhasibzahid@gmail.com"
            className="nav-social-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a href="#contact" className="nav-cta" onClick={handleClick}>
            Let's Talk <FiArrowRight />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}