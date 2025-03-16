'use client'
import React from 'react'
import { FaGraduationCap, FaTrophy, FaCalendar } from 'react-icons/fa'

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="flex items-center">
                <div className="bg-blue-500/10 p-4 rounded-lg">
                  <FaGraduationCap size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor of Science (BSc)</h3>
                  <p className="text-xl text-blue-600 mt-1">T.J.C.M Govt Degree College</p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <FaCalendar className="text-blue-600 mr-2" />
                <p className="text-gray-600 font-medium">2019 - 2024</p>
                <span className="mx-2 text-gray-400">|</span>
                <p className="text-gray-800 font-semibold">GPA: 3.8 / 4.0</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Key Achievements</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <p className="text-gray-700 ml-4 group-hover:text-gray-900 transition-colors duration-300">
                    Maintained excellent academic performance throughout the program
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <p className="text-gray-700 ml-4 group-hover:text-gray-900 transition-colors duration-300">
                    Participated in various technical workshops and coding competitions
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 group-hover:bg-blue-600 transition-colors duration-300"></div>
                  <p className="text-gray-700 ml-4 group-hover:text-gray-900 transition-colors duration-300">
                    Developed strong foundation in computer science fundamentals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 