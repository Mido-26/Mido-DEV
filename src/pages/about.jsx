import React from 'react'
import { Link } from 'react-router-dom'
import Navigate from '../components/navigate'

const about = () => {
  return (
    <>
      <section className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white py-16 px-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center'>
          {/* Profile Picture */}
          <div className='md:w-1/3 flex justify-center mb-8 md:mb-0'>
            <div className='relative group'>
              <img
                src='/img/profile-3.jpg'
                alt='Your Name'
                className='w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-green-500 shadow-xl transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 rounded-full bg-green-500 opacity-10 group-hover:opacity-20 transition duration-300'></div>
            </div>
          </div>

          {/* About Content */}
          <div className='md:w-2/3 md:pl-10'>
            <h2 className='text-2xl md:text-5xl font-bold mb-6 text-center md:text-left'>
              Hello, I'm <span className='text-green-400'>Hamidu Yusuph</span>
            </h2>
            <p className='text-md leading-relaxed text-gray-300 mb-6'>
              A passionate software developer with experience in crafting
              dynamic, scalable web applications and delivering innovative
              solutions. I specialize in technologies like PHP, JavaScript,
              Dart, and MySQL, always striving to bridge creativity and
              functionality.
            </p>
            <div className='cta flex flex-col sm:flex-row gap-4 mt-6 w-full'>
              {/* View Projects Button */}
              <a
                // onClick={() => Navigate('')}
                href='/#projects'
                className='flex items-center justify-center cursor-pointer gap-2 rounded-full bg-green-700 text-white font-semibold py-2 px-4 hover:bg-green-800 transition duration-300 transform hover:scale-105'
              >
                <i className='fas fa-folder-open'></i>
                View Projects
              </a>

              {/* Contact Me Button */}
              <a
                href='https://wa.me/+255628435704'
                className='flex items-center justify-center gap-2 rounded-full border border-green-600 text-green-500 font-semibold py-2 px-4 transition duration-300 transform hover:scale-105'
              >
                <i className='fas fa-envelope'></i>
                Contact Me
              </a>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
