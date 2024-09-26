import React from 'react'
import { mag } from '../../assets/issues'

const IssuesSections = () => {
  return (
    <div className="card flex flex-col md:flex-row rounded-md items-center md:items-start justify-center h-auto md:h-[24rem] bg-base-100 shadow-sm">
      {/* Text Section */}
      <div className="card-body p-5 md:w-1/2">
        <h2 className="card-title text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Featured Editions
        </h2>
        <p className="text-sm md:text-base lg:text-lg line-clamp-6">
          Discover our handpicked editions, carefully curated to showcase the
          best of literature, art, and culture. Each issue brings you
          captivating stories, insightful articles, and creative expressions
          from diverse voices. Dive deep into these exclusive collections and
          explore the world through a new lens.
        </p>
      </div>

      {/* Image Section */}
      <figure className="w-full md:w-1/2 p-5 md:p-0">
        <img
          src={mag}
          alt="Issues Section"
          className="w-full  h-96 object-cover rounded-md"
        />
      </figure>
    </div>
  )
}

export default IssuesSections
