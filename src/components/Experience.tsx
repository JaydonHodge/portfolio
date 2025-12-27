import '../styles/Experience.css'
import { FiArrowUpRight } from "react-icons/fi";

function Experience() {
    return (
        <section role='region' id='experience'>
            <div className='section-header'>
                <h1><span className='nums'>02.</span>Experience</h1>
            </div>
            <div className='section-content'>
                <button className='card1'>
                    <p className='date'>2024 ― 2026</p>
                    <div className='job'>
                        <h2 className='position'>Undergraduate Research Assistant · The Human In Computing &amp; Cognition Lab <FiArrowUpRight className='arrow' /> </h2>
                        <div className='job-desc'>
                            <li>
                                Lead research trials for ongoing project for National Science Foundation where participants would interact and choose whether or not to cooperate with an AI agent of my team’s design.
                            </li>
                            <li>
                                Coded and deployed Python scripts used for data preprocessing and analysis of data from research trials.
                            </li>
                            <li>
                                Modified and extended the the JavaScript code used for the front-end user interface that participants of experiment interacted with.
                            </li>
                            <li>
                                Conducted data analysis of the various different measurements from participants such as eye-tracking data and response time data.
                            </li>
                            <li>
                                Derived and expanded Microsoft’s open-source Project Malmo for the backend for AI-Human Interaction.
                            </li>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Experience;
