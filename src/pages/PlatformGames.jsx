import { Pagination, SearchInput, Genres, GridView, PageTitle } from "../components"
import { useState, useEffect } from "react"
import { useMainContext } from "../context/main_context"
import { useParams } from "react-router-dom"

const PlatformGames = () => {
    const {id} = useParams()
    const [inputValue, setInputValue] = useState('')
    const [mainInputValue, setMainInputValue] = useState('')
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState('all')
    const [genArr, setGenArr] = useState([])

    const { fetchGamesByPlatforms, total_pages, platform_games: games, isLoading, fetchGenres, genres, platforms, fetchPlatforms } = useMainContext()

    
    
    const handleInput = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleSearch = () => {
        setPage(1)
        setMainInputValue(inputValue)
    }

    const handleCategoryBtn = (e) => {
        const value = e.target.value;
        const newValue = value.toLowerCase();
        setCategory(newValue);
        setPage(1)
      };
      

    const clearInput = () => {
        setPage(1)
        setMainInputValue('')
        setInputValue('')
    }

    const handlePage = (e) => {
        const value = e.target.value;
        console.log(value, page);
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
        fetchGamesByPlatforms(id, page, category, mainInputValue)
        fetchPlatforms()
    }, [id, page, category, mainInputValue])

    
    useEffect(() => {
        fetchGenres()
    }, [])

    useEffect(() => {
        const newGenres = [...new Set(genres?.map((item) => item.name))]
        setGenArr(newGenres)
    }, [genres])
    
    const platform = platforms?.find((p) => p.id === parseInt(id))
    
    return (
    <main className='min-h-[calc(100vh-80px)] main-bg-color'>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-8 lg:py-10 text-white">
            <div className='mb-4'>
                    <PageTitle pageTitle='Platforms' name={platform?.name} link='platforms' />
              </div>
              <div className='flex items-start justify-center'>
                  <SearchInput inputValue={inputValue} handleInput={handleInput} handleSearch={handleSearch} clearInput={clearInput} />
              </div>
              <div className='h-1 w-full bg-white my-8 lg:my-10' />
              <div className=' grid lg:grid-cols-6 gap-4'>
                  <div className='mb-4 lg:mb-8  text-black w-full col-span-1 lg:col-span-2 2xl:col-span-1'>
                  <Genres genArr={genArr} category={category} handleCategoryBtn={handleCategoryBtn}  />
                      
                  </div>

                  {isLoading ? (
                      <div className='lg:col-span-4 2xl:col-span-5 flex justify-center items-center mt-16 lg:mt-20 lg:ml-32 h-[30vh]'>
                            <span className="loading loading-spinner loading-lg"></span>

                      </div>
                  ) : (
                          <div className='lg:col-span-4 2xl:col-span-5'>
                            <GridView games={games} />
                            <div className='mt-10 lg:mt-12 flex items-center justify-end'>
                                <Pagination page={page} handlePage={handlePage} />
                            </div>
                          </div>
                  )}
              </div>
          </div>
    </main>
  )
}

export default PlatformGames