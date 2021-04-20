class Book {

    static allBooks =[]

    constructor(book){
        this.id = book.id
        this.image_url = book.image_url
        this.likes = book.likes
        this.remarks = book.remarks
        Book.allBooks.push(this)
    }

    static generateBooks(){
        debugger
        apiService.fetchBooks()
            .then(data =>
                data.forEach(book =>{
                    const newBook = new Book(book)
                    // console.log(newBook)
                    Book.renderBooks(book)
                })                               
            )
    }


    static renderBooks(book){
        let List = document.getElementById("List-of-Books")
        
        List.innerHTML +=
        
        "<img src=\""+this.image_URL+"\">"+
      
        `<ul>
        <h2>Book Title: <strong class="title">${this.title}</strong></h2>
            <li>
            Likes: <span class="likes">"${this.likes}."</span>
            </li>
            <li>
            Remarks: <span class="remarks">${this.remarks}</span>
            </li>
    
        <button class="delete-button" onclick="deleteBook(${this.id})" data-id=${this.id}>Delete Book</button></ul>`
    }


    
    
}