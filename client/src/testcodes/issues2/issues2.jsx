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
        <h2 className="font-montserrat font-bold text-3xl uppercase ">monthly-Issues</h2>
        <p className="font-forum text-ellipsis overflow-hidden line-clamp-5 w-80">
          The Monthly Issue of Darpan Literary Magazine is a collection
          of creative works submitted by young writers. It features poetry,
          short stories, essays, and more, providing a platform for teens to
          share their voices with a wider audience.
        </p>
      </div>
    </div>
  )
}

export default Issues2
