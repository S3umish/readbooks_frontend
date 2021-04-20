

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

        // const bookContainer = document.querySelector(".books-container")

        let bookDiv = document.getElementById("List-of-Books")
        
        // bookDiv.innerHTML +=

        bookDiv.id ="cardID"
        bookDiv.className ="card";

        let newh2 = document.createElement("h2")
        newh2.innerText = this.title;

        const newh3 = document.createElement("h2")
        newh3.innerText = this.likes;

        const newh4 = document.createElement("h4")
        newh4.innerText = this.remarks;

        const newImg = document.createElement("img")
        newImg.className ="book-avatar"
        newImg.src = this.image_url;

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

        divCard.append(newH2, newImg, newH3, newH4, newB, delB);


        
    

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