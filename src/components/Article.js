import React from "react";
import { Link } from "react-router-dom";
import blogpic from "../assets/blog1pic.jpg";
import blogpic2 from "../assets/blog2pic.jpg";
import blogpic3 from "../assets/blog3pic.jpg";

const Article = () => {
	return (
		<div className="bg-[#374151] text-white py-20 max-w-[1900] -mx-4 md:-mx-10 lg:-mx-20 px-20 items-center space-y-10">
			<div>
				<h1 className="text-5xl font-bold py-3">More articles</h1>
				<p className="text-xl text-gray-400 pb-16">
					Explore more of our success stories and industry insights below.
				</p>
				<hr />
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-16 gap-x-5">
				<div className="pb-16">
					<p className="text-sm">Sep 13, 2023</p>
					<Link to="/blog1" className="pb-8 pt-3 font-bold text-xl">
						Mastering the art of email marketing
					</Link>
					<p>
						Unlock the secrets to email marketing success with proven strategies
						and tips for engaging your audience effectively.
					</p>
					<div className="flex pt-10  gap-3">
						<img src={blogpic} alt="" className="rounded-full w-14 h-14" />
						<div>
							<p className="font-bold">John Doe</p>
							<p>Email Specialist</p>
						</div>
					</div>
				</div>

				<div className="pb-16">
					<p className="text-sm">Sep 13, 2023</p>
					<Link to="/blog2" className="pb-8 pt-3 font-bold text-xl">
						The art of crafting compelling content
					</Link>
					<p>
						Unlock the secrets to crafting content that captivates your audience
						and drives meaningful engagement.
					</p>
					<div className="flex pt-10 gap-3">
						<img src={blogpic2} alt="" className="rounded-full w-14 h-14" />
						<div>
							<p className="font-bold">Olivia Martinez</p>
							<p>Content Specialist</p>
						</div>
					</div>
				</div>

				<div className="pb-16">
					<p className="text-sm">Sep 13, 2023</p>
					<Link to="/blog3" className="pb-8 pt-3 font-bold text-xl">
						Effective strategies for boosting online engagement
					</Link>
					<p>
						Enhance online engagement with these strategies: audience
						understanding, quality content, consistency, user-generated content,
						and more.
					</p>
					<div className="flex pt-10  gap-3">
						<img src={blogpic3} alt="" className="rounded-full w-14 h-14" />
						<div>
							<p className="font-bold">John Smith</p>
							<p>Marketing Strategist</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
