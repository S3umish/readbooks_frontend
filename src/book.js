

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
        divCard.className ="info -card"


        let H2 = document.createElement("h2")
        H2.innerText = this.title;

        const H3 = document.createElement("h2")
        H3.innerText = this.likes;

        const H4 = document.createElement("h4")
        H4.innerText = this.remarks;

        const Img = document.createElement("img")
        Img.className ="book-avatar"
        Img.src = this.image_url;
    

        const newButton = document.createElement("button")
        newButton.setAttribute('data-id', this.id)
        newButton.classname = "show-btn"
        newButton.id ="showButton"
        newButton.innerText = "Display";

        const delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";

        divCard.append(H2, Img, H3, H4, newButton, delButton);

        bookShow.append(divCard)
        
    

        // let bookDiv = document.getElementById("List-of-Books")
        
        // bookDiv.innerHTML +=
        
        // "<img src=\""+this.image_url+"\">"+
      
        // `<ul>
        // <h2>Book Title: <strong class="title">${this.title}</strong></h2>
        //     <li>
        //     Likes: <span class="likes">"${this.likes}."</span>
        //     </li>
        //     <li>
        //     Remarks: <span class="remarks">${this.remarks}</span>
        //     </li>
    
        // <button class="delete-button" onclick="deleteBook(${this.id})" data-id=${this.id}>Delete Book</button>
        // </ul>`

        
    }


    
    
}