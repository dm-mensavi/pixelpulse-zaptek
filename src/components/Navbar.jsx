import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Import the icons
import logo from "../public/PixelPulse.svg";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="flex font-semibold justify-between items-center relative">
			<div className="flex justify-between">
				<div className="mr-16">
					<Link to="/">
						<img src={logo} width={70} height={70} alt="heroImage" />
					</Link>
				</div>

				<div className="md:hidden absolute right-16">
					<Link to="/contact">
						<button className="bg-blue-500 hover:bg-blue-700  transition duration-300 ease-in-out  text-white px-4 py-2 rounded-md">
							Contact us
						</button>
					</Link>
				</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/projects" className="hover:text-blue-500 hover:bg-blue-100 rounded-md px-3 py-2 transition duration-300 ease-in-out">
          Projects
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:bg-blue-100 rounded-md px-3 py-2 transition duration-300 ease-in-out">
          About us
        </Link>
        <Link to="/process" className="hover:text-blue-500 hover:bg-blue-100 rounded-md px-3 py-2 transition duration-300 ease-in-out">
          Our process
        </Link>
        <Link to="/blog" className="hover:text-blue-500 hover:bg-blue-100 rounded-md px-3 py-2 transition duration-300 ease-in-out">
          Blog
        </Link>
      </div>
			</div>
			<div className="hidden md:flex space-x-4">
				<Link to="/contact">
					<button className="bg-blue-500 hover:bg-blue-700  transition duration-300 ease-in-out  text-white px-4 py-2 rounded-md">
						Contact us
					</button>
				</Link>
			</div>

			{/* Mobile Dropdown Menu */}
			<div
				className={`md:hidden font-semibold flex flex-col space-y-5 absolute top-10 p-10 py-5 
        bg-white w-[80%] m-5 border border-gray-200 rounded-lg shadow-lg 
        transform ${
					isMenuOpen
						? "translate-y-0 transition-transform duration-500 ease-in"
						: "translate-y-[-150%] transition-transform duration-500 ease-out"
				}`}>
				<Link to="/projects">Projects</Link>
				<Link to="/about">About us</Link>
				<Link to="/process">Our process</Link>
				<Link to="/blog">Blog</Link>
			</div>

			{/* Hamburger Icon */}
			<div className="block md:hidden">
				<button onClick={toggleMenu}>
					{isMenuOpen ? (
						<HiX className="text-black text-2xl" />
					) : (
						<HiOutlineMenu className="text-black text-2xl" />
					)}
				</button>
			</div>
		</div>
	);
}

export default Navbar;
