import React, { createContext, useContext, useState } from 'react';
import { moviesData } from '../data';

const MoviesContext = createContext();

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(
    moviesData.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.description,
      posterUrl: movie.posterUrl,
      rate: movie.rate,
      trailer: movie.trailer,
    }))
  );

  const addMovie = (movie) => {
    const newMovie = {
      id: movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1,
      ...movie,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

