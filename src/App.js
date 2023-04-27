import React from 'react'
import { Footer, Blog, Possiblity, Feature, WhatGPT3, Header } from './containers'
import { Navbar, Brand, CTA } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possiblity />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
