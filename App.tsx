import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import DesktopView from './components/DesktopView';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/dw" element={<DesktopView />} />
      <Route
        path="/"
        element={
          <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />
            <main className="flex-grow">
              <HeroSection />
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
};

export default App;