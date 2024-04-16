const passwordInput = document.getElementById("password-input"),
  copyIcon = document.querySelector(".copy-icon"),
  rangeInput = document.getElementById("password-range"),
  sliderNumber = document.getElementById("password-slider-number"),
  generateButton = document.getElementById("password-button"),

  passwordImage = document.getElementById("password-image"),

  ABCcheck = document.getElementById("ABC-check"),
  abccheck = document.getElementById("abc-check"),
  numberCheck = document.getElementById("number-check"),
  specCheck = document.getElementById("spec-check");

//Characters of alphabet(a-z/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters = "";

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
  let newPassword = "";

  if (allCharacters != "") {
    //for loop will run till rangeInput value
    for (let i = 0; i < rangeInput.value; i++) {
      let randomNumbers = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[randomNumbers];
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon

    var passwordLength = newPassword.length;
    if (passwordLength < 6) {
      passwordImage.src = "Images/password/tent-password-complexity.png";
    } else {
      if ((allCharacters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "") == "" || allCharacters.replace("abcdefghijklmnopqrstuvwxyz", "") == "" || allCharacters.replace("0123456789", "") == "" || allCharacters.replace("^!$%&|[](){}:;.,*+-#@<>~", "") == "") && passwordLength < 10) {
        passwordImage.src = "Images/password/wooden-house-password-complexity.png";
      }
      else {
        if (passwordLength < 8) {
          passwordImage.src = "Images/password/wooden-house-password-complexity.png";
        } else {
          if (passwordLength < 12) {
            passwordImage.src = "Images/password/brick-house-password-complexity.png";
          } else {
            if (passwordLength < 16) {
              passwordImage.src = "Images/password/big-house-password-complexity.png";
            } else {
              passwordImage.src = "Images/password/castle-password-complexity.png";
            }
          }
        }
      }
    }
  } else {
    allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ABCcheck.checked = true;
  }
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
});

generatePassword();
generateButton.addEventListener("click", generatePassword)

ABCcheck.addEventListener("click", () => {
  if (ABCcheck.checked) {
    allCharacters = allCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    allCharacters = allCharacters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
  }

  if (allCharacters.length > 0) {
    generatePassword();
  } else {
    passwordInput.value = "";
  }
})

abccheck.addEventListener("click", () => {
  if (abccheck.checked) {
    allCharacters = allCharacters + "abcdefghijklmnopqrstuvwxyz";
  } else {
    allCharacters = allCharacters.replace("abcdefghijklmnopqrstuvwxyz", "");
  }

  if (allCharacters.length > 0) {
    generatePassword();
  } else {
    passwordInput.value = "";
  }
})

numberCheck.addEventListener("click", () => {
  if (numberCheck.checked) {
    allCharacters = allCharacters + "0123456789";
  } else {
    allCharacters = allCharacters.replace("0123456789", "");
  }

  if (allCharacters.length > 0) {
    generatePassword();
  } else {
    passwordInput.value = "";
  }
})

specCheck.addEventListener("click", () => {
  if (specCheck.checked) {
    allCharacters = allCharacters + "^!$%&|[](){}:;.,*+-#@<>~";
  } else {
    allCharacters = allCharacters.replace("^!$%&|[](){}:;.,*+-#@<>~", "");
  }

  if (allCharacters.length > 0) {
    generatePassword();
  } else {
    passwordInput.value = "";
  }
});

window.addEventListener("load", generatePassword());
