import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = () => {
  
  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('infoUsuario');
    window.location.href = "/";
  };

  return (
    <Button onClick={handleClick}>
      Logout
    </Button>
  );
};

export default Logout;