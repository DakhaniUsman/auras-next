import React from 'react'

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] border-2 border-black flex flex-col justify-center items-center gap-5 text-center' id='home'>
      <h1 className='text-4xl uppercase'>AURA'S CLINIC</h1>
      <h2 className='text-4xl uppercase'>Your Health is Our Priority</h2>
      <div className='w-[80%] md:w-[50%] flex flex-col md:flex-row justify-center gap-5 '>
        <button className='px-5 py-3 rounded-[90px] border-2 font-bold border-blue-500 bg-blue-500 text-white duration-300 hover:bg-white hover:text-blue-500 ease-in-out'>Our Services</button>
        <button className='px-5 py-3 rounded-[90px] border-2 font-bold border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 ease  duration-300 ease-in-out'><a href="tel:+919326219059">Book Appointment</a></button>
      </div>
    </div>
  )
}

export default Hero