import React from 'react';
import { Link } from 'react-router-dom';

interface StartMenuProps {
  onOpenNotepad: () => void;
  onCloseMenu: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onOpenNotepad, onCloseMenu }) => {
  const handleNotepadClick = () => {
    onOpenNotepad();
    onCloseMenu();
  };

  const handleSettingsClick = () => {
    alert('Settings are not implemented yet!');
    onCloseMenu();
  };

  return (
    <div className="w-64 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-sm text-white p-4 rounded-tr-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Start Menu</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={handleNotepadClick}
            className="flex items-center w-full px-3 py-2 rounded hover:bg-blue-600 transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
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
        </li>
        <li>
          <button
            onClick={handleSettingsClick}
            className="flex items-center w-full px-3 py-2 rounded hover:bg-blue-600 transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.827 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.827-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </button>
        </li>
        <li className="border-t border-gray-600 pt-2 mt-2">
          <Link
            to="/"
            onClick={onCloseMenu}
            className="flex items-center w-full px-3 py-2 rounded hover:bg-red-600 transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Back to Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;