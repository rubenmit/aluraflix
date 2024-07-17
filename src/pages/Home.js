import React, { useState } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import EditPopup from '../components/EditPopup';

const Home = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Película de Acción 1', category: 'Acción', image: '', video: '', description: '' },
    { id: 2, title: 'Película de Acción 2', category: 'Acción', image: '', video: '', description: '' },
    { id: 3, title: 'Película de Acción 3', category: 'Acción', image: '', video: '', description: '' },
    { id: 4, title: 'Película de Comedia 1', category: 'Comedia', image: '', video: '', description: '' },
    { id: 5, title: 'Película de Comedia 2', category: 'Comedia', image: '', video: '', description: '' },
    { id: 6, title: 'Película de Comedia 3', category: 'Comedia', image: '', video: '', description: '' },
    { id: 7, title: 'Película de Suspenso 1', category: 'Suspenso', image: '', video: '', description: '' },
    { id: 8, title: 'Película de Suspenso 2', category: 'Suspenso', image: '', video: '', description: '' },
    { id: 9, title: 'Película de Suspenso 3', category: 'Suspenso', image: '', video: '', description: '' },
  ]);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleSave = (updatedMovie) => {
    setMovies(movies.map(movie => movie.id === updatedMovie.id ? updatedMovie : movie));
  };

  const handleClose = () => {
    setEditingMovie(null);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Acción</h1>
        <div className="category">
          {movies.filter(movie => movie.category === 'Acción').map(movie => (
            <MovieCard key={movie.id} movie={movie} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
        <h1>Comedia</h1>
        <div className="category">
          {movies.filter(movie => movie.category === 'Comedia').map(movie => (
            <MovieCard key={movie.id} movie={movie} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
        <h1>Suspenso</h1>
        <div className="category">
          {movies.filter(movie => movie.category === 'Suspenso').map(movie => (
            <MovieCard key={movie.id} movie={movie} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      </main>
      {editingMovie && <EditPopup movie={editingMovie} onClose={handleClose} onSave={handleSave} />}
    </div>
  );
};

export default Home;
