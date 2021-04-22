class BooksApi{

    constructor () {

        this. BASE_URL = "http://localhost:3000/books"
    }
    
    fetchBooks(){
        fetch(this.BASE_URL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(book => {
                    const newBook = new Book({id: book.id, ...book.attributes})
                    newBook.renderBook()
            })
            
        })
    
    }

    
    bookFormSubmit(event){
        event.preventDefault()
        let title = document.getElementById("title").value
        let likes = document.getElementById("likes").value
        let remarks = document.getElementById("remarks").value
        let image_url = document.getElementById("image_url").value
        let category_id = document.getElementById("id").value
        
        let book = {
            title: title, 
            likes: likes,
            remarks: remarks,
            image_url: image_url,
            category_id: category_id
        }
        let configObj = {
            
            method :"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(book)
        }
    
        fetch("http://localhost:3000/books", configObj)
        .then(response => response.json())
        .then(book => {
            const newBook = new Book({id: book.id, ...book.attributes})
            newBook.renderBook()})
    
            let bookForm = document.getElementById("books-form")
            bookForm.reset()
    }




    

    
} 









