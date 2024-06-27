// matchers
test("test obj", () => {
  const data = { name: "edward" };
  data.lastname = "Botello";
  expect(data).toEqual({ name: "edward", lastname: "Botello" });
});

test("test null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("test boolean", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();

  expect(1).toBeTruthy();
  expect("d").toBeTruthy();
  expect([]).toBeTruthy();
  expect(true).toBeTruthy();
});

test("test strings", () => {
  expect("Christoph").toMatch(/stop/);
});

test("test list / arrays", () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
