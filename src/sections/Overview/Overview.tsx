import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBuffer, FaShieldAlt } from "react-icons/fa";

export const Overview = () => {
  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };
  return (
    <>
      {/* First part of the section Overview */}
      <section
        id="overview"
        className="relative flex w-full min-h-screen items-center py-24 md:py-0"
      >
        {/* gradient color no topo mobile */}
        <div className="md:hidden absolute top-0 right-0 w-[60%] h-[50%] blur-2xl bg-radial-[at_110%_0%] from-[#bc13fe]/30 to-[#0b0b0b] z-0" />

        {/* Gradient color no meio desktop */}
        <div
          className="hidden md:absolute md:flex left-20 bottom-20 w-[30%] h-[60%] blur-3xl bg-radial-[at_0%_50%] from-[#00f0ff]/20 to-[#0b0b0b]"
          z-0
        />
        <div className="hidden md:absolute md:flex right-0 top-20 w-[30%] h-[70%] blur-3xl bg-radial-[at_100%_50%] from-[#bc13fe]/20 to-[#0b0b0b]" />

        <div className="md:absolute flex  md:right-0 h-full w-full md:w-[85%]  items-center md:justify-start  md:pl-10 z-10">
          <div className="flex flex-col gap-4 px-8">
            <div className="flex relative items-center gap-2 tertiary-text-color pl-2 text-xs md:text-lg font-serif font-light tracking-[0.15rem] ">
              <span className=" bg-[#00f0ff]/80 w-10 md:w-12 h-0.5 bottom-2 " />
              <span>PROTOCOL: INITIATE PORTIFOLIO</span>
            </div>
            <h1 className="text-5xl md:text-8xl flex flex-col font-bold text-color-2">
              GUILHERME
              <span className="primary-text-color font-bold ">DIAS_</span>
            </h1>
            <div className="flex flex-col md:flex-row w-full md:w-full text-lg md:text-3xl text-color gap-8 ">
              <div className="flex flex-col gap-12 w-full md:w-[40%]">
                <div className="mt-6">
                  <p className="hidden md:block">
                    Software developer crafting{" "}
                    <span className="text-color-2">scalable systems </span>
                    and modern digital architecture.
                  </p>
                  <p className="md:hidden">
                    Software Developer. Creating modern digital systems.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    className="p-4 bg-linear-to-br from-[#bc13fe]/90 to-[#5C347D] text-xl font-semibold text-[#FAECFF] cursor-pointer hover:text-black/60 transition-colors"
                    onClick={() => handleClick("projects")}
                  >
                    View_Work
                  </button>
                  <button
                    className="p-4 border border-[#00f0ff] tertiary-text-color text-xl cursor-pointer hover:bg-white/20 transition-colors"
                    onClick={() => handleClick("contact")}
                  >
                    Contact_me
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full md:w-[40%] h-full text-sm md:text-xl second-background border-l-2 border-[#00f0ff] p-8 mt-8">
                <span className="tertiary-text-color text-base font-normal tracking-[0.3rem]">
                  SYSTEM METADATA
                </span>
                <div className="flex flex-col md:flex-row w-full md:w-[80%] md:justify-between gap-6">
                  <div>
                    <span className="text-base font-light">Location</span>
                    <p className="text-color-2 text-lg md:text-xl">
                      {" "}
                      15.7801° S | 47.9292° W
                    </p>
                  </div>
                  <div className="flex md:flex-col gap-8">
                    <div>
                      <span className="text-base font-light">Core_Engine</span>
                      <p className="text-color-2 text-lg md:text-xl">STABLE</p>
                    </div>
                    <div className="md:hidden flex-flex-col">
                      <span className="text-base font-light">Years Active</span>
                      <p className="text-color-2 text-lg md:text-xl">02+</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[50%]">
                  <span className="text-base font-light">Specialization</span>
                  <p className="text-color-2 text-lg md:text-xl">
                    Builder of Digital Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Second part of the section Overview */}
      <section className="flex w-full min-h-screen items-center second-background">
        {/* mobile version */}
        <div className="md:hidden flex flex-col items-start px-10 w-full md:w-[85%] gap-8">
          <div className="flex gap-4 items-center">
            <div className="tertiary-color w-3 h-3" />
            <h3 className="tertiary-text-color text-lg md:text-2xl tracking-[0.3rem] font-light">
              IDENTITY_MODULE
            </h3>
          </div>
          <p className="text-color text-xl text-justify">
            Structural logic prioritized over visual noise. Systems engineered
            for resilience, scalability, and long-term stability within the
            modern web environment.
          </p>
          <p className="text-color-2 text-justify">
            {" "}
            Design language influenced by brutalist architecture and low-level
            engineering principles. Clean code is not an objective — it is the
            default state of every deployed system.
          </p>
          <div className="flex flex-col gap-2 w-full text-color-2">
            <div className="bg-gray-500/10 p-4 text-sm flex justify-between items-center">
              PERFORMANCE OPTIMIZATION{" "}
              <BsFillLightningChargeFill
                className="primary-text-color"
                size={22}
              />
            </div>
            <div className="bg-gray-500/10 p-4 text-sm flex justify-between items-center">
              SCALABLE ARCHITECTURE{" "}
              <FaBuffer className="primary-text-color" size={22} />
            </div>
            <div className="bg-gray-500/10 p-4 text-sm flex justify-between items-center">
              SYSTEM SECURITY{" "}
              <FaShieldAlt className="primary-text-color" size={22} />
            </div>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex absolute right-0 w-[85%] px-20 h-[80%] gap-6 ">
          {/* left side */}
          <div className="w-[40%] h-full flex flex-col gap-4 justify-end ">
            <span className="text-[14rem] absolute -top-18 left-18 bg-linear-to-b from-[#bc13fe]/50 via-[#bc13fe]/10 to-[#131212] bg-clip-text text-transparent font-bold">
              02+
            </span>
            <div className="w-full flex flex-col border-l-6 border-[#bc13fe] px-8 py-6 gap-4 z-10 ">
              <h1 className="text-8xl max-w-54 text-white/90 font-semibold">
                Years Active
              </h1>
              <p className="text-color text-2xl max-w-90">
                CONTINUOUS DEPLOYMENT SINCE 2024
              </p>
            </div>
            <div className=" flex flex-wrap justify-between gap-2 w-full text-color-2">
              <div className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4 justify-between items-center">
                <p className="w-[60%]">PERFORMANCE OPTIMIZATION</p>
                <BsFillLightningChargeFill size={22} />
              </div>
              <div className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4 justify-between items-center">
                <p className="w-[60%]">SCALABLE ARCHITECTURE</p>
                <FaBuffer size={22} />
              </div>
              <div className="bg-gray-500/10 p-4 text-base flex w-[48%] gap-4  justify-between items-center">
                <p className="w-[60%] ">SYSTEM SECURITY</p>
                <FaShieldAlt size={22} />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-[60%] h-full flex flex-col gap-10 justify-center p-5">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="tertiary-color w-3 h-3" />
                <h3 className="tertiary-text-color text-lg md:text-xl tracking-[0.3rem] font-light">
                  IDENTITY_MODULE
                </h3>
              </div>
              <div className="flex flex-col w-[75%]">
                <h2 className="text-7xl text-white/90 font-bold">
                  I BUILD SOFTWARE AS IF IT WERE A{" "}
                  <span className="text-color-2">MONUMENT</span>.
                </h2>
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 ">
              <p className="text-[#eccff7]/70 text-2xl text-justify">
                Structural logic prioritized over visual noise. Systems
                engineered for resilience, scalability, and long-term stability
                within the modern web environment.
              </p>
              <p className="text-color text-xl border-l text-justify pl-6">
                {" "}
                Design language influenced by brutalist architecture and
                low-level engineering principles. Clean code is not an objective
                — it is the default state of every deployed system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
