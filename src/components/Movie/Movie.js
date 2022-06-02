import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.scss";
import AnimatePage from "../AnimatePage/AnimatePage";
// import dotenv from "dotenv";
// dotenv.config();

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      setMovie(response.data);
    };
    getMovie();
  }, [params]);

  const getDate = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateTime = new Date(date);
    return `${dateTime.getDate()}, ${
      monthNames[dateTime.getMonth()]
    } ${dateTime.getFullYear()}`;
  };

  return (
    <AnimatePage>
      {movie ? (
        <div className={`text-white main-container`}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="opacity-[60%]"
          />
          <div className="flex flex-col info-div pl-[5rem]">
            <h1 className="text-5xl pb-2">{movie.title}</h1>
            <p className="pb-5">
              {movie.release_date ? getDate(movie.release_date) : ""}{" "}
              {movie.runtime ? `| ${movie.runtime} min` : ""}
            </p>
            <p className="text-[.7rem] text-clip w-[40%]">{movie.overview}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </AnimatePage>
  );
}

export default Movie;
