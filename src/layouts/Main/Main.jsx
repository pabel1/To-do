import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import "../../assets/styles/sidebar.css";
import SideNavbar from "../../components/Navigation/SideNavbar";
import TopNavbar from "../../components/Navigation/TopNavbar";
import { setRoute } from "../../feature/route/routeSlice";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setRoute("/"));
  }, [location, dispatch]);

  return (
    <section className="flex">
      <div
        className={`${toggle ? "left-0" : "left-[-100%]"} 
        transition-all duration-500 md:left-0 w-[60%] md:w-[13%] lg:w-[18%] z-[100]
        fixed top-0 bottom-0 overflow-y-auto scroll-smooth 
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white 
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        <SideNavbar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="w-full md:w-[87%] lg:w-[82%] lg:ml-[18%] md:ml-[13%] ml-0 h-full">
        <TopNavbar toggle={toggle} setToggle={setToggle} />
        <div className="lg:p-8 md:p-4 p-2 w-[100vw] md:w-full overflow-hidden md:overflow-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
