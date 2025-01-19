import React, { useState } from 'react'

const navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation links object
  const navLinks = [
    { name: 'Projects', href: '#project', icon: 'fas fa-laptop-code' },
    { name: 'Skills', href: '#', icon: 'fas fa-tools' },
    { name: 'Portfolio', href: '#', icon: 'fas fa-folder-open' },
    { name: 'Contact', href: '#contacts', icon: 'fas fa-envelope' }
  ]

  return (
    <div className='sticky top-0 z-[99]'>
      <div className='border-b-2 border-green-800'>
        <nav className='mx-auto flex justify-between items-center px-6 md:px-8 py-4 w-full bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md'>
          {/* Logo */}
          <div>
            <h3 className='cursor-pointer text-lg font-bold bg-gradient-to-r from-green-600 to-purple-500 bg-clip-text text-transparent animate-gradientText'>
              {'< Hamidu Yusuph />'}
              <span className='text-gray-300'> | Full Stack Developer</span>
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex'>
            <ul className='flex gap-6 text-gray-300 font-medium'>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className='cursor-pointer hover:text-green-700 transition duration-300'
                >
                  <a href={link.href} className='flex items-center'>
                    <i className={`${link.icon} mr-2`}></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Icon Section */}
          <div className='flex items-center gap-4'>
            {/* Small Icon */}
            <button
              className="lg:[css-button-retro--green]  text-white font-medium py-2 px-2 rounded-md transition duration-300 flex items-center"
              aria-label="Schedule Appointment"
            >
              <i className="fas fa-calendar-check mr-2"></i> <span className='hidden lg:inline-block'>Schedule Appointment</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-green-700 text-2xl focus:outline-none'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle Mobile Menu'
            >
              <i
                className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}
              ></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border-t border-green-800 px-6 py-4'>
            <ul className='flex flex-col gap-4 text-gray-300 font-medium'>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className='cursor-pointer hover:text-green-700 transition duration-300'
                >
                  <a href={link.href} className='flex items-center'>
                    <i className={`${link.icon} mr-2`}></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default navbar
