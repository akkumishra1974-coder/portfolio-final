export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card">
  <img
    src="/images/sorting.png"
    alt="Sorting Visualizer"
    className="project-img"
  />

  <div className="project-content">
    <h3>Sorting Algorithm Visualizer</h3>

    <p>
      Developed an interactive Sorting Algorithm Visualizer using JavaScript
      to demonstrate sorting algorithms through real-time animations.
    </p>

    <div className="tech-stack">
      <span>JavaScript</span>
      <span>CSS</span>
      <span>HTML</span>
    </div>

    <a href="#" className="project-link">
      View Project →
    </a>
  </div>
</div>
<div className="project-card">
  <img
    src="/images/customer.png"
    alt="Customer Trends"
    className="project-img"
  />

  <div className="project-content">
    <h3>Customer Trends Data Analysis</h3>

    <p>
      Developed a customer trends analysis project using PostgreSQL,
      Python, and Power BI.
    </p>

    <div className="tech-stack">
      <span>PostgreSQL</span>
      <span>Python</span>
      <span>Power BI</span>
    </div>

    <a href="#" className="project-link">
      View Project →
    </a>
  </div>
</div>

     <div className="project-card">
  <img
    src="/images/finaid.png"
    alt="FinAid"
    className="project-img"
  />

  <div className="project-content">
    <h3>FINAID: AI-Driven Financial Advisor</h3>

    <p>
      Developed an AI-powered Financial Advisor using Python,
      Machine Learning, Pandas and Matplotlib.
    </p>

    <div className="tech-stack">
      <span>Python</span>
      <span>ML</span>
      <span>Pandas</span>
    </div>

     <a href="#" className="project-link">
      View Project →
    </a>
  </div>
</div>
    </section>
  );
}