import React from 'react';
import './Photo.css';

function Photo({photo}) {

  return (
    <div className='card'>
      <img src={photo.thumbnailUrl} alt='pic' className='photo' />
      <p>{photo.title}</p>
    </div>
  )
}

export default Photo
