import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { FaDiscord } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className=' mb-10'>
        <div className='flex justify-between px-20 py-4'>
            <div>
                <h1 className='font-bold'>Hira<span className='text-primary text-3xl'>X</span>Rey</h1>
            </div>
            <div>
                <ul className='flex gap-4 justify-center items-center'>
                    <div className='flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white shadow-lg'>
                        <ShoppingBag size={20} />
                        <li>Purchase</li>
                    </div>
                    <div className='flex items-center gap-2 bg-[#7e61ab] px-4 py-2 rounded-lg text-white shadow-lg'>
                        <FaDiscord />
                        <li className=''>Discord</li>
                    </div>
                </ul>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Navbar