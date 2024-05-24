import React from 'react'
import { Hero, Popular } from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)]'>
      <div className=' main-bg-color'>
        <Hero />
      </div>
      <div className='blue-bg-color'>
      <Popular />
        </div>
    </main>
  )
}

export default Home