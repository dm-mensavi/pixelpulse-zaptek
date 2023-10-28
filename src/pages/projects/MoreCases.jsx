import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../public/project1.jpg';
import project2 from '../../public/project2.jpg';
import project3 from '../../public/project3.jpg';
import project4 from '../../public/project4.jpg';
/**
 * 
 * @returns  <div className="flex">
        <div>
         <p>Web Development</p>
         <img src="" alt="eco" />
         <p>Eco Tech</p>
         <Link>
         Revamped website drives conversion surge
         </Link>
        </div>
        <div>
         <p>Social Media</p>
         <img src="" alt="eco" />
         <p>Global solutions</p>
         <Link>
         Social media mastery drives engagement
         </Link>
        </div>
        <div>
         <p>SEO Optimization</p>
         <img src="" alt="eco" />
         <p>Tech innovators</p>
         <Link>
         SEO revamp drives skyrocketing traffic
         </Link>
        </div>
      </div>
 */
const MoreCases = () => {
    const heades= 'More case studies';
    const texts= 'Explore our portfolio to witness how PixelPulse consistently drives exceptional results for clients across diverse industries.';
const links=[
  {
    id:1,
    title: 'Web Development',
    preview: 'Eco Tech',
    linkUrl: 'Revamped website drives conversion surge',
    pic: project2
  },
  {
    id:2,
    title: 'Social Media',
    preview: 'Global Solutions',
    linkUrl: 'Social media mastery drives engagement',
    pic: project3
  },
  {
    id:3,
    title: 'SEO Optimization',
    preview: 'Tech innovators',
    linkUrl: 'SEO revamp drives skyrocketing traffic',
    pic: project4
  }
]
  return (
    <div>
       <div className="bg-[#374151] h-screen lg:p-0 lg:m-0 w-screen flex flex-col items-center justify-center">
      <div className='text-center w-[500px] pt-14 flex flex-col'>
        <h1 className='text-white font-bold text-4xl'>{heades} </h1>
        <p className='text-gray-300 text-lg'>{texts} </p>
      </div>
      <div className='flex gap-6 pl-6 pt-10'>
        {links.map(data=>(
            <div key={data.id} className="h-[300px] w-60 rounded-3xl bg-cover bg-center" 
            style={{ backgroundImage: `url(${data.pic})`}}>
              <div className='pt-48 pl-4 pb-80'>
              <div className='flex gap-6'>
              <h1 className='text-gray-300'>{data.title} </h1>
               <Link>
               {data.preview}
               </Link>
              </div>
               <Link className='text-white'>
               {data.linkUrl}
               </Link>
              </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default MoreCases
