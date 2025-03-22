'use client'
import React from 'react'
import { FaCode, FaDatabase, FaServer, FaGit, FaPhp, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiCodeigniter, SiLaravel, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens, SiAuth0 } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  gradient: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: <FaCode className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />,
    skills: [
      {
        name: 'PHP (CodeIgniter 3, Laravel)',
        icon: <div className="flex gap-2">
          <FaPhp className="text-indigo-600" />
          <SiCodeigniter className="text-red-600" />
          <SiLaravel className="text-pink-600" />
        </div>
      },
      {
        name: 'Express.js',
        icon: <SiExpress className="text-gray-600" />
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs className="text-green-600" />
      }
    ],
    gradient: 'from-blue-50 to-indigo-50'
  },
  {
    title: 'Database Management',
    icon: <FaDatabase className="text-2xl text-green-600 group-hover:text-green-700 transition-colors duration-300" />,
    skills: [
      {
        name: 'MySQL',
        icon: <SiMysql className="text-blue-600" />
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-600" />
      }
    ],
    gradient: 'from-green-50 to-emerald-50'
  },
  {
    title: 'API Development',
    icon: <FaServer className="text-2xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />,
    skills: [
      {
        name: 'RESTful APIs',
        icon: <FaServer className="text-purple-600" />
      },
      {
        name: 'Authentication (JWT, OAuth)',
        icon: <div className="flex gap-2">
          <SiJsonwebtokens className="text-pink-600" />
          <SiAuth0 className="text-orange-600" />
        </div>
      }
    ],
    gradient: 'from-purple-50 to-fuchsia-50'
  },
  {
    title: 'Version Control',
    icon: <FaGit className="text-2xl text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />,
    skills: [
      {
        name: 'Git',
        icon: <FaGit className="text-orange-600" />
      },
      {
        name: 'GitHub',
        icon: <FaGithub className="text-gray-800" />
      }
    ],
    gradient: 'from-orange-50 to-amber-50'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[length:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:shadow-md transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-4 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center justify-between group/item p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-lg opacity-80 group-hover/item:opacity-100 transition-opacity duration-200">
                          {skill.icon}
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 