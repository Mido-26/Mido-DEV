import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const coontact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const contactOptions = [
    {
      title: 'Schedule a Meeting',
      description: 'Book a time that works best for you',
      response: 'Available within 24hrs',
      link: '#',
      buttonText: 'Schedule Now →',
      gradientFrom: 'from-green-950',
      gradientTo: 'to-purple-800',
      icon: 'far fa-calendar'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Direct message for quick responses',
      response: 'Usually replies in 1hr',
      link: 'https://wa.me/+255628435704',
      buttonText: 'Chat Now →',
      gradientFrom: 'from-blue-800',
      gradientTo: 'to-pink-950',
      icon: 'fab fa-whatsapp'
    },
    {
      title: 'Email Me',
      description: 'Send a detailed message',
      response: 'Replies within 24hrs',
      link: 'mailto:hamiduyusuph00@gmail.com',
      buttonText: 'Send Email →',
      gradientFrom: 'from-pink-800',
      gradientTo: 'to-purple-950',
      icon: 'far fa-envelope'
    },
    {
      title: 'Phone Call',
      description: 'Direct voice conversation',
      response: 'Available for urgent calls',
      link: 'tel:+255628435704',
      buttonText: 'Call Now →',
      gradientFrom: 'from-green-950',
      gradientTo: 'to-pink-800',
      icon: 'fas fa-phone-alt'
    }
  ]

  return (
    <>
      <section className='text-center py-12' id='contacts'>
        <h2 className='text-xl font-bold text-gray-300'>
          <i className='fas fa-handshake text-green-500 mr-2'></i> Let's Connect
        </h2>
        <p className='mt-4 text-gray-300'>
          Choose your preferred way to reach out. I'm available across multiple
          channels for your convenience.
        </p>
      </section>

      {/* location */}
      <div className="flex justify-center items-center my-6">
        <div className='px-4 py-3 rounded-xl border border-gray-200 text-gray-200 font-medium text-[10px] md:text-sm hover:bg-gradient-to-br hover:from-green-800 to-purple-400 cursor-pointer z-10 bg-opacity-5'>
            <i className='fa fa-location-dot mr-2 text-green-600 text-'></i> Dar Es Salaam, Tanzania |
            <i className='far fa-clock mx-2 text-green-600'></i> EAT ( UTC+3 )
        </div>
      </div>
      {/* Contact Options */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-2 lg:px-0'>
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className={`relative bg-transparent hover:bg-gradient-to-br transform-all cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-0  rounded-xl border border-gray-200 overflow-hidden group px-8 py-6 transition-transform duration-300 delay-150 ${ hoveredIndex === index ? `${option.gradientFrom} ${option.gradientTo} ` : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-2 shadow-sm'>
                  <i className={`${option.icon} text-2xl text-green-500 rounded-lg group-hover:text-white duration-300 delay-150`}></i>
                </div>
                <div>
                  <p className='text-gray-200 text-lg group-hover:text-green-500 duration-300 delay-150'>{option.title}</p>
                  <p className='text-gray-400 text-sm'>{option.description}</p>
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-gray-400'>
                  {/* Outlined Timer Icon */}
                  <i className='far fa-clock text-[12px] text-green-500'></i>

                  {/* Timer Text */}
                  <span className='font-[500] text-[12px]'>{option.response}</span>
                </div>

                <a href={`${option.link}`} className='text-green-500 text-sm group-hover:translate-x-2 duration-300 delay-150'>{option.buttonText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='flex justify-center items-center flex-col'>
        <p className='font-bold bg-gradient-to-tr from-green-700 to-purple-700 bg-clip-text text-lg'>Social Media Connect</p>
      </div> */}
      {/* Working time */}
      <div className="flex justify-center items-center my-12">
        <div className='px-4 py-3 rounded-xl border border-gray-200 text-gray-200 font-medium text-[10px] md:text-sm'>
            Preferred working hours: 6 AM - 10 PM EAT
        </div>
      </div>
    </>
  )
}

export default coontact
