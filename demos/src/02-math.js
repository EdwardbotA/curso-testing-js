function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

function percentage(number, percentage) {
  return (number * percentage) / 100
}

module.exports = {
  sum,
  multiply,
  divide,
  percentage,
};
