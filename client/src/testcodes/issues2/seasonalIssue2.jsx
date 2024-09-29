import React from 'react'
import { cat } from '../../assets/issues/index'

const MiniIssue2 = () => {
  return (
    <div className="w-full space-x-20 flex flex-row items-center justify-center  h-96 mx-10 p-5">
      {/*content here*/}
      <div className="space-y-5">
        <h2 className="font-montserrat font-bold text-3xl uppercase ">Seasonal-Issues</h2>
        <p className="font-forum text-ellipsis overflow-hidden line-clamp-6 w-80">
          The Seasonal Issue of Darpan Literary Magazine is a special edition
          released every few months, featuring a selected mix of
          creative works that reflect the themes, moods, and inspirations of the
          current season.
        </p>
      </div>
      {/*imaghe here*/}
      <div className="">
        <img className="w-80 h-auto" src={cat} alt="" />
      </div>
    </div>
  )
}

export default MiniIssue2
