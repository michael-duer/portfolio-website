import React from "react";
import { projectsList } from "../projects-list" //json data
 
const Buttons = ({ filterItem, showAll, setItem, menuItems }) => {
  return (
    <>
      <div className="button-container">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="button filter"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="button filter"
          onClick={() => showAll()}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;