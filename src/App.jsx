import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="bg-grey text-slate-100">
      <NavBar />
      <HeroSection />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
