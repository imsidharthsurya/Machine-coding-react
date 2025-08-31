const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pwd_regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const emailValidation = (email) => {
  if (email_regex.test(email)) return true;
  return false;
};

export const passwordValidation = (pwd) => {
  if (pwd_regex.test(pwd)) return true;
  return false;
};
