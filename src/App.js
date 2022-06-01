import "./App.css";
import { Routes, Route } from "react-router-dom";
import Discover from "./components/Discover/Discover";
import Movies from "./components/MoviesCatagory/Movies";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Routes>
        <Route path="discover" element={<Discover />}>
          <Route path=":type" element={<Movies />}></Route>
        </Route>
        <Route path="/movie/:movieId" element={<Movie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
