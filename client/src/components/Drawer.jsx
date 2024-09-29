import React from 'react'
import { useNavigate } from 'react-router-dom'

const Drawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  // This function will navigate to the specified route and close the drawer
  const handleNavigation = (path) => {
    navigate(path) // Navigate to the given path
    onClose() // Call the onClose function to close the drawer
  }

  return (
    <div
      className={`fixed z-10 overflow-y-scroll top-0 left-0 w-full h-full bg-base-100 bg-opacity-80 transition-opacity duration-300 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`bg-base-100 mt-28 h-full p-5 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="mt-4 mx-10 cursor-pointer">
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/')}
          >
            Home
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/')}
          >
            Issues
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/mini-issues')}
          >
            Mini Issues
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/seasonal-issues')}
          >
            Seasonal Issues
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/submissions')}
          >
            Submissions
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/about')}
          >
            About Us
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/fashion')}
          >
            Fashion
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/magazine')}
          >
            Magazine
          </li>
          <li
            className="text-drawer-style py-2"
            onClick={() => handleNavigation('/magazine')}
          >
            Career
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
