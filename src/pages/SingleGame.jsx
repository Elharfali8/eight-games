import { Link, useParams } from "react-router-dom"
import { useSingleGameContext } from "../context/singleGame_context";
import { useEffect, useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaClock, FaTags, FaTrophy, FaStar, FaPlay, FaStore } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";



const SingleGame = () => {
    const { id } = useParams()
    const { fetchGameDetails, isLoading, game, fetchTrailer } = useSingleGameContext()
  const [showText, setShowText] = useState(false)
  const [desc, setDesc] = useState('')

    useEffect(() => {
      fetchGameDetails(id)
      setDesc(description_raw)
    }, [id, game?.description_raw])

  const { name, released, background_image, website, rating, playtime, achievements_count, platforms, stores, developers, genres, description_raw, publishers } = game


 
  
  const handleText = () => {
    setShowText((prev) => !prev)
  }

  useEffect(() => {
    fetchTrailer(id)
  }, [id])

  const platformNames = platforms?.map(pl => pl.platform?.name).join(' - ');
  const strs = stores?.map(pl => pl?.store?.name).join(' - ')
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
        <div className="py-8 lg:py-10 text-white flex items-center gap-x-3">
          <Link to='/' className="poppins-regular tracking-wider text-lg lg:text-xl flex-wrap ">
            Home
          </Link>
          <span>
            <TbArrowBadgeRightFilled size={29} color="#FF7582" />
          </span>
          <Link to='/games' className="poppins-regular tracking-wider text-lg lg:text-xl">
            Games
          </Link>
          <span>
            <TbArrowBadgeRightFilled size={29} color="#FF7582" />
          </span>
          <h3 className="poppins-medium tracking-wider text-lg lg:text-xl gr-color">{name}</h3>
        </div>

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
              <div className={`${ratingPercentage <= 50 ?'text-red-500' : 'text-green-500'}` }>
                <div className="radial-progress" style={{ "--value": ratingPercentage }} role="progressbar">{ratingPercentage?.toFixed(1)}%</div>
              </div>
              <p className="flex  items-center gap-x-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider">
                <FaClock /> Release date : <span className="gray-color">{released}</span>
              </p>
              
            </div>
          </div>
        </div>

        <div className="pt-6 lg:pt-8 flex flex-wrap gap-6 items-center">
        <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <RiComputerFill /> platforms : <span className="gray-color">{platformNames}</span>
              </p>
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
              <p className="flex  items-center gap-2 text-xl lg:text-2xl text-white capitalize  poppins-medium tracking-wider flex-wrap ">
                <FaStore /> Stores : <span className="gray-color">{strs}</span>
              </p>
        </div>
      </div>
    </main>
  )
}

export default SingleGame