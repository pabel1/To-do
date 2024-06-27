import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import SubMenuOption from "../../pages/Shared/Todo/SubMenuOption";
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
