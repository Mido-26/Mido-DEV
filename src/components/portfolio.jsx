import React, { useState } from 'react'
import Pattern from './pattern'

const portfolio = () => {
  const projectData = [
    {
      type: 'Web Development',
      name: 'To Do App',
      description: 'To Do App to manage your daily activities ',
      available: true,
      stack: ['React', 'Tailwind', 'Vite'],
      imgPath: '/img/To-Do.png',
      link: 'https://to-do-react-q4q6m.kinsta.page/'
    },
    {
      type: 'SaaS',
      name: 'Saccos Management',
      description: 'Saas product to manage saacos day to day activities',
      available: false,
      stack: ['Laravel', 'Mysql', 'Tailwind'],
      imgPath: '/img/dashboard.png',
      link: '#'
    },
    {
      type: 'Web Development',
      name: 'Ipasi Real Estate',
      description: 'A visually appealing and responsive landing page designed to showcase real estate services, property listings, and drive client engagement through modern design and clear calls to action.',
      available: true,
      stack: ['Html', 'Php', 'Tailwind CSS'],
      imgPath: '/img/ipasi.png',
      link: 'http://ipasi.co.tz'
    },
    {
      type: 'Web Development',
      name: 'Tech Quorum Solutions',
      description: 'A Landing page TechQuorums Solutions ',
      available: true,
      stack: ['Html', 'Bootstrap', 'Php'],
      imgPath: '/img/techQuorum.png',
      link: 'https://tech-quorum.vercel.app/'
    },
    {
      type: 'SaaS',
      name: 'Sanitary Pads PoS',
      description:
        'A SaaS solution designed to streamline the sales, inventory, and management of sanitary pads for efficient retail operations.',

      available: false,
      stack: ['Php', 'Mysql', 'Tailwind'],
      imgPath: '/img/hq-pads.png',
      link: '#'
    },
    {
      type: 'SaaS',
      name: 'Agribiz Management',
      description: 'An  Agriculturral product designed to Streamline the rental and management of agricultural  machinaries.',
      available: true,
      stack: ['Php', 'Mysql', 'Bootstrap', 'Css'],
      imgPath: '/img/agribiz-equipment.png',
      link: 'http://agribiz.liveblog365.com/'
    }
  ]

  const categories = [
    'All',
    ...new Set(projectData.map(project => project.type))
  ]

  // selected cartegory
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredData =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter(data => data.type === selectedCategory);


  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleLivePreview = (data) => {
    if (data.available) {
      window.open(data.link, '_blank'); // Opens the live link
    } else {
      setModalContent('Demo not available for this project.');
      setModalOpen(true); // Displays the modal
    }
  };

  return (
    <>
      {/* my projects */}
      <section className='py-12 px-8 ' id='projects'>
        {/* Section Header */}
        <h2 className='text-xl font-bold text-center flex items-center justify-center gap-2 mb-8 text-gray-300'>
          <i className='fas fa-laptop-code text-green-500'></i> My Projects
        </h2>

        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8'>
          {categories.map(category => (
            <button
              key={category}
              className={`py-2 px-4 rounded-full transition cursor-pointer z-10 ${
                selectedCategory === category
                  ? 'bg-green-700 text-white'
                  : 'border border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((data, index) => (
          <div
            key={index}
            className="relative bg-transparent rounded-lg shadow-sm border border-gray-200 overflow-hidden group"
          >
            {/* Project Image */}
            <img
              src={data.imgPath}
              alt={data.name}
              className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-300">{data.name}</h3>
              <p className="text-gray-200 text-sm mt-2">{data.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-green-900 bg-opacity-80 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Live Preview Button */}
              <button
                onClick={() => handleLivePreview(data)}
                className="py-2 px-4 bg-white text-green-700 font-semibold rounded-md hover:bg-green-700 hover:text-white transition"
              >
                Live Preview
              </button>

              {/* Inquire Now Button */}
              <a
                href="https://wa.me/+255628435704"
                className="py-2 px-4 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-700 transition"
              >
                Inquire Now
              </a>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-sm text-white mt-4">
                {data.stack.map((stack, idx) => (
                  <span
                    key={idx}
                    className="py-1 px-2 bg-green-700 rounded-lg shadow-sm"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Notice</h2>
            <p className="text-gray-700">{modalContent}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 py-2 px-4 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </section>
    </>
  )
}

export default portfolio
