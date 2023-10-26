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


 
const Projects = () => {
    return (
        <div className="Page">
           
            <div className="mt-20 md:mt-32 max-w-[70%] mb-32">
            <h1 className="text-blue-900 font-bold">Blog</h1>
                <h1 className="lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-extrabold py-5 max-w-2xl lg:w-[90%] md:w-full sm:w-full">Stay informed and  inspired</h1>

                <p>Explore our blog for the latest insights, trends, and strategies in the dynamic world of digital marketing and web development.</p>
            </div>
            <div className="flex mt-5 flex-col text-center space-y-5">
            
                
                <Link to="/blog1">
                <Blogstemplate
                photo={blog1}
                date='sep 13,2023'
                header='Mastering the art of emailing marketing'
                desc='Unlock the secretes to email marketing success with proven strategies and tips for engaging your audience effectively'
                pic={blog1pic}
                name='John Doe'
                position='Email Specialist'
                />
                 </Link>


                <Link to="/blog2">
                <Blogstemplate
                photo={blog2}
                date='sep 13,2023'
                header='Mastering the art of emailing marketing'
                desc='Unlock the secretes to email marketing success with proven strategies and tips for engaging your audience effectively'
                pic={blog2pic}
                name='John Doe'
                position='Email Specialist'
                />
                </Link>

                <Link to="/blog3">
                <Blogstemplate
                photo={blog}
                date='sep 13,2023'
                header='Mastering the art of emailing marketing'
                desc='Unlock the secretes to email marketing success with proven strategies and tips for engaging your audience effectively'
                pic={blogpic}
                name='John Doe'
                position='Email Specialist'
                />
                </Link>

                <Link to="/blog4">
                <Blogstemplate
                photo={blog3}
                date='sep 13,2023'
                header='Mastering the art of emailing marketing'
                desc='Unlock the secretes to email marketing success with proven strategies and tips for engaging your audience effectively'
                pic={blog3pic}
                name='John Doe'
                position='Email Specialist'
                />
                </Link>
            </div>
        </div>
    );
};
 
export default Projects;