import ProfileCard from '../components/ProfileCard'
import sarah from '../public/Sarah.webp'
import ContactForm from "../components/ContactForm"
import {Logoipsum} from '../components/SVGs'

const profileInfo = {
  "image": <img src={sarah} alt='sarah - TechInnovators Inc.' className='w-full h-full block object-cover' />,
  "name": "Emily Johnson",
  "jobTitle": "TechInnovators Inc."
}

function Contact() {
  return (
    <div className='contact'>
      <section 
        className='pt-32'
      >
        <div className='section-content max-w-2xl'>
          <h1 className='text-blue-800 font-bold text-base md:text-lg lg:text-xl'>
            Contact us
          </h1>

          <h2 className='text-black text-4xl md:text-6xl font-bold mt-4 mb-8'>
            Let's connect and collaborate
          </h2>

          <p className='md:text-xl text-gray-500'>
            Reach out for inquiries, partnerships, or to discuss your next digital project.
          </p>
        </div>
      </section>

      <section className='form md:py-32 py-12'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-14'>
          <ContactForm />
          
          <div>
            <div className='mt-20 lg:col-span-1 lg:mt-10'>
              <figure className='w-40'>
                <Logoipsum />
              </figure>

              <h4 className='text-xl font-semibold mt-10'>
                "PixelPulse's expertise and dedication have been invaluable to our business. Their personalized approach, data-driven strategies, and innovative thinking consistently deliver outstanding results, setting them apart in the industry."
              </h4>

              <div className="mt-10">
                <ProfileCard
                  profileInfo={profileInfo}
                  nameColor='text-black' 
                  jobColor='text-[#404040]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact