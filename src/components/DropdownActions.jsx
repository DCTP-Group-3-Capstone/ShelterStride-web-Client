import React, { useState } from "react";

export const DropdownActions = ({ menu, defaultDisplayName }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleOpen}>
        <div className="dropdown-text">
          <div>{defaultDisplayName}</div>
          <div
            className="material-icons"
            style={{
              transform: `rotate(x${open ? 180 : 0}deg)`,
              transition: "all 0.25s",
            }}
          >
            expand_more
          </div>
        </div>
      </button>
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              <button
                onClick={() => {
                  handleOpen();
                  menuItem();
                }}
              >
                Menu {index}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};