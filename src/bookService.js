class BookApi{

    static baseURL = "http://localhost:3000/books"
    
    static fetchBooks() {
        
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(book => {
                    const newBook = new Book({id: book.id, ...book.attributes})
                    newBook.renderBook()
            });
           
                     
        })
    }

    //POST
     static formHandler() {
         
        const title = document.querySelector("#input-title").value 
        const image_url = document.querySelector("#input-image").value
        const remarks = document.querySelector("#input-remarks").value
        const categoryId = parseInt(document.querySelector("#categories").value)
        
        BookApi.createBook(title, image_url, remarks, categoryId)
       
    }

    static createBook(title, image_url, remarks, category_id) {
        const bodyData = {book:{title, image_url, remarks, category_id}}
       
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json"
            },
            body: JSON.stringify(bodyData)
        }
        fetch(BookApi.baseURL, configObj)
        .then(response => response.json())
        .then(data => {

            const book = data["data"]
            console.log(book)
            
            let newBook = new Book({id: book.id, ...book.attributes})
                newBook.renderBook()
        
        })

    }

    


    static sendPatch(book){

        let bookInfo = { 
            remarks: remarks
        }

        let configObj = { 
            method :"PATCH",
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json"
            },
            body: JSON.stringify(bookInfo)
        }

        fetch(`${this.baseURL}/${book.id}`, configObj)
        .then(response => response.json())
        .then(book => {

            book.renderBook()
        })

        let form = document.querySelector("#create-book-form")
        form.reset()
    
    }



    //DELETE

    static deleteBook(id){
        // debugger
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`${BookApi.baseURL}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)

        })

    }


    
} 
