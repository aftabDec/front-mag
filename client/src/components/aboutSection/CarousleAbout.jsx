import { useEffect, useState } from 'react'
import { cat, fcat, kitchen } from '../../assets/issues/index.js'

const CarousleAbout = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    {
      id: 1,
      content: 'nischay the founder and eic',
      image: cat,
      description:
        'Nischay is a multifaceted artist a writer poet, dassical dancer, violinist, and Carnatic music singer. She works in numerous different majazines; she is the founder and editor in chief of Darpan Literary Magazine. Nischay plans to study at Delhi University, with ambitions to further her education in Arts at Berkeley, Psychology at Yale, and Law at Harvard.',
    },
    {
      id: 2,
      content: 'Lucky Tiwari - Chief Advisor/Co-Founder',
      image: fcat,
      description:
        'Lucky Tiwari, a graduate from RTMN University, Maharashtra, Nagpur. She is currently either singing, volunteering or brewing some of the best tea you have ever tasted. She has an eye for the good old Bollywood tracks, mythlogy and adores watching our all time favourite F.R.I. E.N.D.S. The way to her heart is a chai date, a tulip bouquet and a kitty cat.',
    },
    {
      id: 3,
      content: 'jordan the pr manager',
      image: kitchen,
      description:
        'my name is jordan (aka euterpe), and i am from the united states! music wise, i love taylor swift, conan gray, olivia rodrigo, and sabrina carpenter. activity wise, i love reading and watching youtube documentaries (my favorites are dangelo wallace and filmcooper!). currently, i am reading persuasion by jane austen, but my favorite book series has to be a good girls guide to murder. however, the thing that i love the most has to be cats because look at how fluffy they areeeeeeeeeeee. anywho, i am so glad to be apart of this team, and i am so excited to watch us grow ❤',
    },
  ]

  const handlePaginationClick = (index) => {
    setActiveSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Automatically change slides every 3 seconds
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative">
      <div className="relative overflow-hidden w-full min-h-96 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-lg shadow-lg">
        <div
          className="absolute top-0 bottom-0 left-0 flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 flex w-full h-full p-8"
            >
              {/* Image on the Left Side */}
              <div className="w-1/2 flex justify-center items-center">
                <img
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                  src={slide.image}
                  alt={slide.content}
                />
              </div>

              {/* Content on the Right Side */}
              <div className="w-1/2 flex flex-col justify-center p-8">
                <h2 className="font-montserrat text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {slide.content}
                </h2>
                <p className="font-forum text-lg text-gray-600 dark:text-gray-300">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`hs-carousel-active ${
              activeSlide === index
                ? 'bg-blue-700 border-blue-700 dark:bg-blue-500 dark:border-blue-500'
                : 'border-gray-400 dark:border-neutral-600'
            } w-3 h-3 border rounded-full cursor-pointer`}
          />
        ))}
      </div>
    </div>
  )
}

export default CarousleAbout
