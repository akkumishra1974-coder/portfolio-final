import About from "./components/portfolio/About";
import Connect from "./components/portfolio/connect";
import './App.css';
import profile from './assets/profile.png';
function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Akanksha</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="download-btn" href="/resume.pdf" download>
          Download CV
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-left">
          <h3>Hi, I'm</h3>
          <h1>AKANKSHA MISHRA</h1>
          <h2>Aspiring Data Analyst | AI Enthusiast</h2>
          <p>
            Passionate about transforming raw data into actionable insights,  
            I enjoy solving business problems through data analysis, visualization, and interactive dashboards that support informed decision-making.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View My Work →</a>
            <a href="#contact">Contact Me ✉</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="blob"></div>
          <img src={profile} alt="Akanksha Mishra" />
        </div>
      </section>

      <section className="content-card">
        <About />

        <div id="skills" className="skills-box">
          <h2>MY SKILLS</h2>
          <div className="skills-grid">
            <span>🐍 Python</span>
            <span>🗄 PostgreSQL</span>
            <span>📊 Power BI</span>
            <span>📗 Excel</span>
            <span>⚛ React</span>
            <span>💻 JavaScript</span>
            <span>🌐 HTML</span>
            <span>🎨 CSS</span>
            <span>🔗 GitHub</span>
          </div>
        </div>
        </section>
        
<section className="content-card">
        <div id="projects" className="projects-full">
          <h2>PROJECTS</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/images/finaid.png" className="project-img" />
              <h3>FINAID: AI-DrivenFinancial Advisor</h3>
        <p>
          Developed an AI-powered Financial Advisor using Python, Machine
          Learning, Pandas, NumPy, and Matplotlib to provide personalized
          financial recommendations.
        </p>
              <div>
                <span>Python</span>
                <span>ML</span>
                <span>Pandas</span>
              </div>
            </div>

            <div className="project-card">
              <img src="/images/customer.png" className="project-img" />
             <h3>Customer Trends Data Analysis</h3>
        <p>
          Developed a customer trends analysis project using PostgreSQL,
          Python, and Power BI to analyze customer behavior and visualize
          insights through interactive dashboards.
        </p>
              <div>
                <span>PostgreSQL</span>
                <span>Python</span>
                <span>Power BI</span>
              </div>
            </div>

            <div className="project-card">
              <img src="/images/sorting.png" className="project-img" />
              <h3>Sorting Algorithm Visualizer</h3>
              <p>
                Developed an interactive Sorting Algorithm Visualizer using JavaScript
          to demonstrate sorting algorithms through real-time animations.
              </p>
              <div>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="cert-section">
        <h2>CERTIFICATIONS & ACHIEVEMENTS</h2>
        <div className="cert-grid">
          <div className="cert-item">
  <h3>🏅 Deloitte Data Analytics</h3>
  <a href="/certificates/deloitte.pdf" target="_blank" className="view-btn">
    View Certificate
  </a>
</div>

<div className="cert-item">
  <h3>🤖 Data Analyst AI Agent</h3>
  <a href="/certificates/da-agent.pdf" target="_blank" className="view-btn">
    View Certificate
  </a>
</div>

<div className="cert-item">
  <h3>🏆 SWAYAM Web Technology</h3>
  <a href="/certificates/swayam.pdf" target="_blank" className="view-btn">
    View Certificate
  </a>
</div>

<div className="cert-item">
  <h3>🎤 ICRAME Presentation</h3>
  <a href="/certificates/icrame.jpg" target="_blank" className="view-btn">
    View Certificate
  </a>
</div>
        </div>
      </section> 
      <Connect />
      <footer className="footer">
  <p>© 2026 Akanksha Mishra. All Rights Reserved.</p>
</footer>
    </>
  );
}

export default App;