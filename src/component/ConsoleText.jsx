import React, { useEffect, useState } from 'react';

const ConsoleText = ({ words, colors, showButtons, updateButton, letterCount , updateLetterCount, showYes}) => {
  const [visible, setVisible] = useState(true);
//   const [letterCount, updateLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [currentWords, setCurrentWords] = useState([...words]);
  const [currentColors, setCurrentColors] = useState(colors || ['#fff']);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!showButtons) {
      const interval = setInterval(() => {
        if (letterCount === 0 && !waiting) {
          setWaiting(true);
          setTimeout(() => {
            const usedColor = currentColors.shift();
            currentColors.push(usedColor);
            setX(1);
            updateLetterCount(1);
            setWaiting(false);
          }, 1000);
        } else if (letterCount === currentWords[wordIndex].length && !waiting) {
          setWaiting(true);
          updateButton(showYes ? false : true);
        } else if (!waiting) {
          updateLetterCount(prev => prev + x);
        }
      }, 120);

      return () => clearInterval(interval);
    }
  }, [letterCount, waiting, currentWords, currentColors, x, wordIndex, showButtons]);

  useEffect(() => {
    const underscoreInterval = setInterval(() => {
      setVisible(prev => !prev);
    }, 400);

    return () => clearInterval(underscoreInterval);
  }, []);

 

  return (
    <div className='console-container fadeInLeft' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span id='text' style={{ color: currentColors[0] }}>
          {currentWords[wordIndex].substring(0, letterCount)}
        </span>
        <div className={`console-underscore ${visible ? '' : 'hidden'}`} id='console'>
          &#95;
        </div>
      </div>
    
    </div>
  );
};

export default ConsoleText;
