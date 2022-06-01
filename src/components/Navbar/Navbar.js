import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ Elements }) {
  const [elements, setElements] = useState(Elements);
  const updateElement = (element) => {
    setElements((prevElements) => {
      return prevElements.map((elem) => {
        if (elem === element) {
          return {
            ...elem,
            active: true,
          };
        }
        return { ...elem, active: false };
      });
    });
  };
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
      {elements ? getElementList(elements) : ""}
      <h2 className="text-xs flex items-center pr-5">Search</h2>
    </div>
  );
}

export default Navbar;
