import './global.css';
import './layout.css';
import './variables.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import PageBreak from './components/PageBreak';

function App() {
  return (
    <div>
      <main>
        <div className='container'>
          <Nav />
          <div className='content-padding' />
          <Home />
          <PageBreak />
        </div>
      </main>

      {/* <!---- Footer is seperate from main container -----> */}
      <Footer />

    </div>
  )

}

export default App
