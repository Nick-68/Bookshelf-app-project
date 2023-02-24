// bookshelf

class BookShelf {
  constructor(books = []) {
    this.books = books;
  }
  clearBooks() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  render() {
    //grabbing bookshelf
    const section = document.querySelector(".bookShelfSection");
    //appending each book to the section created
    for (const book of this.books) {
      //calling book.render to render the books then append
      section.append(book.render());
    }
    return section;
  }
}
