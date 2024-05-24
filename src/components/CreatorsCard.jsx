import React from 'react'

const CreatorsCard = ({id,name, image, positions}) => {
  return (
      <div className='flex flex-col items-center justify-center p-4 main-bg-color rounded-xl transition-all ease-in-out duration-150 hover:scale-95'>
          <div className="avatar mb-4">
            <div className="w-24 rounded-full">
                <img src={image} alt={name} />
            </div>
          </div>
          <h1 className='poppins-medium capitalize text-lg lg:text-xl mb-2'>{name}</h1>
          <div className='flex flex-wrap gap-3 lg:text-lg text-gray-400 ' >
              {positions?.map((p) => {
                  const { id, name } = p
                  return (
                      <h3 key={id}>
                          {name}
                      </h3>
                  )
              })}
          </div>
    </div>
  )
}

export default CreatorsCard