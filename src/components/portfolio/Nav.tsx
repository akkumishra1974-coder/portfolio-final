import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <h2>Akanksha Mishra</h2>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>Certificates</a>
    

        <a
          href="/resume.pdf"
          download
          className="mobile-download-btn"
          onClick={closeMenu}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}