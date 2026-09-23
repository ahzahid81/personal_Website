import { FiExternalLink, FiCode, FiTrendingUp, FiGlobe, FiLayers, FiCompass, FiZap, FiSmile, FiPieChart, FiLink } from 'react-icons/fi'
import { FaLaptopCode } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Badli Umrah',
    type: 'Umrah Services',
    url: 'https://badliumrah.vercel.app',
    icon: FiCompass,
    description:
      'A clean, responsive website for a Umrah services organization, presenting services and packages in an easy-to-navigate layout.',
    tags: ['React', 'Responsive', 'Web App'],
  },
  {
    id: 2,
    title: 'RTL-One',
    type: 'Web Application',
    url: 'https://rtl-one.vercel.app',
    icon: FiLayers,
    description:
      'A modern web application focused on a streamlined, responsive user experience and clear information architecture.',
    tags: ['React', 'Frontend', 'Responsive'],
  },
  {
    id: 3,
    title: 'MNT Capital Partners',
    type: 'Business & Finance',
    url: 'https://mntcapitalpartners.com',
    icon: FiTrendingUp,
    description:
      'A premium corporate website for a lower middle market M&A advisory and business brokerage firm, featuring SEO-optimized content, structured data, and a polished professional identity.',
    tags: ['React', 'SEO', 'Structured Data', 'Corporate'],
  },
  {
    id: 4,
    title: 'Ruhama United School',
    type: 'Education',
    url: 'https://ruhamaunitedschool.com',
    icon: FaLaptopCode,
    description:
      'A modern website for a United School delivering an accessible, informative web presence for students, parents, and the community.',
    tags: ['React', 'Education', 'Responsive'],
  },
  {
    id: 5,
    title: 'Sayeed Bin Nuruzzaman Al Madani',
    type: 'Personal & Content',
    url: 'https://sayeedbinnuruzzaman.com',
    icon: FiGlobe,
    description:
      'A multilingual (English, Bangla, Arabic) personal website for an Islamic scholar, including profile, khutbah/lecture content, and event sections with a premium glass-morphism design.',
    tags: ['Next.js', 'Multilingual', 'CMS', 'Glass UI'],
  },
  {
    id: 6,
    title: 'HERO.IO',
    type: 'Web Application',
    url: 'https://hero-apps.pages.dev',
    icon: FiZap,
    description:
      'An interactive web application with a bold, energetic interface designed for a smooth and engaging user experience.',
    tags: ['React', 'Interactive', 'Frontend'],
  },
  {
    id: 7,
    title: 'ToyTopia',
    type: 'E-commerce',
    url: 'https://assignment9ph.netlify.app',
    icon: FiSmile,
    description:
      'A vibrant e-commerce style site for toys with a playful product-focused interface built as a hands-on assignment project.',
    tags: ['React', 'E-commerce', 'Assignment'],
  },
  {
    id: 8,
    title: 'FoodieCircle',
    type: 'Food & Ordering',
    url: 'https://foodie-circle.web.app',
    icon: FiPieChart,
    description:
      'A menu-driven food ordering style website with an engaging, conversion-focused layout for showcasing dishes and ordering flow.',
    tags: ['Firebase', 'Frontend', 'Food'],
  },
  {
    id: 9,
    title: 'LoanLink',
    type: 'Fintech',
    url: 'https://loanlinkzahid.netlify.app',
    icon: FiLink,
    description:
      'A loan services website with a clear, conversion-focused layout for presenting loan options and guiding users to apply.',
    tags: ['React', 'Responsive', 'Landing Page'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header" data-reveal>
          <span className="section-label">
            <FaLaptopCode /> My Work
          </span>
          <h2 className="section-title">Websites I've Built</h2>
          <p className="section-desc">
            A selection of websites I've designed and developed for businesses,
            scholars, educational institutions, and community services.
          </p>
        </div>

        <div className="projects-grid" data-reveal>
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                key={project.id}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon />
                  </div>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-link">
                    Visit Website <FiExternalLink />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}