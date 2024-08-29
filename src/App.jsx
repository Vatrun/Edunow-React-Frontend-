import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Video Player/Videoplayer.JSX'


const App = () => {
  const [playState, setplayState] = useState(false)
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About setplayState={setplayState}/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus></Campus>
        <Title subTitle='TESTIMONIALS' title='What Students Say' />
        <Testimonials></Testimonials>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer></Footer>
      </div>
      <Videoplayer playState={playState} setplayState={setplayState}></Videoplayer>
    </div>
  )
}

export default App
