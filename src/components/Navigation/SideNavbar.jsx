import React from "react";
import { MdLogout, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "../../assets/styles/sidebar.css";
import { sidebarLinkBase } from "../../data/sidebarLinkBase";
import Lordicon from "../../utiles/Lordicon";

const SideNavbar = ({ setToggle }) => {
  let sideBarLink;

  sideBarLink = [...sidebarLinkBase];

  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive ? "#116D6E" : "#6C6666",
      backgroundColor: isActive ? "#D2E9E9" : "",
      borderRadius: "6px",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    };
  };

  const handleLogout = () => {};

  return (
    <div className="sidebar min-h-screen relative">
      <button
        onClick={() => setToggle(false)}
        className="absolute top-12 right-0 lg:hidden md:hidden block z-[1000]"
      >
        <MdOutlineKeyboardArrowLeft className="text-3xl p-1 rounded-full text-white bg-orange-300" />
      </button>
      <Link to="/" className="lg:block md:hidden block">
        <img
          src={logo}
          alt="masterkey"
          className="mx-auto mt-8 mb-6 h-[55px] "
        />
      </Link>

      <div className="flex flex-col">
        {sideBarLink?.map(({ title, link, icon }, index) => (
          <div key={index} className="flex">
            <div
              className={`pr-2 ${
                location.pathname === link ? "bg-[#46585D]" : ""
              } rounded-r-xl`}
            ></div>
            <NavLink
              key={index}
              to={link}
              style={activeNavLink}
              onClick={() => setToggle(false)}
              className="w-full flex items-center gap-3 font-medium py-[12px] transition duration-300 lg:pl-[15%] md:pl-8 pl-8 hover:bg-[#D2E6E6]"
            >
              <Lordicon
                color={location.pathname === link ? "#116D6E" : "#6C6666"}
                link={icon}
                size={20}
              />
              <span className="text-md pt-0.5 lg:block md:hidden block">
                {title}
              </span>
            </NavLink>
          </div>
        ))}

        <div className="flex mt-12">
          <div
            className={`pr-2 ${
              location.pathname === "/profile" ? "bg-[#46585D]" : ""
            } rounded-r-xl`}
          ></div>
          <NavLink
            to={"/profile"}
            style={activeNavLink}
            onClick={() => setToggle(false)}
            className="w-full flex items-center gap-3 font-medium py-[12px] transition duration-300 lg:pl-[15%] md:pl-8 pl-8 hover:bg-[#D2E6E6]"
          >
            <Lordicon
              color={location.pathname === "/profile" ? "#116D6E" : "#6C6666"}
              link={"bhfjfgqz"}
              onClick={() => setToggle(false)}
              size={20}
            />
            <span className="text-md pt-0.5 lg:block md:hidden block">
              Profile
            </span>
          </NavLink>
        </div>
        <div className="flex">
          <div
            className={`pr-2 ${
              location.pathname === "/settings" ? "bg-[#46585D]" : ""
            } rounded-r-xl`}
          ></div>
          <NavLink
            to={"/settings"}
            style={activeNavLink}
            onClick={() => setToggle(false)}
            className="w-full flex items-center gap-3 font-medium py-[12px] transition duration-300 lg:pl-[15%] md:pl-8 pl-8 hover:bg-[#D2E6E6]"
          >
            <Lordicon
              color={location.pathname === "/settings" ? "#116D6E" : "#6C6666"}
              link={"hwuyodym"}
              size={20}
            />
            <span className="text-md pt-0.5 lg:block md:hidden block">
              Settings
            </span>
          </NavLink>
        </div>

        <div className="flex mb-10">
          <button
            onClick={handleLogout}
            className="w-full text-gray-500 flex items-center gap-3.5 font-medium py-[12px] transition duration-300 lg:pl-[18%] pl-10 rounded-lg hover:text-red-500 hover:bg-red-100"
          >
            <MdLogout className="rotate-180 text-lg" />
            <span className="text-md lg:block md:hidden block">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
