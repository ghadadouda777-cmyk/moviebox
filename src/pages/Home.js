import React, { useState } from 'react';
import { useMovies } from '../context/MoviesContext';
import MovieList from '../components/MovieList';
import Filtre from '../components/Filtre';
import '../App.css';

const Home = () => {
  const { movies, addMovie } = useMovies();
  
  // Convertir les films pour l'affichage avec les propriétés en français
  const moviesForState = movies.map((movie) => ({
    id: movie.id,
    titre: movie.title,
    description: movie.description,
    posterURL: movie.posterUrl,
    note: movie.rate,
    trailer: movie.trailer,
  }));

  // État pour les filtres
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  // État pour le formulaire d'ajout
  const [newMovie, setNewMovie] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: '',
    trailer: '',
  });

  // Fonction pour gérer les changements de filtre
  const handleFilterChange = ({ title, rate }) => {
    setFilterTitle(title);
    setFilterRate(rate);
  };

  // Fonction pour filtrer les films
  const filteredMovies = moviesForState.filter((movie) => {
    const matchesTitle =
      filterTitle === '' ||
      movie.titre.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRate =
      filterRate === '' ||
      filterRate === null ||
      movie.note >= parseInt(filterRate);
    return matchesTitle && matchesRate;
  });

  // Fonction pour gérer l'ajout d'un nouveau film
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (
      newMovie.titre.trim() &&
      newMovie.description.trim() &&
      newMovie.posterURL.trim() &&
      newMovie.note >= 1 &&
      newMovie.note <= 5 &&
      newMovie.trailer.trim()
    ) {
      const movieToAdd = {
        title: newMovie.titre.trim(),
        description: newMovie.description.trim(),
        posterUrl: newMovie.posterURL.trim(),
        rate: parseInt(newMovie.note),
        trailer: newMovie.trailer.trim(),
      };
      addMovie(movieToAdd);
      setNewMovie({
        titre: '',
        description: '',
        posterURL: '',
        note: '',
        trailer: '',
      });
    }
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  // Convertir les films pour MovieCard (qui attend les propriétés en anglais)
  const moviesForDisplay = filteredMovies.map((movie) => ({
    id: movie.id,
    title: movie.titre,
    description: movie.description,
    posterUrl: movie.posterURL,
    rate: movie.note,
    trailer: movie.trailer,
  }));

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Movie Box</h1>
        <p>Gérez votre collection de films</p>
      </header>

      <Filtre
        onFilterChange={handleFilterChange}
        filterTitle={filterTitle}
        filterRate={filterRate}
      />

      <div className="add-movie-form">
        <h2>Ajouter un nouveau film</h2>
        <form onSubmit={handleAddMovie}>
          <div className="form-group">
            <label htmlFor="titre">Titre:</label>
            <input
              type="text"
              id="titre"
              name="titre"
              value={newMovie.titre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newMovie.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="posterURL">URL du poster:</label>
            <input
              type="url"
              id="posterURL"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trailer">URL de la bande-annonce (embed):</label>
            <input
              type="url"
              id="trailer"
              name="trailer"
              placeholder="https://www.youtube.com/embed/..."
              value={newMovie.trailer}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note (1-5):</label>
            <input
              type="number"
              id="note"
              name="note"
              min="1"
              max="5"
              value={newMovie.note}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Ajouter le film
          </button>
        </form>
      </div>

      <MovieList movies={moviesForDisplay} />
    </div>
  );
};

export default Home;

