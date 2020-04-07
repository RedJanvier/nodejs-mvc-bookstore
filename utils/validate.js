// EXTRAS
const register = ({ firstname, lastname, age, gender, email, password }) => {
  const errors = [];
  // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

  if (!firstname || !lastname || !age || !gender || !email || !password) {
    errors.push({ msg: 'Fill in all the fields please!' });
  }

  if (password.length < 8) {
    errors.push({ msg: 'Password is too short.' });
  }

  if (age < 6) {
    errors.push({ msg: 'Wrong Email or Password!' });
  }

  // if (emailRegex.test(email) !== true){
  //     errors.push({ msg: "Enter a valid Email please!" });
  // }

  return errors;
};
const login = ({ email, password }) => {
  const errors = [];

  if (!email || !password) {
    errors.push({ msg: 'Fill in all the fields please!' });
  }

  if (password.length < 8) {
    errors.push({ msg: 'Password is too short.' });
  }

  return errors;
};

export default {
    login,
    register
};
