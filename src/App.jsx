import { useState } from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


const App = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <main className="bg-grey text-slate-100">
      <NavBar setOpen={setOpen} />
      <HeroSection isOpen={open} setOpen={setOpen}/>
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
