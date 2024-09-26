import React from 'react'
import IssueCard from './IssueCard'
import image1 from '../../assets/logos/4.png'
import image2 from '../../assets/logos/3.png'

const issuesData = [
  {
    title: 'Seasonal Issue 2023',
    image: image1,
    description: 'Explore the best of the season in literature and art.',
  },
  {
    title: 'Monthly Issue - September',
    image: image2,
    description: 'Dive into the latest trends and features.',
  },
  // Add more issues as needed
]

const IssuesSection = () => {
  return (
    <div className="p-10 flex flex-col gap-12">
      {issuesData.map((issue, index) => (
        <IssueCard
          key={index}
          title={issue.title}
          description={issue.description}
          image={issue.image}
          index={index}
        />
      ))}
    </div>
  )
}

export default IssuesSection
