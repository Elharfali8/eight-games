import React from 'react'

const SearchInput = ({inputValue, handleInput, handleSearch}) => {


  return (
      <div className='flex justify-center items-center w-full mt-6 lg:mt-8'>
              <input type="text" className='w-full max-w-[650px] h-[34px] rounded-tl-lg rounded-bl-lg poppins-medium text-lg pl-2 focus:outline-none text-black lg:text-xl py-1' value={inputValue} onChange={handleInput} placeholder='Search for a game...' />
              <button type="button" className='h-[34px] px-4 flex items-center justify-center rounded-tr-lg rounded-br-lg bg-[#342056] text-lg lg:text-xl poppins-regular tracking-widest' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchInput