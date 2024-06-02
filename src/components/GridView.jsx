import React from 'react'
import { Link } from 'react-router-dom'

const GridView = ({games}) => {
    

  return (
      <div className='grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
          {games?.map((game) => {
              const { id, name, background_image, released, saturated_color } = game
              
              return (
                  <Link key={id} to={`/games/${id}`} className={`h-full flex flex-col text-black bg-[#2a3d66] rounded-lg overflow-hidden transition-all ease-in-out duration-150 hover:scale-105`}>
                      <img src={background_image} alt={name} className='h-[280px] object-cover pb-2' />
                      <div className='px-2 pb-2 flex flex-col'>
                          <h3 className='text-white text-lg poppins-medium tracking-widest'>{name}</h3>
                          <p className='light-color'>
                              released: <span className='text-gray-400'>{released}</span>
                          </p>
                      </div>
                  </Link>
              )
          })}
    </div>
  )
}

export default GridView