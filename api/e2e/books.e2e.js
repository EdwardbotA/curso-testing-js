/* eslint-disable quotes */
const request = require("supertest");
const { generateManyBooks } = require("../src/fakes/book.fake");

const mockGetAll = jest.fn();

jest.mock("../src/lib/mongo.lib.js", () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

const createApp = require("../src/app");

describe("Test for books", () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Test for [GET] /api/v1/books", () => {
    test("should return a book list", () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
