import React, { useEffect, useState } from 'react'
import { useMainContext } from '../context/main_context'
import {CreatorsCard} from '../components'

const CreatorsPage = () => {
    const { fetchCreators, creators, isLoading } = useMainContext()
    const [mainPage, setMainPage] = useState(true)

    useEffect(() => {
        fetchCreators(40)
    }, [])
    

  return (
      <main className='main-bg-color min-h-[calc(100vh-64px)]'>
          {isLoading ? (
              <div className='container mx-auto px-4 lg:px-0 flex items-center justify-center h-full pt-32 lg:pt-[300px] text-white'>
                  <span className="loading loading-spinner loading-lg"></span>
          </div>
          ): (
              <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-14 lg:py-20">
              <div className='flex items-center justify-center lg mb-8 lg:mb-10'>
                    <h1 className='section-title '>Our <span>Creators</span></h1>
                  </div>
                  <div className='grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                      {creators?.map((c) => {
                          const { id } = c
                          return (
                            <CreatorsCard mainPage={mainPage} key={id} {...c} />
                          )
                      })}
                  </div>
              </div>
          )}
    </main>
  )
}

export default CreatorsPage