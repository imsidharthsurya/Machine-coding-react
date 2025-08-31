import { useState } from "react";
import { emailValidation, passwordValidation } from "./utils/inputValidation";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(formData.email)) {
      console.log("invalid email");
      document.querySelector(".input-email").style.backgroundColor = "red";
    } else {
      document.querySelector(".input-email").style.backgroundColor = null;
    }
    if (!passwordValidation(formData.password)) {
      console.log("invalid pwd");
      document.querySelector(".input-pwd").style.backgroundColor = "red";
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="email-wrapper">
          <input
            type="text"
            className="input-email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="password-wrapper">
          <input
            type="password"
            className="input-pwd"
            value={formData?.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
