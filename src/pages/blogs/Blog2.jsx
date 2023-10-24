import React from 'react'
import DetailedBlog from '../../components/DetailedBlog'
import blog2 from '../../assets/blog2.jpg'

function Blog2() {
  return (
    <div>
       <DetailedBlog
      image={blog2} 
      title='The power of visual storytelling online'
      name='Jake Thompson – Content Strategist'
      />
    </div>
  )
}

export default Blog2