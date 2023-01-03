import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div id='aboutus' className='w-full md:h-screen flex items-center py-16 p-2'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                 <p className='uppercase text-xl tracking-widest text-purple-500'>About</p>
                 <h2 className='py-4'>Who I Am</h2>
                      <p className='py-2 text-gray-600'>//I am not your normal developer</p>
                 <p className='py-2 text-gray-600'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Enim nec dui nunc mattis enim ut tellus. Faucibus a pellentesque sit amet.
                      Consequat semper viverra nam libero justo laoreet sit. Lectus sit amet est
                      placerat in egestas erat imperdiet sed. Facilisis magna etiam tempor orci
                      eu lobortis elementum nibh. Faucibus a pellentesque sit amet porttitor. Mi bibendum neque egestas congue. Aliquet nec ullamcorper sit amet risus nullam eget. Neque egestas congue quisque egestas. Suscipit tellus mauris a diam maecenas sed enim ut sem.
                 </p>
                 <p className='py-2 text-gray-600'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      Enim nec dui nunc mattis enim ut tellus. Faucibus a pellentesque sit amet.
                      Consequat semper viverra nam libero justo laoreet sit. Lectus sit amet est
                      placerat in egestas erat imperdiet sed. Facilisis magna etiam tempor orci
                 </p>
                 <p className='py-2 underline text-gray-700 cursor-pointer'>Checkout some of my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 flex rounded-xl items-center justify-center ease-in duration-300'>              
               <Image className='rounded-xl' src="/../public/assets/about.jpg" alt="aboutImage" width="200" height="200" />
            </div> 
        </div>
    </div>
  )
}

export default Aboutus;