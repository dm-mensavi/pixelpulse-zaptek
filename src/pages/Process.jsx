import discoveryImage from '../public/Discovery.webp'
import '../Custom Styles/ProcessStyles.css'
import executionImage from '../public/Execution.webp'
import james from '../public/James.webp'
import RenderSVG from '../components/RenderSVG'
import { DeepDive, ClientCollabo, GoalSetting, ContentCreation, OptimizationPlan, PlatformSelection, FeedbackLoop } from '../components/SVGs'

const discoveryList = [
  {
    'header': 'Deep dive.',
    'description': ' In-depth brand and market analysis ensures precise targeting.',
    'icon': <DeepDive />
    
  },

  {
    'header': 'Client collaboration.',
    'description': ' Your insights guide our approach, ensuring alignment.',
    'icon': <ClientCollabo />
  },

  {
    'header': 'Goal setting.',
    'description': ' We outline clear objectives for measurable success.',
    'icon': <GoalSetting />
  }
]

const strategyList = [
  {
    'header': 'Content creation.',
    'description': 'Crafting compelling narratives to resonate with your audience, driving both engagement and conversion.',
    'icon': <ContentCreation />
    
  },

  {
    'header': 'Optimization plan.',
    'description': 'Regular analysis and refinement ensure your strategy remains on course and adapts to changes.',
    'icon': <OptimizationPlan />
  },

  {
    'header': 'Platform selection',
    'description': 'Identifying the best digital platforms for your brand, maximizing reach and effectiveness.',
    'icon': <PlatformSelection />
    
    
  },

  {
    'header': 'Feedback loop',
    'description': 'We prioritize ongoing communication, making necessary adjustments based on client feedback and analytics.',
    'icon': <FeedbackLoop />
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

function Process() { 
  return (
    <div className='process'>
      <section 
        className='pt-32'
      >
        <div className='section-content max-w-2xl'>
          <h1 className='text-blue-800 font-bold text-base md:text-lg lg:text-xl'>
            Our Process
          </h1>

          <h2 className='text-black text-4xl md:text-6xl font-bold mt-4 mb-8'>
            From idea to implementation
          </h2>

          <p className='md:text-xl text-gray-500'>
            At PixelPulse, every project begins with understanding, then strategy formulation, creative execution, and continuous optimization. Experience a journey tailored for measurable success and impactful results.
          </p>
        </div>
      </section>

      <section className='md:py-32 py-12'>
        <div className='section-content min-w-full'>
          <div className='grid justify-between gap-12 md:grid-cols-2 md:gap-15 lg:gap-20 max-w-5xl min-w-full'>
            <div>
              <h1 className='text-black font-semibold text-xl'>
                01.
              </h1>

              <h2 className='text-black text-3xl lg:text-4xl font-bold mt-4 mb-8'>
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
        className='md:py-32 md:px-10 lg:py-12 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header md:text-center flex justify-center items-center'>
              <div className='md:max-w-xl'>
                <h1 className='font-semibold text-xl'>
                  02.
                </h1>

                <h2 className='text-3xl lg:text-4xl font-bold mt-4 mb-8'>
                  Strategy 
                </h2>
                
                <p className='text-[#f3f4f6] text-lg'>
                  Post-discovery, we craft a comprehensive strategy tailored to your objectives, ensuring maximum impact and engagement.
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center mt-12'>
              <div className='discovery-decsription-container mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-10 text-lg'>
                {RenderSVG(strategyList, 'strategy')}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='execution-section md:py-32 py-12'>
        <div className='section-content flex justify-center items-center min-w-full max-w-4xl'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
            <figure className='section-image overflow-hidden rounded-2xl'>
              <img src={executionImage} alt='happy people' className='w-full h-full object-cover'/>
            </figure>
            
            <div className='text-gray-500'>
              <h1 className='text-black font-semibold text-xl'>
                03.
              </h1>

              <h2 className='text-black text-3xl lg:text-4xl font-bold mt-4 mb-8'>
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
        className='our-values py-12 md:py-32 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div className='section-content px-4'>
          <div className='md:px-10 lg:px-20'>
            <h1 className='font-semibold text-xl text-[#93C5FD]'>
              Our values 
            </h1>

            <h2 className='text-3xl lg:text-4xl font-bold mt-4 mb-8 text-[#f3f4f6]'>
              Guiding every digital step
            </h2>
            
            <p className='text-[#f3f4f6] text-lg md:max-w-2xl'>
            These core beliefs underpin every decision, project, and relationship at PixelPulse, ensuring consistency and excellence.
            </p>

          <div className='values-container mt-16 flex justify-center items-center'>
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