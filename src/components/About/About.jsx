import React from 'react'
import about_us from '/src/assets/about us.jpeg'
import value from '/src/assets/value.jpeg'

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero section with image */}
      <div className="sm:flex items-center">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our platform! We are passionate about delivering exceptional 
              experiences and innovative solutions to our customers. Founded in [year], 
              we've been committed to excellence and continuous improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Values sections */}
      <div className="space-y-8 mt-12">
        <div className="sm:flex items-center mb-8">
          <div className="sm:w-1/2 p-5">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide high-quality services while maintaining the highest 
              standards of customer satisfaction. We believe in creating lasting relationships 
              with our clients through trust, integrity, and dedication.
            </p>
          </div>
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src={about_us} alt="Our Mission" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className="sm:flex items-center flex-row-reverse mb-8">
          <div className="sm:w-1/2 p-5">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="space-y-3">
              {[
                'Excellence in everything we do',
                'Innovation and creativity',
                'Customer-first approach',
                'Integrity and transparency',
                'Continuous learning and improvement'
              ].map((value, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 bg-gray-600 rounded-full mr-4"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:w-1/2 p-10">
            <div className="image object-cover object-center text-center">
              <img style={{width: '100%', height: '100%'}} src={value} alt="Our Values" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}