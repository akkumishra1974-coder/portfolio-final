function Certifications() {
  return (
    <section id="certifications" className="section">

      <h2>Certificates & Achievements</h2>

      <div className="certificate-grid">

        <div className="certificate-card">
          <img
            src="/certificates/icrame.jpg"
            alt="ICRAME"
          />

          <h3>Deloitte Data Analytics</h3>

          <a
            href="/certificates/deloitte.pdf"
            target="_blank"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>Building Data Analyst AI Agent</h3>

          <a
            href="/certificates/da-agent.pdf"
            target="_blank"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h3>SWAYAM Web Technology</h3>

          <a
            href="/certificates/swayam.pdf"
            target="_blank"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certifications;