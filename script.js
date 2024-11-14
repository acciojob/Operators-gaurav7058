//your JS code here. If required.
document.getElementById('calculate').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById('result').innerText = `${result}`;
});

document.getElementById('change_text').addEventListener('click', function() {
  const textContainers = document.querySelectorAll('.division');
  const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];

  textContainers.forEach((container, index) => {
    container.textContent = newTexts[index];
  });
});
