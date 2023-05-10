import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className='flex justify-around bg-sky-600 p-4 text-white fixed w-[100%]'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> 
    </div>
    </>
  )
}

export default Header