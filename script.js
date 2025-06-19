function generatePassword() {
  const length = document.getElementById('length').value || 12;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  document.getElementById('result').textContent = password;
}

function encodeMD5() {
  const input = document.getElementById('md5Input').value;
  const hash = CryptoJS.MD5(input).toString();
  document.getElementById('md5Result').textContent = hash;
}