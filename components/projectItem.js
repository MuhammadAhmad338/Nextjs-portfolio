import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//Passing the pro
const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
      <div id="projectItem" className='justify-center items-center relative flex w-full h-auto shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-purple-600 to-blue-600 '>
          <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="projects" width={2000} height={2000} />
          <div className='hidden group-hover:block left-[50%] top-[50%] absolute translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider font-bold'>{title}</h3>
              <p className='pb-4 pt-2 text-white text-center font-bold'>React JS</p>
              <Link href={projectUrl}><p className='text-center py-3 rounded-lg bg-white text-gray-700 text-lg cursor-pointer'>More Info</p></Link>
          </div>
      </div>
  )
}

export default ProjectItem;