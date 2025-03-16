'use client'
import React from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaArrowDown, FaFileDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 tracking-tight">
            AKSHAY KUMAR
          </h1>
          <h2 className="text-4xl mb-8 text-blue-200 font-light">
            Web Developer
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100 leading-relaxed">
            Backend Developer with expertise in PHP, JavaScript, and modern web technologies.
            Passionate about creating efficient and scalable web applications.
          </p>
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                  <FaGithub size={32} className="text-blue-200" />
                </div>
              </a>
              <a
                href="mailto:akshaykumarnov125@gmail.com"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                  <FaEnvelope size={32} className="text-blue-200" />
                </div>
              </a>
              <a
                href="tel:8219281855"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                  <FaPhone size={32} className="text-blue-200" />
                </div>
              </a>
            </div>
            <a
              href="/resume/Akshay_Kumar_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200 group"
            >
              <FaFileDownload className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce block">
          <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
            <FaArrowDown size={24} className="text-blue-200" />
          </div>
        </a>
      </div>
    </section>
  )
} 