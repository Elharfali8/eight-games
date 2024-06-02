import React from 'react'

const SearchInput = ({inputValue, handleInput, handleSearch, clearInput}) => {


  return (
      <div className='flex flex-col  justify-center items-center w-full mt-6 lg:mt-8'>
              <input type="text" className='w-full max-w-[650px] py-2 rounded-lg  poppins-medium text-lg pl-2 focus:outline-none text-black lg:text-xl ' value={inputValue} onChange={handleInput} placeholder='Search for a game...' />
      <div className='flex items-center w-full md:w-auto mt-3 gap-x-3'>
        <button type="button" className=' w-full px-12 py-2 flex items-center justify-center rounded-lg bg-[#342056] text-lg lg:text-xl poppins-regular tracking-widest' onClick={handleSearch}>Search</button>
        <button type="button" className=' w-full px-12 py-2 flex items-center justify-center rounded-lg bg-red-400 text-lg lg:text-xl poppins-regular tracking-widest' onClick={clearInput}>Clear</button>
              </div>
    </div>
  )
}

export default SearchInput