import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        The Watch Stop
      </h1>
      <h2 className="title-font text-xl mb-4 font-medium text-gray-900">
      The Watch Stop: Your Time, Your Style.
      </h2>
      <p className="mb-8 leading-relaxed">
      Since our inception, we have strived to create timepieces that embody elegance, 
      precision, and timeless craftsmanship. Our dedication to excellence has earned us a 
      reputation for delivering exceptional watches that stand the test of time.
      </p>
      <div className="flex justify-center">
      <button className="inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded text-lg">
          <a href="/components/contact">Buy Now</a>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero" width={600} height={500}
        src="/watch.webp"
      />
    </div>
  </div>
</section>
  )
}

export default About
