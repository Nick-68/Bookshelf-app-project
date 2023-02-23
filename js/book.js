//class book
const favSection = document.querySelector(".favorites");

class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  }

  //rendering books as ul and li elements
  render() {
    const ul = document.createElement("ul");
    ul.textContent = this.title;
    //creating favorite button
    const favBtn = document.createElement("button");
    favBtn.classList = favBtn;
    favBtn.textContent = "Favorite";
    favBtn.type = "button";
    //addig event listener to favbtn
    favBtn.addEventListener("click", () => {
      favSection.appendChild(this.render());
    });
    //creating button to bring up comment area
    const populateCommentInput = document.createElement("button");
    populateCommentInput.textContent = "Comment";
    //comment area - to the right of the ul(button on click brings up a comment field and a button to submit)
    const commentArea = document.createElement("input");
    commentArea.classList = this.title;
    commentArea.type = "text";
    //setting max limit of 280characters for comments
    commentArea.maxLength = 280;
    //btn to add a comment
    const commentBtn = document.createElement("button");
    commentBtn.classList = this.author;
    commentBtn.textContent = "Add";
    //making commentArea/commentBtn invisible
    commentArea.style.display = "none";
    commentBtn.style.display = "none";

    populateCommentInput.addEventListener("click", () => {
      commentArea.value = "";
      //setting the commentarea and btn to block making it visible
      commentArea.style.display = "block";
      commentBtn.style.display = "block";
    });

    //submit button to add the comment to the page
    commentBtn.addEventListener("click", () => {
      let commentValue = commentArea.value;
      if(commentValue == ""){
        commentArea.style.display = "none"
        commentBtn.style.display = "none"
        return "";
      }
      const commentLi = document.createElement("li");
      commentLi.classList.add("comment");
      commentLi.textContent = commentValue;

      //this sessionStorage and localStorage is awesome i never knew.
      //retrieving values stored using the this.title to grab that specific book comment
      let comments = sessionStorage.getItem(this.title);
      //if there is comments(truthy not nan, null or other) then constructs the object. else sets as a empty array
      comments = comments ? JSON.parse(comments) : [];
      //adds new comment into the array
      comments.push(commentValue);
      //sessionstorage (this setItem sets the comment value and into the session storage)
      sessionStorage.setItem(this.title, JSON.stringify(comments));
      //appends to the ul
      ul.appendChild(commentLi);
      //turning text field and button invisible after adding comment
      commentArea.style.display = "none";
      commentBtn.style.display = "none";
    });

    //author li
    const liAuthor = document.createElement("li");
    liAuthor.classList = liAuthor;
    liAuthor.textContent = this.author;

    //language li
    const liLang = document.createElement("li");
    liLang.classList = liLang;
    liLang.textContent = this.language;

    //subject li
    const liSub = document.createElement("li");
    liSub.classList = liSub;
    liSub.textContent = this.subject;
    //adding book image
    const img = document.createElement("img");
    img.src = "R.png";
    img.alt = "book image";

    //appending to html
    ul.prepend(favBtn);
    ul.prepend(img);
    ul.append(populateCommentInput);
    ul.append(commentArea);
    ul.append(commentBtn);
    //accessing the sessionStorage and retrieves comments stored for current book
    const comments = sessionStorage.getItem(this.title);
    if (comments) {
      //if comments are stored JSON.parse creating the array of comments to be used
      const commentList = JSON.parse(comments);
      //for each comment the below happens li created textcontent set and class list set and is appended to the ul/book title
      commentList.forEach((comment) => {
        const commentLi = document.createElement("li");
        commentLi.textContent = comment;
        commentLi.classList.add("comment");
        ul.append(commentLi);
      });
    }
    //const lineBreak = createElement("hr");

    //ul.append(lineBreak);
    ul.appendChild(liAuthor);
    ul.appendChild(liLang);
    ul.appendChild(liSub);

    return ul;
  }
}
