import React, { useEffect } from 'react'
import { useMainContext } from '../context/main_context'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Stores = () => {
    const { fetchPlatforms, platforms, isLoading } = useMainContext()
  const [items, setItems] = useState(20)
  const [showItems, setShowItems] = useState('less')

  const handleItems = (e) => {
    const value = e.target.value;
    if (value === 'more') {
      setItems(50);
      setShowItems('more');
    } else {
      setItems(20);
      setShowItems('less');
    }
  };

    useEffect(() => {
        fetchPlatforms(items)
    }, [items])

  
  

  return (
      <main className='min-h-[calc(100vh-64px)] main-bg-color'>
      <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-14 lg:py-20">
      <div className='flex items-center justify-center lg mb-8 lg:mb-10'>
                <h1 className='section-title '>All <span>Platforms</span></h1>
          </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {platforms?.map((st) => {
                    const { id, name, image_background, games } = st
                    const someGames = games?.slice(0, 2)
                      
                      return (
                        <Link key={id} className='h-[300px] rounded-xl transition-all ease-in-out duration-150 hover:scale-105 relative' style={{ backgroundImage: `url(${image_background}) `, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                          <div className='absolute bottom-0 right-0 left-0 px-2 bg-opacity py-1'>
                            <h1 className='text-white text-2xl lg:text-3xl mb-3 poppins-semibold'>{name}</h1>
                            <h3 className='text-gray-300 text-xl lg:text-2xl poppins-medium mb-2'>Some games :</h3>
                            {someGames.map((i) => {
                              return (
                                <p key={i.id} className='text-lg text-gray-400'>
                                    {i.name}
                                </p>
                              )
                            })}
                          </div>
                          </Link>
                      )
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
    </main>
  )
}

export default Stores