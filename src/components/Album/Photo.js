import React from 'react';
import './Photo.css';
import { useNavigate } from 'react-router-dom';
import RenderPhoto from '../Photo/RenderPhoto';

function Photo({photo, photos, setAlbumPhotos}) {

  const navigate = useNavigate();

  const data = {
    id: photo.id,
    updateTitle: function () {
      console.log('updated')
    }
  }


  function handlePhotoRedirect() {
    navigate(`/photo/${photo.id}`, {
      state: {
        id: photo.id
      }
    })
  }

  <RenderPhoto photos={photos} setAlbumPhotos={setAlbumPhotos} />

  return (
    <div className='card' onClick={handlePhotoRedirect} >
      <img src={photo.thumbnailUrl} alt='pic' className='photo' />
      <p>{photo.title}</p>
    </div>
  )
}

export default Photo
