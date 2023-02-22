const app = document.querySelector(".bookShelfSection");
let bookshelf = new Bookshelf();
//const searchInput = document.querySelector(".seachInput");
// const searchBtn = document.querySelector(".searchButton")
// const sortByAZ = document.querySelector(".A-Z");
// const sortByZA = document.querySelector(".Z-A")
const updateFavs = document.querySelector(".favBooks");
const updateComment = document.querySelector(".this.title");

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

app.append(bookshelf.render());

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


