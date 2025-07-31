import { useEffect } from "react";
import { useState, useRef } from "react";

const Otp = ({ otpLength }) => {
  const [otpDigits, setOtpDigits] = useState(new Array(otpLength).fill(""));
  const inputRef = useRef([]);
  const handleOtpChange = (e, index) => {
    console.log(e.key); // key we're pressing
    if (e.key === "Backspace") {
      // need to clear the otp value of that index & go to previous input
      // only go if that is available
      const otpDigitsCopy = [...otpDigits];
      otpDigitsCopy[index] = "";
      setOtpDigits(otpDigitsCopy);
      if (index > 0) {
        // go to previous index after clearing only if that is available
        inputRef.current[index - 1].focus();
      }
    }

    if (e.key === "ArrowRight" && index < otpLength - 1) {
      // when pressing right arrow
      inputRef.current[index + 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      // when pressing left arrow
      inputRef.current[index - 1].focus();
    }
    if (isNaN(e.key)) return; // only allow digits

    // set the value in state var. array at the index
    // on which index we're entering
    const otpDigitsCopy = [...otpDigits];
    otpDigitsCopy[index] = e.key;
    setOtpDigits(otpDigitsCopy);
    if (index < otpLength - 1) {
      inputRef.current[index + 1].focus();
      // only go to next when we've next box
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <div>
      {otpDigits.map((otpValue, index) => {
        return (
          <input
            type="text"
            value={otpValue}
            ref={(currentInputValue) =>
              (inputRef.current[index] = currentInputValue)
            }
            onKeyDown={(e) => handleOtpChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
