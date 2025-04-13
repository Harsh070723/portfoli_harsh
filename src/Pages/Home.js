import React from 'react'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import "../Css/Home.css"
import Resume from '../Sections/Resume'
import Projects from '../Sections/Projects'
import Contact from '../Sections/Contact'
import GithubBanner from '../Components/GithubBanner'

export default function Home() {
  return (
  <>
  <Hero/>
  <About/>
  <Resume/>

  <Projects/>
  <GithubBanner/>
  <Contact/>
  </>
  )

}
