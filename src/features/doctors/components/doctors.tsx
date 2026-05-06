'use client'

import { Star } from 'lucide-react'
import { doctorsPageData } from '@/data/doctors/doctors-page.data'

export default function Doctors() {
  const { header, doctors } = doctorsPageData

  return (
    <div className="w-full overflow-x-hidden">
      <section className="bg-gradient-to-r from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-light text-gray-900 mb-4">{header?.title}</h1>
          <p className="text-gray-600 text-lg">
            {header?.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors?.map((doctor) => (
              <div key={doctor.name} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <img src={doctor.image} alt={doctor.name} className="object-cover h-full w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-light mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(doctor.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <button className="text-blue-600 font-light hover:underline">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
