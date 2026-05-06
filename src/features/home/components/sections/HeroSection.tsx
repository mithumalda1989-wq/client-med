'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { heroSectionData } from '@/data/home/hero-section.data'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '0px 0px -150px 0px' })

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-light text-sm mb-4">{heroSectionData.tag}</p>
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              {heroSectionData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {heroSectionData.description}
            </p>
            
            <div className="flex gap-4 mb-12">
              {heroSectionData.buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`px-8 py-3 rounded-lg font-light transition ${
                    btn.variant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8">
              {heroSectionData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-light text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-linear-to-br from-blue-200 to-blue-100 h-96 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/images/herobg.jpg" 
                alt="Healthcare Professional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="font-light text-gray-900 mb-1">{heroSectionData.cardBox.title}</p>
              <p className="text-sm text-gray-600">{heroSectionData.cardBox.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
