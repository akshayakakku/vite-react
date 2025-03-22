'use client'
import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  link?: string
  gradient: string
  hoverColor: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FaEnvelope className="text-2xl sm:text-3xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />,
    label: 'Email',
    value: 'akshaykumarnov125@gmail.com',
    link: 'mailto:akshaykumarnov125@gmail.com',
    gradient: 'from-blue-50 to-indigo-50',
    hoverColor: 'group-hover:text-blue-700'
  },
  {
    icon: <FaPhone className="text-2xl sm:text-3xl text-green-600 group-hover:text-green-700 transition-colors duration-300" />,
    label: 'Phone',
    value: '8219281855',
    link: 'tel:8219281855',
    gradient: 'from-green-50 to-emerald-50',
    hoverColor: 'group-hover:text-green-700'
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />,
    label: 'Location',
    value: 'Chandigarh',
    gradient: 'from-purple-50 to-fuchsia-50',
    hoverColor: 'group-hover:text-purple-700'
  },
  {
    icon: <FaGithub className="text-2xl sm:text-3xl text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />,
    label: 'GitHub',
    value: 'github.com',
    link: 'https://github.com',
    gradient: 'from-orange-50 to-amber-50',
    hoverColor: 'group-hover:text-orange-700'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-[length:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:shadow-md transition-all duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${info.hoverColor} transition-colors duration-300`}>
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-gray-700 ${info.hoverColor} transition-colors duration-300 hover:underline`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className={`text-gray-700 ${info.hoverColor} transition-colors duration-300`}>
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 