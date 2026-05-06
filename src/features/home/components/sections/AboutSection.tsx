import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutSectionData } from '@/data/home/about-section.data'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '0px 0px -150px 0px' })

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-light text-sm mb-4">{aboutSectionData.tag}</p>
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              {aboutSectionData.title}
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {aboutSectionData.story}
            </p>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {aboutSectionData.features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-blue-600 font-light text-xl flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-light text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-blue-600 font-light hover:underline flex items-center gap-2">
              Learn more →
            </button>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 h-96 rounded-2xl overflow-hidden">
              <img 
                src="/images/featureimg.jpg" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
