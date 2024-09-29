import React, { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip' // Assuming you're using a tooltip library
import { FaEllipsisV, FaBell } from 'react-icons/fa' // Example icons from react-icons

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
      } h-12 sm:h-16`} // Adjust height for mobile (h-12) and small screens (h-16)
    >
      <div className="flex justify-between items-center w-full">
        {/* More Options on the left */}
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div
              onClick={onToggleDrawer}
              className={`${
                shrink ? 'text-lg' : 'text-2xl'
              } transition-all duration-300 mx-3 cursor-pointer`}
            >
              More Options
            </div>
          </div>

          {/* Icons for mobile view */}
          <div className="flex md:hidden">
            <Tooltip content="More Options">
              <FaEllipsisV
                className={`text-2xl cursor-pointer ${shrink ? 'text-lg' : 'text-2xl'}`}
                onClick={onToggleDrawer}
              />
            </Tooltip>
          </div>
        </div>

        {/* Content Scroll Effect in the center */}
        <div className="relative flex items-center justify-center w-40 lg:w-32 h-6 overflow-hidden mx-4">
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
                className="text-sm sm:text-lg font-semibold h-6 flex items-center justify-center" // Adjusted text size
                style={{ height: '30px' }} // Each item should have a consistent height
              >
                {message}
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe on the right */}
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div
              className={`${
                shrink ? 'text-lg' : 'text-2xl'
              } transition-all duration-300 mx-3 cursor-pointer`}
            >
              Subscribe
            </div>
          </div>

          {/* Icons for mobile view */}
          <div className="flex md:hidden">
            <Tooltip content="Subscribe">
              <FaBell
                className={`text-2xl cursor-pointer ${shrink ? 'text-lg' : 'text-2xl'}`}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ArticleHeader
