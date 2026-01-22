import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="bg-grey">
      <NavBar />
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
