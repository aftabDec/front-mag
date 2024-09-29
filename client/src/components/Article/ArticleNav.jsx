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
    <div className="">
      <nav className="text-center my-6">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Home
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Issues
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Mini Issues
          </li>
          <li
            onClick={() => handleNavigation('about')}
            className="cursor-pointer hover:text-primary"
          >
            About Us
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Dear beloved
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            pensword
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Submissions
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Seasonal Issue
          </li>
          <li
            onClick={() => handleNavigation('/')}
            className="cursor-pointer hover:text-primary"
          >
            Career
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ArticleNav
