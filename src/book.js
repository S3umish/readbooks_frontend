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
                    console.log(newBook)
                })                               
            )
    }


    
    
}