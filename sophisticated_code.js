/* 
   Filename: sophisticated_code.js
   Content: Complex implementation of a web-based bookstore application in JavaScript
*/

// Define an array of book objects with properties such as title, author, price, and quantity
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, quantity: 10 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.99, quantity: 5 },
  { title: "Pride and Prejudice", author: "Jane Austen", price: 8.99, quantity: 3 },
  // ... more book objects
];

// Define a class for the bookstore
class Bookstore {
  constructor(books) {
    this.books = books;
  }

  // Method to display all books with details
  displayAllBooks() {
    console.log("All Books in the Bookstore:\n");
    this.books.forEach((book, index) => {
      console.log(`Book ${index + 1}:`);
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Price: $${book.price}`);
      console.log(`Quantity: ${book.quantity}\n`);
    });
  }

  // Method to search for a book by its title
  searchByTitle(title) {
    const foundBooks = this.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));

    if (foundBooks.length > 0) {
      console.log(`Found ${foundBooks.length} book(s) matching the title "${title}":\n`);
      foundBooks.forEach((book) => console.log(`Title: ${book.title}, Author: ${book.author}`));
    } else {
      console.log(`No books found matching the title "${title}".`);
    }
  }

  // Method to add a new book to the bookstore
  addBook(title, author, price, quantity) {
    this.books.push({ title, author, price, quantity });
    console.log(`Successfully added "${title}" by ${author} to the bookstore.`);
  }

  // ... More methods for managing the bookstore's operations
}

// Create an instance of the Bookstore class with the predefined books array
const bookstore = new Bookstore(books);

// Perform various actions using the Bookstore object
bookstore.displayAllBooks();
bookstore.searchByTitle("gatsby");
bookstore.addBook("The Alchemist", "Paulo Coelho", 10.99, 7);
// ... more actions and interactions with the bookstore

// Implement additional functionalities and features...
// ...

// End of sophisticated_code.js