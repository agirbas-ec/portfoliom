
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../projects/uzay.png';
import cryptoImg from '../projects/crypto.jpg'
import netflixImg from '../projects/netflix.jpg'
import twitchImg from '../projects/twitch.jpg'
 import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
<div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projelerim
        </p> <br /> <br />
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Galaksi Seyahat'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;