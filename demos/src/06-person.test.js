// AAA = Arrange/alistar, Act/ejecutar, Assert/resolver.

const Person = require("./06-person.js");

describe("test for Person", () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person("Edward", 45, 1.7);
  });


  test("Should return down", () => {
    // Arrange
    person.weight = 45;

    // Act
    const imc = person.calcIMC();

    // Assert
    expect(imc).toBe("down");
  });

  test("Should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();

    expect(imc).toBe("normal");
  });
});
