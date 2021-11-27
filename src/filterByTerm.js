module.exports = { filterByTerm: filterByTerm };

function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throw Error("SearchTerm cannot be empty");
    if (!inputArr.length) throw Error("InputArr cannot be empty"); // new line
    const regex = new RegExp(searchTerm, "i"); // Change to RegExp(searchTerm, "i") for case insensitive

    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  