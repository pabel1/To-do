import React from 'react'

const Skeleton = () => {
  return (
    <div className="border  flex flex-col justify-center p-2 rounded-xl">
      <div className=" flex flex-col items-center justify-center mb-2">
        <div className="w-20 h-20 rounded-md bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-3">
        <span className=" w-[40%] mx-auto h-4 bg-gray-200 animate-pulse rounded-md"></span>
        <span className=" w-[60%] mx-auto h-4 bg-gray-200 animate-pulse rounded-md"></span>
        <span className=" w-full mx-auto h-9 bg-gray-200 animate-pulse rounded-md"></span>
        <span className=" w-full mx-auto h-9 bg-gray-200 animate-pulse rounded-md"></span>

        <div className="w-full flex justify-between items-center gap-4 ">
          <div className="w-full h-9 bg-gray-200 animate-pulse text-white border border-transparent rounded-md"></div>
          <div className="w-full h-9 bg-gray-200 animate-pulse text-white border border-transparent rounded-md"></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
