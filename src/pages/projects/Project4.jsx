import React from "react";
import fourth from "../../public/project4.jpg";
import emily from '../../public/Emily.webp';
import MoreCases from "./MoreCases";

function Project4() {
	return (
		<div className="mb-20">
			<div className="lg:pr-32 lg:pl-32 lg:pt-40">
				<div className="border-b text-center">
					<h3 className="font-semibold text-base pt-20">Case study</h3>
					<h2 className="font-bold text-4xl lg:pt-6 pt-4">
						SEO revamp drives skyrocketing traffic
					</h2>
					<p className="text-gray-400 text-2xl lg:pb-10 pb-16 lg:pt-6 pt-4">
						Discover how TechInnovators Inc. partnered with PixelPulse to
						revitalize their online presence and achieve remarkable growth
						through SEO optimization.
					</p>
				</div>
				<div className="flex lg:gap-20 lg:pl-6 text-center lg:pt-10 pt-16">
					<div className="lg:w-72 w-96">
						<h4 className="font-semibold">Client</h4>
						<p className="lg:pt-2">Tech Innovators</p>
					</div>
					<div className="lg:w-72 w-96">
						<h4 className="font-semibold">Year</h4>
						<p className="lg:pt-2">April 2022</p>
					</div>
					<div className="lg:w-72 w-96">
						<h4 className="font-semibold">Service</h4>
						<p className="lg:pt-2">SEO Optimization</p>
					</div>
				</div>
				<div className="lg:pt-20 pt-16">
					<img src={fourth} alt="strategy" className="rounded-3xl" />
				</div>
				<div className="lg:pl-32 lg:pr-32 lg:pt-6 flex lg:flex-col gap-8 pt-4 flex-col">
					<div>
						<h3 className="font-bold text-3xl text-gray-600 mt-7 mb-3">
							Introduction
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4">
							TechInnovators Inc., a dynamic tech firm, was facing a common yet
							critical challenge in today's digital landscape - low online
							visibility. Despite their remarkable innovations and cutting-edge
							solutions, their online presence didn't reflect their true
							potential. That's when TechInnovators Inc. reached out to
							PixelPulse for a transformative journey in SEO optimization.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-3xl text-gray-600 mb-3">
							Challenges
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4 mb-3">
							TechInnovators Inc. had a groundbreaking portfolio of tech
							solutions but struggled to reach their target audience
							effectively. The challenges were clear:
						</p>
						<ul className="list-disc ml-5 space-y-5 lg:pt-4">
							<li className="font-semibold text-lg lg:pt-4">
								Low Organic Traffic:{" "}
								<span className="text-gray-500 text-lg font-normal">
									Their website wasn't attracting sufficient organic traffic,
									limiting their exposure to potential clients.
								</span>
							</li>
							<li className="font-semibold text-lg lg:pt-4">
								Keyword Ranking:{" "}
								<span className="text-gray-500 text-lg font-normal">
									Important industry-specific keywords weren't ranking well on
									search engine results pages (SERPs).
								</span>
							</li>
							<li className="font-semibold text-lg lg:pt-4">
								Conversion Rate:{" "}
								<span className="text-gray-500 text-lg font-normal">
									The website's conversion rate needed improvement, as visitors
									weren't engaging as expected.
								</span>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-3xl text-gray-600 mb-5">Strategy</h3>
						<p className="text-gray-500 text-lg lg:pt-4 mb-3">
							PixelPulse, with its extensive experience in SEO optimization,
							devised a comprehensive strategy tailored to TechInnovators Inc.'s
							unique requirements:
						</p>
						<h4 className="font-bold text-2xl text-gray-600">
							Keyword research
						</h4>
						<p className="text-gray-500 text-lg lg:pt-4">
							PixelPulse began by conducting in-depth keyword research to
							identify high-value keywords relevant to TechInnovators Inc.'s
							industry. This involved:
						</p>
						<ul className="list-disc ml-5 space-y-5 mt-3">
							<li className="text-lg lg:pt-4">
								Identifying industry-specific keywords and long-tail keywords.
							</li>
							<li className="text-lg lg:pt-4">
								Analyzing competitor keywords to gain a competitive edge.
							</li>
							<li className="text-lg lg:pt-4">
								Determining keyword search volume and competition level.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-2xl text-gray-600 mb-3">
							Content optimization
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4">
							Content is king in the digital world. PixelPulse's content
							optimization strategy included:
						</p>
						<li className="text-lg lg:pt-4 mb-3">
							Updating and enhancing existing content for relevance and value.
						</li>
						<li className="text-lg lg:pt-4 mb-3">
							Creating new, engaging content to attract and retain visitors.
						</li>
						<li className="text-lg lg:pt-4 mb-3">
							Implementing SEO best practices for on-page and off-page
							optimization.
						</li>
					</div>
					<div>
						<h3 className="font-bold text-2xl text-gray-600 mb-3">
							Technical SEO audit
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4 mb-2">
							PixelPulse conducted a comprehensive technical SEO audit to
							address underlying issues affecting website performance:
						</p>
						<ul className="list-disc ml-5">
							<li className="text-lg lg:pt-4">
								Resolving technical errors and issues that hindered indexing.
							</li>
							<li className="text-lg lg:pt-4">
								Improving site speed and mobile-friendliness.
							</li>
							<li className="text-lg lg:pt-4">
								Enhancing site architecture for improved user experience.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-3xl text-gray-600 mb-3">
							Competitor analysis
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4 mb-2">
							Understanding the competition was crucial:
						</p>
						<ul className="list-disc ml-5 space-y-3">
							<li className="text-lg lg:pt-4">
								Analyzing competitors' SEO strategies.
							</li>
							<li className="text-lg lg:pt-4">
								Identifying gaps and opportunities in the market.
							</li>
							<li className="text-lg lg:pt-4">
								Tailoring TechInnovators Inc.'s SEO strategy for competitive
								advantage.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-3xl text-gray-600 mb-3">
							On-page SEO
						</h3>
						<p className="text-gray-500 text-lg lg:pt-4">
							PixelPulse implemented on-page SEO techniques to boost visibility
							and engagement:
						</p>
						<ul className="list-disc ml-5 space-y-3 mt-3">
							<li className="text-lg lg:pt-4">
								Optimizing meta tags, headers, and image alt text.
							</li>
							<li className="text-lg lg:pt-4">
								Improving internal linking for a better user experience.
							</li>
							<li className="text-lg lg:pt-4">
								Ensuring each page had a clear call-to-action (CTA).
							</li>
						</ul>
					</div>
					<div className="lg:pt-8 space-y-5">
						<div>
							<h3 className="font-bold text-3xl text-gray-600 mt-2 mb-3">
								Results
							</h3>
							<p className="text-gray-500 text-lg lg:pt-4">
								The partnership between TechInnovators Inc. and PixelPulse
								produced remarkable results:
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-gray-600 lg:pt-4">
								Traffic increase by 200%
							</h4>
							<p className="text-gray-500 text-lg lg:pt-4">
								TechInnovators Inc. experienced a substantial surge in organic
								traffic, allowing them to reach a wider audience.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-gray-600 lg:pt-4">
								40% improvement in keyword rankings
							</h4>
							<p className="text-gray-500 text-lg lg:pt-4">
								Keyword rankings for industry-specific terms saw a significant
								improvement, placing TechInnovators Inc. higher on SERPs.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-gray-600 lg:pt-4">
								Conversion rate tripled
							</h4>
							<p className="text-gray-500 text-lg lg:pt-4">
								The website's conversion rate tripled, indicating that visitors
								were not only more engaged but also more likely to become
								clients.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-2xl text-gray-600 lg:pt-4">
								Bounce rate reduced by 90%
							</h4>
							<p className="text-gray-500 text-lg lg:pt-4">
								PixelPulse's optimization efforts resulted in a remarkable 90%
								reduction in bounce rate, indicating that visitors were staying
								on the site longer and exploring more content.
							</p>
						</div>
					</div>
					<div className="lg:pt-6">
						<h3 className="font-bold text-3xl text-gray-600">Conclusion</h3>
						<p className="text-gray-500 text-lg lg:pt-4">
							TechInnovators Inc.'s journey with PixelPulse resulted in a
							complete transformation of their online presence. By aligning SEO
							strategies with the company's goals and values, PixelPulse
							achieved outstanding results in traffic, keyword rankings,
							conversion rate, and bounce rate reduction.
						</p>
						<p className="text-gray-500 text-lg lg:pt-4">
							This case study showcases how a strategic partnership with an
							experienced SEO optimization agency like PixelPulse can
							revolutionize a company's digital footprint and open doors to new
							opportunities. TechInnovators Inc. now stands as a testament to
							the power of tailored SEO solutions in a competitive digital
							landscape.
						</p>
						<p className="text-gray-500 text-lg lg:pt-4">
							At PixelPulse, we continue to drive exceptional results for
							clients across various industries. Explore more of our case
							studies to witness the transformative impact we bring to
							businesses like yours.
						</p>
					</div>
					<div className="lg:pt-16">
						<h3 className="font-bold text-3xl text-gray-600">What we did</h3>
						<div className="flex flex-col lg:grid lg:grid-cols-3 lg:pt-2 pt-4">
							<div className="lg:h-10 h-10 w-40 rounded-md lg:w-40 bg-[#F3F4F6] lg:mt-4">
								<p className="text-lg text-center lg:font-semibold pt-2">
									Keyword research
								</p>
							</div>
							<div className="lg:h-10 h-10 w-48 rounded-md lg:w-40 bg-[#F3F4F6] lg:mt-4 mt-4">
								<p className="text-lg text-center lg:font-semibold pt-2">
									Content optimization
								</p>
							</div>
							<div className="lg:h-10 h-10 w-48 rounded-md lg:w-40 bg-[#F3F4F6] lg:mt-4 mt-4">
								<p className="text-lg text-center lg:font-semibold pt-2">
									Technical SEO audit
								</p>
							</div>
							<div className="lg:h-10 h-10 w-48 rounded-md lg:w-40 bg-[#F3F4F6] lg:mt-4 mt-4">
								<p className="text-lg text-center lg:font-semibold pt-2">
									Competitor analysis
								</p>
							</div>
							<div className="lg:h-10 h-10 w-48 rounded-md lg:w-40 bg-[#F3F4F6] lg:mt-4 mt-4">
								<p className="text-lg text-center lg:font-semibold pt-2">
									On-page SEO
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="flex gap-6 lg:hidden lg:w-[700px] pt-6 flex-col">
							<div>
								<p className="font-semibold text-2xl lg:pt-4">
									"PixelPulse's consultation was a game-changer. Their
									strategies elevated our brand and market presence. Exceptional
									work!"
								</p>
							</div>
							<div className="flex flex-row">
								<img
									src={emily}
									className="lg:h-72 rounded-2xl h-16 w-16 lg:w-72"
									alt="mic"
								/>
								<div className="flex flex-col pl-4">
									<p className="lg:pt-2 font-bold text-xl pt-2">
										Michael Turner
									</p>
									<p className="text-lg text-gray-400">Marketing Director</p>
								</div>
							</div>
						</div>
					</div>
					<div className="gap-6 lg:pt-28 lg:w-[700px] pt-6 flex-col lg:flex-row hidden lg:flex">
						<img src={emily} className="lg:h-72 rounded-2xl" alt="mic" />
						<div>
							<p className="font-semibold text-3xl lg:pt-2">
								"PixelPulse's SEO strategies completely transformed our online
								visibility. We're now a front-runner in our industry. Truly
								outstanding work!"
							</p>
							<p className="lg:pt-2 font-bold text-xl">
								Emily Johnson
							</p>
							<p className="text-lg text-gray-400">CMO</p>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex gap-10 lg:pt-28 lg:gap-20 lg:pr-20 lg:pl-20 lg:pb-14 pt-4 pl-6 flex-col lg:flex-row">
				<div className="mt-14 lg:mt-0 border-l-2 pl-6">
					<h1 className="font-semibold text-4xl">200%</h1>
					<p className="text-gray-500 text-lg">Traffic increase</p>
				</div>
				<div className="mt-14 lg:mt-0 border-l-2 pl-6">
					<h1 className="font-semibold text-4xl">40%</h1>
					<p className="text-gray-500 text-lg">Keyword rankings</p>
				</div>
				<div className="mt-14 lg:mt-0 border-l-2 pl-6">
					<h1 className="font-semibold text-4xl">3x</h1>
					<p className="text-gray-500 text-lg">Conversion rate</p>
				</div>
				<div className="mt-14 lg:mt-0 border-l-2 pl-6">
					<h1 className="font-semibold text-4xl">90%</h1>
					<p className="text-gray-500 text-lg">Bounce rate reduction</p>
				</div>
			</div>
			<MoreCases currentProject={4}/>
		</div>
	);
  }
export default Project4;
