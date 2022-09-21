import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonBadgeFill, BsFillPersonLinesFill } from "react-icons/bs";



const Navbar = () => {

  const [nav,setNav] = useState(false)
  const [shadow, setShadow] = useState(false);


  const handleNav =() => {
    setNav(!nav)
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
           <p className="font-['Open_Sans'] text-2xl font-semibold">ECE AĞIRBAŞ</p>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Anasayfa
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Yeteneklerim
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projelerim
              </li>
            </Link>
         
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
        'fixed left-[-100%] top-0  ease-in duration-500' }>
          <div>
            <div className="flex w-full item-center justify-between">
              <Image src="/../public/logo1.png" width="87" height="35" />

              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>

          <div className="py-4 flex-col justify-center">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Anasayfa</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Hakkımızda</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projelerim</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">İletişim</li>
              </Link>
            </ul>
        <div className="pt-40">
          <p className="uppercase tracking-widest">buraya iletişime geç gibi bir şey yaz</p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
            <FaLinkedinIn/>

            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
            <FaGithub/>

            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
            <AiOutlineMail/>

            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
            <BsFillPersonLinesFill/>

            </div>
          </div>
        </div>
            <div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
