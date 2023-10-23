import React from 'react'

function Blogstemplate({photo, pic, date, header, desc,name, position}) {
  return (
    <div className='lg:flex md:block sm:block justify-center gap-10 mb-10'>
      <div className='lg:max-w-sm md:w-full sm:w-full w-full h-full'>
        <img src={photo} alt='blog1' className='rounded-2xl '/> 
      </div>
      <div className='text-start'>
        <p className='text-gray-500 text-sm'>{date}</p>
        <h1 className='py-8 font-bold text-lg'>{header}</h1>
        <p className='pb-10'>{desc}</p>
        <div className='flex gap-3'>
          <img src={pic} alt="picture"  className='rounded-full w-14 h-14'/>
          <div>
          <p className='font-bold pb-2'>{name}</p>
          <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogstemplate