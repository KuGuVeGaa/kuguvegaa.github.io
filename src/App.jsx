import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      name: 'University',
      desc: 'University Documentation System.',
      lang: 'PHP',
      link: 'https://github.com/kuguvegaa/University'
    },
    {
      name: 'Games',
      desc: 'Your own games website, filled with open source goodness! Automated installation of a plethora of open source web games.',
      lang: 'PHP',
      link: 'https://github.com/kuguvegaa/Games'
    },
    {
      name: 'Malware-Exhibit',
      desc: '🚀🚀 REAL WORLD Malware Collection I have created or Compiled/analysed to understand more about Malware threats.',
      lang: 'Assembly',
      link: 'https://github.com/kuguvegaa/Malware-Exhibit'
    },
    {
      name: 'py',
      desc: 'Repository to store sample python programs for python learning.',
      lang: 'Jupyter Notebook',
      link: 'https://github.com/kuguvegaa/py'
    }
  ];

  return (
    <div className="app-container">
      <div className="background-glow"></div>
      
      <header className="header">
        <div className="header-content">
          <div className="logo">
            KuGuVe<span className="logo-highlight">Gaa</span>
          </div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <img src="https://github.com/kuguvegaa.png" alt="Yavuz Çiçek Profile" className="hero-avatar" />
            <h1 className="greeting">
              Hi, I'm <span className="greeting-span">Yavuz Çiçek</span>
            </h1>
            <p className="subtitle">
              Network Administrator, Linux Enthusiast & Developer. <br/>
              Building the bridge between infrastructure, security, and game development.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="https://github.com/kuguvegaa" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Profile</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">What I Do</h2>
          <div className="about-grid">
            <div className="glass-panel skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Network & Systems</h3>
              <p>Working on my CCNA Certification & deeply involved in Network Administration. Maintaining robust and secure infrastructures.</p>
            </div>
            <div className="glass-panel skill-card">
              <div className="skill-icon">🐧</div>
              <h3>Linux & DevOps</h3>
              <p>Continuously expanding my knowledge in Advanced Linux automation and containerization using Docker.</p>
            </div>
            <div className="glass-panel skill-card">
              <div className="skill-icon">🎮</div>
              <h3>Game Dev & Design</h3>
              <p>Exploring game development mechanics with Unity & Unreal Engine. Supported by a strong UI/UX design background with Photoshop and Illustrator.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="glass-panel project-card">
                <h3 className="project-title">{proj.name}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-meta">
                  <span className="project-lang">{proj.lang}</span>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                    Source 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="glass-panel contact-card">
            <h2>Let's Connect</h2>
            <p>I'm currently looking for new opportunities in systems, networks, and creative development. My inbox is always open.</p>
            <a href="mailto:kuguvega@linuxmail.org" className="btn btn-primary">Say Hello</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Yavuz Çiçek (KuGuVeGaa). Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
