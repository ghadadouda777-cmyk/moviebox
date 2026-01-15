import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovies } from '../context/MoviesContext';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies } = useMovies();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details-container">
        <div className="movie-not-found">
          <h2>Film non trouvé</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Retour à l'accueil
      </button>
      <div className="movie-details-content">
        <div className="movie-details-poster">
          <img src={movie.posterUrl} alt={movie.title} />
        </div>
        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.title}</h1>
          <div className="movie-details-rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < movie.rate ? 'star filled' : 'star'}
              >
                ★
              </span>
            ))}
            <span className="rating-number">({movie.rate}/5)</span>
          </div>
          <div className="movie-details-description">
            <h2>Description</h2>
            <p>{movie.description}</p>
          </div>
          <div className="movie-details-trailer">
            <h2>Bande-annonce</h2>
            <div className="trailer-container">
              <iframe
                src={movie.trailer}
                title={`Bande-annonce de ${movie.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

