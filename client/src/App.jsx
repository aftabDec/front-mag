import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Article/header'
import ArticleHeader from './components/Article/ArticleHeader'
import HomePage from './pages/HomePage'
import Drawer from './components/Drawer'
import AboutPage from './pages/AboutPage'
import Footer from './components/Article/ArticleFooter'
import ArticleNav from './components/Article/ArticleNav'
const App = () => {
  const [scrollY, setScrollY] = useState(0)
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true) // Track navbar visibility
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Only apply shrink effect if the drawer is closed
      if (!isDrawerOpen) {
        setShrinkHeader(currentScrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDrawerOpen]) // Add isDrawerOpen as a dependency

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
    setShrinkHeader(!isDrawerOpen)

    // Toggle no-scroll class on body
    if (!isDrawerOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  return (
    <Router>
      <div className="sticky top-0 z-20 bg-base-100 transition-all duration-500 ease-out">
        {/* Header and ArticleHeader get the shrink and drawer toggle props */}
        <Header shrink={shrinkHeader} />
        <ArticleHeader shrink={shrinkHeader} onToggleDrawer={toggleDrawer} />
      </div>
      <ArticleNav />
      {/* Drawer Component */}

      {isDrawerOpen && <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />}
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
