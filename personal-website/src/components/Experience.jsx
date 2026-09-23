import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaBuilding } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    role: 'IT Specialist',
    company: 'Government of the People\'s Republic of Bangladesh',
    location: 'Bangladesh',
    period: 'Apr 2026 - May 2026',
    duration: '2 months',
    type: 'Contract',
    description: [
      'Supported day-to-day IT and computer-based administrative activities during a short-term government assignment.',
      'Assisted with operational data handling and technical tasks in line with workplace procedures.',
    ],
  },
  {
    id: 2,
    role: 'University Coordinator',
    company: "Hadiyyatul Hajj wal Mu'tamir",
    location: 'Saudi Arabia',
    period: 'Dec 2025 - Present',
    duration: 'Present',
    type: 'Current',
    description: [
      'Coordinate university-related communication and administrative follow-up for organizational activities.',
      'Support clear information flow and follow up with relevant stakeholders.',
    ],
  },
  {
    id: 3,
    role: 'IT Specialist',
    company: 'Bangladesh Hajj Management Project, Government of Bangladesh (under Business Automation Limited)',
    location: 'Al Madinah Al Munawwarah, Saudi Arabia',
    period: 'Apr 2025 - Jun 2025',
    duration: '3 months',
    type: 'Contract',
    description: [
      'Provided IT and computer-based operational support in a high-volume Hajj management environment.',
      'Assisted with system use, information processing, and administrative workflows supporting service delivery.',
    ],
  },
  {
    id: 4,
    role: 'Computer Operator',
    company: 'Bangladesh Hajj Office',
    location: 'Al Madinah Al Munawwarah, Saudi Arabia',
    period: 'May 2024 - Jun 2024',
    duration: '2 months',
    type: 'Contract',
    description: [
      'Handled computer operations, data entry, document processing, and routine office technology needs.',
      'Supported accurate information entry and administrative tasks during Hajj office activities.',
    ],
  },
  {
    id: 5,
    role: 'Mathematics Teacher',
    company: 'Nucleus Coaching Center',
    location: 'Sylhet, Bangladesh',
    period: 'Director: 2022-2023 | Teacher: 2022-Present',
    duration: 'Present',
    type: 'Current',
    description: [
      'Managed day-to-day operations, administration, class scheduling, student records, teacher coordination, and salary-related tasks.',
      'Delivered mathematics classes online and in person; continue to teach in both formats.',
    ],
  },
]

function ExpTypeBadge({ type }) {
  const className = type === 'Contract'
    ? 'exp-type-badge contract'
    : 'exp-type-badge current'
  return <span className={className}>{type}</span>
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="exp-header" data-reveal>
          <span className="section-label">
            <FaBriefcase /> Career Path
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            IT operations, government Hajj programs, and teaching — with a focus on
            data handling and reliable service delivery.
          </p>
        </div>

        <div className="exp-grid" data-reveal>
          {experiences.map((exp) => (
            <div className="exp-card" key={exp.id}>
              <div className="exp-card-top">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">
                    <FaBuilding /> {exp.company}
                  </p>
                </div>
                <ExpTypeBadge type={exp.type} />
              </div>

              <div className="exp-meta">
                <span className="exp-meta-item">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <span className="exp-meta-item">
                  <FaClock /> {exp.duration}
                </span>
                <span className="exp-meta-item">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>

              <div className="exp-description">
                {exp.description.map((item, i) => (
                  <div className="exp-desc-item" key={i}>
                    <span className="exp-desc-dot"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}