import '../styles/Nav.css'

function Nav() {
  return (
    <section className="nav-bar">
      <div className='nav-content'>
        <div className="logo">
          <a id="logo-anch" href="#home">
            <img src="/portfolio/images/bolt.png" alt="Jaydon Hodge portfolio logo" />
          </a>
        </div>
        <ul className="nav-list">
          <li><a href="#about" className="page-links about"><span className="nums">01.</span><span className="items">About</span></a></li>

          <li><a href="#experience" className="page-links experience"><span className="nums">02.</span><span className="items">Experience</span></a></li>

          <li><a href="#projects" className="page-links projects"><span className="nums">03.</span><span className="items">Projects</span></a></li>

          <li><a href="#contact" className="page-links contact"><span className="nums">04.</span><span className="items">Contact</span></a></li>

          <li>
            <button className="resume" onClick={() => window.open("/JaydonHodge-resume.pdf", "_blank")}>
              Resume
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-divide" id="nav-divide" />
    </section>
  )
}

export default Nav;
