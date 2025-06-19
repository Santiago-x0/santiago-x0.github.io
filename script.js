// Funncion para generar una contraseña aleatoria
function generatePassword() {
  const lengthInput = document.getElementById('length').value; // variable para guardar el valor del input del usuario
  const resultElement = document.getElementById('result'); // variable que muestra la contraseña generada
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // variable para guardar los caracteres que se pueden usar en la contraseña
  const length = parseInt(lengthInput, 10); // variable para asegurar que el valor del input es un número entero

  // Validaciones

  // verificar que el input no esté vacío ni que sea texto plano
  if (isNaN(length)) {
    resultElement.textContent = "Error: Ingrese un número válido.";
    return;
  }

  // vcerificar que el numero sea mayor o igual a 4
  if (length < 4) {
    resultElement.textContent = "Error: Mínimo 4 caracteres.";
    return;
  }
  
    // verificar que el numero sea menor o igual a 32
  if (length > 32) {
    resultElement.textContent = "Error: Máximo 32 caracteres.";
    return;
  }

  let password = ""; // variable para guardar la contraseña generada

    // bucle para generar la contraseña
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  resultElement.textContent = password; // mostrar la contraseña generada
}

// Funcion que genera un hash md5
function encodeMD5() {
  const input = document.getElementById('md5Input').value; // obtener el texto a codificar
  if (input === "") { // verificar que el input no esté vacío
    document.getElementById('md5Result').textContent = "Error: Ingrese un texto válido.";
    return;
  }
  const hash = CryptoJS.MD5(input).toString(); // uso de la libnrería CryptoJS para generar el hash MD5
  document.getElementById('md5Result').textContent = hash; // mostrar el hash generado
}