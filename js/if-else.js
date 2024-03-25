let num = 6789;
let password = '1234567i';

if (password.length === 8 && password.includes(Number)) {
  console.log('Welcome');
} else if (password.length <= 8) {
  console.log('Password is too short, must include number');
} else if (password.length >= 8) {
  console.log(
    'Password is too long. Password must be 8 characters including numbers'
  );
} else {
  console.log('Please provide a password');
}
