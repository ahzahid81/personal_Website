import { FaWhatsapp, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaGithub } from 'react-icons/fa'
import { useState } from 'react'

const WHATSAPP_NUMBER = '966509242168'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi Abdul Hasib,\n\n${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-header" data-reveal>
          <span className="section-label">
            <FaEnvelope /> Contact
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Have a project, opportunity, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid" data-reveal>
          <div className="contact-cards">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon"><FaWhatsapp /></div>
              <div className="contact-card-info">
                <h4>WhatsApp</h4>
                <p>+966 50 924 2168</p>
              </div>
            </a>

            <a
              href="mailto:abdulhasibzahid@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon"><FaEnvelope /></div>
              <div className="contact-card-info">
                <h4>Email</h4>
                <p>abdulhasibzahid@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ahzahid24"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon"><FaLinkedin /></div>
              <div className="contact-card-info">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/ahzahid24</p>
              </div>
            </a>

            <a
              href="https://github.com/ahzahid81"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon"><FaGithub /></div>
              <div className="contact-card-info">
                <h4>GitHub</h4>
                <p>github.com/ahzahid81</p>
              </div>
            </a>

            <a href="tel:+966509242168" className="contact-card">
              <div className="contact-card-icon"><FaPhoneAlt /></div>
              <div className="contact-card-info">
                <h4>Phone</h4>
                <p>+966 50 924 2168</p>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-card-icon"><FaMapMarkerAlt /></div>
              <div className="contact-card-info">
                <h4>Location</h4>
                <p>Al Madinah Al Munawwarah, Saudi Arabia</p>
              </div>
            </div>
          </div>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
