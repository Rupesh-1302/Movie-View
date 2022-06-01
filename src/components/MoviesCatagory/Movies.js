import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

function Movies() {
  const params = useParams();
  const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.type}?api_key=411ffb46bcbfb785a4219f83d29c5b0a`
      );
      const genreReasponse = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=411ffb46bcbfb785a4219f83d29c5b0a`
      );
      setMovies(response.data.results);
      setGenre(genreReasponse.data.genres);
      return response.data.results;
    };
    fetchMovies();
  }, [params]);

  return (
    <div className="text-white flex flex-wrap justify-around">
      {movies
        ? movies.map((movie, idx) => {
            return <MovieCard movie={movie} genre={genre} key={idx} />;
          })
        : null}
    </div>
  );
}

export default Movies;
