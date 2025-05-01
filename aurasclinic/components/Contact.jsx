import React from 'react'

const Contact = () => {
  return (
    <div className="w-full min-h-[100vh] pb-[50px] flex flex-col text-center text-white gap-10 wrapper  bg-[url('/contact-mbl-bg.png')] sm:bg-[url('/contact-bg.jpg')] bg-cover bg-center" id='contact'>
      <h2 className='text-4xl '>Contact Us</h2>
      <div className='w-full flex justify-end'>
      <div className='w-full lg:w-[60%]'>
        <form action="" className='w-[90%] md:w-[60%] rounded-2xl m-auto flex flex-col justify-start bg-white py-4'>
          <fieldset className='w-full flex justify-center flex-col gap-10 text-black'>
            <input type="text" name="" id="" required className='w-[80%] m-auto py-4 bg-white rounded-[90px] px-4  shadow-xl' placeholder='Enter your Name*'/>
            <input type="number" name="" id="" required className='w-[80%] m-auto py-4 bg-white rounded-[90px] px-4  shadow-xl' placeholder='Enter your phone number*'/>
            <input type="date" name="" id="" required className='w-[80%] m-auto py-4 bg-white rounded-[90px] px-4  shadow-xl' placeholder='Enter your booking date*'/>
            <textarea name="" id="" required className='w-[80%] m-auto py-4 bg-white rounded-[20px] px-4 shadow-xl' placeholder='What problem are you facing?'></textarea>
          </fieldset>
          <button type="submit" className="w-[80%] m-auto mt-5 px-6 py-3 rounded-full font-bold border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent active:bg-transparent hover:text-blue-500 active:text-blue-500 duration-500 ease-in-out">Submit</button>
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default Contact