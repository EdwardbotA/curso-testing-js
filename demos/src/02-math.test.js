const { sum, multiply, divide, percentage } = require("./02-math.js");

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('should be 4', () => {
  const rta = multiply(2, 2);
  expect(rta).toBe(4);
});

test('should divide', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);

  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should divide for zero', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();

  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});

test('should return de percentage', () => {
  const rta = percentage(1500, 50);
  expect(rta).toBe(750);

  const rta2 = percentage(100, 25);
  expect(rta2).toBe(25);

  const rta3 = percentage(100, 10);
  expect(rta3).toBe(10);

  const rta4 = percentage(100, 90);
  expect(rta4).toBe(90);
});
