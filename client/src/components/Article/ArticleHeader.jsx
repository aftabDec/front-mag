import React, { useState, useEffect } from 'react'

const ArticleHeader = ({ shrink, onToggleDrawer }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const messages = ['Donate', 'Lucky Draw', 'Subscribe'] // Slide-up items

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000) // Change text every 3 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [messages.length])

  return (
    <header
      className={`bg-base-200 shadow-md text-base-content transition-all duration-300 ease-out ${
        shrink ? 'h-16 py-2 text-sm' : 'h-20 py-5 text-lg'
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
        <div
          onClick={onToggleDrawer}
          className={`${
            shrink ? 'text-lg' : 'text-2xl'
          } transition-all duration-300 mx-3 cursor-pointer`}
        >
          More Options
        </div>

        {/* Content Scroll Effect */}
        <div className="relative flex items-center justify-center w-40 lg:w-32 h-6 overflow-hidden">
          <div
            className="absolute transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(-${currentIndex * 100}%)`,
              height: '30px', // Set height to accommodate a single message
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="text-2xl font-semibold h-6 flex items-center justify-center"
                style={{ height: '30px' }} // Each item should have a consistent height
              >
                {message}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            shrink ? 'text-lg' : 'text-2xl'
          } transition-all duration-300 mx-3 cursor-pointer`}
        >
          Subscribe
        </div>
      </div>
    </header>
  )
}

export default ArticleHeader
