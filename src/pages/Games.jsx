import React, { useEffect, useState } from 'react'
import { GridView, SearchInput, Pagination } from '../components'
import { useMainContext } from '../context/main_context'

const Games = () => {
    const [inputValue, setInputValue] = useState('')
    const [mainInputValue, setMainInputValue] = useState('')
    const [page, setPage] = useState(1)


    const { fetchGames, total_pages, games, isLoading } = useMainContext()

    

    const handleInput = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleSearch = () => {
        setMainInputValue(inputValue)
    }

    const handlePage = (e) => {
        const value = e.target.value;

        if (value === 'next') {
            if (page < total_pages) {
                setPage(page + 1);
            }
        } else if (value === 'prev') {
            if (page > 1) {
                setPage(page - 1);
            }
        }
    };

    useEffect(() => {
        fetchGames(page)
    }, [page])

  return (
      <main className='min-h-[calc(100vh-80px)] main-bg-color'>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-8 lg:py-10 text-white">
              <div className='mb-4'>
                  <h3 className='text-lg lg:text-xl gr-color poppins-medium tracking-wider'>Explore and Search for thousands of games</h3>
              </div>
              <div className='flex items-center justify-center'>
                  <SearchInput inputValue={inputValue} handleInput={handleInput} handleSearch={handleSearch} />
              </div>
              <div className='h-1 w-full bg-white my-8 lg:my-10' />
              <div>
                  <div className='mb-4 lg:mb-8'>
                      Sort
                  </div>
                  {isLoading ? (
                      <div className='flex justify-center items-center mt-16 lg:mt-20'>
                            <span className="loading loading-spinner loading-lg"></span>

                      </div>
                  ) : (
                          <>
                            <GridView games={games} />
                            <div className='mt-10 lg:mt-12 flex items-center justify-end'>
                                <Pagination page={page} handlePage={handlePage} />
                            </div>
                          </>
                  )}
              </div>
          </div>
    </main>
  )
}

export default Games