import React, { useState, useEffect } from 'react'
import Button from '../button'

const ArticleHeader = ({ shrink }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const messages = ['Donate', 'Lucky Draw', 'Subscribe'] // Carousel items

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000) // Change text every 3 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [messages.length])

  return (
    <header
      className={`bg-[#f3eadd] text-[#351904] transition-all duration-300 ease-out ${
        shrink ? 'h-16 py-2 text-sm' : 'h-24 py-5 text-lg'
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
        <div
          className={`${shrink ? 'text-lg' : 'text-2xl'} transition-all duration-300 text-2xl mx-3 cursor-pointer`}
        >
          More Options
        </div>

        {/* Carousel effect inside the Button */}
        <Button>
          <div className="relative w-40 lg:w-32 h-6 overflow-hidden">
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {messages.map((message, index) => (
                <span key={index} className="text-lg font-semibold mx-2">
                  {message}
                </span>
              ))}
            </div>
          </div>
        </Button>

        <div
          className={`${shrink ? 'text-lg' : 'text-2xl'} transition-all duration-300 text-2xl mx-3 cursor-pointer`}
        >
          Subscribe
        </div>
      </div>
    </header>
  )
}

export default ArticleHeader
