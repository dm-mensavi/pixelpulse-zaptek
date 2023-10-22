import React from 'react'
import discoveryImage from '../public/Discovery.webp'

function Process() {
  return (
    <div>
      <section className='py-10'>
        <div>
          <h1 className='text-blue-800 font-semibold text-xl'>
            Our Process
          </h1>

          <h2 className='text-black text-4xl font-bold mt-4 mb-8'>
            From idea to implementation
          </h2>

          <p >
            At PixelPulse, every project begins with understanding, then strategy formulation, creative execution, and continuous optimization. Experience a journey tailored for measurable success and impactful results.
          </p>
        </div>
      </section>

      <section className='py-10'>
          <div>
            <div>
                <h1 className='text-black font-semibold text-xl'>
                01.
              </h1>

              <h2 className='text-black text-4xl font-bold mt-4 mb-8'>
                Discovery
              </h2>

              <p >
                We begin by understanding your brand, goals, and audience, laying the foundation for a tailored strategy.
              </p>

              <hr className='my-10'></hr>


            </div>



            {/* <figure>
              <img src={discoveryImage} alt='discovery - someone holding a transparent ball' />
            </figure> */}
          </div>
      </section>
    </div>

  )
}

export default Process