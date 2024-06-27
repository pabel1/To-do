import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Lordicon from "../../utiles/Lordicon";

export default function TodoDropdownOptions({
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

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "rgb(75 85 99)" }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
                <Lordicon target={"li"} size={20} link={option?.icon} />
                <p className="ml-2">{option?.title}</p>
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

  // const { access_token: token } = useSelector((state) => state.auth);
  // const [updateTodoStatusApi] = useUpdateTodoStatusApiMutation();

  const handleStatusChange = async (status) => {
    const res = await updateTodoStatusApi({
      token,
      status,
      id: todo?._id,
    });

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
