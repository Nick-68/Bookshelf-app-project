const app = document.querySelector(".bookShelfSection");
let bookshelf = new Bookshelf();
//const searchInput = document.querySelector(".seachInput");
// const searchBtn = document.querySelector(".searchButton")
// const sortByAZ = document.querySelector(".A-Z");
// const sortByZA = document.querySelector(".Z-A")
const updateFavs = document.querySelector (".favBooks");
const updateComment = document.querySelector(".this.title");

let SubmitBtn = document.getElementById("SubmitBtn");

const favStuff = document.querySelector(".favStuff");
let favBooks = [];


//loads books into bookshelf
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
    let author = document.getElementById('Author').value;
    let language = document.getElementById('Language').value;
    let subject = document.getElementById('Subject').value;
    let title = document.getElementById('Title').value;

    //check if any inputs are empty
    if(!author || !language || !subject || !title){
        alert("Must enter all Information");
        return;
    }
    //create a new Book object and adds to the bookshelf
    let addedBook = new Book(author, language, subject, title);
    bookshelf.addBook(addedBook);
    //clears before re-rendering
    app.innerHTML = '';
    //updates the displya/ re-render
    app.append(bookshelf.render());
    // alert("this works");
});

// new event apply comment add to the home webpage
// updateComment.addEventListener("click", () => {
//     let comment = document.getElementsByClassName('this.title').value;
//         alert(comment);
    

// });


//new event add to favs