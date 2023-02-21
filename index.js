const app = document.querySelector(".bookShelfSection");
const bookshelf = new Bookshelf();
//const searchInput = document.querySelector(".seachInput");
const searchBtn = document.querySelector(".searchButton")
const sortByAZ = document.querySelector(".A-Z");
const sortByZA = document.querySelector(".Z-A")
const updateFavs = document.querySelector (".favBooks");
let SubmitBtn = document.getElementById("SubmitBtn")

const loadBooks = bookData.map(bookInfo => {
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

// searchBtn.addEventListener("click", () => {
//     const searchV = document.getElementById("searchInput").value;
//     const result = bookData.filter( () => searchV === book);
//     console.log(result);
//     return result;
// });
// console.log(searchBtn);

//sort func
// sortByAZ.addEventListener("click", () => {
//     alert("this works!");
// });
// //sort func
// sortByZA.addEventListener("click", () => {
//     alert("this works!");
// });
// //update func
// updateFavs.addEventListener("click", () => {
//     alert("this works!");
// });

//submitting a new book
SubmitBtn.addEventListener("click", () => {
    let author = document.getElementById('Author').value
    let language = document.getElementById('Language').value
    let subject = document.getElementById('Subject').value
    let title = document.getElementById('Title').value

    if(!author || !language || !subject || !title)
        alert("Must enter all Information")

    let addedBook = new Book(author, language, subject, title)
    app.append(addedBook)

    bookshelf.render()
    // alert("this works");
});