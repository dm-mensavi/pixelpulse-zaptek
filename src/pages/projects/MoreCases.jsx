import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../public/project1.jpg";
import project2 from "../../public/project2.jpg";
import project3 from "../../public/project3.jpg";
import project4 from "../../public/project4.jpg";

import logo1 from "../../public/client_logo1.jpeg";
import logo2 from "../../public/client_logo2.jpeg";
import logo3 from "../../public/client_logo3.jpeg";
import logo4 from "../../public/client_logo4.jpeg";

const heading = "More case studies";
const texts =
	"Explore our portfolio to witness how PixelPulse consistently drives exceptional results for clients across diverse industries.";
const data = [
	{
		id: 1,
		title: "Marketing Consultation",
		logo: logo1,
		name: "Green Eco",
		topic: "Strategic consultation boosts market impact",
		pic: project1,
	},
	{
		id: 2,
		title: "Web Development",
		logo: logo2,
		name: "Eco Tech",
		topic: "Revamped website drives conversion surge",
		pic: project2,
	},
	{
		id: 3,
		title: "Social Media",
		logo: logo3,
		name: "Global Solutions",
		topic: "Social media mastery drives engagement",
		pic: project3,
	},
	{
		id: 4,
		title: "SEO Optimization",
		logo: logo4,
		name: "Tech innovators",
		topic: "SEO revamp drives skyrocketing traffic",
		pic: project4,
	},
];

const MoreCases = ({ currentProject }) => {
	const filteredLinks = data.filter((link) => link.id !== currentProject);

	return (
		<section className="py-12 md:lg:py-20 mt-20 mb-20 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]">
			<div className=" px-4 flex flex-col mx-auto w-full text-center items-center self-center justify-center ">
				{/* Heading */}
				<div className="md:px-10 lg:px-20">
					<h2 className="text-4xl font-bold mt-4 mb-8 text-[#f3f4f6]">
						{heading}
					</h2>

					<p className="text-[#f3f4f6] text-lg max-w-xl">{texts}</p>
				</div>
				{/* Cards */}
				<div className="flex flex-col md:flex-row justify-center mt-12 hover:cursor-pointer">
					{filteredLinks.slice(0, 3).map((link) => (
						<Link to={`/project${link.id}`}>
							<div
								key={link.id}
								className="mx-4 relative w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-cover bg-center my-5 rounded-2xl shadow-sm shadow-white"
								style={{ backgroundImage: `url(${link.pic})` }}>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-2xl"></div>
								<div className="absolute inset-0 flex flex-col items-left justify-end p-6">
									<div className="flex items-center justify-start ml-0 mb-2 w-max">
                    <p>{link.title} </p>
                    <span className="text-xl font-bold mx-2 pb-10 h-1">.</span>
										<img
											src={link.logo}
											alt={link.name}
											className="w-6 h-6 mr-3 rounded-full"
										/>
										<p className="text-sm">{link.name}</p>
									</div>
									<p className="text-white text-lg text-left font-bold">{link.topic}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default MoreCases;
