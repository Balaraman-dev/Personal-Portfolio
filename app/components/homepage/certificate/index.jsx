// @flow strict
import { FaArrowRight } from 'react-icons/fa';
import CertificateCard from './CertificateCard';
import {certificateData} from '@/utils/data/certificateData'
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/development.json';
import AnimationLottie from "../../helper/animation-lottie";


function Certificate() {
  return (
    <div id='blogs' className="w-[100%] relative z-50 border-t my-12 lg:mt-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col lg:gap-28'>
          <div className=" md:w-1/2 order-2 md:order-1">
            {
              certificateData.length>0 && <CertificateCard  certificates={certificateData} />
            } 
          </div> 
          <div className='md:w-1/3 md:py-16 flex justify-center items-start order-1 md:order-2'>
            <div className="  ">
                  <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
      </div>
         </div>
  );
};

export default Certificate;