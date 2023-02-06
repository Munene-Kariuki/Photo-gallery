import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Photo from './Photo';
import './Photo.css';

function Album({photoWithUpdatedTitle, handleSignOut}) {
  
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [albumPhotos, setAlbumPhotos] = useState([]);


  //get state to get selected album id
  const {state} = useLocation();

    //Fetch Album data 
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${state.id}`);
        const json = await data.json();
    
        // set state with the result
        setSelectedAlbum(json);
      }
    
      //catch any errors
      fetchData()
        .catch(console.error);;
    }, []);

  //Fetch album's photos 
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${state.id}`);
      const json = await data.json();
  
      // set state with the result
      setAlbumPhotos(json);
    }
  
    //catch any errors
    fetchData()
      .catch(console.error);
  }, []);

  const renderPhotos = albumPhotos.map((albumPhoto) => {
    return <Photo key={albumPhoto.id} photo={albumPhoto} photos={albumPhotos} setAlbumPhotos={setAlbumPhotos} />
  });

  //Render photos in rows of 8
  //Mutates displaybooks into arrays of groups of 3
  function displayPhotos() {
    let arr = [];
    let size = 8;

    for(let i = 0; i < renderPhotos.length; i += size ) {
      arr.push(renderPhotos.slice(i, i + size))
    }
    const displayphotos = arr.map((photosRow) => {
      return <div className='photos'>{photosRow}</div>
    });

    return displayphotos
  }

  // //Update list of photos after update 
  // if (Object.keys(photoWithUpdatedTitle).length != 0) {
  //   const updatedList = albumPhotos.map((albumPhoto) => {
  //     if (albumPhoto.id === photoWithUpdatedTitle.id) {
  //       albumPhoto.title = photoWithUpdatedTitle.title
  //     }
  //     return albumPhoto
  //   })
  //   setAlbumPhotos(updatedList)
  // }

  

  // console.log(photoWithUpdatedTitle)

  
  

  return (
    <div>
      <button onClick={handleSignOut} className='sign-out'>Sign out</button>
      <h2 className='header'>{selectedAlbum.title} photos</h2>
      {displayPhotos()}
    </div>
  )
}

export default Album
