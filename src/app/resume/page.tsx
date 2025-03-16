'use client'
import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaPrint } from 'react-icons/fa'
import './print.css'

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="fixed top-4 right-4 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaPrint className="mr-2" />
          Print Resume
        </button>
      </div>
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">AKSHAY KUMAR</h1>
          <h2 className="text-xl text-gray-600 mt-2">Web Developer</h2>
          <div className="flex justify-center space-x-4 mt-4 text-gray-600">
            <a href="mailto:akshaykumarnov125@gmail.com" className="flex items-center">
              <FaEnvelope className="mr-2" /> akshaykumarnov125@gmail.com
            </a>
            <a href="tel:8219281855" className="flex items-center">
              <FaPhone className="mr-2" /> 8219281855
            </a>
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Chandigarh
            </span>
            <a href="https://github.com" className="flex items-center">
              <FaGithub className="mr-2" /> github.com
            </a>
          </div>
        </div>

        {/* Profile */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">Profile</h3>
          <p className="text-gray-700">
            Backend Developer with 1 year of experience in building and maintaining scalable web applications.
            Proficient in PHP (CodeIgniter 3, Laravel), JavaScript (Express.js, Node.js), MySQL, and MongoDB.
            Passionate about developing secure, efficient, and optimized backend systems.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900">Backend Development</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>PHP (CodeIgniter 3, Laravel)</li>
                <li>Express.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Frontend Technologies</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Database Management</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Other Skills</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>RESTful APIs</li>
                <li>Authentication (JWT, OAuth)</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">Experience</h3>
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Backend Developer</h4>
                <p className="text-gray-600">Eracom Technologies Pvt Ltd</p>
              </div>
              <p className="text-gray-600">2024 - 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed and maintained backend systems using CodeIgniter 3, Laravel, and Express.js</li>
              <li>Designed and optimized RESTful APIs to enhance system efficiency and performance</li>
              <li>Managed database schemas and wrote efficient queries for MySQL & MongoDB</li>
              <li>Implemented authentication mechanisms using JWT and OAuth</li>
              <li>Integrated third-party APIs for payment processing, email services, and data handling</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-4">Education</h3>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science (BSc)</h4>
                <p className="text-gray-600">T.J.C.M Govt Degree College</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">2019 - 2024</p>
                <p className="text-gray-900">GPA: 3.8/4.0</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Maintained excellent academic performance throughout the program</li>
              <li>Participated in various technical workshops and coding competitions</li>
              <li>Developed strong foundation in computer science fundamentals</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
} 