import React from 'react';
import { useLocation } from 'react-router-dom';

function Albums(props) {
  const {state} = useLocation();
  console.log(state);
  return (
    <div>
      Hello from album
    </div>
  )
}

export default Albums
