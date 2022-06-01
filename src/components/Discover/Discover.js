import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Elements = [
  { title: "Popular", active: true, type: "popular" },
  { title: "Now-Playing", active: false, type: "now_playing" },
  { title: "Top-Rated", active: false, type: "top_rated" },
  { title: "Upcoming", active: false, type: "upcoming" },
];

function Discover() {
  return (
    <>
      <Navbar Elements={Elements} />
      <Outlet />
    </>
  );
}

export default Discover;
