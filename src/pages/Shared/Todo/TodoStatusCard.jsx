import React from "react";

const TodoStatusCard = ({ img, title, value, total }) => {
  return (
    <div className="overflow-hidden p-4 lg:h-[152px] md:h-[152px]  h-[240px] flex lg:items-center md:items-center lg:justify-start md:justify-start justify-center items-end rounded-xl bg-white border border-gray-300 shadow-lg hover:-translate-y-1 transition duration-300 relative">
      <div className='text-gray-700 lg:pl-2 md:pl-2 pl-0' style={{ zIndex: 1 }}>
        <h2 className="text-md font-medium lg:text-left md:text-left text-center uppercase">{title}</h2>
        <h1 className={`text-2xl text-rubik font-bold mt-1 lg:text-left md:text-left text-center text-gray-500`}>{value} / <span className="text-gray-700">{total}</span></h1>
      </div>
      <div>
        <img src={img} className="lg:w-[55%] md:w-[55%] w-[90%] absolute lg:top-1/2 md:top-1/2 top-0 lg:-translate-y-1/2 md:-translate-y-1/2 translate-y-0 right-2 lg:pt-4 md:pt-4 pt-2" style={{ zIndex: 0 }} alt="eod" />
      </div>
    </div>
  );
};

export default TodoStatusCard;
