import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/property.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'

const Property = () => {
  return (
    <div id="property" className='w-full font-nunito font-bold'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
              <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                  <Image className='absolute z-1' src={propertyImg} alt='/' fill='fill' objectFit='cover' />
              <div className='absolute max-w-[1240px] w-full left-[50%] right-[50%] top-[70%] text-white translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                  <h2 className='py-2'>Property Finder</h2>
                  <h3 className=''>React js / Tailwind / Firebase</h3>
              </div>
        </div> 
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
         <div className='col-span-4'>
            <p>projects</p>
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              Enim nec dui nunc mattis enim ut tellus. Faucibus a pellentesque sit amet.
              Consequat semper viverra nam libero justo laoreet sit. Lectus sit amet est
              placerat in egestas erat imperdiet sed. Facilisis magna etiam tempor orci
              eu lobortis elementum nibh. Faucibus a pellentesque sit amet porttitor.
            </p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>  
         </div>
         <div className='col-span-4 md:col-span-1 rounded-xl shadow-xl shadow-gray-400 p-4'>
             <div className='p-2 '>
                <p className='font-bold text-center pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-500 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p>
              </div>   
             </div>
         </div>
         <Link href="/#project">
          <p className='underline cursor-pointer'>Back</p>
         </Link>
      </div>
    </div>
  )
}

export default Property;