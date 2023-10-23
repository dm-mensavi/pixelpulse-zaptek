import React from 'react'
import blog1 from '../../assets/blog1.jpg'
import Article from '../../components/Article'
import DetailedBlog from '../../components/DetailedBlog'

function Blog1() {
  return (

    <div>
       <DetailedBlog
      image={blog1} 
      title='Mastering the art of email marketing'
      name='John Doe – Email Specialist'
      />
    </div>
  )
}

export default Blog1
{/* <DetailedBlog
image={blog1} 
title='Mastering the art of email marketing'
name='John Doe – Email Specialist'
/> */}