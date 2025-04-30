import React from "react"

const About = () => {
    return (


    <div className='w-full md:w-[70%] m-auto h-[full] px-5 py-10 border-2 border-black flex flex-col md:flex-row justify-center items-center gap-10' id='about'>
        <div className="w-full md:w-1/2 min-h-full border-2">
            <div className="w-full md:w-[80%] h-[520px] m-auto rounded-2xl bg-gray-400">
            </div>
        </div>
        <div className="w-full md:w-1/2 min-h-full border-2 flex flex-col justify-center gap-10">
            <div className="flex flex-col justify-center gap-5">
                <p>Welcome to AURA'S CLINIC</p>
                <h2 className="text-2xl">Meet <span className="text-blue-500">DR. Farheen</span></h2>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias sed porro assumenda molestiae debitis voluptatibus a! Rem modi reiciendis commodi repellat optio, accusamus corrupti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias sed porro assumenda molestiae debitis voluptatibus a! Rem modi reiciendis commodi repellat optio, accusamus corrupti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur.</p>
                <button className='w-max px-5 py-3 rounded-[90px] border-2 font-bold border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 ease  duration-300 ease-in-out'><a href="tel:+919326219059">Book Appointment</a></button>
            </div>

        </div>
    </div>
    )
}

export default About;