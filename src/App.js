import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
