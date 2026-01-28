import { useState, useEffect, useCallback } from 'react';

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed?: number;
  pauseBetween?: number;
  startDelay?: number;
}

interface UseTypingAnimationReturn {
  displayedText: string;
  isComplete: boolean;
  isTyping: boolean;
}

export const useTypingAnimation = (
  shouldStart: boolean,
  options: UseTypingAnimationOptions
): UseTypingAnimationReturn => {
  const { texts, typingSpeed = 50, pauseBetween = 900, startDelay = 300 } = options;
  
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const typeText = useCallback(async () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsTyping(true);

    // Initial delay
    await new Promise(resolve => setTimeout(resolve, startDelay));

    let fullText = '';

    for (let textIndex = 0; textIndex < texts.length; textIndex++) {
      const currentText = texts[textIndex];
      
      // Type each character
      for (let charIndex = 0; charIndex < currentText.length; charIndex++) {
        fullText += currentText[charIndex];
        setDisplayedText(fullText);
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }

      // Pause between texts (except after the last one)
      if (textIndex < texts.length - 1) {
        await new Promise(resolve => setTimeout(resolve, pauseBetween));
      }
    }

    setIsTyping(false);
    setIsComplete(true);
  }, [texts, typingSpeed, pauseBetween, startDelay, hasStarted]);

  useEffect(() => {
    if (shouldStart && !hasStarted) {
      typeText();
    }
  }, [shouldStart, typeText, hasStarted]);

  return { displayedText, isComplete, isTyping };
};
