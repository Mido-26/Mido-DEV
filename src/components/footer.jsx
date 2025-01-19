import { a } from 'framer-motion/client'
import React from 'react'

const footer = () => {
    const socialMedia = [
        {
            icon: 'fab fa-twitter',
            name: 'X',
            link: 'https://x.com/Abuumaryami_008',
        },
        {
            icon: 'fab fa-github',
            name: 'Github',
            link: 'https://github.com/Mido-26/',
        },
        {
            icon: 'fab fa-instagram',
            name: 'Instagram',
            link: 'https://instagram.com/mido_yusuph008',
        },
        {
            icon: 'fab fa-linkedin',
            name: 'linkedin',
            link: '#',
        }
    ]

    /**
     * Returns the current year.
     * @returns {number} The current year.
     */
    function getYear() {
      // Create a new Date object representing the current date and time
      let date = new Date();
      
      // Extract and return the current year from the Date object
      return date.getFullYear();
    }

  return (
    <footer className=' text-gray-300 py-2 border-t border-gray-200 '>
      <div className='max-w-4xl mx-auto text-center flex flex-col lg:flex-row items-center gap-2 justify-between w-full'>
        <p className='text-[10px] md:text-sm' >© {getYear()} Hamidu Yusuph | All Rights Reserved.</p>
        <div className='flex justify-center gap-4 '>
          {socialMedia.map((social, index) => (
            <a
            key={index}
            target='_blank'
             href={`${social.link}`} alt={`${social.name}`} 
             className='border border-gray-100 pt-2 px-2 pb-1 rounded-xl cursor-pointer z-10 hover:bg-gray-200 transition-transform duration-300 delay-150 group'>
                <i
                   className={` ${social.icon} text-xl text-gray-200 text-[12px] md:text-[18px] group-hover:text-slate-900`}>

                </i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default footer
