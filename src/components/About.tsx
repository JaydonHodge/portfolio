import '../styles/About.css'
import { TiArrowDown } from "react-icons/ti";

function About() {

    return (
        <section role='region' id='about'>
            <div className='section-header'>
                <h1><span className='nums'>01.</span>About</h1>
            </div>
            <div className='section-content'>
                <div className='img-container'>
                    <img src='images/graduation.jpeg' alt='Picture of me at my graduation ceremony' />
                    <img src='images/disney.jpeg' alt='Picture of me and my brother at Disney World' />
                </div>
                <div className='about-text'>
                    <p>Hey Jaydon here! I'm a Full-Stack Software Engineer based in Baltimore. I recently graduated from The Pennsylvania State University with a Bachelor's in Computer Science. I am continuing my education with a Masters of Science in Data Science.</p>

                    <p>For almost my entire life I've been into game development which is what drove me to pursue this sort of career in tech. So in my free time I like to improve my coding skills by tinkering and working on side projects that I think are fun and satisfy my love for games.</p>

                    <span className='ps'>

                        <p>P.S. I'm also a <span className='bold'>huge</span> musicophile and right now I'm learning guitar :)</p>
                        <button className='vid-link'>Take a look<TiArrowDown className='drop' /></button>
                    </span>

                </div>
            </div>
        </section>
    )
}

export default About;
