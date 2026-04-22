import { MdOutlineWifiTethering } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const FootBar = () => {
  return (
    <footer className="absolute right-0 flex flex-col md:flex-row md:justify-between items-center p-6 md:p-8 bg-[#0b0b0b] w-full z-30 gap-1 ">
      <div className=" flex flex-col items-center md:items-start w-full gap-1">
        <h1 className="primary-text-color text-2xl md:text-3xl font-bold">
          Dias.sys
        </h1>
        <span className="text-sm text-color ">
          © 2026 Dias.sys. All rights reserved.
        </span>
      </div>
      <div className="flex justify-center items-center w-full text-lg  gap-8 text-[#00f0ff]/60 font-secondary">
        <a
          href="https://github.com/GuilhermeBDias"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <IoLogoGithub />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-barbosa-dias-8532b6302/"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <IoLogoLinkedin />
          Linkedin
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 text-lg md:justify-end w-full text-[#00f0ff]/60 font-secondary">
        <MdOutlineWifiTethering size={24} className="hidden md:flex" />
        <MdOutlineWifiTethering size={22} className="flex md:hidden" />
        <span>system_status: active</span>
      </div>
    </footer>
  );
};
