import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
   
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
