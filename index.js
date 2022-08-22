
let firstNumber = parseInt(prompt('Enter first number'));
let mathAction = prompt('Enter mathematical action */+-');
let secondNumber = parseInt(prompt('Enter second number'));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
  alert('It s NaN');
} else if (mathAction !== "*" &&
  mathAction !== "/" &&
  mathAction !== "+" &&
  mathAction !== "-") {
  alert('This operation is not exist');
}
if (mathAction === "*") {
  result = firstNumber * secondNumber
  alert(`Your result is ${result}`);
}
if (mathAction === "/") {
  result = firstNumber / secondNumber
  alert(`Your result is ${result}`);
}
if (mathAction === "+") {
  result = firstNumber + secondNumber
  alert(`Your result is ${result}`);
}

if (mathAction === "-") {
  result = firstNumber - secondNumber
  alert(`Your result is ${result}`);
}




