import React from 'react'

const aboutme = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img
              src="./src/assets/profile-3.jpg"
              alt="Your Name"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 group-hover:opacity-20 transition duration-300"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-2/3 md:pl-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Hello, I'm <span className="text-blue-400">[Your Name]</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            A passionate software developer with experience in crafting dynamic, scalable web applications and delivering innovative solutions. I specialize in technologies like PHP, JavaScript, Dart, and MySQL, always striving to bridge creativity and functionality.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-400 px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default aboutme
