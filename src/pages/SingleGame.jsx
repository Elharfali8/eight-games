import { useParams } from "react-router-dom"
import { useSingleGameContext } from "../context/singleGame_context";
import { useEffect, useState } from "react";
import { FaClock, FaTags, FaTrophy, FaStar, FaPlay, FaStore } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { MdBrowserUpdated } from "react-icons/md";
import { PageTitle } from "../components";



const SingleGame = () => {
    const { id } = useParams()
    const { fetchGameDetails, isLoading, game, fetchTrailer } = useSingleGameContext()
  const [showText, setShowText] = useState(false)
  const [desc, setDesc] = useState('')

    useEffect(() => {
      fetchGameDetails(id)
      setDesc(description_raw)
    }, [id, game?.description_raw])

  const { name, released, background_image, website, rating, playtime, achievements_count, platforms, stores, developers, genres, description_raw, publishers, updated } = game

 
  
  const handleText = () => {
    setShowText((prev) => !prev)
  }

  useEffect(() => {
    fetchTrailer(id)
  }, [id])

  const devs = developers?.map(pl => pl?.name).join(' - ');
  const genre = genres?.map(pl => pl?.name).join(' - ');
  const newGenres = [...new Set(genre)]
  const pub = publishers?.map(pl => pl?.name);

  const maxRating = 5
  const ratingPercentage = (rating / maxRating) * 100
  
  
  if (isLoading) {
    return (
      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center w-full main-bg-color text-white">
        <div className="container mx-auto px-4 flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span> 
          </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-64px)] main-bg-color">
      <div className="container mx-auto px-4 lg:px-2 xl:px-1">
        <PageTitle pageTitle='Games' name={name} link='games' />

        <div className="py-3 lg:py-5">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl poppins-semibold tracking-widest light-color">{name}</h1>
          
          <a href={website} target="_blank" className="text-lg mt-3 text-gray-400">{website}</a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 py-8 lg:py-10 place-items-center">
          <div className="flex items-center justify-center relative">
            <img src={background_image} alt={name} className="lg:h-[600px] object-cover rounded-xl" />
            
          </div>
          <div >
            <h3 className="text-2xl lg:text-3xl poppins-medium tracking-wider text-white mb-4"><span className="gr-color ">Game</span> Details</h3>
            <div className="mb-3 lg:mb-4">
            <p className="light-gray-color">
                {showText ? (
                  <>
                    {desc} <button type="button" className="px-3 text-white poppins-medium py-1" onClick={handleText}>Show less</button>
                  </>
                ): (
                    <>
                      {desc?.slice(0, 300)}... <button type="button" className="px-3 text-white poppins-medium py-1" onClick={handleText}>Show more</button>
                    </>
                )}
              </p>
            </div>
            <div className="grid gap-y-4">
              <div className="flex gap-x-6 mb-6">
                <h3 className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap">Rating :</h3>
                <div className={`${ratingPercentage <= 50 ?'text-red-500' : 'text-green-500'}` }>
                  <div className="radial-progress" style={{ "--value": ratingPercentage }} role="progressbar">{ratingPercentage?.toFixed(1)}%</div>
                </div>
              </div>
              <p className="flex  items-center gap-x-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider">
                <FaClock /> Release date : <span className="gray-color">{released}</span>
              </p>

              <p className="flex  items-center gap-x-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider">
                <MdBrowserUpdated /> Last Update : <span className="gray-color">{updated}</span>
              </p>
              
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-white rounded-lg" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-16">


          <div className=" col-span-1 lg:col-span-2 md:order-first p-4">
            <div className="grid gap-y-6">
            <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <IoSettings /> developers : <span className="gray-color">{devs}</span>
              </p>
              <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <FaTags /> Genres : <span className="gray-color">{newGenres}</span>
              </p>
              <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <TbWorldCode /> Publishers : <span className="gray-color">{pub}</span>
              </p>
              <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <FaTrophy /> Achievements : <span className="gray-color">{achievements_count}</span>
              </p>
              <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <FaPlay /> PlayTime : <span className="gray-color">{playtime}</span>
              </p>
          </div>
          </div>



          <div className="col-span-1 flex flex-col items-center justify-center p-4 order-first">
            <div className="bg-[#342056] text-white rounded-lg h-full w-full p-2 mb-4">
            <p className=" gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex items-center mb-3 ">
                <RiComputerFill /> platforms : 
              </p>
              <div>
                <div className="flex flex-col gap-y-2 text-gray-400">
                  {platforms?.map((p) => {
                    const { id, name } = p.platform

                    return (
                      <p key={id} className="text-lg md:text-xl lg:text-2xl">
                          - {name}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="light-blue-bg-color text-white rounded-lg h-full w-full p-2">
            <p className=" gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex items-center mb-3 ">
                <FaStore /> stores : 
              </p>
              <div>
                <div className="flex flex-col gap-y-2 text-gray-400">
                  {stores?.map((p) => {
                    const { id, name } = p.store
                    console.log(p.store);

                    return (
                      <p key={id} className="text-lg md:text-xl lg:text-2xl">
                          - {name}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pt-6 lg:pt-8 flex flex-wrap gap-6 items-center">
        <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <RiComputerFill /> platforms : <span className="gray-color">{platformNames}</span>
              </p>
              
        </div> */}
      </div>
    </main>
  )
}

export default SingleGame