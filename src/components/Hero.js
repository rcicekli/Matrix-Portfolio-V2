import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Wake up, Neo... The Matrix has you... Follow the white rabbit.";
  const typingSpeed = 50;

  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (text.length === fullText.length) {
      setIsTyping(false);
    }
  }, [text, isTyping]);

  return (
    <section className="hero-section">
      <div className="matrix-rain"></div>
      <div className="matrix-code">
        {text}
        {isTyping && <span className="typing-cursor"></span>}
      </div>
    </section>
  );
}
