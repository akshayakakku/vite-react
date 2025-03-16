'use client'
import React from 'react'
import { FaCode, FaDatabase, FaServer, FaGit, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { SiCodeigniter, SiMongodb, SiMysql, SiAuth0 } from 'react-icons/si'

interface SkillCategory {
  icon: IconType
  items: {
    name: string
    icon: IconType
  }[]
}

const skills: Record<string, SkillCategory> = {
  'Backend Development': {
    icon: FaCode,
    items: [
      { name: 'PHP (CodeIgniter 3, Laravel)', icon: FaPhp },
      { name: 'Express.js', icon: FaNodeJs },
      { name: 'Node.js', icon: FaNodeJs }
    ]
  },
  'Frontend Technologies': {
    icon: FaCode,
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs }
    ]
  },
  'Database Management': {
    icon: FaDatabase,
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb }
    ]
  },
  'API Development': {
    icon: FaServer,
    items: [
      { name: 'RESTful APIs', icon: FaServer },
      { name: 'Authentication (JWT, OAuth)', icon: SiAuth0 }
    ]
  },
  'Version Control': {
    icon: FaGit,
    items: [
      { name: 'Git', icon: FaGit },
      { name: 'GitHub', icon: FaGit }
    ]
  }
}

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" id="skills">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <div 
              key={category} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Icon size={24} className="sm:text-[28px] text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4 text-gray-900">{category}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <li key={item.name} className="flex items-center text-sm sm:text-base text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                        <ItemIcon className="text-blue-500 mr-2 text-lg sm:text-xl" />
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 