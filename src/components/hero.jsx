import React from 'react'
import Pattern from './pattern'

const hero = () => {
  const stack = [
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Express', icon: 'fas fa-server', color: 'text-gray-300' },
    { name: 'PHP', icon: 'fab fa-php', color: 'text-indigo-600' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-600' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
    { name: 'Tailwind', icon: 'fas fa-code', color: 'text-teal-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-orange-500' },
    // { name: 'Dart', icon: 'fas fa-database', color: 'text-blue-400' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', color: 'text-blue-500' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-orange-500' }
  ]
  return (
    <>
      {/* Hero Section */}
      <section className='w-full h-auto lg:max-h-[650px] flex flex-col lg:flex-row justify-evenly items-center py-4 lg:py-12 gap-8'>
        {/* Left Content */}
        <div className='flex flex-col items-start gap-6   lg:pt-6 px-12 max-w-4xl'>
          {/* Animated Heading */}
          <h1 className='font-extrabold text-5xl text-gray-100 leading-tight animate-slideIn'>
            Building Digital <br />
            <span className='bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent animate-bounce'>
              Excellence
            </span>
          </h1>

          {/* Description */}
          <p className='text-gray-300 text-lg animate-fadeIn delay-100'>
            Experienced Full Stack Developer dedicated to building innovative,
            user-centric web solutions using the latest technologies and best
            practices
          </p>

          {/* Animated Stacks */}
          <div className='stacks flex flex-wrap gap-4 mt-4 animate-fadeIn delay-200'>
            {stack.map(stack => (
              <a
                href='#'
                key={stack.name}
                className={`flex items-center gap-1 px-3 py-1 border rounded-full  transition duration-300 ${stack.color} transform hover:scale-105`}
              >
                <i className={`${stack.icon} text-lg`}></i>
                <span className='text-sm font-medium'>{stack.name}</span>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className='cta flex flex-col sm:flex-row gap-4 mt-6 w-full'>
            {/* View Projects Button */}
            <a
              href='#projects'
              className='flex items-center justify-center gap-2 rounded-full bg-green-700 text-white font-semibold py-2 px-4 hover:bg-green-800 transition duration-300 transform hover:scale-105'
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

            {/* Hire Me Button */}
            {/* <a
              href='#'
              className='flex items-center justify-center gap-2 rounded-full border border-yellow-500 text-yellow-500 font-semibold py-2 px-4  transition duration-300 transform hover:scale-105 animate-bounce'
            >
              <i className='fas fa-user-tie'></i>
              Hire Me
            </a> */}
          </div>
        </div>

        {/* Right Image */}
        <div className='w-1/3 hidden  h-full lg:flex justify-center items-center animate-zoomIn delay-400 relative p-8'>
        <Pattern />
          <img
            src='./assets/img/hero.png'
            alt='MidoDEV'
            className='w-full h-auto max-w-[350px] shadow-sm rounded-lg'
          />
        </div>
      </section>
    </>
  )
}

export default hero
