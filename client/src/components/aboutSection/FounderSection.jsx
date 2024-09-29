import React from 'react'

const FounderSection = () => {
  const image2 = 'https://picsum.photos/800/500'

  return (
    <div className="bg-base-100 p-6 items-center rounded-lg  flex flex-col">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full">
        <img
          src={image2}
          alt="Founder"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="prose text-center mt-4 w-full">
        <h2 className="text-3xl font-bold">EIC, Founder</h2>
        <p className="text-base mt-4">
          Nischay is a multifaceted artist—a writer, poet, classical dancer,
          violinist, and Carnatic music singer. She works in numerous different
          magazines; she is the founder and editor in chief of Darpan Literary
          Magazine. Nischay plans to study at Delhi University, with ambitions
          to further her education in Arts at Berkeley, Psychology at Yale, and
          Law at Harvard.
        </p>
      </div>
    </div>
  )
}

export default FounderSection
