import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ openAboutModal, openContactModal, openHobbyModal, openPeopleModal, openProjectModal }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = (action) => {
    console.log(`Clicked nav item: ${action.name}`);
    action();
    setNav(false); // Close the mobile menu after clicking a link
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'About', action: openAboutModal },
    { id: 6, text: 'Projects', action: openProjectModal },
    { id: 3, text: 'People', action: openPeopleModal },
    { id: 4, text: 'Contact', action: openContactModal },
    { id: 5, text: 'Hobbies', action: openHobbyModal },
  ];

  return (
   <header className='header'>
     <div className='bg-transparent flex justify-between items-center h-4 md:h-20 max-w-[1240px] mx-auto px-2 text-black'>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden absolute top-6 left-6'>
        {!nav && (
          <AiOutlineMenu size={24} className='cursor-pointer hover:text-gray-600' />
        )}
      </div>

      {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#aabfb8] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
              onClick={() => item.action && handleNavItemClick(item.action)}
            >
              {item.href ? (
                <a href={item.href}>{item.text}</a>) : (
                <a>{item.text}</a>)
              }
            </li>
          ))}
        </ul>
            
      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500'
            : 'fixed md:hidden left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'
        }>
      
      {/* Close Button */}
      {nav && (
          <div onClick={handleNav} className='p-6 hover:text-gray-600 cursor-pointer'>
            <AiOutlineMenu size={24} className='absolute top-6 left-6' />
          </div>
        )}

      <ul>
        
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 ml-2 rounded-xl hover:bg-[#aabfb8] duration-300 hover:text-white cursor-pointer'
            onClick={() => item.action ? handleNavItemClick(item.action) : handleNav()}
          >
            <a href={item.href || '#'} className="block w-full h-full">{item.text}</a>
          </li>
        ))}

      </ul>
      </div>
      </div>
   </header>
  )
}

export default Navbar
