import React from 'react'
import DetailedBlog from '../../components/DetailedBlog'
import blog3 from '../../assets/blog3.jpg'

function Blog4() {
  return (
    <div>
         <DetailedBlog
      image={blog3} 
      title='The art of crafting compelling content'
      name='Olivia Martinez – Content Strategist'
      />
    </div>
  )
}

export default Blog4