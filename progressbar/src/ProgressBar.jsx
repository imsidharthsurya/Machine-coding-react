import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBar((prev) => {
        if (prev >= progress) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="outer-div">
      <div
        className="inner-div"
        // style={{ transform: `translateX(${progressBar - 100}%)` }}
        style={{ width: `${progressBar}%` }}
      >
        {progressBar}%
      </div>
    </div>
  );
};

export default ProgressBar;
