import { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalIdRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-title">STOPWATCH</p>
      <p className="stopwatch-display">{formatTime()}</p>
      <div className="stopwatch-controls">
        <button
          className="stopwatch-startstop"
          onClick={isRunning ? stop : start}
        >
          <i className={isRunning ? 'ri-pause-fill' : 'ri-play-fill'}></i>
        </button>
        <button className="stopwatch-reset" onClick={reset}>
          <i className="ri-reset-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
