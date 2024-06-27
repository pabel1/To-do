import { Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Lordicon from "../../utiles/Lordicon";

const demoPropic =
  "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png";

const TopNavbar = ({ toggle, setToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};
  return (
    <div className="bg-[#F8F9FE] flex justify-between items-center shadow py-3 h-[70px] lg:px-16 md:px-10 px-6 sticky top-0 z-40">
      <div
        onClick={() => setToggle(!toggle)}
        className="lg:hidden md:hidden block"
      >
        <HiMenuAlt1 />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="lg:block md:block hidden bg-[#EAEAEA99] py-2 px-4 rounded-full"
        />
      </div>
      <div className="flex gap-8 items-center">
        {/* profile */}
        <div
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={demoPropic}
            alt="user"
            className="h-12 w-12 object-cover rounded-full"
          />
          <div className="lg:block md:block hidden">
            <h2 className="text-md font-medium leading-0">{"Notun User"}</h2>
            <p className="text-gray-400 text-xs">{"notunuser@hrm.com"}</p>
          </div>
          <Lordicon link={"rxufjlal"} target="div" />
        </div>
        <Menu
          disableScrollLock
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              borderRadius: "12px",
              py: 1,
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link to="/profile">
            <MenuItem
              onClick={handleClose}
              className="w-40 mx-4 rounded-lg gap-2 text-sm text-gray-700"
            >
              <Lordicon link={"bhfjfgqz"} color={"#555"} size={18} />
              Profile
            </MenuItem>
          </Link>
          <Link to="/settings">
            <MenuItem
              onClick={handleClose}
              className="w-40 mx-4 rounded-lg gap-2 text-sm text-gray-700"
            >
              <Lordicon link={"hwuyodym"} color={"#555"} size={18} />
              Settings
            </MenuItem>
          </Link>
          <Link to="/settings">
            <MenuItem
              onClick={handleClose}
              className="w-40 mx-4 rounded-lg gap-2 text-sm text-gray-700"
            >
              <Lordicon link={"enzmygww"} color={"#555"} size={18} />
              Support
            </MenuItem>
          </Link>
          <Divider className="mt-2 mb-1 mx-4" />
          <MenuItem
            onClick={handleLogout}
            className="w-40 mx-4 rounded-lg gap-2 text-sm text-red-400"
          >
            <MdOutlineLogout className="text-lg ml-1" />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default TopNavbar;
