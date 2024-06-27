import React from "react";

const Lordicon = ({ link, color, size, trigger, target }) => {
  const colorCode = color ? color : "#222";
  const fontSize = size ? size : 24;
  const triggerAction = trigger ? trigger : "hover";
  const targetApply = target ? target : "a";

  return (
    <lord-icon
      target={targetApply}
      src={`https://cdn.lordicon.com/${link}.json`}
      trigger={triggerAction}
      colors={`primary:${colorCode}`}
      style={{ width: `${fontSize}px`, height: `${fontSize}px` }}
    ></lord-icon>
  );
};

export default Lordicon;
