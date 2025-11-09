import '../styles/Home.css'

function Home() {
  return (
    <section role='region' id='home'>
      <p>Hi, my name is</p>
      <h1 id="name">Jaydon Hodge.</h1>
      <h1 id="alt-name">I also go by "Yajenio"</h1>
      <h1 id="joke-intro">I'm a CMPSC student by day, and a CMPSC enthusiast also by day</h1>
      <div className="home-description">
        <p id="first">The purpose of this web page is to serve as my <span className="highlight">personal portfolio</span> and <span className="highlight">online presence hub</span>.
          It is meant to be a place to display my ventures within my tech career, as well as a place of information for anyone that is
          interested in learning more about who I am and what I do.
        </p>
      </div>
      <div className="message-div">
        <p className="message">
          Head on down below and explore the rest of the page to find out
          more!
        </p>
      </div>
    </section>
  )
}

export default Home;
