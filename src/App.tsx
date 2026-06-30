import { AnimatePresence, motion } from "motion/react";
import { FootBar } from "./components/layout/footbar";
import { NavBar } from "./components/layout/navbar";
import { Overview } from "./sections/Overview/Overview";
import { useState } from "react";
import { Experience } from "./sections/Experience/Experience";
import { Loader } from "./components/ui/Loader";
import { Projects } from "./sections/Projects/Projects";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.6 },
          }}
          className="fixed inset-0 z-50"
        >
          <Loader onFinish={() => setIsLoading(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.8, duration: 0.4 },
                }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>

          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Overview />
          <Experience />
          <Projects />
          <section id="contact" className="w-full h-screen"></section>
          <FootBar />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
