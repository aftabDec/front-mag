import React from 'react'

const AdvisorSection = () => {
  const image2 = 'https://picsum.photos/800/500'
  return (
    <div className="bg-slate-300 p-6 rounded-lg my-8 flex flex-col md:flex-row items-center">
      <div className="flex items-center justify-center md:order-1">
        <img
          src={image2}
          alt="Advisor"
          className="rounded-lg w-96 h-48 md:h-auto"
        />
      </div>
      <div className="prose text-left md:ml-8">
        <h2 className="text-3xl font-bold">About the Advisor</h2>
        <p className="text-base mt-4">Details about the advisor...</p>
      </div>
    </div>
  )
}

export default AdvisorSection
