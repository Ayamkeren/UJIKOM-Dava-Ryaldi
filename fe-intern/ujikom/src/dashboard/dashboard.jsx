import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
        <div className='w-64 bg-[#120C34] text-fuchsia-400 p-4 flex flex-col gap-4 relative font-poppins font-bold text-xl text-center border-b'>
        <span className='text-3xl'><Link to="/home">ToyAdmin</Link></span>
        <div className='ml-3 mt-3 '>
            <Link to="/admin" className='flex items-center gap-2 px-4 py-2 text-white hover:bg-[#27315e] rounded transition mt-4'>Home</Link>
            <Link to="/admin2" className='flex items-center gap-2 px-4 py-2 text-white hover:bg-[#27315e] rounded transition mt-3'>Toys</Link>
            <Link to="/admin3" className='flex items-center gap-2 px-4 py-2 text-white hover:bg-[#27315e] rounded transition mt-3'>Transaksi</Link>
            <Link to="/admin4" className='flex items-center gap-2 px-4 py-2 text-white hover:bg-[#27315e] rounded transition mt-3'>Customer</Link>

        </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Dashboard;