import { useEffect, useRef, useState } from "react";
const Matrix = ({ n }) => {
  // by default will be running from the start
  const [isRunning, setIsRunning] = useState(true);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const timerRef = useRef(null);
  const handleClick = (r, c) => {
    setRow(r);
    setCol(c);
  };
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCol((prev) => {
          if (prev === n - 1) {
            setRow((pr) => {
              if (pr === n - 1) {
                return 0;
              } else {
                return pr + 1;
              }
            });
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  return (
    <div>
      {new Array(n).fill("").map((_, r) => {
        // for every row there will be n column as well
        return (
          <div className="row">
            {new Array(n).fill("").map((_, c) => {
              return (
                <div
                  onClick={() => handleClick(r, c)}
                  className={`grid ${r === row && c === col ? "colored" : ""}`}
                >
                  {r}, {c}
                </div>
              );
            })}
          </div>
        );
      })}
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Matrix;
