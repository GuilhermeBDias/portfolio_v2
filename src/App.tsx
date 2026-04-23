import { FootBar } from "./components/layout/footbar";
import { NavBar } from "./components/layout/navbar";
import { Overview } from "./sections/Overview/Overview";

function App() {
  return (
    <>
      <NavBar />
      <Overview />
      {/* Overview */}
      {/* Experience */}
      {/* Projects */}
      {/* Contact */}
      <section id="experience" className="w-full h-screen"></section>
      <section id="projects" className="w-full h-screen"></section>
      <section id="contact" className="w-full h-screen"></section>
      <FootBar/>
    </>
  );
}

export default App;
