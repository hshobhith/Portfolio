import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import profilePic from "../images/profile.png"; 
import "../styles/animations.css"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white"
    >
      <div className="text-center px-4 relative" data-aos="flip-left">
        {/* Animated Profile Image */}
        <img
          src={profilePic}
          alt="Shobhith"
          className="w-34 h-34 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white mx-auto mb-4 animate-float"
        />


        {/* Text with waving hand */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Shobhith{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </h1>

        <p className="text-xl md:text-2xl mb-6">
          A Passionate Full Stack Developer
        </p>

        <a
          href="#projects"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-gray-100"
        >
          View My Work
        </a>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a
            href="https://instagram.com/h.shobhith"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/916366076182"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="tel:+916366076182"
            className="hover:text-yellow-300"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://in.linkedin.com/in/shobhith-h-646962253"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
