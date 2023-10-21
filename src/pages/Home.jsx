import React from "react";
import heroImage from "../public/heroimage.webp";

function Home() {
	return (
		<div className="flex flex-col lg:flex-row items-center md:items-start justify-center md:justify-between py-10 px-0 -mx-32 lg:mx-0 lg:py-20">
			{/* Column 1 */}
			<div className="text-center w-1/2 py-10 space-y-7 self-center lg:text-left max-w-lg">
				<h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-black mb-4">
					Elevate your digital marketing frontier
				</h1>
				<p className="text-gray-600 text-md md:text-lg  mb-6">
					PixelPulse crafts solutions, transforming your brand's digital journey
					with innovative, targeted strategies.
				</p>
				<div className="flex justify-center space-x-8 lg:justify-start">
					<button className="bg-blue-600 hover:bg-blue-800 text-white rounded-md text-sm sm:text-normal py-2 px-4  md:py-2 md:px-6 ">
						Learn more
					</button>
					<button className="border border-gray-500 hover:bg-slate-800 hover:text-white text-black rounded-md text-sm sm:text-normal py-2 px-4  md:py-2 md:px-6 flex items-center">
						<span className="mr-2">▶</span> Watch video
					</button>
				</div>
			</div>

			{/* Column 2 */}
			<div className="w-1/2 py-10 pl-10 min-w-xl my-auto mx-auto">
				<img
					src={heroImage}
					width={720}
					height={720}
					alt="heroImage"
					className="rounded-lg"
				/>
			</div>
		</div>
	);
}

export default Home;
