import React, { useState, useEffect, useRef } from 'react';
import Taskbar from './Taskbar';
import Notepad from './Notepad';
import TimeWidget from './TimeWidget';
import StartMenu from './StartMenu';
import { Link } from 'react-router-dom'; // Import Link

const DesktopView: React.FC = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openApps, setOpenApps] = useState<{ notepad: boolean }>({ notepad: false });
  const [activeApp, setActiveApp] = useState<string | null>(null); // 'notepad' or null
  const desktopRef = useRef<HTMLDivElement>(null);

  const openApp = (appName: keyof typeof openApps) => {
    setOpenApps((prev) => ({ ...prev, [appName]: true }));
    setActiveApp(appName);
    setShowStartMenu(false); // Close start menu when opening an app
  };

  const minimizeApp = (appName: keyof typeof openApps) => {
    setOpenApps((prev) => ({ ...prev, [appName]: false }));
  };

  const closeApp = (appName: keyof typeof openApps) => {
    setOpenApps((prev) => ({ ...prev, [appName]: false }));
    if (activeApp === appName) {
      setActiveApp(null);
    }
  };

  const toggleNotepad = () => {
    if (openApps.notepad) {
      // If open, either minimize or bring to front
      if (activeApp === 'notepad') {
        minimizeApp('notepad');
      } else {
        openApp('notepad'); // Bring to front
      }
    } else {
      openApp('notepad');
    }
  };

  const handleDesktopClick = (e: MouseEvent) => {
    if (desktopRef.current && desktopRef.current === e.target) {
      // Only unfocus if clicking directly on the desktop background
      setActiveApp(null);
    }
    // Also close Start Menu if clicking anywhere outside it
    if (showStartMenu && e.target instanceof HTMLElement && !e.target.closest('.start-menu') && !e.target.closest('.start-button')) {
        setShowStartMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDesktopClick);
    return () => {
      window.removeEventListener('click', handleDesktopClick);
    };
  }, [showStartMenu, activeApp]); // Re-run effect if showStartMenu or activeApp changes

  return (
    <div
      ref={desktopRef}
      className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-900 text-white cursor-default"
      onClick={(e) => {
        // Prevent event bubbling from children to desktop
        if (e.target === desktopRef.current) {
          setActiveApp(null);
        }
      }}
    >
      {/* Sri Lanka Time Widget */}
      <div className="absolute top-4 left-4 z-10 animate-fade-in animation-delay-500">
        <TimeWidget />
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="absolute bottom-12 left-0 start-menu z-50 animate-slide-up">
          <StartMenu
            onOpenNotepad={() => openApp('notepad')}
            onCloseMenu={() => setShowStartMenu(false)}
          />
        </div>
      )}

      {/* Notepad App */}
      {openApps.notepad && (
        <Notepad
          onClose={() => closeApp('notepad')}
          onMinimize={() => minimizeApp('notepad')}
          onActivate={() => setActiveApp('notepad')}
          isActive={activeApp === 'notepad'}
          initialPosition={{ x: 100, y: 100 }}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        notepadOpen={openApps.notepad}
        notepadActive={activeApp === 'notepad'}
        onNotepadClick={toggleNotepad}
      />

      <style>
        {`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-up {
            animation: slideUp 0.3s ease-out forwards;
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
};

export default DesktopView;