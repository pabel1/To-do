import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { dropdownbtn, scrollbar } from "../../utiles/tailwindClasses";

const DropdownOptions = ({
  options,
  btnstyle = dropdownbtn,
  selectedOption,
  setSelectedOption,
  dropdownNull = "Select Option",
}) => {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const paperRef = useRef(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (open) {
      // Set the minimum width of the Paper to match the button width
      const buttonWidth = anchorRef.current.offsetWidth;
      paperRef.current.style.minWidth = `${buttonWidth}px`;
    }
  }, [open]);

  return (
    <div>
      <button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className={btnstyle}
      >
        {selectedOption || dropdownNull} <BiChevronDown />
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        className="mt-1 z-10"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "right bottom",
            }}
          >
            <Paper
              ref={paperRef}
              className={`max-h-[260px] overflow-auto rounded-lg border border-gray-300 ${scrollbar}`}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {options?.map((option, index) => (
                    <MenuItem
                      key={index}
                      sx={{
                        fontSize: btnstyle === dropdownbtn ? "12px" : "15px",
                      }}
                      onClick={() => handleOptionClick(option)}
                    >
                      <p>{option}</p>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default DropdownOptions;
