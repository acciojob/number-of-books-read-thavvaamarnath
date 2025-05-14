function numberOfBooksRead(library) {
    // Filter books that have readingStatus true and return their count
    return library.filter(book => book.readingStatus === true).length;
}

// Example usage:
const library = [
    { title: "Book 1", author: "Author 1", readingStatus: true },
    { title: "Book 2", author: "Author 2", readingStatus: false },
    { title: "Book 3", author: "Author 3", readingStatus: true }
];

console.log(numberOfBooksRead(library)); // Output: 2
