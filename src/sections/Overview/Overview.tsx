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
          <h1 className="text-5xl md:text-9xl flex flex-col font-bold text-color-2">
            GUILHERME
            <span className="primary-text-color font-bold ">DIAS_</span>
          </h1>
          <div className="flex w-full md:w-[40%] text-lg md:text-3xl text-color">
            <p className="hidden md:block">
              Software engineer crafting {" "}
              <span className="text-color-2">monolithic systems </span>
              and high precision digital architecture.
            </p>
            <p className="md:hidden">
              Software Engineer. Creating 
              monolithic digital structures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
