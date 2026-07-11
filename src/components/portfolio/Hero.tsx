import profile from "../../assets/profile.png";
export default function Hero() {
  return (
    <section id="home">

<img
  src={profile}
  alt="Akanksha Mishra"
  className="profile-img"
/>

<h1>Hi, I'm Akanksha Mishra 👋</h1>

<h2>
  Aspiring Data Analyst | Business Intelligence Enthusiast
</h2>

<p>
  Motivated and detail-oriented Information Technology graduate
  with expertise in PostgreSQL, Python, Power BI, and data
  visualization. Passionate about transforming raw data into
  actionable business insights.
</p>

<a href="/resume.pdf" download>
  <button>Download Resume</button>
</a>
    </section>
  );
}
