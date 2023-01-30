import React from 'react'
import './Error.css'

function Error({error}) {
  return (
    <div>
      <li className='error'>{error}</li>
    </div>
  )
}

export default Error