'use client'
import React from 'react'

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Backend Developer with 1 year of experience in building and maintaining
            scalable web applications. Proficient in PHP (CodeIgniter 3, Laravel),
            JavaScript (Express.js, Node.js), MySQL, and MongoDB. Passionate about
            developing secure, efficient, and optimized backend systems.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Strong problem-solving skills and experience in API development, database
            design, and system performance optimization. I enjoy collaborating with
            teams to create robust and scalable solutions that deliver exceptional
            user experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Location</h3>
              <p className="text-base text-gray-700">Chandigarh</p>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Languages</h3>
              <ul className="text-base text-gray-700 space-y-2">
                <li>English (Fluent)</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 