import { useState, useEffect, useRef } from "react";
const Timer = () => {
  const [timer, setTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const timerRef = useRef(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const handleChange = (e, inputField) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) return;
    const timerCopy = { ...timer };
    timerCopy[inputField] = value;
    // now if second or minute is greater than 60 then adjust a/c
    timerCopy.minute += Math.floor(timerCopy.second / 60);
    timerCopy.second = timerCopy.second % 60;
    timerCopy.hour += Math.floor(timerCopy.minute / 60);
    timerCopy.minute = timerCopy.minute % 60;
    setTimer(timerCopy);
  };
  const handleReset = () => {
    setTimer({
      hour: 0,
      minute: 0,
      second: 0,
    });
    setTimerRunning(false);
  };
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          let { second, minute, hour } = prev;
          if (second === 0 && hour === 0 && minute === 0) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            return { second: 0, minute: 0, hour: 0 };
          }
          if (second > 0) {
            second--;
          } else if (minute > 0) {
            minute--;
            second = 59;
          } else if (hour > 0) {
            hour--;
            minute = 59;
            second = 59;
          }
          return { second, minute, hour };
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [timerRunning]);

  return (
    <>
      <input
        type="text"
        disabled={timerRunning}
        placeholder="HH"
        value={timer.hour}
        onChange={(e) => handleChange(e, "hour")}
      />
      <input
        type="text"
        disabled={timerRunning}
        placeholder="MM"
        value={timer.minute}
        onChange={(e) => handleChange(e, "minute")}
      />
      <input
        type="text"
        disabled={timerRunning}
        placeholder="SS"
        value={timer.second}
        onChange={(e) => handleChange(e, "second")}
      />
      <div className="btn-cont">
        <button onClick={() => setTimerRunning(!timerRunning)}>
          {timerRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
