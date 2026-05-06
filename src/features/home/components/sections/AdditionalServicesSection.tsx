import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Baby, Syringe, Ambulance, TestTube } from 'lucide-react'
import { containerVariants, itemVariants } from '../animationVariants'
import { additionalServicesData } from '@/data/home/additional-services-section.data'

const iconMap: { [key: string]: any } = {
  Baby: Baby,
  Syringe: Syringe,
  Ambulance: Ambulance,
  TestTube: TestTube,
}

export default function AdditionalServicesSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '0px 0px -150px 0px' })

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {additionalServicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition"
                  variants={itemVariants}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h4 className="font-light text-gray-900">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
          <motion.div
            className="bg-gray-200 h-80 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/featureimg.jpg" alt="Additional Services" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
