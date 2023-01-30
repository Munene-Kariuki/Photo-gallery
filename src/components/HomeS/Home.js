import React, {useEffect} from 'react'
import './Home.css'

function Home() {

  return (
    <div className='home'>
      <div className='header'>
        <img src='https://parspng.com/wp-content/uploads/2022/10/camerapng.parspng.com-2.png' className='AppLogo' alt='Logo'  />
        <div id='signInDiv'></div>
      </div>
      <div className='landing-page'>
        <div className='app-desc'>
          <p>Picturesque</p>
          <h1>A Flawless <br/> Moment.</h1>
          <button className='contact'>Contact us &#8594;</button>
          <div className='best-images'>
            <h4>Our best work:</h4>
            <div className='images'>
              <img className='landing-img' src='https://i.pinimg.com/236x/46/b1/8f/46b18f504ba520f8c0b7fa129ca07f17.jpg' alt='Image1' />
              <img className='landing-img' src='https://i.pinimg.com/236x/45/db/f5/45dbf53988e3e8bc07dafa96e6c1b31e.jpg' alt='Image2'  />
              <img className='landing-img' src='https://i.pinimg.com/236x/c9/64/3d/c9643d4973553aaf044519b04684a4e1.jpg' alt='Image3'  />
            </div>
          </div>
        </div>
        <img src='https://i.pinimg.com/564x/0a/00/d7/0a00d7ef6e8f02a887aabb6e112788db.jpg' className='landingpage-img' alt='landingPage'  />
      </div>
    </div>
  )
}

export default Home
