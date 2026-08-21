import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import {
  createRevealVariants,
  createStaggerVariants,
} from "../../utils/motionVariants";
import { motion } from "motion/react";
import { SignalIndicator } from "../ui/SignalIndicator";

export const FootBar = () => {
  const contentVariants = createStaggerVariants({
    delayChildren: 0.2,
    staggerChildren: 0.3,
  });

  const itemVariants = createRevealVariants({
    hiddenY: 28,
    exitY: -20,
    duration: 0.6,
    exitDuration: 0.35,
  });

  const year = new Date().getFullYear();
  

  return (
    <motion.footer
      variants={contentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="relative flex flex-col md:flex-row md:justify-between items-center p-6 md:p-8 bg-[#0b0b0b] w-full z-30 gap-1 "
    >
      <motion.div
        variants={itemVariants}
        className=" flex flex-col items-center md:items-start w-full gap-1"
      >
        <h1 className="primary-text-color text-2xl md:text-3xl font-bold">
          Dias.sys
        </h1>
        <span className="text-sm text-color ">
          © {year} Dias.sys. All rights reserved.
        </span>
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center items-center w-full text-lg  gap-8 text-[#00f0ff]/60 font-secondary">
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
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 text-lg md:justify-end w-full text-[#00f0ff]/60 font-secondary">
        <SignalIndicator />
        <span>system_status: active</span>
      </motion.div>
    </motion.footer>
  );
};
