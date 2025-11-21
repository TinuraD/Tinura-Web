import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  typingSpeed?: number; // Milliseconds per character
  delay?: number; // Initial delay before typing starts
}

const TypingText: React.FC<TypingTextProps> = ({ text, typingSpeed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed + delay); // Add delay only to the first character

      // Clear delay after the first character for subsequent characters
      if (currentIndex === 0) {
        setTimeout(() => {
          // No action needed, just let the next character use typingSpeed
        }, delay);
      }

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, delay]);

  return <>{displayedText}</>;
};

export default TypingText;