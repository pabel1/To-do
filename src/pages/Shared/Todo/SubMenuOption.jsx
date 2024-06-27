import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTodoStatus } from "../../../feature/todo/todosSlice";
import Lordicon from "../../../utiles/Lordicon";

export default function SubMenuOption({ title, icon, subOptions, todo }) {
  const dispatch = useDispatch();
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const subMenuOpen = Boolean(subMenuAnchorEl);

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const handleStatusChange = async (status) => {
    dispatch(
      updateTodoStatus({
        id: todo.id,
        status: status,
      })
    );
    handleSubMenuClose(); // Close the submenu after status change
  };
  const filteredOptions = subOptions.filter(
    (option) => option.name !== todo.status
  );

  return (
    <>
      <MenuItem className="w-full" onClick={handleSubMenuClick}>
        <Lordicon target={"div"} size={20} link={icon} />
        <p className="ml-2">{title}</p>
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
        {filteredOptions.map((option, indx) => (
          <div className="flex items-center px-1" key={indx}>
            <MenuItem
              className="w-full flex items-center"
              key={option}
              onClick={() => handleStatusChange(option.name)}
            >
              <div
                style={{ backgroundColor: option.color }}
                className={`rounded-[50%] w-3 h-3 mr-2
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
