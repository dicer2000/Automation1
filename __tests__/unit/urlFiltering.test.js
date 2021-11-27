const filterByTerm = require("../../src/filterByTerm");

/* Check filter function works correctly */
describe("Filter function", () => {
  test("Search by term function does not work", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  /* Search term cannot be empty */
  test("Search term cannot be empty", () => {

    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];

      expect(() => {
        filterByTerm(input, null);
      }).toThrowError(Error("SearchTerm cannot be empty"));


  });

  /* Input Cannot be empty */
  test("Input term cannot be empty", () => {
    const input = [];

      expect(() => {
        filterByTerm(input, "hello");
      }).toThrowError(Error("InputArr cannot be empty"));
  });

});