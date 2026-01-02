import '../styles/Projects.css'

function Projects() {
    return (
        <section role='region' id='projects'>
            <div className='section-header'>
                <h1><span className='nums'>03.</span>Projects</h1>
            </div>
            <div className='section-content'>
                <ul className='project-list'>
                    <li>
                        Designed and simulated a replicate MALLOC function, which through experimentation & prototyping was able to execute different MALLOC design philosophies such as implicit lists, explicit lists, segregated lists, splitting and coalescing. From unit testing, the final average utilization achieved was 58.5% and the final average throughput was 29518 Kops/sec.
                    </li>
                    <li>
                        Replicated a local, networked, and cached MDADM storage unit for read and write operations in C with a Linux framework.
                    </li>
                    <li>
                        Wrote unit tests and extensions for GNU’s GDB debugger using GDB command files, Python, and Cmocka.
                    </li>
                    <li>
                        Designed and simulated from start to finish a Central Processing Unit in Verilog with an ALU, cache, and registers.
                    </li>
                    <li>
                        Constructed an Algebraic Calculator using Python, providing users with a versatile tool for performing various algebraic calculations such as solving for unknown variables.
                    </li>
                    <li>
                        Developed a personal portfolio webpage written in HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.
                    </li>
                    <li>
                        Designed, prototyped, and developed a 2D platfomer video game written in C# under the UNITY game engine framework.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects;
