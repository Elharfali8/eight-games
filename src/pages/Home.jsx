import React from 'react'
import { Hero } from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)] main-bg-color'>
      <div className='container mx-auto px-4 lg:px-2 xl:px-1'>
        <Hero />
      </div>
    </main>
  )
}

export default Home