'use client'
import React from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaArrowDown, FaFileDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 tracking-tight">
            AKSHAY KUMAR
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-blue-200 font-light">
            Web Developer
          </h2>
          <div className="w-16 xs:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-blue-100 leading-relaxed px-4">
            Backend Developer with expertise in PHP, JavaScript, and modern web technologies.
            Passionate about creating efficient and scalable web applications.
          </p>
          
          <div className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6 md:space-x-8 mb-6 sm:mb-8 md:mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <div className="bg-white/10 p-2 xs:p-3 sm:p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                <FaGithub size={20} className="xs:text-[24px] sm:text-[28px] md:text-[32px] text-blue-200" />
              </div>
            </a>
            <a
              href="mailto:akshaykumarnov125@gmail.com"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <div className="bg-white/10 p-2 xs:p-3 sm:p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                <FaEnvelope size={20} className="xs:text-[24px] sm:text-[28px] md:text-[32px] text-blue-200" />
              </div>
            </a>
            <a
              href="tel:8219281855"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <div className="bg-white/10 p-2 xs:p-3 sm:p-4 rounded-full backdrop-blur-sm hover:bg-white/20">
                <FaPhone size={20} className="xs:text-[24px] sm:text-[28px] md:text-[32px] text-blue-200" />
              </div>
            </a>
          </div>
          <a
            href="/resume/akshay_Kumar_Resume.pdf"
            download="akshay_Kumar_Resume.pdf"
            className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xs xs:text-sm sm:text-base font-semibold transition-colors duration-200 group"
          >
            <FaFileDownload className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-6 xs:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/10 p-2 xs:p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-200">
          <FaArrowDown size={18} className="xs:text-[20px] sm:text-[24px] text-blue-200" />
        </div>
      </a>
    </section>
  )
} 