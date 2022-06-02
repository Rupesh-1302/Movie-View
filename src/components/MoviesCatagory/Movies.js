import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import AnimatePage from "../AnimatePage/AnimatePage";
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

function Movies() {
  const params = useParams();
  const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${params.type}?api_key=${api_key}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
        ),
      ]);
      setMovies(response[0].data.results);
      setGenre(response[1].data.genres);
      return response[0].data.results;
    };
    fetchMovies();
  }, [params]);

  return (
    <AnimatePage>
      {movies ? (
        <div className="text-white flex flex-wrap justify-around">
          {movies.map((movie, idx) => {
            return <MovieCard movie={movie} genre={genre} key={idx} />;
          })}
        </div>
      ) : null}
    </AnimatePage>
  );
}

export default Movies;
