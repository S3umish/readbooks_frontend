

class Book {

    static allBooks =[]

    constructor(book){
        this.id = book.id
        this.title = book.title
        this.image_url = book.image_url
        this.likes = book.likes
        this.remarks = book.remarks
        this.category_id = book.category_id
        Book.allBooks.push(this)
    }

    renderBook(){

        let divCard = document.createElement("div")
        divCard.id = "cardID"
        divCard.className ="card"


        let H2 = document.createElement("h4")
        H2.innerText = this.title;

        const H3 = document.createElement("h2")
        H3.innerText = this.likes;

        const H4 = document.createElement("h6")
        H4.innerText = this.remarks;

        const Img = document.createElement("img")
        Img.className ="book-avatar"
        Img.src = this.image_url;
    

        const newButton = document.createElement("button")
        newButton.setAttribute('data-id', this.id)
        newButton.classname = "show-btn"
        newButton.id ="showButton"
        newButton.innerText = "Edit";

        const delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";

        divCard.append(H2, Img, H3, H4, newButton, delButton);

        bookShow.append(divCard)
     
    }


    
    
}