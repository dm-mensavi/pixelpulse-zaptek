import React from "react";
import { Link } from "react-router-dom";
import first from "../assets/1.jpg";
import second from "../assets/2.jpg";
import third from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import mic from "../assets/mic.jpg";
import sara from "../assets/sara.jpg";
import david from "../assets/david.jpg";
import emily from "../assets/emily.jpg";
import nat from "../assets/nat.webp";
import { AiOutlineStar } from "react-icons/ai";

const projectData = [
	{
		title: "Green Eco",
		category: "Marketing Consultation",
		date: "September 2023",
		heading: "Strategic consultation boosts market impact",
		description:
			"Explore how GreenEco Landscapes partnered with PixelPulse to elevate their marketing strategies, achieving significant market impact.",
		testimonial:
			"PixelPulse's consultation was a game-changer. Their strategies elevated our brand and market presence. Exceptional work!",
		author: "Michael Turner",
		image: first,
		profileImage: mic,
	},
	{
		title: "Eco Tech",
		category: "Web Development",
		date: "May 2023",
		heading: "Revamped website drives conversion surge",
		description:
			"Discover how Eco Tech partnered with PixelPulse to overhaul their website, resulting in a significant boost in conversions.",
		testimonial:
			"PixelPulse's web development expertise revitalized our online platform, increasing conversions and user satisfaction. An outstanding team!",
		author: "Sarah Williams",
		image: second,
		profileImage: sara,
	},
	{
		title: "Global Solutions",
		category: "Social Media",
		date: "October 2022",
		heading: "Social media mastery drives engagement",
		description:
			"Learn how GlobalSolutions Ltd. partnered with PixelPulse to harness the power of social media, resulting in unprecedented engagement.",
		testimonial:
			"PixelPulse's social media expertise transformed our brand's online presence, fostering genuine engagement and growth.",
		author: "David Rodriguez",
		image: third,
		profileImage: david,
	},
	{
		title: "Tech Innovators",
		category: "SEO Optimization",
		date: "April 2022",
		heading: "SEO revamp drives skyrocketing traffic",
		description:
			"Discover how TechInnovators Inc. partnered with PixelPulse to revitalize their online presence and achieve remarkable growth through SEO optimization.",
		testimonial:
			"PixelPulse's SEO strategies completely transformed our online visibility. We're now a front-runner in our industry. Truly outstanding work!",
		author: "Emily Johnson",
		image: fourth,
		profileImage: emily,
	},
];

const Projects = () => {
	return (
		<div className="py-10">
			<div className="lg:pt-20">
				<div className="lg:h-[300px] lg:w-[672px] flex-col gap-y-6">
					<h1 className="text-base font-semibold text-[#1d4ed8]">Projects</h1>
					<h1 className="font-bold text-4xl md:text-6xl">
						Showcasing our digital excellence
					</h1>
					<p className="text-lg text-gray-500">
						Dive into our curated selection of digital campaigns, where
						creativity meets strategy. Each project reflects our commitment to
						innovation, results, and client satisfaction. Experience the
						PixelPulse difference.
					</p>
					<h4 className="font-bold text-3xl mt-10">Case studies</h4>
					<hr />
				</div>
				<div className="flex lg:flex-col mt-32 pt-20 w-full justify-between gap-y-20 flex-col">
					{projectData.map((project, index) => (
						<div
							className="flex justify-between flex-col md:flex-row"
							key={index}>
							<div className="lg:w-1/2">
								<div className="text-md mb-6 space-y-2">
									<h5 className="font-bold">{project.title}</h5>
									<p className="text-gray-500 ">{project.category}</p>
									<p className="text-gray-500 ">{project.date}</p>
								</div>
								<div className="font-black text-4xl mb-4 max-w-lg">
									{project.heading}
								</div>
								<p className="text-lg text-gray-500 pb-10 max-w-lg">
									{project.description}
								</p>
								<Link to={`/project${index + 1}`}>
									<button className="lg:h-[34px] lg:w-[140px] bg-gray-200 border-black rounded-lg font-semibold">
										Read case study
									</button>
								</Link>
								<p className="text-lg text-gray-500 lg:mt-10 lg:pl-6 lg:border-l-2">
									{project.testimonial}
								</p>
								<div className="flex lg:gap-4 lg:pt-10">
									<img
										src={project.profileImage}
										alt=""
										className="h-10 w-10 rounded-full"
									/>
									<p className="text-md text-gray-500 pt-2">
										<span className="font-semibold text-gray-700">
											{project.author}
										</span>{" "}
										– Marketing Director
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:pl-10 mt-6 md:mt-0">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full rounded-3xl shadow-lg"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<div className="bg-[#374151] my-32 lg:-mx-[80px] md:-mx-[40px] -mx-[16px] lg:p-10 mx-0 text-white">
					<div className=" flex md:w-[70%] mx-auto flex-col p-20">
						<div className="flex gap-2 mb-10">
							<AiOutlineStar size={25} color="lightBlue" />
							<AiOutlineStar size={25} color="lightBlue" />
							<AiOutlineStar size={25} color="lightBlue" />
							<AiOutlineStar size={25} color="lightBlue" />
							<AiOutlineStar size={25} color="lightBlue" />
						</div>
						<p className="text-2xl font-semibold text-left">
							"Partnering with PixelPulse was transformative. Their expertise
							and dedication catapulted our online presence, making us industry
							front-runners in just months."
						</p>
					<div className="flex gap-4 mt-10">
						<img src={nat} alt="nat" className="h-10 w-10 rounded-full" />
						<div>
							<p>Nathaniel Green</p>
							<p className="text-gray-400">Next Innovations</p>
						</div>
					</div>
					</div>
				</div>
			</div>
			{/* Our Offices */}
			<div className="py-20 space-y-5">
				<h1 className="font-bold text-2xl lg:text-5xl lg:pt-10 mb-4">
					Our offices
				</h1>
				<div className="flex space-y-0mx-auto sm:mx-0 flex-wrap justify-between md:flex-row">
					<div className="mt-4 md:w-1/8 lg:w-1/6">
						<h2 className="font-semibold text-xl lg:text-2xl border-l-2 lg:border-blue-600 pl-4 lg:pl-6 mb-4">
							Countryland
						</h2>
						<p className="pl-4 lg:pl-6 text-gray-700">123 Elm Street</p>
						<p className="pl-4 lg:pl-6 text-gray-700">Mapletown, MT 56789</p>
					</div>
					<div className="mt-4 md:w-1/8 lg:w-1/6">
						<h2 className="font-semibold text-xl lg:text-2xl border-l-2 lg:border-blue-600 pl-4 lg:pl-6 mb-4">
							Forestland
						</h2>
						<p className="pl-4 lg:pl-6 text-gray-700">456 Oak Lane</p>
						<p className="pl-4 lg:pl-6 text-gray-700">Pineville, PV 12345</p>
					</div>
					<div className="mt-4 md:w-1/8 lg:w-1/6">
						<h2 className="font-semibold text-xl lg:text-2xl border-l-2 lg:border-blue-600 pl-4 lg:pl-6 mb-4">
							Lakeland
						</h2>
						<p className="pl-4 lg:pl-6 text-gray-700">789 Birch Drive</p>
						<p className="pl-4 lg:pl-6 text-gray-700">Riverview, RV 67890</p>
					</div>
					<div className="mt-4 md:w-1/8 lg:w-1/6">
						<h2 className="font-semibold text-xl lg:text-2xl border-l-2 lg:border-blue-600 pl-4 lg:pl-6 mb-4">
							Hillland
						</h2>
						<p className="pl-4 lg:pl-6 text-gray-700">101 Maple Ave</p>
						<p className="pl-4 lg:pl-6 text-gray-700">Stonecity, SC 23456</p>
					</div>
				</div>
				<div className="pt-6 lg:pt-10">
					<button className="bg-blue-600 text-white h-10 px-5 rounded-lg lg:w-32">
						Contact us
					</button>
				</div>
			</div>

			{/* New Letter */}
			<div className="px-4 lg:px-32 py-10 lg:py-20">
				<div className="bg-[#374151] w-full  rounded-3xl">
					<div className="max-w-xl mx-auto py-6 lg:py-10 p-7 text-center">
						<h1 className="text-white text-2xl pt-10 lg:text-4xl font-bold mb-7">
							Subscribe to our newsletter
						</h1>
						<p className="text-gray-300 text-lg mb-8">
							Stay updated with industry trends. Subscribe now for insights,
							tips, and exclusive offers. Join our community!
						</p>
						<div className="flex pb-10 flex-col lg:flex-row items-center justify-center gap-4">
							<input
								type="text"
								className="bg-transparent border-2 border-blue-300 w-full lg:w-80 h-10 rounded-lg px-4"
								placeholder="Enter your email"
							/>
							<button className="h-10 lg:h-auto w-full lg:w-40 py-2 px-1 bg-white rounded-lg text-blue-600 hover:bg-blue-200">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
