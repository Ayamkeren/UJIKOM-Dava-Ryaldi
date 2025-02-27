// import Hero from "./components/Hero"
// import Hero2 from "./components/Hero2"
import Hero from "./components/Hero.jsx"
import Hero2 from "./components/Hero2.jsx"
import Navbar from "./components/Navbar"
// import Footer from "./pages/Footer.jsx"
import Footer from "./components/Footer.jsx"
// import Login from "./pages/Login.jsx"


function App() {
  return (
    <div>
      {/* <Login/> */}
      <Navbar/>
      <Hero2/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
