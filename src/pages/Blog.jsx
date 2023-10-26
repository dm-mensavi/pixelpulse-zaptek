import React from "react";
import { Link } from "react-router-dom";
import Blogstemplate from '../components/Blogstemplate'
import blog1 from '../assets/blog1.jpg'
import blog1pic from '../assets/blog1pic.jpg'
import blog2 from '../assets/blog2.jpg'
import blog2pic from '../assets/blog2pic.jpg'
import blog3 from '../assets/blog3.jpg'
import blog3pic from '../assets/blog3pic.jpg'
import blog from '../assets/blog.jpg'
import blogpic from '../assets/blogpic.jpg'


// blogData.js

const blogData = [
    {
      id: 1,
      photo: blog1,
      date: 'sep 13, 2023',
      header: 'Mastering the art of email marketing',
      desc: 'Unlock the secrets to email marketing success with proven strategies and tips for engaging your audience effectively',
      pic: blog1pic,
      name: 'John Doe',
      position: 'Email Specialist',
      link: '/blog1'
    },
    {
      id: 2,
      photo: blog2,
      date: 'sep 13, 2023',
      header: 'The power of visual storytelling online',
      desc: 'Explore the impact of visual storytelling in digital content and learn how to leverage its potential.',
      pic: blog2pic,
      name: 'Jake Thompson',
      position: 'Content Strategist',
      link: '/blog2'
    },
    {
      id: 3,
      photo: blog,
      date: 'sep 13, 2023',
      header: 'The art of crafting compelling content',
      desc: 'Unlock the secrets to crafting content that captivates your audience and drives meaningful engagement.',
      pic: blogpic,
      name: 'Olivia Martinez',
      position: 'Content Specialist',
      link: '/blog3'
    },
    {
      id: 4,
      photo: blog3,
      date: 'sep 13, 2023',
      header: 'Effective strategies for boosting online engagement',
      desc: 'Enhance online engagement with these strategies: audience understanding, quality content, consistency, user-generated content, and more.',
      pic: blog3pic,
      name: 'John Smith',
      position: 'Marketing Strategist',
      link: '/blog4'
    },
  ];
  

 
  const Projects = () => {
    return (
      <div className="Page">
        <div className="mt-20 md:mt-32 max-w-md sm:max-w-[70%] mb-32">
          <h1 className="text-blue-900 font-bold">Blog</h1>
          <h1 className="lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-extrabold py-5 max-w-2xl lg:w-[90%] md:w-full sm:w-full">Stay informed and inspired</h1>
          <p>Explore our blog for the latest insights, trends, and strategies in the dynamic world of digital marketing and web development.</p>
        </div>
        <div className="flex mt-5 max-w-5xl flex-col text-center space-y-5">
          {blogData.map((post) => (
            <Link to={post.link} key={post.id}>
              <Blogstemplate
                photo={post.photo}
                date={post.date}
                header={post.header}
                desc={post.desc}
                pic={post.pic}
                name={post.name}
                position={post.position}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
 