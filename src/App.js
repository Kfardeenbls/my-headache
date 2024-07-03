import React, { useState, useRef } from 'react';

import './App.css';
import '../src/style/playBtn.css';
import Heart from './heart/Heart';
import myAudio from "./assets/audio.mp3";
import smileImoji from "./assets/smile-emoji.png"

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const toggleAudio = () => {
    setIsPlaying(!isPlaying); // Toggle the isPlaying state

    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio if it's playing
    } else {
      audioRef.current.play(); // Play the audio if it's paused
    }
  };

  return (
    <div className="App">
      <header className="App-header flex-col-gap">
        <div className='top-heading'>
        <h1>For You My Headache</h1>
        <img src={smileImoji} alt=''></img>
        </div>
      <audio
      ref={audioRef}
         className="d-none"
        src={myAudio}  // Replace with your audio file path or URL
        controls
        autoPlay={true}  // Auto play when component is rendered
        loop={true}     // Optional: Set to true if you want the audio to loop
        onPlay={() => setIsPlaying(true)}  // Optional: Handle play event
        onPause={() => setIsPlaying(false)} 
      />
        {isPlaying && <Heart />}
        <button type='btn' className='play-btn' onClick={toggleAudio}/>
      </header>
    </div>
  );
}

export default App;
