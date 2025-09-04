import About from './componenets/About/About'
import Hero from './componenets/Hero/Hero'
import Navbar from './componenets/Navbar/Navbar'
import React from 'react'
import Services from './componenets/Services/Services'
import Mywork from './componenets/Mywork/Mywork'
import Footer from './componenets/Footer/Footer'
import Login from './componenets/login/login'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Footer />
      
      
    </div>
  )
}

export default App