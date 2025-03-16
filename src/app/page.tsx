'use client'
import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
} 