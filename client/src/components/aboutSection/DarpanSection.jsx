import React from 'react'
import image1 from '../../assets/logos/chosen2.png' // Local image

const DarpanSection = () => {
  return (
    <div className="bg-base-100 p-6 justify-center rounded-lg my-8 flex flex-col md:flex-row-reverse items-center">
      {/* Image Section */}
      <div className="flex items-center justify-center md:order-2">
        <img
          src={image1}
          alt="Darpan"
          className="rounded-lg"
          style={{ height: '300px', width: '300px' }}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-left md:ml-5 md:mr-8 md:w-1/2">
        <h2 className="text-3xl font-bold">About Darpan</h2>
        <p className="text-base overflow-hidden line-clamp-8 text-ellipsis w-full md:w-auto mt-4">
          Darpan Literary Magazine is a creative platform dedicated to young
          writers, especially teens, who may not have the resources to publish
          their work on larger platforms. We believe in giving a voice to the
          unheard, offering an affordable and welcoming space for aspiring
          writers to showcase their talents and ideas. Whether you're a poet, a
          storyteller, or an essayist, Darpan is here to help you share your
          work with the world and gain the exposure you deserve. At Darpan, we
          celebrate creativity and diversity in writing. Our mission is to
          empower young writers to take their first step into the literary
          world, foster their growth, and connect them with a supportive
          community of like-minded individuals. Join us and let your writing be
          heard!
        </p>
      </div>
    </div>
  )
}

export default DarpanSection
