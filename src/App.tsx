import { AnimatePresence, motion } from "motion/react";
import { FootBar } from "./components/layout/footbar";
import { NavBar } from "./components/layout/navbar";
import { Overview } from "./sections/Overview/Overview";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { delay: 0.8, duration: 0.4 } }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Overview />
      {/* Overview */}
      {/* Experience */}
      {/* Projects */}
      {/* Contact */}
      <section id="experience" className="w-full h-screen"></section>
      <section id="projects" className="w-full h-screen"></section>
      <section id="contact" className="w-full h-screen"></section>
      <FootBar />
    </>
  );
}

export default App;
