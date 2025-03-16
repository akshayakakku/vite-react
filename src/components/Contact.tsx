'use client'
import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface ContactInfo {
  icon: IconType
  label: string
  value: string
  href: string | null
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'akshaykumarnov125@gmail.com',
    href: 'mailto:akshaykumarnov125@gmail.com'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '8219281855',
    href: 'tel:8219281855'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Chandigarh',
    href: null
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com'
  }
]

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500/10 p-4 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4 text-gray-900">{info.label}</h3>
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block ml-16"
                        target={info.label === 'GitHub' ? '_blank' : undefined}
                        rel={info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 ml-16">{info.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 