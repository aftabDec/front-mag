import React, { useEffect } from 'react'
import CarouselSection from '../components/CarouselSection'
import Footer from '../components/Article/ArticleFooter'
import IssuesSection from '../components/issues/IssuesSection'
import ArticleNav from '../components/Article/ArticleNav'
import {
  IssuesSections,
  MiniIssuesSection,
  SeasonalIssueSection,
} from '../components/issues'
import { cat, fcat, bok, advent, eco, kitchen } from '../assets/issues/index'
const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Data for Mini Issues Section
  const miniIssues = [
    {
      id: 1,
      title: 'Feline Frenzy',
      description: 'Celebrating the joy and wonder of cats',
      coverImageUrl: fcat,
    },
    {
      id: 2,
      title: 'Eco-Friendly Living',
      description:
        'Promoting sustainable practices and environmental awareness',
      coverImageUrl: eco,
    },
    {
      id: 3,
      title: 'Culinary Adventures',
      description: 'Exploring the world of food and drink',
      coverImageUrl: advent,
    },
    {
      id: 4,
      title: 'Tech Tales',
      description:
        'Unveiling the latest innovations and exploring the future of technology.',
      coverImageUrl: cat,
    },
    {
      id: 5,
      title: 'Travel Treasures',
      description:
        'Embarking on journeys to captivating destinations and hidden gems.',
      coverImageUrl: bok,
    },
    {
      id: 6,
      title: 'DIY Delights',
      description:
        'Discovering creative projects and crafting your way to a personalized haven.',
      coverImageUrl: kitchen,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Content Below the Header */}
      <div>
        <CarouselSection />
        <main className="p-5 bg-base-200 text-base-content">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Issues Section */}
            <div className="md:col-span-2 bg-base-300 space-y-5">
              <div className="p-5">
                <IssuesSections />
              </div>

              <div className="p-5">
                <div className=" gap-5">
                  {/* Pass the miniIssues array to MiniIssuesSection */}
                  <MiniIssuesSection issues={miniIssues} />
                </div>
              </div>
            </div>
            {/* Seasonal Issue Section */}
            <div className="space-y-5 bg-base-300 p-5 md:col-span-1">
              <SeasonalIssueSection />
              <SeasonalIssueSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomePage
