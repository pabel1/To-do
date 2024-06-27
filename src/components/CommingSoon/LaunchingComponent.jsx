import React from "react";
import img from "../../assets/images/comingsoon.png";
const LaunchingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-full md:h-full h-[80vh]">
      <img
        className="max-w-[500px] lg:px-2 md-px-10 px-24  lg:-mt-10"
        src={img}
        alt=""
      />
      <h1 className=" text-primaryColor text-2xl font-medium -mt-5">
        Service under development
      </h1>
      <p className="text-center text-gray-400 max-w-[500px] text-sm mt-2">
        This service is currently under development. Wait till we lunch this as
        soon as possible
      </p>
    </div>
  );
};

export default LaunchingComponent;
