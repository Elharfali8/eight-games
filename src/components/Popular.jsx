import React, { useEffect, useState } from 'react'
import { useMainContext } from '../context/main_context'
import CardGame from './CardGame'

const Popular = () => {
    const [pageSize, setPageSize] = useState(6)
    const { fetchPopularGames, popular_games } = useMainContext()
    
    useEffect(() => {
        fetchPopularGames(pageSize)
    }, [])

  return (
      <section className='container mx-auto px-4 lg:px-2 xl:px-1 py-10 lg:py-16 text-white'>
          <div className='flex items-center justify-center lg mb-8 lg:mb-10'>
                <h1 className='section-title '>Top <span>Popular</span> Games</h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {popular_games?.map((item) => {
          const { id} = item
          
          return (
              <CardGame key={id} {...item} />
            )
          })}
      </div>
    </section>
  )
}

export default Popular