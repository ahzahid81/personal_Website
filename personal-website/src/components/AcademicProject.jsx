import { FaProjectDiagram, FaChartBar } from 'react-icons/fa'

const tools = ['Python', 'NumPy', 'Matplotlib', 'Google Colab', 'Image Processing']

export default function AcademicProject() {
  return (
    <section id="academic" className="section academic">
      <div className="container">
        <div className="academic-header" data-reveal>
          <span className="section-label">
            <FaProjectDiagram /> Academic Project
          </span>
          <h2 className="section-title">Computer Vision &amp; Image Analysis</h2>
          <p className="section-desc">
            Research-oriented coursework applying image-processing fundamentals to real image data.
          </p>
        </div>

        <div className="academic-card" data-reveal>
          <div className="academic-icon">
            <FaChartBar />
          </div>
          <div className="academic-body">
            <p>
              Processed <strong>grayscale images</strong> and performed{" "}
              <strong>histogram analysis</strong>, <strong>histogram stretching and sliding</strong>,
              and <strong>pixel-intensity visualization</strong> to understand how enhancement
              techniques reshape contrast and tonal distribution. All analysis was implemented and
              visualized in Python using NumPy and Matplotlib with Google Colab.
            </p>
            <div className="project-tags">
              {tools.map((tool) => (
                <span className="project-tag" key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}