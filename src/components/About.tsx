'use client'
import React from 'react'

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Backend Developer with 1 year of experience in building and maintaining
            scalable web applications. Proficient in PHP (CodeIgniter 3, Laravel),
            JavaScript (Express.js, Node.js), MySQL, and MongoDB. Passionate about
            developing secure, efficient, and optimized backend systems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Strong problem-solving skills and experience in API development, database
            design, and system performance optimization. I enjoy collaborating with
            teams to create robust and scalable solutions that deliver exceptional
            user experiences.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-700">Chandigarh</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="text-gray-700">
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