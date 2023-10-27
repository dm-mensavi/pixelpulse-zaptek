import React from 'react'
import '../Custom Styles/AboutStyles.css'
import RenderSVG from '../components/RenderSVG';
import ProfileCard from '../components/ProfileCard';
import { Link } from "react-router-dom";
import johnDoe from '../public/David.webp'
import olivia from '../public/Sarah.webp'
import jake from '../public/James.webp'
import aisha from '../public/Emily.webp'
import sarah from '../public/Olivia.webp'
import leo from '../public/Nathaniel.webp'
import { TeamSpirit, BeyondBusiness, LifeLongLearning } from '../components/SVGs';

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
    'icon':  <TeamSpirit />     
  },

  {
    'header': 'Beyond business',
    'description': "We're more than marketers. We're community builders, continually supporting local initiatives.",
    'icon': <BeyondBusiness />
  },

  {
    'header': 'Lifelong learning',
    'description': 'Constant evolution is key. We invest in continuous training, ensuring top-tier expertise.',
    'icon': <LifeLongLearning />
  },
]

const ourTeam = [
  {
    "image": <img src={johnDoe} alt='john doe' className='w-full h-full block object-cover' />,
    "name": "John Doe",
    "jobTitle": "Digital Strategist"
  },
  {
    "image": <img src={olivia} alt='olivia' className='w-full h-full block object-cover' />,
    "name": "Olivia Martinez",
    "jobTitle": "Content Specialist"
  },
  {
    "image": <img src={jake} alt='jake' className='w-full h-full block object-cover' />,
    "name": "Jake Thompson",
    "jobTitle": "SEO Analyst"
  },
  {
    "image": <img src={aisha} alt='aisha' className='w-full h-full block object-cover' />,
    "name": "Aisha Patel",
    "jobTitle": "Graphic Designer"
  },
  {
    "image": <img src={sarah} alt='sarah' className='w-full h-full block object-cover' />,
    "name": "Sarah Fitzgerald",
    "jobTitle": "Media Coordinator"
  },
  {
    "image": <img src={leo} alt='leo' className='w-full h-full block object-cover' />,
    "name": "Leo Kim",
    "jobTitle": "Web Developer"
  }
];

const testimonials = [
{
  "text": "PixelPulse's dedication is unparalleled. Their approach was uniquely tailored and incredibly effective for us.",
  "id": "233092889",
  "profileInfo": {
    "name": "Jessica M.",
    "jobTitle": "TechFusion Inc.",
    "image": <img src={olivia} alt='jessica' className='w-full h-full block object-cover' />,
  }
},
{
  "text": "From the first consultation, it was clear PixelPulse was different. Their strategies brought noticeable growth, enhancing our reach and drastically improving our engagement metrics.",
  "id": "898349493",
  "profileInfo": {
    "name": "Kwame A.",
    "jobTitle": "GreenLeaf Enterprises",
    "image": <img src={aisha} alt='aisha' className='w-full h-full block object-cover' />,
  }
},
{
  "text": "Choosing PixelPulse was the best decision. Their strategies elevated our online presence, making a noticeable difference in our engagements.",
  "id": "237678389",
  "profileInfo": {
    "name": "Lucy G.",
    "jobTitle": "Alpha Innovations",
    "image": <img src={johnDoe} alt='john doe' className='w-full h-full block object-cover' />,
  }
},
{
  "text": "With PixelPulse, we experienced a blend of creativity and data-driven strategies. Their passion was evident, and the results spoke for themselves - truly commendable.",
  "id": "093438437",
  "profileInfo": {
    "name": "Brian T.",
    "jobTitle": "Skyward Solutions",
    "image": <img src={leo} alt='leo' className='w-full h-full block object-cover' />,
  }
},
{
  "text": "Every campaign was tailored to our needs. PixelPulse's methods ensured we reached our target audience effectively and with style.",
  "id": "364834799",
  "profileInfo": {
    "name": "Rajiv P.",
    "jobTitle": "Africana Fashion",
    "image": <img src={jake} alt='jake' className='w-full h-full block object-cover' />,
  }
},
{
  "text": "From the first meeting, I knew we were in good hands. PixelPulse's team is knowledgeable, innovative, and genuinely cares about achieving our objectives.",
  "id": "62387343",
  "profileInfo": {
    "name": "Sofia H.",
    "jobTitle": "TechDyno Solutions",
    "image": <img src={sarah} alt='sarah' className='w-full h-full block object-cover' />,
  }
}
];

const blogPosts = [
  {
    id: "der98eiheui",
    page: '/blog1',
    title: "Mastering the art of email marketing",
    date: "Sep 13, 2023",
    content: "Unlock the secrets to email marketing success with proven strategies and tips for engaging your audience effectively.",
    author: {
      name: "John Doe",
      jobTitle: "Email Specialist",
      image: <img src={johnDoe} alt='john doe' className='w-full h-full block object-cover' />,
    },
  },
  {
    id: "hfyue8rru",
    page: '/blog2',
    title: "The power of visual storytelling online",
    date: "Sep 19, 2023",
    content: "Explore the impact of visual storytelling in digital content and learn how to leverage its potential.",
    author: {
      name: "Jake Thompson",
      jobTitle: "Content Strategist",
      image: <img src={jake} alt='jake thompson' className='w-full h-full block object-cover' />,
    },
  },
  {
    id: "huyu8r9uhwd",
    page: '/blog3',
    title: "The art of crafting compelling content",
    date: "Sep 13, 2023",
    content: "Unlock the secrets to crafting content that captivates your audience and drives meaningful engagement.",
    author: {
      name: "Olivia Martinez",
      jobTitle: "Content Specialist",
      image: <img src={olivia} alt='olivia martinez' className='w-full h-full block object-cover' />,
    },
  },
];

const faqs = [
  {
    question: "How does PixelPulse differentiate from other agencies?",
    answer: "PixelPulse stands out due to our unique approach combining data-driven strategies with creative storytelling. Each campaign is tailored, ensuring optimal engagement and results for our clients.",
  },
  {
    question: "What industries have you previously worked with?",
    answer: "Over the years, we've catered to various industries including healthcare, tech startups, e-commerce, and local businesses. Our diverse experience ensures strategies that resonate with specific audiences.",
  },
  {
    question: "Do you offer customizable digital marketing packages?",
    answer: "Absolutely! We believe in flexibility. Our team works closely with clients to craft packages aligning with their goals, budget, and specific industry requirements.",
  },
  {
    question: "How often will I receive performance reports?",
    answer: "Clients receive monthly performance reports detailing their campaigns' progress, metrics, and insights. However, we're always available for interim discussions or clarifications if needed.",
  },
  {
    question: "Can I switch or upgrade my marketing plan midway?",
    answer: "Yes, we offer flexibility. Based on performance and changing goals, clients can adjust, switch, or upgrade their plans to better fit evolving needs.",
  },
  {
    question: "Are there long-term contracts or commitments required?",
    answer: "We provide both short-term and long-term options. However, some strategies benefit from extended periods to achieve desired results and consistency.",
  },
];

function About() {
  return (
    <div className='about-page'>

      <section className='hero-section py-32'>
        <div className='section-content grid gap-12'>
          <div className='hero-text'>
            <h1 className='text-blue-800 font-bold text-base md:text-lg lg:text-xl'>
                About us
            </h1>

            <h2 className='text-black text-4xl md:text-6xl md:mb-12 lg:max-w-4xl font-bold mt-4 mb-6'>
              Innovative digital marketing, passionately delivered
            </h2>


            <div className='grid gap-12 lg:gap-14 lg:grid-cols-3 lg:justify-between'>
              <div className='lg:col-span-2'>
                <p className='md:text-xl text-lg text-gray-500'>
                  Founded on innovation, PixelPulse believes in transformative digital solutions. Every campaign, strategy, and design stems from understanding client visions. Our journey began with a passion for digital marketing, making brands resonate with their audience.
                </p>

                <p className='md:text-xl text-lg text-gray-500 mt-6 md:mt-10'>
                  For years, PixelPulse has embraced the evolving digital landscape. Our dedicated team, armed with expertise and creativity, collaborates closely with clients. Ensuring goals are met, we foster growth, elevate brand value, and carve out market space distinctively.
                </p>

                <p className='md:text-xl text-lg text-gray-500 mt-6 md:mt-10'>
                  We're not just another agency; we're your partners. Trusting us means getting tailored strategies, transparent communication, and results that speak volumes. Let's embark on a journey together, navigating the digital cosmos, achieving unparalleled success for your brand.
                </p>
              </div>

              <div className='hero-stats lg:col-span-1'>
                <div className='hero-stats-content'>
                  <div className='milestone-box'>
                    <h3 className='text-black text-4xl font-bold'>
                      200%
                    </h3>

                    <p className='md:text-xl text-lg text-gray-500 mt-3'>
                      Annual growth
                    </p>
                  </div>

                  <div className='milestone-box mt-8'>
                    <h3 className='text-black text-4xl font-bold'>
                      5K
                    </h3>

                    <p className='md:text-xl text-lg text-gray-500 mt-3'>
                      Happy clients
                    </p>
                  </div>

                  <div className='milestone-box mt-8'>
                    <h3 className='text-black text-4xl font-bold'>
                      10M
                    </h3>

                    <p className='md:text-xl text-lg text-gray-500 mt-3'>
                      Monthly impressions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='hero-milestone-timeline mt-5 md:mt-14'>
            <div className='hero-milestone-timeline-content flex flex-col lg:flex-row lg:gap-10'>
              {
                milestones.map((milestone, index) => (
                  <div className='milestone-box' key={milestone.event}>
                    <div className='milestone-header relative'>
                      <div className='bg-white z-10 inline pr-5'>
                        <h1 className='text-blue-800 font-semibold text-lg inline mr-5'>
                          &bull;
                        </h1>

                        <h2 className='text-blue-800 w-full font-semibold text-sm inline '>
                          {milestone.date}
                        </h2>
                      </div>

                      <div className='bar -z-10 absolute top-1/2 left-0 hidden lg:block w-full bg-gray-300'></div>
                    </div>

                    <div className='milstone-body lg:px-0 px-5 py-5 relative'>
                      <div className='lg:hidden bar absolute left-0 top-0 bottom-0 bg-gray-300'></div>

                      <h3 className='text-black text-xl font-bold'>
                        {milestone.event}
                      </h3>

                      <p className='md:text-xl text-lg text-gray-500 mt-3'>
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
        className='md:py-32 md:px-10 lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header md:text-left flex justify-start items-center'>
              <div className='md:max-w-xl'>
                <h2 className='font-semibold text-lg lg:text-xl text-[#93c5fd]'>
                  Our culture
                </h2>

                <h3 className='text-3xl lg:text-4xl font-bold mt-4 mb-8'>
                  Nurturing innovation through community
                </h3>
                
                <p className='text-[#f3f4f6] text-lg'>
                  At PixelPulse, we thrive on innovation, foster collaboration, embrace challenges, and prioritize empathetic interactions.
                </p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center items-center lg:mt-12'>
              <div className='culture-decsription-container mt-12 grid grid-cols-1 lg:grid-cols-3 md:gap-14 gap-14 text-lg'>
                {RenderSVG(cultureList, 'culture')}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='our-team-section py-12 md:py-32'>
        <div className='section-content lg:gap-10 lg:grid lg:grid-cols-5'>
          <div className='section-header lg:col-span-2'>
            <h2 className='text-3xl lg:text-4xl font-bold'>
              Meet our team
            </h2>

            <p className='text-lg text-gray-500 mt-5'>
              Diverse talents united by passion, creating digital masterpieces to propel brands forward.
            </p>
          </div>

          <div className='mt-12 lg:mt-0 team md:grid md:grid-cols-2 lg:col-span-3 md:gap-20 flex gap-10 flex-col'>
            {/* {RenderProfileInfo(ourTeam)} */}
            {
              ourTeam.map(teamMembers => (
                <ProfileCard profileInfo={teamMembers} key={`${teamMembers.name}-${teamMembers.jobTitle}`} nameColor='text-black' jobColor='text-blue-800'/>
              ))
            }
          </div>
        </div>
      </section>

      <section 
        className='md:py-32 md:px-10 lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header flex justify-center items-center'>
              <div className='md:max-w-xl text-center'>
                <h2 className='font-semibold text-lg lg:text-xl text-[#93c5fd]'>
                  Testimonials
                </h2>

                <h3 className='text-3xl lg:text-4xl font-bold mt-4 mb-8'>
                  Authentic feedback from partners who've experienced our expertise
                </h3>
              </div>
            </div>

            <div className='section-body mt-12 text-lg flex justify-start md:justify-center items-center lg:mt-12'>
              <div className='testimonies-card-container grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10'>
                  {
                    testimonials.map(testimony => (
                      <div key={testimony.id} 
                           className='testimony-card bg-[#111827] text-[#f3f4f6] p-7 rounded-2xl relative'>

                        <h3 className='text-[#f3f4f6] opacity-90'>
                          {`"${testimony.text}"`}
                        </h3>
                        
                        <div className='relative min-w-full my-5 h-[.1px] -mx-[40px]'>
                          <div className='absolute w-full bg-[#374151] h-full'></div>
                        </div>
  
                        <div className=''>
                          <ProfileCard profileInfo={testimony.profileInfo} nameColor='text-[#f3f4f6]' jobColor='text-[#f3f4f6]'/>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>

          </div>
        </div>
      </section>

      <section className='blog-section py-12 md:py-32'>
        <div className='section-content'>
          <div className='section-header'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Latest blog articles
            </h2>

            <p className='text-lg text-gray-500 mt-5'>
              Discover insights, trends, and strategies shaping the digital marketing landscape.
            </p>

            <hr className='my-10'></hr>

            <div className='section-body'>
              <div className='blog-cards-container lg:grid-cols-3 grid gap-16 text-[#404040] text-lg'>
                {
                  blogPosts.map(blog => (
                    <Link to={blog.page}>
                      <div className='blog-card'>
                        <div>
                          <h4 className='text-sm'>
                            {blog.date}
                          </h4>

                          <h3 className='mt-2 text-black font-bold text-lg'>
                            {blog.title}
                          </h3>

                          <p className='my-5 text-[1rem]'>
                            {blog.content}
                          </p>

                          <ProfileCard profileInfo={blog.author} nameColor='text-black' jobColor='text-[#404040]' />
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:py-32 md:px-10 lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'>
        <div className='section-content px-4 lg:gap-10 lg:grid lg:grid-cols-3'>
          <div className='section-header lg:col-span-1'>
            <h2 className='text-3xl lg:text-4xl text-[#f3f4f6] font-bold'>
              Frequently asked questions
            </h2>

            <p className='text-lg  mt-5'>
              Can't find the answer you're looking for? Reach out to our <span className='text-[#93c5fd]'>customer support</span> team
            </p>
          </div>

          <div className='mt-12 lg:mt-0 flex gap-10 flex-col lg:col-span-2 text-lg'>
            {
              faqs.map(faq => (
                <div>
                  <h4 className='text-[#93c5fd]'>
                    {faq.question}
                  </h4>

                  <p className='mt-3 text-[#f3f4f6]'>
                    {faq.answer}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='mb-10'></section>
    </div>
  )
}

export default About