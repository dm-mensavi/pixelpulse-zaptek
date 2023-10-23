import discoveryImage from '../public/Discovery.webp'
import '../Custom Styles/ProcessStyles.css'
import executionImage from '../public/Execution.webp'
import james from '../public/James.webp'
import RenderSVG from '../components/RenderSVG'


function Process() {
  const discoveryList = [
    {
      'header': 'Deep dive.',
      'description': ' In-depth brand and market analysis ensures precise targeting.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ph"
          width="30px"
          height="30px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M208 88h-56V32" opacity="0.2"></path>
          <path fill="#1d4ed8" d="M216 88a7.7 7.7 0 0 0-2.4-5.7l-55.9-56l-.6-.5h-.2l-.5-.3h-.1l-.5-.4h-.1l-.6-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88Zm-56-36.7L188.7 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-45.5-48.8a36.4 36.4 0 0 0-5-44.7a36.2 36.2 0 0 0-51 0a36.2 36.2 0 0 0 0 51a36.2 36.2 0 0 0 44.7 5l10.9 11a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-44.6-5.1a19.9 19.9 0 0 1 0-28.2a19.8 19.8 0 0 1 28.2 0a19.9 19.9 0 0 1 0 28.2a19.8 19.8 0 0 1-28.2 0Z"
          ></path>
        </svg>
      )
      
    },

    {
      'header': 'Client collaboration.',
      'description': ' Your insights guide our approach, ensuring alignment.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ph"
          width="30px"
          height="30px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52Z" opacity="0.2"></path>
          <path
            fill="#1d4ed8"
            d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07Z"
          ></path>
        </svg>
      )
    },

    {
      'header': 'Goal setting.',
      'description': ' We outline clear objectives for measurable success.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ph"
          width="30px"
          height="30px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M216 48v160a8 8 0 0 1-8 8H64l-24-24V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z" opacity="0.2"></path>
          <path
            fill="#1d4ed8"
            d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32Z"
          ></path>
        </svg>
      )
    }
  ]

  const strategyList = [
    {
      'header': 'Content creation.',
      'description': 'Crafting compelling narratives to resonate with your audience, driving both engagement and conversion.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ph"
          width="20px"
          height="20px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34Z" opacity="0.2"></path>
          <path fill="#1d4ed8" d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63ZM79.32 188L164 103.31L180.69 120L96 204.69ZM68 176.69L51.31 160L136 75.31L152.69 92Zm-20 2.62L76.69 208H48Zm144-70.62L147.32 64l24-24L216 84.69Z"></path>
        </svg>
      )
      
    },

    {
      'header': 'Optimization plan.',
      'description': 'Regular analysis and refinement ensure your strategy remains on course and adapts to changes.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ph"
          width="20px"
          height="20px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M208 40v168h-56V40Z" opacity="0.2"></path>
          <path fill="#1d4ed8" d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16ZM160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z"></path>
        </svg>
      )
      
    },

    {
      'header': 'Platform selection',
      'description': 'Identifying the best digital platforms for your brand, maximizing reach and effectiveness.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ph"
          width="20px"
          height="20px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M224 64v64a64 64 0 0 1-64 64H32v-64a64 64 0 0 1 64-64Z" opacity="0.2"></path>
          <path fill="#1d4ed8" d="M24 128a72.08 72.08 0 0 1 72-72h108.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L204.69 72H96a56.06 56.06 0 0 0-56 56a8 8 0 0 1-16 0Zm200-8a8 8 0 0 0-8 8a56.06 56.06 0 0 1-56 56H51.31l10.35-10.34a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L51.31 200H160a72.08 72.08 0 0 0 72-72a8 8 0 0 0-8-8Z">
          </path>
        </svg>
      )
      
      
    },

    {
      'header': 'Feedback loop',
      'description': 'We prioritize ongoing communication, making necessary adjustments based on client feedback and analytics.',
      'icon': (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ph"
          width="20px"
          height="20px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path fill="#1d4ed8" d="M224 64v128a8 8 0 0 1-8 8H82.5a8 8 0 0 0-5.15 1.88l-32.2 28.23A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z" opacity="0.2"></path>
          <path fill="#1d4ed8" d="M216 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.13 16.13 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78a.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Zm-100-64a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm-44 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm88 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z">
          </path>
        </svg>
      )
    }
  ]

  const values = [
    {
      header: "Client Centricity",
      body: "Every strategy prioritizes client goals, ensuring solutions that resonate and deliver impactful results.",
    },
    {
      header: "Innovative Thinking",
      body: "Embracing change, we're constantly refining our techniques, staying ahead of digital trends.",
    },
    {
      header: "Collaborative Spirit",
      body: "Unity drives success. We foster environments that encourage shared insights and growth.",
    },
    {
      header: "Integrity",
      body: "Honesty and transparency govern our actions, building trust with clients and partners.",
    },
    {
      header: "Continuous Learning",
      body: "We're committed to growth. Investing in training ensures we remain industry leaders.",
    },
    {
      header: "Results-Driven",
      body: "Our focus remains on delivering tangible results, maximizing ROI for every client.",
    }
  ];
   

  return (
    <div className='process'>
      <section 
        className='pt-32'
      >
        <div className='section-content max-w-2xl'>
          <h1 className='text-blue-800 font-bold text-base'>
            Our Process
          </h1>

          <h2 className='text-black text-4xl md:lg:text-6xl font-bold mt-4 mb-8'>
            From idea to implementation
          </h2>

          <p className='md:lg:text-xl text-gray-500'>
            At PixelPulse, every project begins with understanding, then strategy formulation, creative execution, and continuous optimization. Experience a journey tailored for measurable success and impactful results.
          </p>
        </div>
      </section>

      <section className='md:lg:lg:py-32 py-12'>
        <div className='section-content min-w-full'>
          <div className='grid justify-between gap-12 md:grid-cols-2 md:gap-15 lg:gap-20 max-w-5xl min-w-full'>
            <div>
              <h1 className='text-black font-semibold text-xl'>
                01.
              </h1>

              <h2 className='text-black text-4xl font-bold mt-4 mb-8'>
                Discovery 
              </h2>
              
              <p className='text-lg text-gray-500'>
                We begin by understanding your brand, goals, and audience, laying the foundation for a tailored strategy.
              </p>

              <hr className='my-10'></hr>

              <div className='discovery-decsription-container flex flex-col gap-10 text-lg'>
                {RenderSVG(discoveryList, 'discovery')}
              </div>

            </div>

            <figure className='overflow-hidden rounded-2xl'>
              <img src={discoveryImage} alt='discovery - someone holding a transparent ball' className='w-full h-full object-cover block'/>
            </figure>
          </div>
        </div>
      </section>

      <section 
        className='md:lg:py-32 md:px-10 md:py-12 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header md:lg:text-center flex justify-center items-center'>
              <div className='md:lg:max-w-lg'>
                <h1 className='font-semibold text-xl'>
                  02.
                </h1>

                <h2 className='text-4xl font-bold mt-4 mb-8'>
                  Strategy 
                </h2>
                
                <p className='text-[#f3f4f6] text-lg'>
                  Post-discovery, we craft a comprehensive strategy tailored to your objectives, ensuring maximum impact and engagement.
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center mt-12'>
              <div className='discovery-decsription-container mt-12 grid grid-cols-1 md:lg:grid-cols-2 md:lg:gap-14 gap-10 text-lg'>
                {RenderSVG(strategyList, 'strategy')}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='execution-section md:lg:lg:py-32 py-12'>
        <div className='section-content flex justify-center items-center min-w-full max-w-4xl'>
          <div className='grid md:lg:grid-cols-2 grid-cols-1 gap-12'>
            <figure className='section-image overflow-hidden rounded-2xl'>
              <img src={executionImage} alt='happy people' className='w-full h-full object-cover'/>
            </figure>
            
            <div className='text-gray-500'>
              <h1 className='text-black font-semibold text-xl'>
                03.
              </h1>

              <h2 className='text-black text-4xl font-bold mt-4 mb-8'>
                Execution 
              </h2>
              
              <p className='text-lg'>
                Upon strategy approval, we deploy our resources, ensuring flawless implementation and real-time monitoring for continued success.
              </p>

              <p className='mt-5 text-lg'>
                Consistent communication and transparent reporting guarantee that our clients remain integral parts of the execution journey.
              </p>

              <div className='testimony-box mt-5'>
                <div className='testimony-text border-l border-gray-500 px-5 py-1'>
                  "The meticulous execution by PixelPulse transformed our digital outreach, exceeding expectations."
                </div>
                <div className='testifier-profile flex justify-start items-center mt-5'>
                  <figure className='w-7 h-7 overflow-hidden rounded-full'>
                    <img src={james} alt='James Whitaker'/>
                  </figure>
                  <div>
                    <p className='text-sm ml-3'>
                      <b>James Whitaker</b> &ndash; Whitaker Enterprise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className='our-values py-12 md:lg:py-32 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div className='section-content px-4'>
          <div className='md:px-10 lg:px-20'>
            <h1 className='font-semibold text-xl text-[#93C5FD]'>
              Our values 
            </h1>

            <h2 className='text-4xl font-bold mt-4 mb-8 text-[#f3f4f6]'>
              Guiding every digital step
            </h2>
            
            <p className='text-[#f3f4f6] text-lg'>
            These core beliefs underpin every decision, project, and relationship at PixelPulse, ensuring consistency and excellence.
            </p>

          <div className='values-container mt-12 flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-lg'>
              {values.map(value => (
                <div className='value' key={value.header}>
                  <h4 className='font-bold text-[#f3f4f6]'>
                    {value.header}
                  </h4>

                  <p className='mt-3 text-[#d1d5db]'>
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          </div>
        </div>
      </section>

      <section className='mb-10'></section>
      
    </div>

  )
}

export default Process