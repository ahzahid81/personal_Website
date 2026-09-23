import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaCode, FaAward, FaPhoneAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid" data-reveal>
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <div className="about-image-card">
              <img src="/profile.jpg" alt="Abdul Hasib Zahid" />
            </div>
            <div className="about-float-card">
              <div className="about-float-icon">
                <FaCode />
              </div>
              <div className="about-float-text">
                <strong>Software Enthusiast</strong>
                <span>Building the future</span>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building a career at the intersection of data, web &amp; AI</h2>

            <p>
              I'm a <strong>Computer Science scholarship student</strong> at the
              Islamic University of Madinah (expected graduation:{" "}
              <strong>December 2027</strong>), building a career at the intersection of
              data science, full-stack web development, and artificial intelligence research.
            </p>
            <p>
              My academic training spans programming, data science, AI/ML foundations, and
              computer vision, supported by hands-on projects using Python, NumPy, Matplotlib,
              and modern web technologies.
            </p>
            <p>
              I bring professional experience in IT support, government Hajj operations, data
              handling, and administrative coordination, and I'm eager to apply analytical and
              software development skills to real-world data problems while progressing toward
              AI/ML research.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="about-info-icon"><FaMapMarkerAlt /></div>
                <div className="about-info-text">
                  <strong>Location</strong>
                  <span>Al Madinah Al Munawwarah, Saudi Arabia</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon"><FaGraduationCap /></div>
                <div className="about-info-text">
                  <strong>Education</strong>
                  <span>BSc Computer Science, Islamic University of Madinah</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon"><FaUser /></div>
                <div className="about-info-text">
                  <strong>Role</strong>
                  <span>Aspiring Data Scientist &amp; Web Developer</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon"><FaAward /></div>
                <div className="about-info-text">
                  <strong>Title</strong>
                  <span>Scholarship Student (2023–2027)</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon"><FaPhoneAlt /></div>
                <div className="about-info-text">
                  <strong>Phone</strong>
                  <span>+966 50 924 2168</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}