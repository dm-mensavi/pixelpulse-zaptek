import React from "react";
import { Link } from "react-router-dom";
import first from '../public/project1.jpg';
import second from '../public/project2.jpg';
import third from '../public/project3.jpg';
import fourth from '../public/project4.jpg';
import mic from '../public/James.webp';
import sara from '../public/Sarah.webp';
import david from '../public/David.webp';
import emily from '../public/Emily.webp';
import nat from '../public/Nathaniel.webp';
import {AiOutlineStar} from 'react-icons/ai'
 
const Projects = () => {
    return (
        <div className="lg:pb-10">
        <div className="lg:pr-32 lg:pl-32 lg:pt-40">
            <div className="lg:h-[300px] lg:w-[672px] flex lg:flex-col gap-6">
                <h1 className="text-base font-semibold text-[#1d4ed8]">Projects</h1>
                <h1 className="font-bold text-6xl">Showcasing our digital excellence</h1>
                <p className="text-lg text-gray-500">Dive into our curated selection of digital campaigns, where creativity meets strategy. Each project reflects our commitment to innovation, results, and client satisfaction. Experience the PixelPulse difference.</p>
            </div>
            <div className="flex lg:flex-col gap-20">
            <h4 className="font-bold text-4xl">Case studies</h4>
            <hr />
            <div className="flex gap-20">
            <div className="lg:w-[512px] lg:-[521px]">
                <h5 className="font-bold text-base">Green Eco</h5>
                <p className="text-lg text-gray-500 lg:pt-4">Marketing Consultation</p>
                <p className="text-lg text-gray-500 lg:pb-6">September 2023</p>
                <Link className="lg:pt-4 font-bold lg:text-3xl">
                Strategic consultation boosts market impact
                </Link>
                <p  className="text-lg text-gray-500 lg:pb-10">Explore how GreenEco Landscapes partnered with PixelPulse to elevate their marketing strategies, achieving significant market impact.</p>
                <Link to="/project1">
                <button className="lg:h-[34px] lg:w-[140px] bg-gray-200 border-black rounded-lg font-semibold">Read case study</button>
                </Link>  
                <p className="text-lg text-gray-500 lg:mt-10 lg:pl-6 lg:border-l-2">"PixelPulse's consultation was a game-changer. Their strategies elevated our brand and market presence. Exceptional work!"</p>
                <div className="flex lg:gap-4 lg:pt-10">
                    <img src={mic} alt="" className="h-10 w-10 rounded-full" />
                <p className="text-lg text-gray-500 lg:pt-2">Michael Turner – Marketing Director</p>    
                </div>
            </div>
            <div>
                <img src={first} alt="Green eco picture" className="lg:h-[542px] lg:w-[542px] rounded-3xl" />
            </div>
            </div>
            <div className="flex gap-20">
            <div className="lg:w-[512px] lg:-[521px]">
                <h5 className="text-base font-bold">Eco Tech</h5>
                <p>Web Development</p>
                <p className="text-lg text-gray-500 lg:pb-6">May 2023</p>
                <Link className="lg:pt-4 font-bold lg:text-3xl">
                Revamped website drives conversion surge
                </Link>
                <p className="text-lg text-gray-500 lg:pb-14">Discover how Eco Tech partnered with PixelPulse to overhaul their website, resulting in a significant boost in conversions.</p>
                <Link to="/project2">
                <button className="lg:h-[34px] lg:w-[140px] bg-gray-200 border-black rounded-lg font-semibold">Read case study</button>
                </Link>
                <p className="text-lg text-gray-500 lg:mt-10 lg:pl-6 lg:border-l-2">"PixelPulse's web development expertise revitalized our online platform, increasing conversions and user satisfaction. An outstanding team!"</p>
                <div className="flex lg:gap-4 lg:pt-10">
                    <img src={sara} alt="" className="h-10 w-10 rounded-full" />
                <p className="text-lg text-gray-500">Sarah Williams – CTO</p>    
                </div>
            </div>
            <div>
                <img src={second} alt="Green eco picture" className="lg:h-[542px] lg:w-[542px] rounded-3xl" />
            </div>
            </div>
            <div className="flex gap-20">
            <div className="lg:w-[512px] lg:-[521px]">
                <h5 className="text-base font-bold">Global Solutions</h5>
                <p className="text-lg text-gray-500">Social Media</p>
                <p className="text-lg text-gray-500 lg:pb-6">October 2022</p>
                <Link className="lg:pt-4 font-bold lg:text-3xl">
                Social media mastery drives engagement
                </Link>
                <p className="text-lg text-gray-500 lg:pb-14">Learn how GlobalSolutions Ltd. partnered with PixelPulse to harness the power of social media, resulting in unprecedented engagement.</p>
                <Link to="/project3">
                <button className="lg:h-[34px] lg:w-[140px] bg-gray-200 border-black rounded-lg font-semibold">Read case study</button></Link>                      
                <p className="text-lg text-gray-500 lg:mt-10 lg:pl-6 lg:border-l-2">"PixelPulse's social media expertise transformed our brand's online presence, fostering genuine engagement and growth."</p>
                <div className="flex lg:gap-4 lg:pt-10">
                    <img src={david} alt="" className="h-10 w-10 rounded-full" />
                <p>David Rodriguez – CEO</p>    
                </div>
            </div>
            <div>
                <img src={third} alt="Green eco picture" className="lg:h-[542px] lg:w-[542px] rounded-3xl" />
            </div>
            </div>
            <div className="flex gap-20">
            <div className="lg:w-[512px] lg:-[521px]">
                <h5 className="text-base font-bold">Tech Innovators</h5>
                <p className="text-lg text-gray-500">SEO Optimization</p>
                <p className="text-lg text-gray-500 lg:pb-6">April 2022</p>
                <Link className="font-bold lg:text-3xl">
                SEO revamp drives skyrocketing traffic
                </Link>
                <p className="text-lg text-gray-500 lg:pb-12">Discover how TechInnovators Inc. partnered with PixelPulse to revitalize their online presence and achieve remarkable growth through SEO optimization.</p>
                <Link to="/project4">
                <button className="lg:h-[34px] lg:w-[140px] bg-gray-200 border-black rounded-lg font-semibold">Read case study</button>
                </Link>
                <p className="text-lg text-gray-500 lg:mt-10 lg:pl-6 lg:border-l-2">"PixelPulse's SEO strategies completely transformed our online visibility. We're now a front-runner in our industry. Truly outstanding work!"</p>
                <div className="flex lg:gap-4 lg:pt-10">
                    <img src={emily} alt="" className="h-10 w-10 rounded-full" />
                <p>Emily Johnson – CMO</p>    
                </div>
            </div>
            <div>
                <img src={fourth} alt="Green eco picture" className="lg:h-[542px] lg:w-[542px] rounded-3xl" />
            </div>
            </div>
            </div>
        </div>
          <div className="bg-[#374151] text-white lg:h-[600px] lg:mt-40 lg:items-center">
          <div className="lg:pl-32 lg:pr-44 flex lg:flex-col lg:justify-center lg:pt-32 lg:mb-40 lg:gap-8">
          <div className="flex lg:flex-row gap-2 lg:pb-4">
            <AiOutlineStar size={'40px'} color="lightBlue"/>
            <AiOutlineStar size={'40px'} color="lightBlue"/>
            <AiOutlineStar size={'40px'} color="lightBlue"/>
            <AiOutlineStar size={'40px'} color="lightBlue"/>
            <AiOutlineStar size={'40px'} color="lightBlue"/>
            </div>
            <p className="text-3xl font-bold">"Partnering with PixelPulse was transformative. Their expertise and dedication catapulted our online presence, making us industry front-runners in just months."</p>
            <div className="flex gap-4">
                <img src={nat} alt="nat" className="h-10 w-10 rounded-full" />
                <div>
                <p>Nathaniel Green</p>
                <p className="text-gray-400">Next Innovations</p>
                </div>
            </div>
          </div>
      </div>
      <div className="lg:pr-32 lg:pl-32 lg:h-96">
        <h1 className="font-bold text-5xl lg:pt-10">Our offices</h1>
        <div className="flex gap-20 lg:pt-14">
        <div>
            <h2 className="font-semibold text-2xl lg:border-l-2 lg:border-blue-600"><h2 className="lg:pl-6">Countryland</h2> </h2>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">123 Elm Street</p></p>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">Mapletown, MT 56789</p></p>
        </div>
        <div>
            <h2 className="font-semibold text-2xl lg:border-l-2 lg:border-blue-600"><h2 className="lg:pl-6">Forestland</h2> </h2>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">456 Oak Lane</p></p>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">Pineville, PV 12345</p></p>
        </div>
        <div>
            <h2 className="font-semibold text-2xl lg:border-l-2 lg:border-blue-600"><h2 className="lg:pl-6">Lakeland</h2> </h2>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">789 Birch Drive</p></p>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">Riverview, RV 67890</p></p>
        </div>
        <div>
            <h2 className="font-semibold text-2xl lg:border-l-2 lg:border-blue-600"><h2 className="lg:pl-6">Hillland</h2> </h2>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">101 Maple Ave</p></p>
            <p className="lg:border-l-2"><p className="lg:pl-6 lg:pt-4">Stonecity, SC 23456</p></p>
        </div>
        </div>
        <div className="pt-14">
            <button className="bg-blue-600 text-white lg:h-10 lg:rounded-lg lg:w-32">Contact us</button>
        </div>
      </div>
      <div className="lg:pr-32 lg:pl-32 lg:mt-20">
        <div className="bg-[#374151] lg:h-96 flex lg:flex-col lg:justify-center lg:items-center rounded-3xl">
        <div className="lg:justify-center lg:items-center flex lg:flex-col lg:w-[500px] lg:gap-10">
        <h1 className="text-white font-bold lg:text-4xl">Subscribe to our newsletter</h1>
        <p className="text-gray-400">Stay updated with industry trends. Subscribe now for insights, tips, and exclusive offers. Join our community!</p>
        <div className="flex gap-4">
        <input type="text" className="bg-transparent border-2 border-blue-300 lg:w-80 lg:h-10 rounded-lg" placeholder="Enter your email" />
        <button className="lg:h-10 lg:w-40 bg-white rounded-lg text-blue-600 hover:bg-blue-200">Subscribe</button>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
};
 
export default Projects;