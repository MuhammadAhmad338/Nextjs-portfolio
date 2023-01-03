import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div id="main" className='w-full h-screen text-center font-nunito'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
           <div>
                  <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                  <h1 className='py-4 text-gray-700'>
                     Hi, I'm <span className='text-blue-500'>Ahmad</span>
                  </h1>
                  <h1 className='py-2 text-gray-700'>
                     A Full-Stack Web Developer 
                  </h1>
                  <p>
                    I am a Front-End Web Developer socializing in building land occasinally designing exceptional 
                    digital experiences. Currently, I'm focused on building responsive front-end web applications 
                    while learning back-end technologies
                  </p>
                  <div className='flex items-center justify-between py-4 m-auto max-w-[330px]'>
                     <div className='rounded-full shadow-lg cursor-pointer shadow-gray-500 p-6 hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                     </div>
                     <div className='rounded-full shadow-lg cursor-pointer shadow-gray-500 p-6 hover:scale-105 ease-in duration-300'> 
                        <FaGithub />
                     </div>
                     <div className="rounded-full shadow-lg cursor-pointer shadow-gray-500 p-6 hover:scale-105 ease-in duration-300"> 
                        <AiOutlineMail />
                     </div>
                     <div className='rounded-full shadow-lg cursor-pointer shadow-gray-500 p-6 hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                     </div>
                  </div>
           </div>
        </div>
    </div>
  )
}

export default Main;