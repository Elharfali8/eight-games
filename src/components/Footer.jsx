import React from 'react'

const Footer = () => {
  return (
    <div className='blue-bg-color text-white'>
      <div className="container mx-auto px-4 lg:px-2 xl:px-1 py-6 lg:py-8 flex items-center justify-center" >
        <p className='text-xl lg:text-2xl'>
          &copy; copyright by <span className='text-2xl lg:text-3xl poppins-semibold gr-color'>Logo</span>  {new Date().getFullYear()}
          </p>
      </div>
    </div>
  )
}

export default Footer