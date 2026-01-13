import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, description, posterUrl, rate } = movie;

  // Générer les étoiles pour la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-rating">
          {renderStars(rate)}
          <span className="rating-number">({rate}/5)</span>
        </div>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

