import React from 'react'
import pictureMichael from '../images/picture-michael.png';

function Home() {
  return (
    <>
    <h1>Home</h1>
    <div className="container">
        <div className="header">
            <div className="speech-bubble">
                <h1>Hi, I'm Michael nice to meet you!</h1>
                <h2>Thank you for visiting my portfolio website</h2>
            </div>
            <img className='image-michael' src={pictureMichael} alt="Michael" />
        </div>
      
    </div>
  </>
  )
}

export default Home