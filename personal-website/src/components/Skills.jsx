import { FaCertificate, FaTools, FaCode, FaLaptopCode, FaRobot, FaDatabase, FaClipboardCheck, FaLanguage } from 'react-icons/fa'

const coreCompetencies = [
  'IT Operations & User Support',
  'System / Application Troubleshooting',
  'Computer Operations & Data Entry',
  'Web Systems & Digital Tools',
  'Data Management & Documentation',
  'Hardware / Software Fundamentals',
  'Administrative & Team Coordination',
  'Scheduling & Record Management',
  'Microsoft Office & Spreadsheets',
  'User Communication & Training',
]

const skillGroups = [
  {
    label: 'Programming',
    icon: FaCode,
    skills: ['Python', 'JavaScript', 'Java', 'C/C++', 'PHP'],
  },
  {
    label: 'Web Development',
    icon: FaLaptopCode,
    skills: ['React.js', 'Node.js', 'Express.js', 'Django', 'HTML', 'CSS'],
  },
  {
    label: 'Data & AI',
    icon: FaRobot,
    skills: ['NumPy', 'Matplotlib', 'AI/ML Foundations', 'Computer Vision', 'Image Processing'],
  },
  {
    label: 'Databases & Tools',
    icon: FaDatabase,
    skills: ['MongoDB', 'MySQL', 'Git/GitHub', 'Postman', 'Google Colab', 'Jupyter Notebook'],
  },
  {
    label: 'Productivity',
    icon: FaClipboardCheck,
    skills: ['Microsoft Office', 'Google Sheets', 'Data Entry', 'Digital Documentation'],
  },
  {
    label: 'Languages',
    icon: FaLanguage,
    skills: ['Bangla — Native', 'English — Professional', 'Arabic — Beginner'],
  },
]

const certifications = [
  { name: 'Advanced Artificial Intelligence (Computer Vision focus)', issuer: 'Taibah University / KAUST Academy — Feb 2026 · 40 hours' },
  { name: 'Introduction to Artificial Intelligence (with Distinction)', issuer: 'Taibah University / KAUST Academy — Jan 2026 · 40 hours' },
  { name: 'Complete Web Development (JavaScript, HTML, CSS, React)', issuer: 'Programming Hero — Feb 2026 · 250 hours' },
  { name: 'Introduction to Data Science in Python', issuer: 'University of Michigan (Coursera)' },
  { name: 'Prerequisite Courses of Artificial Intelligence: Python Basics', issuer: 'Coursera' },
  { name: 'Spreadsheets for Beginners using Google Sheets', issuer: 'Coursera' },
  { name: 'Advanced Artificial Intelligence (Computer Vision focus)', issuer: 'University of Prince Mugrin / KAUST Academy — Feb 2025 · 40 hours' },
  { name: 'Introduction to Artificial Intelligence (with Distinction)', issuer: 'University of Prince Mugrin / KAUST Academy — Jan 2025 · 40 hours' },
  { name: 'Python Classes and Inheritance', issuer: 'University of Michigan (Coursera)' },
  { name: 'Python Functions, Files, and Dictionaries', issuer: 'University of Michigan (Coursera)' },
  { name: 'Python Basics', issuer: 'University of Michigan (Coursera)' },
  { name: 'APTIS', issuer: 'British Council' },
  { name: 'Graphics Design Training', issuer: 'Training Program' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header" data-reveal>
          <span className="section-label">
            <FaTools /> Capabilities
          </span>
          <h2 className="section-title">Skills &amp; Certifications</h2>
          <p className="section-desc">
            A versatile skillset spanning programming, full-stack development, data,
            and AI — backed by hands-on training and certifications.
          </p>
        </div>

        <div className="skills-grid" data-reveal>
          <div className="skill-card skill-card-full">
            <span className="skill-card-label">
              <FaTools /> Core Competencies
            </span>
            <div className="skill-tags-wrap">
              {coreCompetencies.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div className="skill-card" key={group.label}>
                <span className="skill-card-label">
                  <Icon /> {group.label}
                </span>
                <div className="skill-tags-wrap">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="skill-card skill-card-full">
            <span className="skill-card-label">
              <FaCertificate /> Certifications &amp; Training
            </span>
            <div className="cert-list">
              {certifications.map((cert) => (
                <div className="cert-item" key={cert.name + cert.issuer}>
                  <div className="cert-icon">
                    <FaCertificate />
                  </div>
                  <div>
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}