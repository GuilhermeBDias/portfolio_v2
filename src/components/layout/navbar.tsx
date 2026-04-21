import { useEffect, useState } from "react";
import { navigation_links } from "../../constants/navigation_links";
import { MdTerminal, MdMenu, MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

export const NavBar = () => {
  const [active, setActive] = useState<string>("Hero");

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (name: string) => {
    setActive(name);

    const section = document.getElementById(name.toLowerCase());

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#1c1b1b94] backdrop-blur-md">
      {/* top bar */}
      <div className="flex justify-between items-center p-4 ">
        <div
          className="flex justify-center items-center gap-2 cursor-pointer primary-text-color"
          onClick={() => handleClick("Hero")}
        >
          <MdTerminal size={32} className="hidden md:flex self-end" />
          <MdTerminal size={28} className="md:hidden  self-end" />

          <h1 className="text-2xl md:text-3xl font-bold ">Dias.sys</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navigation_links.map((link) => (
            <li
              key={link.name}
              onClick={() => handleClick(link.name)}
              className={`text-lg text-[#787776] cursor-pointer border-b-2 ${active === link.name ? "tertiary-text-color" : "border-transparent"}`}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <h1
          className="hidden md:flex text-2xl primary-text-color font-semibold"
          onClick={() => handleClick("Contact")}
        >
          Conect
        </h1>

        <button
          className="primary-text-color cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
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
              {navigation_links.map((link) => (
                <motion.li
                  key={link.name}
                  variants={item}
                  className="text-lg text-[#787776] border-b-2 py-2"
                >
                  <button
                    onClick={() => {
                      handleClick(link.name);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
