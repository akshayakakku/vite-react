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
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-white" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4 text-gray-900">Work Experience</h2>
          <div className="w-16 xs:w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-4 xs:space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4 xs:p-6 sm:p-8">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between mb-3 xs:mb-4">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-1 xs:mb-0">{exp.company}</h3>
                  <span className="text-xs xs:text-sm text-gray-500">{exp.period}</span>
                </div>
                <h4 className="text-sm xs:text-base sm:text-lg font-medium text-blue-600 mb-2 xs:mb-3">{exp.position}</h4>
                <ul className="space-y-1.5 xs:space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-xs xs:text-sm text-gray-700">
                      <span className="text-blue-500 mr-1.5 xs:mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 