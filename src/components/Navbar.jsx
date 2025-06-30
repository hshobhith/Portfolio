// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">Shobhith</div>
            <div className="hidden md:flex space-x-6">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-100 hover:text-indigo-800 font-medium"
                    >
                        {item}
                    </a>
                ))}
            </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} 
              className="text-gray-500 hover:text-indigo-600 font-medium">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}