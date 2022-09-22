
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';




const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className='py-4 text-gray-700'>
            Merhaba, Ben <span className='text-[#5651e5]'> Ece Ağırbaş</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Front-End Web Developerım</h1>
          {/* <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           5 yıldır front
          </p> */}
          <div className='flex items-center justify-items-center py-4'>
    
            <a
              href='https://github.com/agirbas-ec'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
           
        
          </div>
        </div>
      </div>


</header>
     
    </div>
  );
};

export default Main;
