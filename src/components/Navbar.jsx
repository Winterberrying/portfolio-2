import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className='header'>
    <NavLink to='/' className='w-10 h-10 rounded-lg bg-white
    items-center justify-center flex font-bold shadhow-md'>
      <p className='green-gradient_text'>CH</p>
    </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/about' className={({ isActive}) => isActive ? 
      'text-green-500' : 'text-black'}>
        About
      </NavLink>
      <NavLink to='/projects' className={({ isActive}) => isActive ? 
      'text-green-500' : 'text-black'}>
        Projects
      </NavLink>
      <NavLink to='/contact' className={({ isActive}) => isActive ? 
      'text-green-500' : 'text-black'}>
        Contact
      </NavLink>
      <NavLink to='/hobbies' className={({ isActive}) => isActive ? 
      'text-green-500' : 'text-black'}>
        Hobbies
      </NavLink>
      <NavLink to='/people' className={({ isActive}) => isActive ? 
      'text-green-500' : 'text-black'}>
        People
      </NavLink>
    </nav>
   </header>
  )
}

export default Navbar
