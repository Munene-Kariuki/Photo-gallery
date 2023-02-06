import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RenderPhoto.css';
import UpdateForm from './UpdateForm';

function RenderPhoto({setPhotoWithUpdatedTitle}) {

  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [update, setUpdate] = useState(false);

  const {state} = useLocation();

  const navigate = useNavigate();


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
  }, []);


  function handleUpdate() {
    setUpdate(!update)
  };

  function handleFormUpdate(title) {
    setUpdate(!update)
    const updatedPhoto = {
      albumId: selectedPhoto.albumId,
      id: selectedPhoto.id,
      title: title,
      url: selectedPhoto.url,
      thumbnailUrl: selectedPhoto.thumbnailUrl
    }

    fetch(`https://jsonplaceholder.typicode.com/photos/${selectedPhoto.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: updatedPhoto,
      })})
      .then((res) => res.json())
      .then((data) => {console.log(data)})
      setSelectedPhoto(updatedPhoto);
      setPhotoWithUpdatedTitle(updatedPhoto);
  }

  return (
    <div className='pic-card' >
      <img src={selectedPhoto.url} alt='selected imag' className='updateImg' />
      <p className='text' >{selectedPhoto.title}</p>
      <i class="fa-solid fa-pen-to-square fa-2x edit" onClick={handleUpdate}  ></i>
      {update ? <UpdateForm photoTitle={selectedPhoto.title} handleFormUpdate={handleFormUpdate} /> : null }
    </div>
  )
}

export default RenderPhoto;
