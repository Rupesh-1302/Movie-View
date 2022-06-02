import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, genre }) {
  const getGenre = () => {
    const tempgen = genre
      .map((gen) => {
        return movie.genre_ids.includes(gen.id) ? `${gen.name}` : null;
      })
      .filter((elem) => {
        return elem;
      });
    return tempgen.map((gen, idx) => {
      if (idx === tempgen.length - 1) {
        return gen;
      }
      return `${gen}, `;
    });
  };
  return (
    <div className="py-4 flex flex-col items-center text-center md:w-1/5 w-1/3 ">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          className="h-52 pb-3"
        />
      </Link>
      <h4 className="text-sm">{movie.title}</h4>
      <p className="text-xs text-gray-500">{getGenre()}</p>
    </div>
  );
}

export default MovieCard;
