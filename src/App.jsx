import React, { useState } from 'react'
import Footer from './components/footer'
import Contact from './components/coontact'
import Portfolio from './components/portfolio'
import Hero from './components/hero'
import Navbar from './components/navbar'
import About from './components/about-me'

const App = () => {
  return (
    <>
      <div className=' min-h-screen bg-slate-900 relative  montserrat-Italic font-playfair'>
        {/* <!-- Layer 1: Main Glow --> */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-700 to-green-500 blur-7xl opacity-20 animate-[pulseGlow]"'></div>

        {/* <!-- Layer 2: Accent Glow --> */}
        {/* <div class='absolute inset-0 bg-gradient-radial from-green-600/50 via-transparent to-transparent blur-[200px]'></div> */}

        {/* <!-- Layer 3: Subtle Highlights --> */}
        {/* <div class='absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-yellow-300/10 blur-[150px] opacity-40'></div> */}

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About Me */}
        {/* <About /> */}

        {/* Portfolio */}
        <Portfolio />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
