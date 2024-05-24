import React from 'react'
import { Link } from 'react-router-dom'

const CardGame = ({ id, name, background_image, released, updated, rating }) => {

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
    
        return (
          <>
            {[...Array(fullStars)].map((_, index) => (
              <input key={index} type="radio" name="rating" className="mask mask-star-2 bg-orange-400 " checked />
            ))}
            {halfStar && (
              <input type="radio" name="rating" className="mask mask-star-2  bg-orange-400 " style={{ clipPath: 'inset(0 50% 0 0)' }} checked />
            )}
            {[...Array(emptyStars)].map((_, index) => (
              <input key={index} type="radio" name="rating" className="mask mask-star-2 bg-gray-400" />
            ))}
          </>
        );
      };
    
  return (
      <Link to={`/games/${id}`} className='flex flex-col bg-[#2a3d66] transition-all ease-in-out duration-150 hover:scale-105 rounded-xl overflow-hidden ' >
          <div className='h-full w-full relative'>
              <img src={background_image} alt={name} className='w-full h-full object-cover max-h-[300px] ' />
              <div className='absolute right-1 bottom-1 rating rating-md'>
                {renderStars(rating)}
              </div>
          </div>
          <div className='px-4 py-2'>
              <h1 className='poppins-semibold text-lg lg:text-xl mb-2'>{name}</h1>
              <h3 className='mb-1 gr-color lg:text-lg'>
                  release-date: <span className='text-gray-400'>{released ? released : 'null'}</span>
              </h3>
              <h3 className='gr-color lg:text-lg'>
                  last-update: <span className='text-gray-400'>{updated ? updated : 'null'}</span>
              </h3>
          </div>
      </Link> 
  )
}

export default CardGame