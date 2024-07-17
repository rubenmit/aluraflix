import React from 'react';

const MovieCard = ({ movie, onEdit, onDelete }) => (
  <div className="movie-card">
    <img src={require(`../assets/peli3.jpg`).default || require('../assets/default.jpg').default} alt={movie.title} />
    <h3>{movie.title}</h3>
    <div className="actions">
      <button onClick={() => onEdit(movie)}>Editar</button>
      <button onClick={() => onDelete(movie.id)}>Eliminar</button>
    </div>
  </div>
);

export default MovieCard;
