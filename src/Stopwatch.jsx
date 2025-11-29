import { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-title">STOPWATCH</p>
      <p className="stopwatch-display">00:00:00</p>
      <div className="stopwatch-controls">
        <button className="stopwatch-startstop">
          <i class="ri-play-fill"></i>
        </button>
        <button className="stopwatch-reset">
          <i class="ri-reset-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
