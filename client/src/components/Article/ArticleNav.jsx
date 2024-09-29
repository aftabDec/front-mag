import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const ArticleNav = () => {
  const navigate = useNavigate()
  // This function will navigate to the specified route and close the drawer
  const handleNavigation = (path) => {
    navigate(path) // Navigate to the given path
    onClose() // Call the onClose function to close the drawer
  }
  return (
    <div className="border-b-2 border-black">
      <nav className="text-center my-6">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Home
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Issues
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Mini Issues
          </li>
          <li
            onClick={() => handleNavigation('about')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            About Us
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Dear beloved
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            pensword
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Submissions
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Seasonal Issue
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="font-forum cursor-pointer transition-all duration-300 ease-in-out hover:text-custom-brown hover:font-bold hover:scale-110"
          >
            Career
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ArticleNav
