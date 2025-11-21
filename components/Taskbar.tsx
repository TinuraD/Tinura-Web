import React from 'react';
import TimeDisplay from './TimeDisplay';

interface TaskbarProps {
  onStartClick: () => void;
  notepadOpen: boolean;
  notepadActive: boolean;
  onNotepadClick: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onStartClick, notepadOpen, notepadActive, onNotepadClick }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm text-white flex items-center justify-between px-2 z-40">
      <div className="flex items-center h-full">
        <button
          onClick={onStartClick}
          className="start-button flex items-center h-full px-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          Start
        </button>
        {notepadOpen && (
          <button
            onClick={onNotepadClick}
            className={`flex items-center h-full px-3 ml-2 text-sm ${
              notepadActive ? 'bg-gray-600' : 'hover:bg-gray-600'
            } transition-colors duration-200 border-b-2 ${
              notepadActive ? 'border-blue-400' : 'border-transparent'
            }`}
            title="Notepad"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Notepad
          </button>
        )}
      </div>
      <div className="flex items-center h-full">
        <TimeDisplay timezone="Asia/Colombo" />
      </div>
    </div>
  );
};

export default Taskbar;