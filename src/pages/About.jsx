import React from 'react'
import '../Custom Styles/AboutStyles.css'

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


  return (
    <div className='about-page'>

      <section className='hero-section pt-32'>
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

      <section className='mb-10'></section>
    </div>
  )
}

export default About