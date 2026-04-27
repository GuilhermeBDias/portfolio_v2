import { useEffect, useState } from "react";
import { navigation_links } from "../../constants/navigation_links";
import { MdTerminal, MdMenu, MdClose } from "react-icons/md";
import { AnimatePresence, motion, type Variants } from "motion/react";

export const NavBar = () => {
  const [active, setActive] = useState<string>("Overview");

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };

  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const currentLink = navigation_links.find(
            (link) => link.id === visible.target.id,
          );

          if (currentLink) {
            setActive(currentLink.name);
          }
        }
      },
      { threshold: 0.6 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 md:w-[15%] md:h-full bg-[#0b0b0b] backdrop-blur-md  md:border-none border-[#bc13fe]/50 z-20">
      {/* side bar desktop / top bar mobile*/}
      <div className="flex md:flex-col justify-between items-start p-4 md:py-4 md:px-0 h-full">
        <div
          className="flex justify-center items-center gap-2 cursor-pointer primary-text-color md:mt-4"
          onClick={() => handleClick("overview")}
        >
          <MdTerminal size={38} className="hidden md:flex ml-4 " />
          <MdTerminal size={28} className="md:hidden" />

          <h1 className="text-2xl md:text-4xl font-bold ">Dias.sys</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-col gap-8 w-full h-[80%] relative ">
          {navigation_links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name} className="w-full relative">
                <motion.button
                  layout
                  onClick={() => handleClick(link.id)}
                  className={`text-xl  cursor-pointer px-6 py-4 flex items-center gap-4 w-full hover:bg-white/10 transition-colors ${active === link.name ? "primary-text-color bg-white/10" : "secondary-text-color"}`}
                >
                  {/* Indicador animado */}
                  {active === link.name && (
                    <motion.div
                      layoutId="active-indicator"
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 50,
                      }}
                      className="absolute left-0 top-0 h-full w-0.75 primary-color shadow-[0_0_10px_#bc13fe]"
                    />
                  )}

                  {Icon && <Icon size={26} />}
                  <span>{link.name}</span>
                </motion.button>
              </li>
            );
          })}
        </ul>

        {/* botão mobile */}
        <button
          className="primary-text-color cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="px-4 pb-4"
            >
              {navigation_links.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.name}
                    variants={item}
                    className={`text-lg  font-secondary border-b-2 py-2 my-2 flex justify-between items-center hover:bg-white/10 transition-colors ${active === link.name ? "primary-text-color" : "secondary-text-color"}`}
                  >
                    <button
                      className="flex gap-2 justify-start items-center w-full "
                      onClick={() => {
                        handleClick(link.id);
                        setIsOpen(false);
                      }}
                    >
                      {Icon && <Icon size={20} />}
                      <span>{link.name}</span>
                    </button>
                    <span className="text-[#787776]/50 font-secondary text-base">
                      #{link.number}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
