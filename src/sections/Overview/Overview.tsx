export const Overview = () => {
  return (
    <section
      id="overview"
      className="relative flex w-full h-screen items-center bg-[#0b0b0b]"
    >
      {/* gradient color no topo mobile */}
      <div className="md:hidden absolute top-0 right-0 w-[60%] h-[50%] blur-2xl bg-radial-[at_110%_0%] from-[#bc13fe]/30 to-[#0b0b0b] z-0" />

      {/* Gradient color no meio desktop */}
      <div
        className="hidden md:absolute md:flex left-20 bottom-20 w-[30%] h-[60%] blur-3xl bg-radial-[at_0%_50%] from-[#00f0ff]/20 to-[#0b0b0b]"
        z-0
      />
      <div className="hidden md:absolute md:flex right-0 top-20 w-[30%] h-[70%] blur-3xl bg-radial-[at_100%_50%] from-[#bc13fe]/20 to-[#0b0b0b]" />

      <div className="md:absolute flex  md:right-0 h-full w-full md:w-[85%]  items-center md:justify-start pl-10 z-10">
        <div className="flex flex-col gap-4">
          <div className="flex relative items-center gap-2 tertiary-text-color pl-2 text-xs md:text-lg font-serif font-light tracking-widest">
            <span className=" bg-[#00f0ff]/80 w-10 md:w-12 h-0.5 bottom-2 " />
            <span className=" ">PROTOCOL: INITIATE PORTIFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-8xl flex flex-col font-bold text-color-2">
            GUILHERME
            <span className="primary-text-color font-bold ">DIAS_</span>
          </h1>
          <div className="flex flex-col md:flex-row w-full md:w-full text-lg md:text-3xl text-color gap-8 ">
            <div className="flex flex-col gap-12 w-full md:w-[40%]">
              <div className="mt-6">
                <p className="hidden md:block">
                  Software engineer crafting{" "}
                  <span className="text-color-2">monolithic systems </span>
                  and high precision digital architecture.
                </p>
                <p className="md:hidden">
                  Software Engineer. Creating monolithic digital structures.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="p-4 border ">View_Work</button>
                <button className="p-4 border border-[#00f0ff] tertiary-text-color text-xl">
                  Contact_me
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-[90%] md:w-[40%] h-full text-sm md:text-xl bg-[#1c1b1b] border-l-2 border-[#00f0ff] p-8 mt-8">
              <span className="tertiary-text-color text-base font-normal tracking-widest">
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
                <div>
                  <span className="text-base font-light">Core_Engine</span>
                  <p className="text-color-2 text-lg md:text-xl">STABLE</p>
                </div>
              </div>
              <div>
                <span className="text-base font-light">Specialization</span>
                <p className="text-color-2 text-lg md:text-xl">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
