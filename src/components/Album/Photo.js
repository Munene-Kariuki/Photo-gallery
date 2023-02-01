import React from 'react';
import './Photo.css';
import { useNavigate } from 'react-router-dom';

function Photo({photo}) {

  const navigate = useNavigate();

  function handlePhotoRedirect() {
    navigate(`/photo/${photo.id}`, {
      state: {
        id: photo.id
      }
    })
  }

  return (
    <div className='card' onClick={handlePhotoRedirect} >
      <img src={photo.thumbnailUrl} alt='pic' className='photo' />
      <p>{photo.title}</p>
    </div>
  )
}

export default Photo
