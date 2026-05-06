import { useRef } from 'react'
import { Zap, Pill, Stethoscope } from 'lucide-react'
import { featuredServicesData } from '@/data/home/featured-services-section.data'

const iconMap: { [key: string]: any } = {
  Building: Zap,
  Pill: Pill,
  Stethoscope: Stethoscope,
}

export default function FeaturedServicesSection() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">{featuredServicesData.title}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">{featuredServicesData.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-96 rounded-2xl overflow-hidden flex items-center justify-center relative">
            <img src="/images/herobg.jpg" alt="Emergency Care" className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-white px-6 py-2 rounded-full">
              <p className="text-blue-600 font-light text-sm">{featuredServicesData.services[0].title}</p>
            </div>
          </div>

          <div>
            {featuredServicesData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              const iconColors = [
                { bg: 'bg-blue-500', icon: 'text-white' },
                { bg: 'bg-purple-500', icon: 'text-white' },
                { bg: 'bg-blue-400', icon: 'text-white' },
              ]
              const colors = iconColors[index]
              
              return (
                <div key={index}>
                  <div className="flex gap-4 py-6">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-14 w-14 rounded-full ${colors.bg}`}>
                        <IconComponent size={28} className={colors.icon} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{service.description}</p>
                      <a href="#" className="text-blue-600 font-light text-sm hover:underline">Learn More</a>
                    </div>
                  </div>
                  {index < featuredServicesData.services.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
              <img src="/images/doc1.jpg" alt="Maternal Care" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-light text-gray-900">Maternal Care</h4>
            <p className="text-sm text-gray-600">Expert pregnancy & delivery support</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
              <img src="/images/doc2.jpg" alt="Vaccination" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-light text-gray-900">Vaccination</h4>
            <p className="text-sm text-gray-600">Complete immunization programs</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
              <img src="/images/doc3.jpg" alt="Emergency Care" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-light text-gray-900">Emergency Care</h4>
            <p className="text-sm text-gray-600">24/7 critical care services</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden mb-4">
              <img src="/images/doc4.jpg" alt="Advanced Technology" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-light text-gray-900">Advanced Technology</h4>
            <p className="text-sm text-gray-600">State-of-the-art medical equipment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
