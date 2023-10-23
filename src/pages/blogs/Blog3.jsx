import React from 'react'
import DetailedBlog from '../../components/DetailedBlog'
import blog from '../../assets/blog.jpg'

function Blog3() {
  return (
    <div>
       <DetailedBlog
      image={blog} 
      title='The art of crafting compelling content'
      name='Olivia Martinez – Content Strategist'
      />
    </div>
  )
}

export default Blog3