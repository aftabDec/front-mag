import React from 'react'
import { cat, fcat, kitchen } from '../../assets/issues/index'
const Issues2 = () => {
  return (
    <div className="w-full space-x-20 flex flex-row items-center justify-center  h-96 mx-10 p-5">
      {/*imaghe here*/}
      <div className="">
        <img className="w-80 h-auto" src={cat} alt="" />
      </div>
      {/*content here*/}
      <div className="space-y-5">
        <h2 className="font-bold text-3xl uppercase ">
          Title about the issues
        </h2>
        <p className="text-ellipsis overflow-hidden line-clamp-5 w-80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          delectus ratione deleniti perspiciatis cumque hic numquam officiis,
          excepturi corporis magni eaque aliquam distinctio architecto quis
          exercitationem sunt, mollitia facilis maiores.
        </p>
      </div>
    </div>
  )
}

export default Issues2
