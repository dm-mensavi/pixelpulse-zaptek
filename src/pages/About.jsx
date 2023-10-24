import React from 'react'
import '../Custom Styles/AboutStyles.css'
import RenderSVG from '../components/RenderSVG';

function About() {
  const milestones = [
    {
      date: 'September 2020',
      event: 'Launch beginnings',
      description: 'PixelPulse was founded. Embarked on a journey to reshape digital landscapes.',
    },
    {
      date: 'July 2021',
      event: 'Expansion milestone',
      description: 'Grew our team, broadened services, and welcomed 200th client partnership.',
    },
    {
      date: 'January 2022',
      event: 'Awards galore',
      description: 'Recognized by industry leaders. Three significant marketing awards.',
    },
    {
      date: 'August 2023',
      event: 'Global ventures',
      description: 'Opened two international branches. PixelPulse now serves clients globally.',
    },
  ];

  const cultureList = [
    {
      'header': 'Team Spirit',
      'description': 'Collaborative environments promote growth. We believe in unity, fostering mutual respect and inspiration.',
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
          <g fill="#1d4ed8">
            <path d="M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32ZM80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32Z" opacity="0.2"></path>
            <path d="M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2ZM176 40a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm123 157.51a40 40 0 1 0-53.94 0a67.27 67.27 0 0 0-21 14.31a67.27 67.27 0 0 0-21-14.31a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 25.6 219.2a8 8 0 1 0 12.8 9.6a52 52 0 0 1 83.2 0a8 8 0 0 0 11.2 1.59a7.73 7.73 0 0 0 1.59-1.59a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 197.51ZM80 144a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm96 0a24 24 0 1 1-24 24a24 24 0 0 1 24-24Z"></path>
          </g>
        </svg>
      )      
    },

    {
      'header': 'Beyond business',
      'description': "We're more than marketers. We're community builders, continually supporting local initiatives.",
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
          <g fill="#1d4ed8">
            <path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 0 1 184.92 50.69a16 16 0 0 0 20.39 20.39A95.61 95.61 0 0 1 224 128Z" opacity="0.2"></path>
            <path d="m228.25 63.07l-4.66-2.69a23.6 23.6 0 0 0 0-8.76l4.66-2.69a8 8 0 0 0-8-13.86l-4.67 2.7a23.92 23.92 0 0 0-7.58-4.39V28a8 8 0 0 0-16 0v5.38a23.92 23.92 0 0 0-7.58 4.39l-4.67-2.7a8 8 0 1 0-8 13.86l4.66 2.69a23.6 23.6 0 0 0 0 8.76l-4.66 2.69a8 8 0 0 0 4 14.93a7.92 7.92 0 0 0 4-1.07l4.67-2.7a23.92 23.92 0 0 0 7.58 4.39V84a8 8 0 0 0 16 0v-5.38a23.92 23.92 0 0 0 7.58-4.39l4.67 2.7a7.92 7.92 0 0 0 4 1.07a8 8 0 0 0 4-14.93ZM192 56a8 8 0 1 1 8 8a8 8 0 0 1-8-8ZM29.35 48.11a8 8 0 0 0-6.57 9.21A88.85 88.85 0 0 1 216 128a87.62 87.62 0 0 1-22.24 58.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75A88 88 0 0 1 128 40a88.76 88.76 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.92 103.92 0 1 0 85.24 85.24a8 8 0 0 0-9.21-6.57ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32ZM21.92 77.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0Z"></path>
          </g>
        </svg>
      )      
    },

    {
      'header': 'Lifelong learning',
      'description': 'Constant evolution is key. We invest in continuous training, ensuring top-tier expertise.',
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
          <g fill="#1d4ed8">
            <path d="M208 104a79.86 79.86 0 0 1-30.59 62.92A24.29 24.29 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.11 24.11 0 0 0-9.3-19A79.87 79.87 0 0 1 48 104.45C47.76 61.09 82.72 25 126.07 24A80 80 0 0 1 208 104Z" opacity="0.2"></path>
            <path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104Zm-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.65 71.65 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h64v-6a32.15 32.15 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104Zm-16.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23Z"></path>
          </g>
        </svg>
      )      
    },
  ]

  return (
    <div className='about-page'>

      <section className='hero-section py-32'>
        <div className='section-content grid gap-12'>
          <div className='hero-text'>
            <h1 className='text-blue-800 font-semibold text-lg lg:text-xl'>
                About us
            </h1>

            <h2 className='text-black text-4xl md:lg:text-6xl md:mb-12 lg:max-w-4xl font-bold mt-4 mb-6'>
              Innovative digital marketing, passionately delivered
            </h2>


            <div className='grid gap-12 lg:gap-14 lg:grid-cols-3 lg:justify-between'>
              <div className='lg:col-span-2'>
                <p className='md:lg:text-xl text-lg text-gray-500'>
                  Founded on innovation, PixelPulse believes in transformative digital solutions. Every campaign, strategy, and design stems from understanding client visions. Our journey began with a passion for digital marketing, making brands resonate with their audience.
                </p>

                <p className='md:lg:text-xl text-lg text-gray-500 mt-6 md:lg:mt-10'>
                  For years, PixelPulse has embraced the evolving digital landscape. Our dedicated team, armed with expertise and creativity, collaborates closely with clients. Ensuring goals are met, we foster growth, elevate brand value, and carve out market space distinctively.
                </p>

                <p className='md:lg:text-xl text-lg text-gray-500 mt-6 md:lg:mt-10'>
                  We're not just another agency; we're your partners. Trusting us means getting tailored strategies, transparent communication, and results that speak volumes. Let's embark on a journey together, navigating the digital cosmos, achieving unparalleled success for your brand.
                </p>
              </div>

              <div className='hero-stats lg:col-span-1'>
                <div className='hero-stats-content'>
                  <div className='milestone-box'>
                    <h3 className='text-black text-4xl font-bold'>
                      200%
                    </h3>

                    <p className='md:lg:text-xl text-lg text-gray-500 mt-3'>
                      Annual growth
                    </p>
                  </div>

                  <div className='milestone-box mt-8'>
                    <h3 className='text-black text-4xl font-bold'>
                      5K
                    </h3>

                    <p className='md:lg:text-xl text-lg text-gray-500 mt-3'>
                      Happy clients
                    </p>
                  </div>

                  <div className='milestone-box mt-8'>
                    <h3 className='text-black text-4xl font-bold'>
                      10M
                    </h3>

                    <p className='md:lg:text-xl text-lg text-gray-500 mt-3'>
                      Monthly impressions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='hero-milestone-timeline mt-5 md:lg:mt-14'>
            <div className='hero-milestone-timeline-content flex flex-col lg:flex-row lg:gap-10'>
              {
                milestones.map((milestone, index) => (
                  <div className='milestone-box' key={milestone.event}>
                    <div className='milestone-header relative'>
                      <div className='bg-white z-10 inline pr-5'>
                        <h1 className='text-blue-800 font-semibold text-lg inline mr-5'>
                          &bull;
                        </h1>

                        <h1 className='text-blue-800 w-full font-semibold text-sm inline '>
                          {milestone.date}
                        </h1>
                      </div>

                      <div className='bar -z-10 absolute top-1/2 left-0 hidden lg:block w-full bg-gray-300'></div>
                    </div>

                    <div className='milstone-body lg:px-0 px-5 py-5 relative'>
                      <div className='lg:hidden bar absolute left-0 top-0 bottom-0 bg-gray-300'></div>

                      <h3 className='text-black text-xl font-bold'>
                        {milestone.event}
                      </h3>

                      <p className='md:lg:text-xl text-lg text-gray-500 mt-3'>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
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
            <div className='section-header md:lg:text-left flex justify-start items-center'>
              <div className='md:lg:max-w-lg'>
                <h1 className='font-semibold text-xl text-[#93c5fd]'>
                  Our culture
                </h1>

                <h2 className='text-4xl font-bold mt-4 mb-8'>
                  Nurturing innovation through community
                </h2>
                
                <p className='text-[#f3f4f6] text-lg'>
                  At PixelPulse, we thrive on innovation, foster collaboration, embrace challenges, and prioritize empathetic interactions.
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center mt-12'>
              <div className='culture-decsription-container mt-12 grid grid-cols-1 lg:grid-cols-3 md:lg:gap-14 gap-14 text-lg'>
                {RenderSVG(cultureList, 'culture')}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='mb-10'></section>
    </div>
  )
}

export default About