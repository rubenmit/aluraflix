import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const NewVideo = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();


  const handleSave = () => {
    // Aquí puedes manejar el guardado del nuevo video
    navigate('/');
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Nuevo Video</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Lógica para agregar nueva película
          handleSave();
        }}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Selecciona una categoría</option>
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Romance">Romance</option>
          </select>
          <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Imagen (URL)" required />
          <input type="text" value={video} onChange={e => setVideo(e.target.value)} placeholder="Video (URL)" />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción"></textarea>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => { setTitle(''); setCategory(''); setImage(''); setVideo(''); setDescription(''); }}>Limpiar</button>
        </form>
      </main>
    </div>
  );
};

export default NewVideo;
