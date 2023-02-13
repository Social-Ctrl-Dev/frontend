import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { Avatar } from '@mui/material';
const UserHeader = () => {
  const [infoUsuario, setInfoUsuario] = useState({});

  useEffect(() => {
    const storedInfo = JSON.parse(localStorage.getItem('infoUsuario'));
    if (storedInfo) {
      setInfoUsuario(storedInfo);
    }
  }, []);

  return infoUsuario.name ? (<div>

    <Avatar src={infoUsuario.avatar}  />
    <Link to={`/${infoUsuario.name}`}>Go to {infoUsuario.name}'s Profile</Link>
    </div>
  ) : (
    <h1>Not logged in</h1>
  );
};

export default UserHeader;