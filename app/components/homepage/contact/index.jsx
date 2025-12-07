// @flow strict
import { personalData } from '@/utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className=" relative text-white py-16">
        <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
       <img
        src="/section.svg"
        alt="Hero"
        className="absolute top-0 -z-10 w-full"
      />
    
      <div className="w-full gap-8 lg:gap-16 items-center">
        {/* <ContactForm /> */}
        <div className="lg:3/4 flex justify-end ">
          <div className="flex flex-col  gap-4 lg:gap-7">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className=" bg-pink-500 p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
               <a target="_blank" rel="noreferrer" href={personalData.github} className='text-sm md:text-xl flex items-center gap-3'>
                <IoLogoGithub
                  className="bg-pink-500 p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={38}
                />
                <span>
                {personalData.github}
                </span>
              </a> 
              <a target="_blank" rel="noreferrer" href={personalData.linkedIn} className='text-sm md:text-xl flex items-center gap-3'>
                <BiLogoLinkedin
                  className="bg-pink-500 p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={38}
                />
                <span>{personalData.linkedIn}</span>
              </a>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-pink-500 p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-pink-500 p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
           
          </div>
          </div>
      </div>
    </div>
  );
};

export default ContactSection;