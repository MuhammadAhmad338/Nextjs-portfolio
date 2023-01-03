import React from 'react';
import ProjectItem from './projectItem';

const Projects = () => {
  return (
    <div id="project" className='w-full font-nunito'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
           <p className='uppercase text-blue-500 text-xl tracking-widest'>Projects</p>
           <h2 className='py-4'>What I've built</h2>
           <div className='grid md:grid-cols-2 gap-8'>
                  <ProjectItem
                      title="Property Finder"
                      backgroundImg="/../public/assets/projects/property.jpg"
                      projectUrl="/property"
                  /> 
                  <ProjectItem
                      title="Crypto App"
                      backgroundImg="/../public/assets/projects/crypto.jpg"
                      projectUrl="/crypto"
                  /> 
                  <ProjectItem
                      title="Property Finder"
                      backgroundImg="/../public/assets/projects/netflix.jpg"
                      projectUrl="/netflix"
                  /> 
                  <ProjectItem
                      title="Property Finder"
                      backgroundImg="/../public/assets/projects/twitch.jpg" 
                      projectUrl="/twitch"
                  /> 
           </div>
        </div>
    </div>
  )
}

export default Projects;