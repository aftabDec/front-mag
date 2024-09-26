import React, { useEffect } from 'react'
import {
  DarpanSection,
  FounderSection,
  AdvisorSection,
} from '../components/aboutSection/index'

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0) // Scrolls to the top of the page
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div className="container bg-base-200 w-full md:w-full grid grid-cols-1 md:grid-cols-1  my-8 mx-auto px-4">
      <DarpanSection />
      <div className="grid space-x-4 grid-cols-1 md:grid-cols-2">
        {' '}
        <FounderSection />
        <AdvisorSection />
      </div>
    </div>
  )
}

export default About
