import { useState, useEffect } from 'react'

export const useScroll = (threshold = 100) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScroll = () => {
      const currentScrollY = window.scrollY

      setScrollY(currentScrollY)
      if (currentScrollY > threshold && currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [threshold])

  return { scrollY, scrollDirection }
}
