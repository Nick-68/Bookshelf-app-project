//class book 

class Book {
    /*

    */
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }

    //rendering a book properties on html
    //need to add a button for favs
    //need a comment section for each book
    //book title will be the ul
    //all other properties will be the li appended to the ul
    //hide li elements until hover over the ul book title
    render(){
        const ul = document.createElement("ul");
        ul.textContent = this.title;
        //fav button to the left of the title
        const favBtn = document.createElement("input");
        favBtn.type = "checkbox";
       
        //comment area - to the right of the ul(button on click brings up a comment field then a button to submit)
        const commentArea = document.createElement("input");
        commentArea.type = "text";
        //btn to add a comment
        const commentBtn = document.createElement("button");
        commentBtn.textContent = "Add"
        
        //author li
        const liAuthor = document.createElement("li")
        liAuthor.classList = liAuthor;
        liAuthor.textContent = this.author;
        
        //language li
        const liLang = document.createElement("li")
        liLang.classList = liLang;
        liLang.textContent = this.language;
        
        //subject li
        const liSub = document.createElement("li")
        liSub.classList = liSub;
        liSub.textContent = this.subject;
        
        //appending to html
        ul.prepend(favBtn);
        ul.append(commentArea);
        ul.appendChild(liAuthor);
        ul.appendChild(liLang);
        ul.appendChild(liSub);

        return ul;
    }

}

