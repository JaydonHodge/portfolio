import '../styles/Home.css'

function Home() {
  return (
    <section role='region' id='home'>
      <p>Hi, my name is</p>
      <h1 id="name">Jaydon Hodge.</h1>
      <h1 id="title">&lt;I am a Software Engineer/&gt;</h1>
      <div className='cursor'>
        <h1>_</h1>
      </div>
      <div className="home-description">
        <p id="first">The purpose of this web page is to serve as my <span className="highlight">personal portfolio</span> and <span className="highlight">online presence hub</span>.
          It is meant to be a place to display my ventures within my tech career, as well as a place of information for anyone that is
          interested in learning more about who I am and what I do.
        </p>
      </div>
      <p className="message">
        Head on down below and explore the rest of the page to find out
        more!
      </p>
    </section>
  )
}

export default Home;
