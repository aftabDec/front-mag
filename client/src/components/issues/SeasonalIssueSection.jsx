import React from 'react'

const SeasonalIssueSection = () => {
  return (
    <div className="card rounded-sm items-center h-[40rem] bg-base-100 ">
      <figure>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Seasonal Issue"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Seasonal Issue</h2>
        <p>Discover our seasonal picks and special releases.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default SeasonalIssueSection
