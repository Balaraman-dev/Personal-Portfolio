// @flow strict
import { timeConverter } from '@/utils/time-converter';
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


function Certificate( {certificates} ) {

   return (
    <div id="education" className="relative z-50 my-2 lg:my-4">
      <div className="py-8 ">
            <div className="flex flex-col gap-6">
              {
                certificates.map(cert => (
                  <GlowCard key={cert.id} identifier={`cert-${cert.id}`}>
                    <div className="p-3 relative text-white">
                      <img
                        src="/blur-23.svg"
                        alt="Hero"
                        className="absolute bottom-0 opacity-80 w-full"
                      /> 
                      <div className="flex justify-center relative">
                        <p className="text-xs sm:text-lg uppercase text-[#16f2b3]">
                          {cert.duration}
                        </p>
                        { cert.reflink.trim() && 
                            <a target="_blank" rel="noreferrer" href={cert.reflink} className='absolute top-0 right-3'>
                                <FaExternalLinkAlt 
                                  className="bg-violet-500 p-2 rounded-lg hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                                  size={30}
                                />
                            </a>
                        }
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <AiOutlineSafetyCertificate size={40} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-pink-500">
                            {cert.title}
                          </p>
                          <p className="text-base sm:text-md mb-2 hidden md:block">
                            {cert.desc}
                          </p>
                          <p className="text-base sm:text-md mb-2">
                            {cert.issuedBy}
                          </p>
                          </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
      </div>
    </div>
  );
};

export default Certificate;