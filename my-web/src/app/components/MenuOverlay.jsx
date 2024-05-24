import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {" "}
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} onClick={onClose} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
