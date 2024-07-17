import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//navigate('/home');

const Header = () => {
  //const history = useHistory();
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">ALURAFLIX</div>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/nuevo-video')}>Nuevo Video</button>
      </nav>
    </header>
  );
};

export default Header;
