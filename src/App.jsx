import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Problem from "./components/sections/Problem"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import StatsBar from "./components/sections/StatsBar"
import Testimonials from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"



export default function App() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Problem />
    <About />
    <Services />
    <StatsBar />
    <Testimonials />
    <Contact />
    <Footer />
   </div>
  )
}


