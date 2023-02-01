import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './RenderPhoto.css';

function RenderPhoto() {

  const [selectedPhoto, setSelectedPhoto] = useState({});

  const {state} = useLocation()
  console.log(state)

  //Fetch photo data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${state.id}`);
      const json = await data.json();
  
      // set state with the result
      setSelectedPhoto(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);;
  }, [state.id]);

  return (
    <div className='pic-card' >
      <img src={selectedPhoto.url} alt='selected imag' />
      <p className='text' >{selectedPhoto.title}</p>
    </div>
  )
}

export default RenderPhoto
