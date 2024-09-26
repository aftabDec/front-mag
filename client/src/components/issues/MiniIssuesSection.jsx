import React from 'react'

const MiniIssuesSection = ({ issues }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {issues.map((issue) => (
        <div
          key={issue.id}
          className="card rounded-md bg-base-100 shadow-sm flex flex-col"
        >
          {/* Image Section */}
          <figure className="w-full">
            <img
              src={issue.coverImageUrl}
              alt={issue.title}
              className="w-full h-52 sm:h-60 lg:h-64 object-cover rounded-t-md"
            />
          </figure>
          {/* Text Section */}
          <div className="card-body p-4 flex flex-col justify-between">
            <h2 className="card-title text-lg font-semibold mb-2">
              {issue.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {issue.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MiniIssuesSection
