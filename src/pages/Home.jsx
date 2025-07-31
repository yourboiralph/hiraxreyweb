import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-400 to-blue-200 text-foreground overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home