import { FootBar } from "./components/layout/footbar";
import { NavBar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <NavBar />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Projects */}
      {/* Contact */}
      <section id="overview" className="w-full h-screen"></section>
      <section id="experience" className="w-full h-screen"></section>
      <section id="projects" className="w-full h-screen"></section>
      <section id="contact" className="w-full h-screen"></section>
      <FootBar/>
    </>
  );
}

export default App;
