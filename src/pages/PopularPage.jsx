import React, { useEffect, useState } from 'react'
import { useMainContext } from '../context/main_context'
import { Link } from 'react-router-dom'
import { CardGame } from '../components'

const PopularPage = () => {
  const { isLoading, fetchPopularGames, popular_games } = useMainContext()
  
  const [pagesize, setPagesize] = useState(20)
  const [showItems, setShowItems] = useState('less')

  const handleItems = (e) => {
    const value = e.target.value;
    if (value === 'more') {
      setPagesize(50);
      setShowItems('more');
    } else {
      setPagesize(20);
      setShowItems('less');
    }
  };
  
  useEffect(() => {
    fetchPopularGames(pagesize)
  }, [pagesize])


  return (
    <main className='min-h-[calc(100vh-64px)] main-bg-color text-white'>
      {isLoading ? (
        <div className='container mx-auto px-4 lg:px-0 flex items-center justify-center h-full pt-32 lg:pt-[300px] text-white'>
                <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
      <div className="container mx-auto py-10 lg:py-16 px-4 lg:px-2 xl:px-1">
      <div className='flex items-center justify-center lg mb-8 lg:mb-10'>
                  <h1 className='section-title '>Popular <span>Games</span></h1>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {popular_games?.map((g) => {
                const { id } = g
                return <CardGame key={id} {...g} />
                    })}
            </div>
            
            <div className='flex justify-center items-center py-6 lg:py-8'>
            {showItems === 'less' ? (
              <button
              type='button'
              className='main-btn text-white poppins-medium'
              value='more'
              onClick={handleItems}
            >
              Show more
            </button>
            ) : (
              <button
              type='button'
              className='main-btn text-white poppins-medium'
              value='less'
              onClick={handleItems}
            >
              Show less
                    </button>
            )}
            
            
          </div>
      </div>
      )}
    </main>
  )
}

export default PopularPage