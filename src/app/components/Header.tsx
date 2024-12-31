import Image from 'next/image'
import React from 'react'
const Header = () => {
  return (
    <div>
      <div className='bg-orange-900 text-center justify-center h-8'>
        <p className='text-xl font-semibold text-white'>All Over delivery In Pakistan🚚</p>
      </div>
      <header className="text-white  bg-orange-800 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex gap-2 title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <span className="ml-3 text-xl">The Watch Stop</span>
      <Image src={"/hand1.jpeg"} width={30} height={15} alt='hand'/>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='/components/items/wrist'>Wrist Watches</a>
      <a className="mr-5 hover:text-gray-900" href='/components/items/smart'>Smart Watches</a>
      <a className="mr-5 hover:text-gray-900" href='/components/items/wall'>Wall Clocks</a>
      <a className="mr-5 hover:text-gray-900" href='/components/items/alarm'>Alarm Clocks</a>
      <a className="mr-5 hover:text-gray-900" href='/components/about'>About Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-orange-900 rounded text-base mt-4 md:mt-0 text-gray-900">
      <a href="/components/contact">Buy Now</a>
    </button>
  </div>
</header>
    </div>
  )
}

export default Header
