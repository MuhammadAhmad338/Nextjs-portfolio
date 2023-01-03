import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl uppercase tracking-widest text-blue-700'>Skills</p>
            <p className='py-4'>What i can offer</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                   <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                         <div className='m-auto'>
                            <Image src="/../public/assets/skills/html.png" height="64" width="64" alt='html'/>
                         </div>
                          <div>
                              <p className='font-bold'>HTML</p>
                          </div>
                   </div> 
                </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/css.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>CSS</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/javascript.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>JavaScript</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/react.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>React</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/tailwind.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>Tailwind</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/firebase.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>Firebase</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/mongo.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>MongoDB</p>
                          </div>
                      </div>
                  </div>

                  <div className='p-6 shadow-xl rounded-xl bg-gray-100 hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                          <div className='m-auto'>
                              <Image src="/../public/assets/skills/shopify.png" height="64" width="64" alt='html' />
                          </div>
                          <div>
                              <p className='font-bold'>Shopify</p>
                          </div>
                      </div>
                  </div>

            </div>
        </div>
    </div>
  );
}

export default Skills;