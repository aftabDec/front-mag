import React from 'react'
import Dark from '../Dark-theme'

const Header = ({ shrink }) => {
  return (
    <header
      className={`bg-base-100 flex items-center justify-center text-base-content transition-all duration-300 ease-out ${
        shrink ? 'h-16 py-2' : 'h-20 py-4'
      }`}
    >
      <Dark />
      {/* Darpan Text with Letter Spacing */}
      <div
        className={`text-center font-seasons transition-all duration-300 ease-out ${
          shrink ? 'text-3xl' : 'text-5xl'
        } flex justify-center`}
      >
        {['D', 'a', 'r', 'p', 'a', 'n'].map((char, index) => (
          <span key={index} className="mx-1">
            {char}
          </span>
        ))}
      </div>
    </header>
  )
}

export default Header
