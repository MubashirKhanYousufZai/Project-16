import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hand" width={500} height={500}
        src="/hand.jpeg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        The Watch Stop ⌚
      </h1>
      <p className="mb-8 leading-relaxed">
      Welcome to The Watch Stop your one-stop destination for timeless and stylish watches. 
      Explore our curated collection of high-quality timepieces, perfect for every occasion and style. 
      At The Watch Stop, we combine elegance, precision, and affordability to help you find the perfect watch to match your personality.
      </p>
      <div className="flex justify-center">
      <button className="inline-flex text-white bg-orange-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded text-lg">
          <a href="/components/contact">Buy Now</a>
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
