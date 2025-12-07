
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10 bg-[#0d1224] border-[#353951] text-white ">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <p className="text-md flex justify-center">
          Portfolio by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/balaraman-n/" className="text-[#16f2b3] px-2"> Balaraman</a>
        </p>
    </div >
  );
};

export default Footer;