import React from 'react';
import './Filtre.css';

const Filtre = ({ onFilterChange, filterTitle, filterRate }) => {
  const handleTitleChange = (e) => {
    onFilterChange({ title: e.target.value, rate: filterRate });
  };

  const handleRateChange = (e) => {
    const rate = e.target.value === '' ? '' : parseInt(e.target.value);
    onFilterChange({ title: filterTitle, rate: rate });
  };

  const handleReset = () => {
    onFilterChange({ title: '', rate: '' });
  };

  return (
    <div className="filtre-container">
      <h2>Filtrer les films</h2>
      <div className="filtre-inputs">
        <div className="filtre-group">
          <label htmlFor="filter-title">Titre:</label>
          <input
            type="text"
            id="filter-title"
            placeholder="Rechercher par titre..."
            value={filterTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="filtre-group">
          <label htmlFor="filter-rate">Note minimale:</label>
          <input
            type="number"
            id="filter-rate"
            min="1"
            max="5"
            placeholder="Note (1-5)"
            value={filterRate}
            onChange={handleRateChange}
          />
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

export default Filtre;

