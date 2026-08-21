import { BsFillLightningChargeFill } from "react-icons/bs";
import { useTypewriter } from "../../hooks/useTypewriter";
import { FaBuffer, FaShieldAlt } from "react-icons/fa";
import { motion } from "motion/react";
import {
  createRevealVariants,
  createStaggerVariants,
} from "../../utils/motionVariants";
import { useState } from "react";

export const Overview = () => {
  const [isInView, setIsInView] = useState(false);
  const [isIdentityVisible, setIsIdentityVisible] = useState(false);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };

  const introContainer = createStaggerVariants({
    staggerChildren: 0.28,
    delayChildren: 0.22,
  });

  const leftToRight = createRevealVariants({
    hiddenX: -40,
    duration: 0.55,
  });

  const metadataItem = createRevealVariants({
    hiddenX: -22,
    duration: 0.55,
  });

  const text1 = `Structural logic prioritized over visual noise. Systems engineered for resilience, scalability, and long-term stability within the modern web environment.`;

  const text2 = `Design language influenced by brutalist architecture and low-level engineering principles. Clean code is not an objective — it is the default state of every deployed system.`;

  const { displayedText: typedText1, isComplete: firstTextComplete } =
    useTypewriter(text1, 15, isIdentityVisible && isInView, 200);

  const { displayedText: typedText2, isComplete: secondTextComplete } =
    useTypewriter(text2, 15, firstTextComplete && isInView, 100);
  return (
    <>
      {/* First part of the section Overview */}
      <section
        id="overview"
        className="relative flex w-full h-full md:min-h-screen items-center pt-24 pb-10 md:py-0"
      >
        {/* gradient color no topo mobile */}
        <div className="md:hidden absolute top-0 right-0 w-[60%] h-[50%] blur-2xl bg-radial-[at_110%_0%] from-[#bc13fe]/30 to-[#0b0b0b] z-0" />

        {/* Gradient color no meio desktop */}
        <div
          className="hidden md:absolute md:flex left-20 bottom-20 w-[30%] h-[60%] blur-3xl bg-radial-[at_0%_50%] from-[#00f0ff]/20 to-[#0b0b0b]"
          z-0
        />
        <div className="hidden md:absolute md:flex right-0 top-20 w-[30%] h-[70%] blur-3xl bg-radial-[at_100%_50%] from-[#bc13fe]/20 to-[#0b0b0b]" />

        <div className="md:absolute flex md:right-0 h-full w-full md:w-[85%] items-center md:justify-start md:px-25 z-10">
          <motion.div
            variants={introContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 px-8 md:px-0"
          >
            <motion.div
              variants={leftToRight}
              className="flex relative items-center gap-2 tertiary-text-color pl-2 text-xs md:text-lg font-serif font-light tracking-[0.15rem]"
            >
              <span className=" tertiary-color w-10 md:w-12 h-0.5 bottom-2 " />
              <span>PROTOCOL: INITIATE PORTIFOLIO</span>
            </motion.div>
            <motion.h1
              variants={leftToRight}
              className="text-5xl md:text-8xl flex flex-col font-bold text-color-2"
            >
              GUILHERME
              <span className="primary-text-color font-bold ">DIAS_</span>
            </motion.h1>
            <div className="flex flex-col md:flex-row w-full md:w-full text-lg md:text-3xl text-color gap-8 ">
              <motion.div
                variants={introContainer}
                className="flex flex-col gap-12 w-full md:w-[40%]"
              >
                <motion.div variants={leftToRight} className="mt-6">
                  <p className="hidden md:block">
                    Software developer crafting{" "}
                    <span className="text-color-2">scalable systems </span>
                    and modern digital architecture.
                  </p>
                  <p className="md:hidden">
                    Software Developer. Creating modern digital systems.
                  </p>
                </motion.div>
                <motion.div variants={introContainer} className="flex gap-4">
                  <motion.button
                    variants={leftToRight}
                    className="p-4 bg-linear-to-br from-[#bc13fe]/90 to-[#5C347D] text-xl font-semibold text-[#FAECFF] cursor-pointer hover:text-black/60 transition-colors"
                    onClick={() => handleClick("projects")}
                    whileTap={{ scale: 0.95 }}
                  >
                    View_Work
                  </motion.button>
                  <motion.button
                    variants={leftToRight}
                    className="p-4 border border-[#00f0ff] tertiary-text-color text-xl cursor-pointer hover:bg-white/20 transition-colors"
                    onClick={() => handleClick("contact")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact_me
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                variants={leftToRight}
                className="flex w-full md:w-[50%]"
              >
                <motion.div
                  variants={introContainer}
                  className="flex flex-col gap-6 w-full h-full text-sm md:text-xl second-background border-l-2 border-[#00f0ff] p-8 "
                >
                  <motion.span
                    variants={metadataItem}
                    className="tertiary-text-color text-base font-normal tracking-[0.3rem]"
                  >
                    SYSTEM METADATA
                  </motion.span>
                  <div className="flex flex-col md:flex-row w-full md:w-[80%] md:justify-between gap-6">
                    <motion.div variants={metadataItem}>
                      <span className="text-base font-light">Location</span>
                      <p className="text-color-2 text-lg md:text-xl">
                        {" "}
                        15.7801° S | 47.9292° W
                      </p>
                    </motion.div>
                    <div className="flex md:flex-col gap-8">
                      <motion.div variants={metadataItem}>
                        <span className="text-base font-light">
                          Core_Engine
                        </span>
                        <p className="text-color-2 text-lg md:text-xl">
                          STABLE
                        </p>
                      </motion.div>
                      <motion.div
                        variants={metadataItem}
                        className="md:hidden flex-flex-col"
                      >
                        <span className="text-base font-light">
                          Years Active
                        </span>
                        <p className="text-color-2 text-lg md:text-xl">02+</p>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div variants={metadataItem} className="md:w-[50%]">
                    <span className="text-base font-light">Specialization</span>
                    <p className="text-color-2 text-lg md:text-xl">
                      Builder of Digital Systems
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/*Second part of the section Overview */}
      <section className="relative flex w-full min-h-screen items-center second-background">
        {/* Gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-22 bg-linear-to-b from-[#0b0b0b] via-[#0f0e0e] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-22 bg-linear-to-t from-[#0b0b0b] via-[#0f0e0e] to-transparent" />

        {/* mobile version */}
        <motion.div
          variants={introContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          onViewportEnter={() => setIsInView(true)}
          className="md:hidden flex flex-col items-start px-8 w-full md:w-[85%] gap-8"
        >
          <motion.div
            variants={leftToRight}
            onAnimationComplete={() => setIsIdentityVisible(true)}
            className="flex gap-4 items-center"
          >
            <motion.div className="tertiary-color w-3 h-3" />
            <motion.h3 className="tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-light">
              IDENTITY_MODULE
            </motion.h3>
          </motion.div>
          <motion.p className="text-color text-xl text-justify">
            {typedText1}
          </motion.p>
          <motion.p className="text-color-2 text-justify">
            {" "}
            {typedText2}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={secondTextComplete ? "show" : "hidden"}
            variants={introContainer}
            className="flex flex-col gap-2 w-full text-color-2"
          >
            <motion.div
              variants={metadataItem}
              className="bg-gray-500/10 p-4 text-sm flex justify-between items-center"
            >
              PERFORMANCE OPTIMIZATION{" "}
              <BsFillLightningChargeFill
                className="primary-text-color"
                size={22}
              />
            </motion.div>
            <motion.div
              variants={metadataItem}
              className="bg-gray-500/10 p-4 text-sm flex justify-between items-center"
            >
              SCALABLE ARCHITECTURE{" "}
              <FaBuffer className="primary-text-color" size={22} />
            </motion.div>
            <motion.div
              variants={metadataItem}
              className="bg-gray-500/10 p-4 text-sm flex justify-between items-center"
            >
              SYSTEM SECURITY{" "}
              <FaShieldAlt className="primary-text-color" size={22} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop version */}
        <motion.div
          variants={introContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:flex items-center absolute right-0 w-[85%] px-20 h-[90%] gap-6"
        >
          {/* left side */}
          <motion.div
            variants={introContainer}
            className="relative w-[40%] h-full flex flex-col gap-4 justify-center "
          >
            <motion.div variants={leftToRight} className="absolute flex  border-l-6 border-[#bc13fe] h-[45%] top-22 " />
            <motion.div
              variants={introContainer}
              className="w-full relative flex flex-col px-8 py-6 gap-4 z-10 "
            >
              <motion.span
                variants={leftToRight}
                className="text-[14rem] absolute -top-42 left-4 bg-linear-to-b from-[#bc13fe]/70 via-[#bc13fe]/10 to-[#131212] bg-clip-text text-transparent font-bold z-0"
              >
                02+
              </motion.span>
              <motion.h1
                variants={leftToRight}
                className="text-8xl max-w-54 text-white/90 font-semibold z-10"
              >
                Years Active
              </motion.h1>
              <motion.p
                variants={leftToRight}
                className="text-color text-2xl max-w-90 z-10"
              >
                CONTINUOUS DEPLOYMENT SINCE 2024
              </motion.p>
            </motion.div>
            <motion.div
              variants={introContainer}
              className=" flex flex-wrap justify-between gap-2 w-full text-color-2"
            >
              <motion.div
                variants={metadataItem}
                className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4 justify-between items-center"
              >
                <p className="w-[60%]">PERFORMANCE OPTIMIZATION</p>
                <BsFillLightningChargeFill
                  size={22}
                  className="primary-text-color"
                />
              </motion.div>
              <motion.div
                variants={metadataItem}
                className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4 justify-between items-center"
              >
                <p className="w-[60%]">SCALABLE ARCHITECTURE</p>
                <FaBuffer size={22} className="primary-text-color" />
              </motion.div>
              <motion.div
                variants={metadataItem}
                className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4  justify-between items-center"
              >
                <p className="w-[60%] ">SYSTEM SECURITY</p>
                <FaShieldAlt size={22} className="primary-text-color" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* right side */}
          <motion.div
            variants={introContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onAnimationComplete={() => setIsInView(true)}
            className="w-[60%] h-[65%] flex flex-col gap-6 justify-start pl-5 "
          >
            <motion.div
              variants={introContainer}
              onAnimationComplete={() => setIsIdentityVisible(true)}
              className="flex flex-col gap-6"
            >
              <motion.div
                variants={leftToRight}
                className="flex items-center gap-4"
              >
                <div className="tertiary-color w-3 h-3" />
                <h3 className="tertiary-text-color text-lg md:text-xl tracking-[0.3rem] font-light">
                  IDENTITY_MODULE
                </h3>
              </motion.div>
              <motion.div
                variants={introContainer}
                className="flex flex-col w-[80%]"
              >
                <motion.h2
                  variants={leftToRight}
                  className="text-7xl text-white/90 font-bold"
                >
                  I BUILD SOFTWARE AS IF IT WERE A{" "}
                  <motion.span variants={leftToRight} className="text-color-2">
                    MONUMENT
                  </motion.span>
                  .
                </motion.h2>
              </motion.div>
            </motion.div>
            <motion.div
              variants={introContainer}
              className="flex flex-col w-full gap-8 "
            >
              <motion.p className="text-color text-2xl text-justify">
                {typedText1}
              </motion.p>
              <motion.p className="text-color-2 text-justify text-xl">
                {" "}
                {typedText2}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
