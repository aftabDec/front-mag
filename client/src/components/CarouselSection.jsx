import React, { useState, useEffect } from 'react'
import { turtle, art, artist, old, comm } from '../assets/slide' // Adjust the imports accordingly

const CarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const items = [
    {
      id: 1,
      image: turtle,
      title: 'A World of Stories Awaits',
      description:
        'Embark on a literary adventure with our diverse collection of fiction and non-fiction titles.',
    },
    {
      id: 2,
      image: artist,
      title: 'Unleash Your Creativity',
      description: 'Explore your artistic side with articles and tutorials.',
    },
    {
      id: 3,
      image: old,
      title: 'In Conversation with Authors',
      description:
        'Delve into the minds of renowned writers through exclusive interviews.',
    },
    {
      id: 4,
      image: art,
      title: 'Travel Through Art and Literature',
      description:
        'Explore diverse cultures and perspectives through captivating stories.',
    },
    {
      id: 5,
      image: comm,
      title: 'Your Community for Creativity',
      description:
        'Connect with fellow literature and art enthusiasts in our vibrant community.',
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    )
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000) // Auto-slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-10 relative mx-5 shadow overflow-hidden">
      {/* Carousel Images */}
      <div
        className="relative  flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full  flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Text Content */}
            <div className="relative z-10 text-center text-white p-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 uppercase">
                {item.title}
              </h1>
              <p className="text-md md:text-lg lg:text-xl mb-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black px-3 py-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black px-3 py-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 my-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default CarouselSection
