import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="btn bg-primary text-primary-content hover:bg-primary-focus transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {children} {/* Render children instead of text */}
    </button>
  )
}

export default Button
