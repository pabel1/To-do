import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Greeting = ({ page, nested = null, link = null }) => {
  const { pathname } = useLocation();

  const [greeting, setGreeting] = useState(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else if (hour < 24) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  });

  return (
    <div className="mb-8 ml-2">
      <h2 className="lg:text-[24px] text-[20px] text-[#434343] font-medium flex items-center gap-1">
        {link ? (
          <Link
            to={link}
            className="flex items-center gap-1 hover:text-blue-500 transition duration-300"
          >
            {page} <BiChevronRight />
          </Link>
        ) : (
          page
        )}
        <span className="text-[#636363]">{nested}</span>
      </h2>
      <div className="text-gray-500 lg:text-[16px] text-[14px]">
        Hello User, {greeting}
      </div>
    </div>
  );
};

export default Greeting;
