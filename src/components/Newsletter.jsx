import React from 'react'

function Newsletter() {
  return (
    <div>
      {/* Our Offices */}
			<div className="space-y-5">
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

			{/* News Letter */}
			<div className="px-0 lg:px-32 py-10 lg:py-20">
				<div className="bg-[#374151] w-full  rounded-3xl">
					<div className="max-w-xl mx-auto py-6 lg:py-10 p-7 text-center">
						<h1 className="text-white text-2xl pt-8 lg:text-4xl font-bold mb-7">
							Subscribe to our newsletter
						</h1>
						<p className="text-gray-300 text-normal mb-8">
							Stay updated with industry trends. Subscribe now for insights,
							tips, and exclusive offers. Join our community!
						</p>
						<div className="flex pb-10 flex-col lg:flex-row items-center justify-center gap-4">
							<input
								type="text"
								className="bg-transparent border-2 border-blue-300 w-full lg:w-80 h-10 rounded-lg px-4"
								placeholder="Enter your email"
							/>
							<button className="h-10 lg:h-auto w-full lg:w-40 py-2 px-1 bg-white rounded-lg font-semibold text-blue-600 hover:bg-blue-200">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Newsletter