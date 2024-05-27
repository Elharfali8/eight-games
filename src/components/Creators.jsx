import React, { useEffect } from 'react'
import { useMainContext } from '../context/main_context'
import CreatorsCard from './CreatorsCard';
import { Link } from 'react-router-dom';

const Creators = () => {
    const { fetchCreators, creators } = useMainContext()

    
    

    useEffect(() => {
        fetchCreators(8)
    }, [])

  return (
      <section className='container mx-auto px-4 lg:px-2 xl:px-1 py-10 lg:py-16 text-white'>
          <div className='flex items-center justify-center lg mb-8 lg:mb-10'>
                <h1 className='section-title '>Our <span>Creators</span></h1>
          </div>
          <div className='grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {creators?.map((person) => {
                  const {id} = person
                  return (
                      <CreatorsCard key={id} {...person} />
                  )
              })}
          </div>
          <div className='mt-8 lg:mt-10 flex items-center justify-center'>
              <Link to={`/creators`} className='main-btn capitalize'>
                see more creators
              </Link>
          </div>
    </section>
  )
}

export default Creators