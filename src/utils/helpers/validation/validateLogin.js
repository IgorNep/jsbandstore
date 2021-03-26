const validateLoginInput = (username) => {
  if (username.length < 4 || username.length > 16) {
    return true;
  }
  return false;
};
export default validateLoginInput;
