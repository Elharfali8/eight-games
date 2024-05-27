import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
      <section className='container mx-auto px-4 lg:px-2 xl:px-1 min-h-[calc(100vh-80px)] text-white flex items-center justify-start'>
          <div>
              <div className='mb-4 lg:mb-6'>
                  <span className=' px-8 py-1 text-lg lg:text-xl poppins-medium text-black rounded-lg light-bg-color tracking-widest'>
                      Best for games
                  </span>
              </div>
              <h1 className='capitalize text-3xl lg:text-4xl xl:text-5xl poppins-bold gr-color tracking-wider'>more than thousands of games</h1>
              <h3 className='text-2xl lg:text-3xl xl:text-4xl mt-2 lg:mt-3 poppins-semibold light-gray-color tracking-wide'>to explore and discover</h3>
              <p className='max-w-4xl mt-3 mb-6 text-lg lg:text-xl text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloremque similique consequuntur impedit, est sed saepe repudiandae tenetur laudantium. Accusantium, blanditiis. Adipisci consequuntur earum aperiam delectus error architecto obcaecati repellendus.
              </p>
              <div className='mt-8 lg:mt-10'>
              <Link to='/games' className='main-btn '>
                Explore
              </Link>
              </div>
          </div>
    </section>
  )
}

export default Hero