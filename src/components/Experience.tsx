'use client'
import React from 'react'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const experiences = [
  {
    company: 'Eracom Technologies Pvt Ltd',
    position: 'Backend Developer',
    period: '2024 - 2025',
    achievements: [
      'Developed and maintained backend systems using CodeIgniter 3, Laravel, and Express.js',
      'Designed and optimized RESTful APIs to enhance system efficiency and performance',
      'Managed database schemas and wrote efficient queries for MySQL & MongoDB',
      'Implemented authentication mechanisms using JWT and OAuth',
      'Integrated third-party APIs for payment processing, email services, and data handling',
      'Collaborated with frontend developers to ensure seamless integration of backend and UI components',
      'Debugged and optimized application performance'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="experience">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-500/10 p-3 sm:p-4 rounded-lg">
                    <FaBriefcase size={20} className="sm:text-[24px] text-blue-600" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-lg sm:text-xl text-blue-600 mt-1">{exp.position}</p>
                  </div>
                </div>
                <div className="flex items-center mt-3 sm:mt-0">
                  <FaCalendar className="text-blue-600 mr-2" />
                  <p className="text-sm sm:text-base text-gray-600 font-medium">{exp.period}</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                    <p className="text-sm sm:text-base text-gray-700 ml-3 sm:ml-4 group-hover:text-gray-900 transition-colors duration-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 