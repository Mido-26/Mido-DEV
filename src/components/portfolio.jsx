import React, { useState } from 'react';

const Portfolio = () => {
  const projectData = [
    {
      type: 'Web Development',
      name: 'To Do App',
      description: 'To Do App to manage your daily activities ',
      available: true,
      stack: ['React', 'Tailwind', 'Vite'],
      imgPath: './src/assets/img/To-Do.png',
      link: 'https://to-do-react-q4q6m.kinsta.page/'
    },
    {
      type: 'SaaS',
      name: 'Akiba Smart',
      description: 'Saas product to manage saacos day to day activities',
      available: true,
      stack: ['Laravel', 'Mysql', 'Tailwind'],
      imgPath: './src/assets/img/dashboard.png',
      link: 'https://akibasmart.co.tz'
    },
     {
      type: 'Mobile',
      name: 'Halopesa UI Clone',
      description: 'A clone of the Halopesa UI built with Flutter.',
      available: true,
      stack: ['Flutter', 'Dart'],
      imgPath: './src/assets/img/halopesa_splashPage.png',
      link: 'https://github.com/Mido-26/halopesa_ui.git',
      screenshots: [
        './src/assets/img/halopesa_splashPage.png',
        './src/assets/img/halopesa_login.png',
        './src/assets/img/halopesa_homePage.png',
        './src/assets/img/halopesa_profilePage.png'
      ]
    },
    {
      type: 'Web Development',
      name: 'Ipasi Real Estate',
      description: 'A real estate management platform.',
      available: true,
      stack: ['Html', 'Php', 'Tailwind'],
      imgPath: './src/assets/img/ipasi.png',
      link: 'http://ipasi.co.tz'
    },
    {
      type: 'Web Development',
      name: 'Tech Quorum Solutions',
      description: 'A Landing page for TechQuorum Solutions.',
      available: true,
      stack: ['Html', 'Bootstrap', 'Php'],
      imgPath: './src/assets/img/techQuorum.png',
      link: 'https://tech-quorum.vercel.app/'
    },
    {
      type: 'SaaS',
      name: 'Sanitary Pads PoS',
      description: 'Sales and inventory system for sanitary pads.',
      available: false,
      stack: ['Php', 'Mysql', 'Tailwind'],
      imgPath: './src/assets/img/hq-pads.png',
      link: '#'
    },
    {
      type: 'SaaS',
      name: 'Agribiz Management',
      description: 'Agricultural equipment rental management system.',
      available: true,
      stack: ['Php', 'Mysql', 'Bootstrap', 'Css'],
      imgPath: './src/assets/img/agribiz-equipment.png',
      link: 'http://agribiz.liveblog365.com/'
    },
   
  ];

  const categories = ['All', ...new Set(projectData.map(project => project.type))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredData = selectedCategory === 'All'
    ? projectData
    : projectData.filter(data => data.type === selectedCategory);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleLivePreview = (data) => {
    if (data.available) {
      window.open(data.link, '_blank');
    } else {
      setModalContent('Demo not available for this project.');
      setModalOpen(true);
    }
  };

  const handlePreviewImages = (images) => {
    setGalleryImages(images);
    setImageModalOpen(true);
  };

  return (
    <>
      <section className='py-12 px-8'>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((data, index) => (
            <div
              key={index}
              className="relative bg-transparent rounded-lg shadow-sm border border-gray-200 overflow-hidden group"
            >
              <img
                src={data.imgPath}
                alt={data.name}
                className="w-full max-h-[230px] object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-300">{data.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{data.description}</p>
              </div>

              <div className="absolute inset-0 bg-green-900 bg-opacity-80 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  onClick={() => handleLivePreview(data)}
                  className="py-2 px-4 bg-white text-green-700 font-semibold rounded-md hover:bg-green-700 hover:text-white transition"
                >
                  Live Preview
                </button>

                <a
                  href="https://wa.me/+255628435704"
                  className="py-2 px-4 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-700 transition"
                >
                  Inquire Now
                </a>

                {data.type === 'Mobile' && data.screenshots && (
                  <button
                    onClick={() => handlePreviewImages(data.screenshots)}
                    className="py-2 px-4 bg-white text-green-700 font-semibold rounded-md hover:bg-green-700 hover:text-white transition"
                  >
                    See Screenshots
                  </button>
                )}

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

        {/* Text-only Modal */}
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

        {/* Image Gallery Modal */}
        {isImageModalOpen && (
          <div className="fixed  inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] top-16 p-6 relative">
              <button
                onClick={() => setImageModalOpen(false)}
                className="absolute top-4 right-4 text-green-700 font-bold text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Mobile Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    className="rounded shadow w-full object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
