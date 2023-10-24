import React from 'react'
import '../Custom Styles/AboutStyles.css'
import RenderSVG from '../components/RenderSVG';
/* import RenderProfileInfo from '../components/RenderProfileInfo'; */
import ProfileCard from '../components/ProfileCard';
import johnDoe from '../public/David.webp'
import olivia from '../public/Sarah.webp'
import jake from '../public/James.webp'
import aisha from '../public/Emily.webp'
import sarah from '../public/Olivia.webp'
import leo from '../public/Nathaniel.webp'

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
  
  
  
  
  

  

  return (
    <div className='about-page'>

      <section className='hero-section py-32'>
        <div className='section-content grid gap-12'>
          <div className='hero-text'>
            <h1 className='text-blue-800 font-bold text-base md:text-lg lg:text-xl'>
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
        className='md:lg:py-32 md:px-10 md:lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header md:lg:text-left flex justify-start items-center'>
              <div className='md:lg:max-w-xl'>
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

            <div className='flex justify-start md:lg:justify-center items-center lg:mt-12'>
              <div className='culture-decsription-container mt-12 grid grid-cols-1 lg:grid-cols-3 md:lg:gap-14 gap-14 text-lg'>
                {RenderSVG(cultureList, 'culture')}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='our-team-section py-12 md:lg:py-32'>
        <div className='section-content lg:gap-10 lg:grid lg:grid-cols-5'>
          <div className='section-header lg:col-span-2'>
            <h2 className='text-3xl lg:text-4xl font-bold'>
              Meet our team
            </h2>

            <p className='text-lg text-gray-500 mt-5'>
              Diverse talents united by passion, creating digital masterpieces to propel brands forward.
            </p>
          </div>

          <div className='mt-12 lg:mt-0 team md:grid md:grid-cols-2 lg:col-span-3 md:lg:gap-20 flex gap-10 flex-col'>
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
        className='md:lg:py-32 md:px-10 md:lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'
      >
        <div 
          className='section-content px-4'
        >
          <div className=''>
            <div className='section-header flex justify-center items-center'>
              <div className='md:lg:max-w-xl text-center'>
                <h2 className='font-semibold text-lg lg:text-xl text-[#93c5fd]'>
                  Testimonials
                </h2>

                <h3 className='text-3xl lg:text-4xl font-bold mt-4 mb-8'>
                  Authentic feedback from partners who've experienced our expertise
                </h3>
              </div>
            </div>

            <div className='section-body mt-12 text-lg flex justify-start md:lg:justify-center items-center lg:mt-12'>
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

      <section className='blog-section py-12 md:lg:py-32'>
        <div className='section-content'>
          <div className='section-header'>
            <h2 className='text-3xl md:lg:text-4xl font-bold'>
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
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:lg:py-32 md:px-10 md:lg:px-20 py-12 bg-[#374151] text-white lg:-mx-[80px] md:-mx-[40px] -mx-[16px]'>
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