import React from 'react'
import { Link } from 'react-router-dom'

const Hiring = () => {
  return (
    <>
      {' '}
      <div className=" p-10 space-y-2 w-full flex flex-col items-center text-center">
        <h1 className="font-montserrat text-2xl font-medium text-pretty ">We are Hiring!</h1>
        <p className="font-forum text-md">
          Join Darpan Literary Magazine and help empower young writers by
          contributing your skills in writing, editing, or design to our
          creative platform.
        </p>
        <Link to="/character/new">
          <button className=" text-white text-lg py-2 px-4 rounded-full bg-custom-brown hover:bg-custom-brown/90 transition-all">
            Create Character
          </button>
        </Link>
      </div>
    </>
  )
}

export default Hiring
