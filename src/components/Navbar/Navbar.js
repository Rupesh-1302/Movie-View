import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { elementsContext } from "../../App";

function Navbar() {
  const { elements, updateElement } = useContext(elementsContext);
  const getElementList = (elements) => {
    return (
      <ul className="flex grow justify-center items-center">
        {elements.map((element, idx) => {
          return (
            <li
              className={`text-xs pr-5 ${element.active ? "text-sky-500" : ""}`}
              key={idx}
            >
              <Link
                to={`${element.type}`}
                onClick={() => {
                  updateElement(element);
                }}
              >
                {element.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="text-white p-5 flex ">
      <h1 className="text-2xl flex items-center">Discover</h1>
      {getElementList(elements)}
      <h2 className="text-xs flex items-center pr-5">Search</h2>
    </div>
  );
}

export default Navbar;
