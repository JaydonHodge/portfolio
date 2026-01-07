import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";

import '../styles/Projects.css'

function Projects() {
    return (
        <section role='region' id='projects'>
            <div className='section-header'>
                <h1><span className='nums'>03.</span>Projects</h1>
            </div>
            <div className='section-content'>
                <div className='project-list'>
                    <Link to='/blog' className='card1'>
                        <span className='words'>
                            <h1 className='project-name'>Personal Blogging API<FiArrowUpRight className='arrow' /></h1>
                            <p className='project-description'>
                                A simulated blogging interface that utilizes a RESTful API for managing blog content and user interactions. Create, read, update, and delete blog posts with full CRUD functionality. Built with backend architecture of Node/Express.js and PostgreSQL.
                            </p>
                        </span>

                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects;
