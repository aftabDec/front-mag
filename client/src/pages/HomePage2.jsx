import React from 'react'
import CarouselSection from '../components/CarouselSection'
import Issues2 from '../testcodes/issues2/issues2'
import MiniIssue2 from '../testcodes/issues2/MiniIssue2'
import Hiring from '../components/Hiring'

const HomePage2 = () => {
  return (
    <>
      <div className="space-y-5 flex flex-col items-center justify-items-center">
        {/* Carousel Section */}
        <CarouselSection />

        {/* Issues Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
          <Issues2 />
          <MiniIssue2 />
        </div>
        
          {' '}
          <Hiring />
        
      </div>
    </>
  )
}

export default HomePage2
