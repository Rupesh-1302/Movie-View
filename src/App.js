import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Discover from "./components/Discover/Discover";
import Movies from "./components/MoviesCatagory/Movies";
import Movie from "./components/Movie/Movie";
import { AnimatePresence } from "framer-motion";
export const elementsContext = React.createContext();

function App() {
  const location = useLocation();

  const [elements, setElements] = useState([
    { title: "Popular", active: true, type: "popular" },
    { title: "Now-Playing", active: false, type: "now_playing" },
    { title: "Top-Rated", active: false, type: "top_rated" },
    { title: "Upcoming", active: false, type: "upcoming" },
  ]);

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
  return (
    <div className="App bg-gray-800 min-h-screen">
      <elementsContext.Provider
        value={{ elements: elements, updateElement: updateElement }}
      >
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="discover" element={<Discover />}>
              <Route path=":type" element={<Movies />}></Route>
            </Route>
            <Route path="/movie/:movieId" element={<Movie />}></Route>
            <Route
              path="*"
              element={<Navigate to="/discover/popular" replace />}
            />
          </Routes>
        </AnimatePresence>
      </elementsContext.Provider>
    </div>
  );
}

export default App;
