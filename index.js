const app = document.querySelector(".bookShelfSection");
let bookshelf = new Bookshelf();
const updateFavs = document.querySelector(".favBooks");
const updateComment = document.querySelector(".this.title");
//sorting language buttons
const englishBtn = document.getElementById("English");
const FrenchBtn = document.getElementById("French");
const GermanBtn = document.getElementById("German");
const FinnishBtn = document.getElementById("Finnish");
const allBtn = document.getElementById("allBtn");

let SubmitBtn = document.getElementById("SubmitBtn");

const favStuff = document.querySelector(".favStuff");
let favBooks = [];

//loads books into bookshelf
const loadBooks = bookData.map((bookInfo) => {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
  return book;
});
//create a copy of the loadbooks to use for filtering language/ it was erasing the array 
//and would not populate any books after clicking on another filter button
const bookDataCopy = loadBooks.slice();
app.append(bookshelf.render());

//english filter event
englishBtn.addEventListener("click", () => {
  //filtering for if the language matches using the copy of bookdata
  const filteredEnglish = bookDataCopy.filter((book) => book.language === "en");
  //innerHTML is clearing the bookshelf
  app.innerHTML = "";
  //clearbooks is used to empty the array of books so double aren't populated when clicked twice
  bookshelf.clearBooks();
  //rendering the filtered books
  filteredEnglish.forEach((book) => {
    //using foreach to apply the following to each
    let sortedBooks = new Book(book.author, book.language, book.subject, book.title);
    //adding books to bookshelf
    bookshelf.addBook(sortedBooks);
    //rendering
    let newBookUl = sortedBooks.render();
    //appending
    app.appendChild(newBookUl);
  });
});
//French filter event same as english
FrenchBtn.addEventListener("click", () => {
  const filteredFrench = bookDataCopy.filter((book) => book.language === "fr");
  bookshelf.clearBooks();
  app.innerHTML = "";
  filteredFrench.forEach((book) => {
    let sortedBooks = new Book(book.author, book.language, book.subject, book.title);
    bookshelf.addBook(sortedBooks);
    let newBookUl = sortedBooks.render();
    app.appendChild(newBookUl);
  });
});
//german filter same as english
GermanBtn.addEventListener("click", () => {
  const filteredGerman = bookDataCopy.filter((book) => book.language === "de");
  bookshelf.clearBooks();
  app.innerHTML = "";
  filteredGerman.forEach((book) => {
    let sortedBooks = new Book(book.author, book.language, book.subject, book.title);
    bookshelf.addBook(sortedBooks);
    let newBookUl = sortedBooks.render();
    app.appendChild(newBookUl);
  });
});
//finnish filter same as english
FinnishBtn.addEventListener("click", () => {
  const filteredFinnish = bookDataCopy.filter((book) => book.language === "fi");
  app.innerHTML = "";
  bookshelf.clearBooks();
  filteredFinnish.forEach((book) => {
    let sortedBooks = new Book(book.author, book.language, book.subject, book.title);
    bookshelf.addBook(sortedBooks);
    let newBookUl = sortedBooks.render();
    app.appendChild(newBookUl);
  });
});
//reset to all books
allBtn.addEventListener("click", () => {
  const filteredAll = bookDataCopy.filter((book) => book.language === book.language);
  bookshelf.clearBooks();
  app.innerHTML = "";
  filteredAll.forEach((book) => {
    let sortedBooks = new Book(book.author, book.language, book.subject, book.title);
    bookshelf.addBook(sortedBooks);
    let newBookUl = sortedBooks.render();
    app.appendChild(newBookUl);
  });
});
//creating a new book and rendering it
SubmitBtn.addEventListener("click", () => {
  let author = document.getElementById("Author").value;
  let language = document.getElementById("Language").value;
  let subject = document.getElementById("Subject").value;
  let title = document.getElementById("Title").value;

  //check if any inputs are empty
  if (!author || !language || !subject || !title) {
    alert("Must enter all Information");
    return;
  }
  //create a new Book object and adds to the bookshelf
  let addedBook = new Book(author, language, subject, title);
  bookshelf.addBook(addedBook);
  //only rendering the new book not the whole bookshelf again
  let newBookUl  = addedBook.render();
  //app.innerHTML = ""; --tried using but would clear all comments
  //adds the book
  app.append(newBookUl);
});


