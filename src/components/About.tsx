'use client'
import React from 'react'
import { FaMapMarkerAlt, FaLanguage } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[length:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 sm:p-10 space-y-10">
            {/* Main Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Backend Developer with 2 year of experience in building and maintaining
                scalable web applications. Proficient in PHP (CodeIgniter 3, Laravel),
                JavaScript (Express.js, Node.js), MySQL, and MongoDB. Passionate about
                developing secure, efficient, and optimized backend systems.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Strong problem-solving skills and experience in API development, database
                design, and system performance optimization. I enjoy collaborating with
                teams to create robust and scalable solutions that deliver exceptional
                user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 group hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Based in Chandigarh</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 group hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <FaLanguage className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    English (Fluent)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Hindi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 