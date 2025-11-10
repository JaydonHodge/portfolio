import '../styles/Home.css'
import Typewriter from '../components/Hooks/Typewriter';
import { useState } from 'react';


function Home() {
  const [firstDone, setFirstDone] = useState(false);

  return (
    <section role='region' id='home'>
      <p>Hi, my name is</p>
      <div className='typing-area'>
        <h1 id="name">
          <Typewriter text='Jaydon Hodge. ' speed={70} needCursor={false} onDone={() => setFirstDone(true)} />
        </h1>
        <h1 id="title">
          {firstDone && <Typewriter text='<I&apos;m a Software Engineer/>' speed={70} needCursor={true} />}
        </h1>
      </div>
      <div className="home-description">
        <p id="first">I built this web page to serve as my <span className="highlight">personal portfolio</span> and <span className="highlight">online presence hub</span>.
          It is meant to be a place to display my ventures within my tech career, as well as a place of information for anyone that is
          interested in learning more about who I am and what I do.
        </p>
      </div>
      <p className="message">
        Head on down below and explore the rest of the page to find out
        more!
      </p>
      <div className='spacing'></div>
    </section>
  )
}

export default Home;
