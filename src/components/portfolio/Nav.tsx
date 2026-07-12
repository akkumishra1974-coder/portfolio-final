import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>Akanksha Mishra</h2>

      <button
        type="button"
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>Certificates</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}