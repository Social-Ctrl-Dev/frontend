import React, { useState } from 'react';
import axios from 'axios';
import { Avatar } from '@mui/material';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [infoUsuario, setInfoUsuario] = useState(JSON.parse(localStorage.getItem('infoUsuario')));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      return;
    }
    try {
      const response = await axios.post('https://ctrl-dev-back-test.up.railway.app/posts/', {
        title,
        body,
        user_id: infoUsuario.id
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      {token ? (
        <div>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            placeholder="Titulo del Post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <textarea
            placeholder="Cuéntanos"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
          />
          <button type="button" onClick={handleSubmit} className="btn btn-primary">Create Post</button>
        </form>
        </div>
      ) : (
        <p>Please authenticate to create a new post.</p>
      )}
    </div>
  );
};

export default NewPost;

