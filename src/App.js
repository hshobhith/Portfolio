import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import backgroundVideo from './images/5747525-uhd_2160_3240_24fps.mp4'; // <-- your background video
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 


function App() {
    
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,    
  });
}, []);

  return (

    <div className="relative min-h-screen text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer without video background */}
      <Footer />
    </div>
  );
}

export default App;
