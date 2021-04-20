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
        let bookDiv = document.getElementById("List-of-Books")
        
        bookDiv.innerHTML +=
        
        "<img src=\""+this.image_url+"\">"+
      
        `<ul>
        <h2>Book Title: <strong class="title">${this.title}</strong></h2>
            <li>
            Likes: <span class="likes">"${this.likes}."</span>
            </li>
            <li>
            Remarks: <span class="remarks">${this.remarks}</span>
            </li>
    
        <button class="delete-button" onclick="deleteBook(${this.id})" data-id=${this.id}>Delete Book</button>
        </ul>`
    }


    
    
}