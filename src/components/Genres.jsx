import React from 'react'

const Genres = ({ genArr, category, handleCategoryBtn }) => {
    const sortedGenArr = ['all', ...genArr.sort((a, b) => a.localeCompare(b))];

  return (
    <div className='lg:sticky lg:top-[90px] '>
                      <h3 className='text-2xl lg:text-3xl text-white poppins-medium tracking-wider mb-8 lg:mb-10'>Genres :</h3>
                      <div className='grid place-content-start grid-cols-3 lg:grid-cols-2  text-white gap-4 '>
                      {sortedGenArr?.map((g, index) => {
                            const genreLowerCase = g.toLowerCase();
                            return (
                            <button
                                type="button"
                                key={index}
                                className={`
                                px-3 py-2 rounded-xl ${genreLowerCase === category ? 'bg-[#7fcbd7] main-color' : 'bg-[#208c8c]'}
                                `}
                                value={g}
                                onClick={handleCategoryBtn}
                            >
                                {g}
                            </button>
                            );
                        })}
                      </div>
                  </div>
  )
}

export default Genres