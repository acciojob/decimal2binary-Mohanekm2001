function decimalToBinary() {
  // Get the decimal number input value
  const decimal = document.getElementById('decimal').value;

  // Convert decimal to binary
  const binary = parseInt(decimal, 10).toString(2);

  // Update the result element
  document.getElementById('result').innerHTML = binary;
}
