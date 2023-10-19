import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/PixelPulseLight.svg";

import {
	RiFacebookCircleFill,
	RiInstagramFill,
	RiTwitterFill,
	RiYoutubeFill,
	RiLinkedinFill,
} from "react-icons/ri";

function Footer() {
	return (
		<div className="flex flex-col font-semibold -mx-[200%] items-center space-y-10 bg-[#374151] py-20">
			{/* logo */}
			<div>
				<Link to="/">
					<img src={logo} width={70} height={70} alt="heroImage" />
				</Link>
			</div>

			{/* Navigation bottoms */}
			<div className="flex text-gray-400 justify-between items-center flex-col space-y-4 sm:flex-row sm:space-x-10 lg:space-x-20">
				<div className="hover:text-white hover:bg-white/10 rounded-md mt-4 px-3 py-2 transition duration-300 ease-in-out">
					<Link to="/projects">Projects</Link>
				</div>
				<div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
					<Link to="/about">About us</Link>
				</div>
				<div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
					<Link to="/process">Our process</Link>
				</div>
				<div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
					<Link to="/blog">Blog</Link>
				</div>
				<div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
					<Link to="/contact">Contact us</Link>
				</div>
			</div>
			{/* socials */}
      <div className="flex space-x-5 sm:space-x-10">
        <Link to="">
          <RiFacebookCircleFill size={25} className="text-white/60 hover:text-white"/>
        </Link>
        <Link to="">
          <RiInstagramFill size={25} className="text-white/60 hover:text-white"/>
        </Link>
        <Link to="">
          <RiTwitterFill size={25} className="text-white/60 hover:text-white"/>
        </Link>
        <Link to="">
          <RiYoutubeFill size={25} className="text-white/60 hover:text-white"/>
        </Link>
        <Link to="">
          <RiLinkedinFill size={25} className="text-white/60 hover:text-white"/>
        </Link>
      </div>

      {/* Horizontal line */}
      <div className="w-[18%] h-[2px] bg-gray-600">.</div>

      {/* Copy right */}
      <div className="flex flex-col text-white/50 space-y-3 font-normal w-[18%]  md:flex-row justify-between ">
        <div className="mx-auto sm:mx-0 sm:mt-5">
          ©️2023 Your Company, Inc. All rights reserved.
        </div>
        <div className="flex space-x-8">
          <div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
            <Link to="">License</Link>
          </div>
          <div className="hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
            <Link to="">Changelog</Link>
          </div>
          <div className="hover:text-white text-center hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
            <Link to="">Style guide</Link>
          </div>
          <div className="hover:text-white text-center hover:bg-white/10 rounded-md px-3 py-2 transition duration-300 ease-in-out">
            <Link to="">Powered by Webflow</Link>
          </div>
        </div>
      </div>
		</div>
	);
}

export default Footer;
