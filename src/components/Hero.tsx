'use client'
import React, { useState, useRef } from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaArrowDown, FaFileDownload, FaCamera } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const [profileImage, setProfileImage] = useState('/images/profile.jpg')
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB')
      return
    }

    setIsUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image')
      }

      setProfileImage(data.filename)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Profile Picture Section */}
          <div className="w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-blue-200/20 shadow-2xl group">
              <Image
                src={profileImage}
                alt="Akshay Kumar"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <label className="cursor-pointer p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200">
                  <FaCamera className="text-white text-2xl" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={isUploading}
                  />
                </label>
              </div>
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
            )}
            {isUploading && (
              <p className="text-blue-200 text-sm mt-2 text-center">Uploading...</p>
            )}
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 tracking-tight">
              AKSHAY KUMAR
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-blue-200 font-light">
              Web Developer
            </h2>
            <div className="w-16 xs:w-20 h-1 bg-blue-500 mx-auto lg:mx-0 mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 text-blue-100 leading-relaxed px-4 lg:px-0">
              Backend Developer with expertise in PHP, JavaScript, and modern web technologies.
              Passionate about creating efficient and scalable web applications.
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-3 xs:space-x-4 sm:space-x-6 md:space-x-8 mb-6 sm:mb-8 md:mb-12">
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
              href="/resume/Akshay_Kumar_Resume.pdf"
              download
              className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xs xs:text-sm sm:text-base font-semibold transition-colors duration-200 group"
            >
              <FaFileDownload className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
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