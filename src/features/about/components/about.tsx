import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutPageData as data } from '@/data/about/about.data'

export default function About() {
  const statsRef = useRef(null)
  const valuesRef = useRef(null)
  const accrRef = useRef(null)

  const statsInView = useInView(statsRef, { once: true, margin: '0px 0px -100px 0px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '0px 0px -100px 0px' })
  const accrInView = useInView(accrRef, { once: true, margin: '0px 0px -100px 0px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="w-full overflow-x-hidden">
      <section className="bg-linear-to-r from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-light text-gray-900 mb-4">{data.header.title}</h1>
          <p className="text-gray-600 text-lg">
            {data.header.description}
          </p>
        </div>
      </section>

    
      <section ref={statsRef} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
                {data.mainContent.title}
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {data.mainContent.description1}
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-12">
                {data.mainContent.description2}
              </p>

              <motion.div
                className="grid grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={statsInView ? 'show' : 'hidden'}
              >
                {data.stats.map((stat, index) => (
                  <motion.div key={index} className="bg-blue-50 p-6 rounded-lg text-center" variants={itemVariants}>
                    <p className="text-4xl font-light text-blue-600 mb-3">{stat.value}</p>
                    <p className="text-gray-700 text-sm font-light">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img src="/images/herobg.jpg" alt="Healthcare Facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 transform translate-y-12 translate-x-12 w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                <img src="/images/doc1.jpg" alt="Doctor" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section ref={valuesRef} className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-3xl font-light text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {data.valuesSection.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg mb-12"
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {data.valuesSection.description}
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? 'show' : 'hidden'}
          >
            {data.values.map((value, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-lg shadow-md" variants={itemVariants}>
                <h4 className="text-xl font-light text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
      <section ref={accrRef} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-3xl font-light text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={accrInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {data.accreditations.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg mb-12"
            initial={{ opacity: 0 }}
            animate={accrInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {data.accreditations.description}
          </motion.p>

          <motion.div
            className="grid md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={accrInView ? 'show' : 'hidden'}
          >
            {[...Array(data.accreditations.count)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 h-24 rounded-lg flex items-center justify-center border-2 border-blue-600"
                variants={itemVariants}
              >
                <p className="text-gray-600 font-light text-center">Certification {index + 1}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
