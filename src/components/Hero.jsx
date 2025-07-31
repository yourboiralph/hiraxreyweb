import { User } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto max-w-screen-2xl mt-5'>
      <div className='flex flex-col justify-center gap-10'>
        <div>
          <h1 className='font-bold text-4xl'>The best <span className='text-primary'>ADOPT ME</span> Script</h1>
          <p className='text-md'>For Farming. For Fun. For Earning.</p>
        </div>
        <div className='grid grid-cols-4 mx-auto gap-10'>
          <div className='border border-primary p-4 bg-primary rounded-md shadow-lg'>
            <h1 className='text-white text-lg'>Total Clients</h1>
            <div className='flex items-center justify-center mt-2'>
              <User color='white' />
              <p className='text-white font-bold'>100</p>
            </div>
          </div>
          <div className='border border-primary p-4 bg-primary rounded-md shadow-lg'>
            <h1 className='text-white text-lg'>Total Clients</h1>
            <div className='flex items-center justify-center mt-2'>
              <User color='white' />
              <p className='text-white font-bold'>100</p>
            </div>
          </div>
          <div className='border border-primary p-4 bg-primary rounded-md shadow-lg'>
            <h1 className='text-white text-lg'>Total Clients</h1>
            <div className='flex items-center justify-center mt-2'>
              <User color='white' />
              <p className='text-white font-bold'>100</p>
            </div>
          </div>
          <div className='border border-primary p-4 bg-primary rounded-md shadow-lg'>
            <h1 className='text-white text-lg'>Total Clients</h1>
            <div className='flex items-center justify-center mt-2'>
              <User color='white' />
              <p className='text-white font-bold'>100</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img src="/AWPui.svg" alt="AWPui" />
        </div>
      </div>
    </div>
  )
}

export default Hero