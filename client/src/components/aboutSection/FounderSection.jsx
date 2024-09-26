import React from 'react'

const FounderSection = () => {
  const image2 = 'https://picsum.photos/800/500'
  return (
    <div className="bg-base-100 p-6 rounded-lg my-8 flex flex-col md:flex-row-reverse items-center">
      <div className="flex items-center justify-center md:order-2">
        <img
          src={image2}
          alt="Founder"
          className="rounded-lg w-96 h-64 "
        />
      </div>
      <div className="prose text-left md:mr-8">
        <h2 className="text-3xl font-bold">About the Founder</h2>
        <p className="text-base mt-4">Details about the founder...</p>
      </div>
    </div>
  )
}

export default FounderSection
