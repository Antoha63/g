const generateNumberBtn = document.getElementById("generate-number-button"),
  numberCheckbox = document.getElementById("number-checkbox"),
  numberTextArea = document.getElementById("number-textarea"),
  numberCountInput = document.getElementById("number-count-input"),
  numberCountSlider = document.getElementById("number-count-slider"),

  numberRangeInput = document.getElementById("number-range-input"),
  numberListInput = document.getElementById("number-list-input"),

  numberListTextarea = document.getElementById("number-list-textarea"),

  numberMinInputWrapper = document.getElementById("number-min-input-wrapper"),
  numberMaxInputWrapper = document.getElementById("number-max-input-wrapper"),

  numberP = document.getElementById("number-p"),

  numberRepeatWrapper = document.getElementById("number-repeat-wrapper"),
  numberRepeatCheckbox = document.getElementById("number-repeat-checkbox");

function randomNum() {
  if (numberRangeInput.checked) {
    let min = document.getElementById("min-number-input");
    let max = document.getElementById("max-number-input");
    let minValue = Number(min.value);
    let maxValue = Number(max.value);
    if (minValue > maxValue) {
      minValue = maxValue + minValue;
      maxValue = minValue - maxValue;
      minValue = minValue - maxValue;
      min.value = minValue;
      max.value = maxValue;
    }
    var excludeNumbers = numberTextArea.value.replace(/[^0-9 -]/g, "").replace(/ +/g, ' ').trim().split(" ").map(string => parseInt(string));

    let num = "";

    if (numberCountInput.value > 1) {
      numberP.innerText = "Случайные числа:";
      numberRepeatWrapper.hidden = false;
    } else {
      numberP.innerText = "Случайное число:";
      numberRepeatWrapper.hidden = true;
    }

    if (numberRepeatCheckbox.checked) {
      let diff = maxValue - minValue + 1;
      if (numberCountSlider.innerText > diff) {
        var result = [];
        var start = minValue;
        while (start <= maxValue) {
          if (numberCheckbox.checked) {
            if (excludeNumbers.includes(start)) {
              start++;
              continue;
            } else {
              result.push(start++);
            }
          } else {
            result.push(start++);
          }
        }
        num = shuffle(result);

        return setResult(num);
      }
    }

    for (i = 0; i < parseInt(numberCountInput.value); ++i) {
      if (i == 0) {
        num = randomNumber(num, minValue, maxValue, excludeNumbers);
      } else {
        num = num + "   " + randomNumber(num, minValue, maxValue, excludeNumbers);
      }
    }

    setResult(num);
  } else {
    var numbers = numberListTextarea.value.replace(/[^0-9 -]/g, "").replace(/ +/g, ' ').trim().split(" ").map(string => parseInt(string));
    var excludeNumbers = numberTextArea.value.replace(/[^0-9 -]/g, "").replace(/ +/g, ' ').trim().split(" ").map(string => parseInt(string));

    let num = "";

    if (numberCountInput.value > 1) {
      numberP.innerText = "Случайные числа:";
      numberRepeatWrapper.hidden = false;
    } else {
      numberP.innerText = "Случайное число:";
      numberRepeatWrapper.hidden = true;
    }

    if (numberRepeatCheckbox.checked) {
      let numberLength = numbers.length;
      if (numberCountSlider.innerText > numberLength) {
        var result = [];
        var i = 0;
        while (i < numberLength) {
          if (numberCheckbox.checked) {
            if (excludeNumbers.includes(numbers[i])) {
              i++;
              continue;
            } else {
              result.push(numbers[i]);
              i++;
            }
          } else {
            result.push(numbers[i]);
            i++;
          }
        }
        num = shuffle(result);

        return setResult(num);
      }
    }

    for (i = 0; i < parseInt(numberCountInput.value); ++i) {
      if (i == 0) {
        num = randomLol(numbers, excludeNumbers);
      } else {
        num = num + "   " + randomLol(numbers, excludeNumbers);
      }
    }

    setResult(num);
  }
};

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let num = "";

  for (i = 0; i < array.length; ++i) {
    if (i == 0) {
      num = array[i];
    } else {
      num = num + "   " + array[i];
    }
  }

  return num;
};

function randomLol(numbers, excludeNumbers) {
  var randomIndex = Math.floor(Math.random() * numbers.length);
  var randomNumber = numbers[randomIndex];

  if (excludeNumbers.includes(randomNumber)) {
    return randomLol(numbers, excludeNumbers);
  } else {
    return randomNumber;
  }
}

function randomNumber(num1, minValue, maxValue, excludeNumbers) {
  let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  if (numberCheckbox.checked) {
    if (excludeNumbers.includes(num)) {
      return randomNumber(num1, minValue, maxValue, excludeNumbers);
    } else {
      return num;
    }
  } else {
    return num;
  }
};

function setResult(num) {
  let result = document.getElementById("result");

  result.style.fontSize = getSize(num);
  result.innerText = num;
};

function getSize(num) {
  let numLength = num.length;

  if (numLength > 4) {
    if (numLength > 5) {
      if (numLength > 6) {
        if (numLength > 7) {
          if (numLength > 8) {
            if (numLength > 9) {
              if (numLength > 10) {
                return "50px";
              }
              return "60px";
            }
            return "70px";
          }
          return "80px";
        }
        return "90px";
      }
      return "100px";
    }
    return "110px";
  } else {
    return "120px";
  }
};

window.addEventListener("load", randomNum());

generateNumberBtn.addEventListener("click", randomNum);

numberCheckbox.addEventListener("click", () => {
  if (numberCheckbox.checked) {
    numberTextArea.hidden = false;
  } else {
    numberTextArea.hidden = true;
  }
});

numberCountInput.addEventListener("input", () => {
  numberCountSlider.innerText = numberCountInput.value;
  randomNum();
});

numberRangeInput.addEventListener("click", () => {
  numberRangeInput.checked = true;
  numberListInput.checked = false;

  numberListTextarea.hidden = true;
  numberMinInputWrapper.hidden = false;
  numberMaxInputWrapper.hidden = false;
});

numberListInput.addEventListener("click", () => {
  numberRangeInput.checked = false;
  numberListInput.checked = true;

  numberListTextarea.hidden = false;
  numberMinInputWrapper.hidden = true;
  numberMaxInputWrapper.hidden = true;
});
