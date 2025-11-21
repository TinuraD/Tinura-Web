import React, { useState, useRef, useEffect } from 'react';

interface NotepadProps {
  onClose: () => void;
  onMinimize: () => void;
  onActivate: () => void;
  isActive: boolean;
  initialPosition: { x: number; y: number };
}

const Notepad: React.FC<NotepadProps> = ({ onClose, onMinimize, onActivate, isActive, initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const notepadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && notepadRef.current) {
      notepadRef.current.focus(); // Ensure the active window gets focus visually (e.g., for border)
    }
  }, [isActive]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (notepadRef.current) {
      onActivate(); // Activate this window when clicked
      setIsDragging(true);
      setOffset({
        x: e.clientX - notepadRef.current.getBoundingClientRect().left,
        y: e.clientY - notepadRef.current.getBoundingClientRect().top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={notepadRef}
      className={`absolute bg-white text-gray-900 rounded-lg shadow-xl overflow-hidden resize min-w-[300px] min-h-[200px] w-1/3 h-1/2 ${isActive ? 'z-30 border-2 border-blue-400' : 'z-20 border border-gray-300'}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={onActivate} // Activate on any click within the window
    >
      <div
        className="flex justify-between items-center bg-gray-200 px-4 py-2 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <span className="font-semibold">Notepad</span>
        <div className="flex space-x-2">
          <button onClick={onMinimize} className="p-1 rounded-full hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
          </button>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-red-500 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
      <textarea
        className="w-full h-[calc(100%-48px)] p-4 outline-none text-sm resize-none"
        placeholder="Start typing..."
      ></textarea>
    </div>
  );
};

export default Notepad;