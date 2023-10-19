import React from 'react'
import heroImage from '../public/heroimage.webp'


function home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={heroImage} width={512} height={512} alt='heroImage' />
    </div>
  )
}

export default home