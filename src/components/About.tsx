import '../styles/About.css'

function About() {

    return (
        <section role='region' id='about'>
            <div className='section-header'>
                <h1><div className='nums'>01.</div>About</h1>
            </div>
            <div className='section-content'>
                <div className='img-container'>
                    <img src='images/graduation.jpeg' alt='Picture of me at my graduation ceremony' />
                    <img src='images/disney.jpeg' alt='Picture of me and my brother at Disney World' />
                </div>
                <div className='about-text'>
                    <p>Hey Jaydon here! I'm a Full-Stack Software Engineer based in Baltimore. I recently graduated from The Pennsylvania State University with a Bachelor's in Computer Science. I am continuing my education with a Masters of Science in Data Science.</p>

                    <p>For almost my entire life I've been into game development which is what drove me to pursue this sort of career in tech. So in my free time I improve my coding skills by tinkering and working on side projects that I think are fun and would be cool to see in some games</p>

                    <p className='ps'>P.S. I'm also a <span className='bold'>huge</span> musicophile and am learning guitar right now :)</p>

                </div>
            </div>
        </section>
    )
}

export default About;
