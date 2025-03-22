'use client'
import React from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaArrowDown, FaFileDownload, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-blue-950 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0)_0%,rgba(88,28,135,0.15)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/25 to-purple-600/25 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white/10 shadow-xl backdrop-blur-sm transform group-hover:scale-[1.01] transition-all duration-300">
              <Image
                src="/images/profile.jpg"
                alt="Akshay Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
                Hi, I'm AKSHAY KUMAR
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-light tracking-wide">
                Web Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed [text-shadow:_0_1px_1px_rgb(0_0_0_/_10%)]">
              Backend Developer with expertise in PHP, JavaScript, and modern web technologies.
              Passionate about creating efficient and scalable web applications.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
              {[
                { href: "https://github.com", icon: FaGithub, label: "GitHub" },
                { href: "mailto:akshaykumarnov125@gmail.com", icon: FaEnvelope, label: "Email" },
                { href: "tel:8219281855", icon: FaPhone, label: "Phone" },
                { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 text-gray-300 hover:text-white transition-all duration-300 relative"
                  aria-label={social.label}
                >
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  <social.icon className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="/resume/Akshay_Kumar_Resume.pdf"
                download
                className="group relative inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaFileDownload className="mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center px-6 py-3 border border-blue-300/20 text-blue-200 rounded-lg overflow-hidden hover:border-blue-300/30 transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="group p-3 text-gray-400 hover:text-white transition-all duration-300 relative"
          aria-label="Scroll to About section"
        >
          <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></span>
          <FaArrowDown className="text-xl relative z-10 animate-bounce" />
        </a>
      </div>
    </section>
  )
} 