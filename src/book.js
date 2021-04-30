
class Book {

    static all = []

    static list = document.querySelector("#List-of-Books")

    constructor(book){
        this.id = book.id
        this.title = book.title
        this.image_url = book.image_url
        this.remarks = book.remarks
        this.category_id = book.category_id

        Book.all.push(this)
    }

   

    renderBook(){

        let divCard = document.createElement("div")
        divCard.id = "cardID"
        divCard.className ="card"

        let H2 = document.createElement("h4")
        H2.innerText = this.title;

       
        let H4 = document.createElement("h6")
        H4.innerText = this.remarks;

        let Img = document.createElement("img")
        Img.className ="book-avatar"
        Img.src = this.image_url;

        let delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";
        delButton.addEventListener("click",this.handleDelete)

        divCard.append(H2, Img , H4, delButton);

        bookShow.append(divCard)
     
    }

    handleDelete = (e) => {
        e.preventDefault
        console.log(this)
        e.target.parentElement.remove()
        BookApi.deleteBook(this.id)
    }



          

}

