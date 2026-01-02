import '../styles/About.css'
import { TiArrowDown } from "react-icons/ti";
import { useState } from 'react';

interface VidCardProps {
    isVisible: boolean;
}

function VidCard({ isVisible }: VidCardProps) {
    return <div className={`video ${isVisible ? 'show' : ''}`}>
        <div className='youtube'>
            <iframe src="https://www.youtube.com/embed/Y9iEiXVACxg?si=61cwoRyxTysNEC9o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
}

function About() {
    const [visible, setVisibility] = useState(false);
    const [rotated, setRotation] = useState(false);

    function handleClick() {
        setVisibility(!visible);
        setRotation(!rotated);
    }

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

                    <p>For almost my entire life I've been into game development which is what drove me to pursue this sort of career in tech. So in my free time I like to improve my coding skills by tinkering and working on side projects that I think are fun and satiate my love for games.</p>

                    <span className='ps'>

                        <p>P.S. I'm also a <span className='bold'>huge</span> musicophile and right now I'm learning guitar :)</p>
                        <button className='vid-link' onClick={handleClick}>Take a look<TiArrowDown className={`drop ${rotated ? 'up' : ''}`} /></button>
                    </span>

                    <VidCard isVisible={visible} />
                </div>
            </div>
        </section>
    )
}

export default About;
