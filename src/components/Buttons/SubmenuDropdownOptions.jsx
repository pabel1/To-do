import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Lordicon from "../../utiles/Lordicon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateTodoStatusApiMutation } from "../../feature/todo/todoApiSlice";

import { BiChevronRight, BiDotsHorizontalRounded } from 'react-icons/bi'

export default function SubmenuDropdownOptions({
  todo,
  options,
  setSelectedOption,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleDelete = async (id, text) => {
  //   console.log(id, text);
  //   if (text === "Delete") {
  //     const res = await deleteTodoApi({ token, id });
  //     console.log(res);
  //   } else return;
  // };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >

        <BiDotsHorizontalRounded />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="p-6"
      >
        {options.map((option, indx) => (
          <div className="flex items-center text-[#6C6666]" key={indx}>
            {option.subOptions ? (
              <SubMenuOption
                todo={todo}
                title={option.title}
                icon={option.icon}
                subOptions={option.subOptions}
              />
            ) : (
              <MenuItem
                onClick={(e) => setSelectedOption(e.target.innerText)}
                className="w-full"
                key={option.title}
              >
                <Lordicon target={"li"} size={20} link={option?.icon} color={'#6C6666'} />
                <p className="ml-2 text-sm">{option?.title}</p>
              </MenuItem>
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
}

function SubMenuOption({ title, icon, subOptions, todo }) {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const subMenuOpen = Boolean(subMenuAnchorEl);

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const { access_token: token } = useSelector((state) => state.auth);
  const [updateTodoStatusApi] = useUpdateTodoStatusApiMutation();

  const handleStatusChange = async (status) => {
    const res = await updateTodoStatusApi({
      token,
      status,
      id: todo?._id,
    });

    handleSubMenuClose(); // Close the submenu after status change
  };

  return (
    <>
      <MenuItem className="w-full" onClick={handleSubMenuClick}>
        <Lordicon target={"div"} size={20} link={icon} color={'#6C6666'} />
        <p className="mx-2 text-sm">{title}</p>
        <BiChevronRight className="ml-auto"/>
      </MenuItem>
      <Menu
        anchorEl={subMenuAnchorEl}
        open={subMenuOpen}
        onClose={handleSubMenuClose}
        anchorReference="anchorEl"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {subOptions.map((option, indx) => (
          <div className="flex items-center px-1" key={indx}>
            <MenuItem
              className="w-full flex items-center"
              key={option}
              onClick={() => handleStatusChange(option.name)} // Close sub menu on click
            >
              <div
                className={`rounded-[50%] bg-[${option.color}] w-3 h-3 mr-2
                  ${option.name === "Pending" && "border-[#8791E980] border"}
                `}
              />
              <p className="text-[#6C6666]">{option?.name}</p>
            </MenuItem>
          </div>
        ))}
      </Menu>
    </>
  );
}
