
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/hero.jsx'
import Hobbies from './components/Hobbies.jsx'
import Navbar from './components/Navbar.jsx'
import Price from './components/Price.jsx'
import Projects from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Testimonials from './components/Testimonials.jsx'
//import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div>
    <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Testimonials/>
     <Hobbies/>
     <Price/>
     <Contact/>
     <Footer/>

    </div>
  )
}

export default App
