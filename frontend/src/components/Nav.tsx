import '../styles/Nav.css'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Nav() {
    return (
        <section className="nav-bar">
            <div className='nav-container'>
                <div className='nav-content'>
                    <div className='left'>
                        <div className="logo">
                            <a id="logo-anch" href="#home">
                                <img src="/portfolio/images/logo.png" alt="Jaydon Hodge portfolio logo" />
                            </a>
                        </div>
                        <ul className='contact-list'>
                            <li><a className='contact-links github' href='https://github.com/JaydonHodge' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
                            <li><a className='contact-links email' href="mailto:jaydonhodge@gmail.com?cc=jlh7209@psu.edu"><MdEmail /></a></li>
                            <li><a className='contact-links instagram' href='https://www.instagram.com/jaydonlhodge/' target='_blank' rel='noopener noreferrer'><FaInstagram /></a></li>
                        </ul>
                    </div>
                    <ul className="nav-list">
                        <li><a href="#about" className="page-links about"><span className="nums">01.</span><span className="items">About</span></a></li>

                        <li><a href="#experience" className="page-links experience"><span className="nums">02.</span><span className="items">Experience</span></a></li>

                        <li><a href="#projects" className="page-links projects"><span className="nums">03.</span><span className="items">Projects</span></a></li>

                        <li>
                            <button className="resume" onClick={() => window.open(`${import.meta.env.BASE_URL}jaydonhodge_resume_i.pdf`, "_blank")}>
                                Resume
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="nav-divide" id="nav-divide" />
            </div>
        </section>
    )
}

export default Nav;
