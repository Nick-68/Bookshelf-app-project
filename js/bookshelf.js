// bookshelf

class Bookshelf {
  constructor(books = []) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  render() {
    const section = document.createElement("section");

    for (const book of this.books) {
      section.append(book.render());
    }

    return section;
  }
  
}
