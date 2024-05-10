import About from "./About"
// import Plans from "./Plans"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Contact from "./Contact"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      {/* <Plans/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage