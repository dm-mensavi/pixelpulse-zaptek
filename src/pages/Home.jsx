import React from 'react'
import heroImage from '../public/heroimage.webp'
import logo from '../public/PixelPulse.svg'


function home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={logo} width={50} height={50} alt='heroImage' />
      <img src={heroImage} width={512} height={512} alt='heroImage' />
    </div>
  )
}

export default home