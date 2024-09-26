import React from 'react'

const IssueCard = ({ title, description, image, index }) => {
  // Determine the flex direction based on whether the index is even or odd
  const isEven = index % 2 === 0

  return (
    <div
      className={`issue-card flex flex-col lg:flex-row items-center gap-6 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } bg-base-100 p-6 rounded-lg shadow-md`}
    >
      <img
        className="w-full lg:w-1/2 h-48 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <div className="text-content p-4 lg:w-1/2">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-base-content">{description}</p>
        <button className="mt-4 btn btn-link text-primary font-medium">
          Read More
        </button>
      </div>
    </div>
  )
}

export default IssueCard
