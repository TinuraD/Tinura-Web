import React from 'react';
import { Link } from 'react-router-dom';
import TypingText from './TypingText';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
      {/* Background shapes/blobs for visual aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-4xl space-y-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
          Hello, I'm <TypingText text="Tinura Dinith" typingSpeed={100} />
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md animate-fade-in-up animation-delay-500">
          I do programming stuff for fun. This website is a project I made as a hobby.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-1000">
          <a
            href="https://github.com/tinurad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            My GitHub
          </a>
          <Link
            to="/dw"
            className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
          >
            Launch Desktop View
          </Link>
        </div>
      </div>

      {/* Tailwind Keyframes for animations (normally in tailwind.config.js, but using direct CSS for CDN) */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animate-fade-in-up {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;