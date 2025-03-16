'use client'
import React from 'react'
import { FaCode, FaDatabase, FaServer, FaGit } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface SkillCategory {
  icon: IconType
  items: string[]
}

const skills: Record<string, SkillCategory> = {
  'Backend Development': {
    icon: FaCode,
    items: ['PHP (CodeIgniter 3, Laravel)', 'Express.js', 'Node.js']
  },
  'Frontend Technologies': {
    icon: FaCode,
    items: ['HTML', 'CSS', 'JavaScript']
  },
  'Database Management': {
    icon: FaDatabase,
    items: ['MySQL', 'MongoDB']
  },
  'API Development': {
    icon: FaServer,
    items: ['RESTful APIs', 'Authentication (JWT, OAuth)']
  },
  'Version Control': {
    icon: FaGit,
    items: ['Git', 'GitHub']
  }
}

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <div 
              key={category} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900">{category}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="group-hover:text-blue-700 transition-colors duration-300">{item}</span>
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