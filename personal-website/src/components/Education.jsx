import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    id: 1,
    degree: 'BSc in Computer Science',
    field: 'Computer Science',
    school: 'Islamic University of Madinah',
    period: '2023 - Present',
    note: 'Scholarship student',
    current: true,
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="edu-header" data-reveal>
          <span className="section-label">
            <FaGraduationCap /> Academic Background
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Scholarship student pursuing a BSc in Computer Science with good academic standing.
          </p>
        </div>

        <div className="edu-timeline" data-reveal>
          {education.map((edu) => (
            <div className={`edu-item ${edu.current ? 'current' : ''}`} key={edu.id}>
              <div className="edu-spacer"></div>
              <div className="edu-dot-wrapper">
                <div className="edu-dot"></div>
              </div>
              <div className="edu-content">
                {edu.current && (
                  <span className="edu-current-badge">Current</span>
                )}
                <h3 className="edu-degree">{edu.degree}</h3>
                {edu.field && <p className="edu-field">{edu.field}</p>}
                <p className="edu-school">{edu.school} — {edu.note}</p>
                <div>
                  <span className="edu-period">{edu.period}</span>
                  <br />
                  <span className="edu-period">Expected graduation: December 2027</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}