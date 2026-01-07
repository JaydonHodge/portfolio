import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import './layout.css';
import './variables.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import PageBreak from './components/PageBreak';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className='container'>
                    <Nav />
                    <Routes>
                        <Route path='/' element={
                            <main>
                                <div className='content-padding' />
                                <Home />
                                <PageBreak />
                                <About />
                                <PageBreak />
                                <Experience />
                                <PageBreak />
                                <Projects />
                            </main>
                        } />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </div>
                {/* <!---- Footer is seperate from main container -----> */}
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default App
