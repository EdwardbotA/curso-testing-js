/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: 1,
    name: "Harry Potter",
  },
];

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   // getAll: () => [...fakeBooks],
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock("../lib/mongo.lib.js", () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe("Test for BooksService", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("test for getBooks", () => {
    test("should return a book list", async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });

    test("should return a book list", async () => {
      // Arrange
      mockGetAll.mockResolvedValue([
        {
          _id: 2,
          name: "Lord Of The Rings",
        },
      ]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual("Lord Of The Rings");
    });
  });
});
