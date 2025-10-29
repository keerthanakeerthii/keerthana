// Simple regex for email validation
function validateEmail(email) {
  return /^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email);
}

// Password: min 6 chars, at least one lowercase, one uppercase, one digit
function validatePassword(pass) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass);
}

// Generate a 6-digit numeric code
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const form = document.getElementById('registerForm');
const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');
const emailErr = document.getElementById('emailError');
const passErr = document.getElementById('passwordError');

const verificationSection = document.getElementById('verificationSection');
const showCode = document.getElementById('showCode');
const verifyCode = document.getElementById('verifyCode');
const codeErr = document.getElementById('codeError');
const verifyBtn = document.getElementById('verifyBtn');
const successMsg = document.getElementById('successMsg');

let sentCode = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();
  emailErr.textContent = '';
  passErr.textContent = '';
  let valid = true;

  if (!validateEmail(emailEl.value)) {
    emailErr.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (!validatePassword(passEl.value)) {
    passErr.textContent = "Password must be at least 6 characters, with uppercase, lowercase, and a digit.";
    valid = false;
  }

  if (valid) {
    // Simulate sending verification code
    sentCode = generateCode();
    showCode.textContent = sentCode; // In real app, send via email
    verificationSection.style.display = '';
    form.style.display = 'none';
  }
});

verifyBtn.addEventListener('click', function() {
  codeErr.textContent = '';
  if (verifyCode.value === sentCode) {
    verificationSection.style.display = 'none';
    successMsg.style.display = '';
  } else {
    codeErr.textContent = "Invalid verification code. Please try again.";
  }
});