// MainPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPage.css"; // CSS 파일 import

const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMoviesFromTmdb = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          params: { language: "ko-kr", region: "KR" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjBmMTMwZDA5MDM5ZjA5NWIyMzA0ZTNjN2U5ZDY3OCIsInN1YiI6IjY1NjU0YjhkZDk1NDIwMDBlMTg5NjYzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n6Ch9CEH6wK1N_4kc6WUEARL66kVdLFxQtSXPmA2VUA",
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPopularMoviesFromTmdb();
  }, []);

  return (
    <div className="main-container">
      <h1>현재 한국지역 상영작</h1>
      <div className="poster-container">
        {movies.map((movie) => (
          <div key={movie.id} className="poster-item">
            <h2 className="movie-title">{movie.title}</h2>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} 포스터`}
                className="poster-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
