import React, { useEffect } from 'react'
import {
  DarpanSection,
  FounderSection,
  AdvisorSection,
  TeamSection,
} from '../components/aboutSection/index'
import CarousleAbout from '../components/aboutSection/CarousleAbout'

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamMember = [
    {
      name: 'Sophia',
      role: 'Blog writer',
      image: 'https://picsum.photos/300/200',
      description:
        'Sophia is a Blog Writer for Darpa. Literary Magazine from Minnesota, USA. She has a passion for creative writing, and she’s currently founder and editor-in-chief for The Pre-Med Gazette, an editor for DICED literary magazine and the Alexandrian Review, and a staff writer for Equinox literary magazine. When she’s not writing, she loves reading, listening to music, and playing violin.',
    },
    {
      name: 'Lucky Tiwari',
      role: 'chief advisor/co founder',
      image: 'https://picsum.photos/300/200',
      description:
        'Lucky Tiwari, a graduate from RTMN University, Maharashtra, Nagpur. She is currently either singing, volunteering or brewing some of the best tea you have ever tasted. She has an eye for the good old Bollywood tracks, mythlogy and adores watching our all time favourite F.R.I. E.N.D.S. The way to her heart is a chai date, a tulip bouquet and a kitty cat.',
    },
    {
      name: 'Member 3',
      role: 'Contributor',
      image: 'https://picsum.photos/300/200',
      description: 'A short description about the team member.',
    },
    {
      name: 'Member 1',
      role: 'Editor',
      image: 'https://picsum.photos/300/200',
      description: 'A short description about the team member.',
    },
    {
      name: 'Member 2',
      role: 'Designer',
      image: 'https://picsum.photos/300/200',
      description: 'A short description about the team member.',
    },
    {
      name: 'Member 3',
      role: 'Contributor',
      image: 'https://picsum.photos/300/200',
      description: 'A short description about the team member.',
    },
  ]

  return (
    <div className="container bg-base-200 w-full my-8 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
        {/* Darpan Section */}
        <div className="md:col-span-12 lg:col-span-12 row-span-3">
          <DarpanSection />
          {/* Team Section */}

          <CarousleAbout />

          <div className="my-8">
            <TeamSection teamMembers={teamMember} />
          </div>
          {/* Founder Section */}
          <div className="md:col-span-6 pt-8 lg:col-span-4 row-span-1">
            <FounderSection />
          </div>

          {/* Advisor Section */}
          <div className="md:col-span-6 pb-8 lg:col-span-4 row-span-1">
            <AdvisorSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
