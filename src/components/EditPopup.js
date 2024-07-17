import React, { useState } from 'react';

const EditPopup = ({ movie, onClose, onSave }) => {
  const [title, setTitle] = useState(movie.title);
  const [category, setCategory] = useState(movie.category);
  const [image, setImage] = useState(movie.image);
  const [video, setVideo] = useState(movie.video);
  const [description, setDescription] = useState(movie.description);

  const handleSave = () => {
    onSave({ ...movie, title, category, image, video, description });
    onClose();
  };

  return (
    <div className="edit-popup">
      <div className="popup-content">
        <button className="close" onClick={onClose}>X</button>
        <h2>Editar Card</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Romance">Romance</option>
          </select>
          <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Imagen (URL)" />
          <input type="text" value={video} onChange={e => setVideo(e.target.value)} placeholder="Video (URL)" />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción"></textarea>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => { setTitle(movie.title); setCategory(movie.category); setImage(movie.image); setVideo(movie.video); setDescription(movie.description); }}>Limpiar</button>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
