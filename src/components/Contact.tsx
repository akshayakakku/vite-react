'use client'
import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4 text-gray-900">Get in Touch</h2>
          <div className="w-16 xs:w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          <div className="bg-white rounded-xl shadow-lg p-4 xs:p-6 sm:p-8">
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-3 xs:mb-4">Contact Information</h3>
            <div className="space-y-3 xs:space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-500/10 p-2 xs:p-3 rounded-lg">
                  <FaEnvelope size={18} className="xs:text-[20px] text-blue-600" />
                </div>
                <a href="mailto:akshayakakku@gmail.com" className="ml-3 xs:ml-4 text-sm xs:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  akshayakakku@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500/10 p-2 xs:p-3 rounded-lg">
                  <FaPhone size={18} className="xs:text-[20px] text-blue-600" />
                </div>
                <a href="tel:+1234567890" className="ml-3 xs:ml-4 text-sm xs:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500/10 p-2 xs:p-3 rounded-lg">
                  <FaMapMarkerAlt size={18} className="xs:text-[20px] text-blue-600" />
                </div>
                <span className="ml-3 xs:ml-4 text-sm xs:text-base text-gray-700">
                  New York, NY
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 xs:p-6 sm:p-8">
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-3 xs:mb-4">Social Media</h3>
            <div className="flex space-x-3 xs:space-x-4">
              <a href="https://github.com/akshayakakku" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-100 p-2 xs:p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
                <FaGithub size={20} className="xs:text-[24px] text-gray-700 hover:text-blue-600" />
              </a>
              <a href="https://linkedin.com/in/akshayakakku" target="_blank" rel="noopener noreferrer"
                className="bg-gray-100 p-2 xs:p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
                <FaLinkedin size={20} className="xs:text-[24px] text-gray-700 hover:text-blue-600" />
              </a>
              <a href="https://twitter.com/akshayakakku" target="_blank" rel="noopener noreferrer"
                className="bg-gray-100 p-2 xs:p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
                <FaTwitter size={20} className="xs:text-[24px] text-gray-700 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 