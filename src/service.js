class BookApi{

    

    static BASE_URL = "http://localhost:3000/books"
    
    
    
    static fetchBooks() {
        
        fetch(this.BASE_URL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(book => {
                    const newBook = new Book({id: book.id, ...book.attributes})
                    newBook.renderBook()
            });
            // document
            //     .querySelectorAll(".show-btn")
            //     .forEach((btn) => btn.addEventListener("click",showBook))
    
            document
                .querySelectorAll(".del-btn")
                .forEach((btn) => btn.addEventListener("click", delBook))            
        })
    }



    
    static bookCreate(){

        let title = document.getElementById("title").value
        let likes = document.getElementById("likes").value
        let remarks = document.getElementById("remarks").value
        let image_url = document.getElementById("image_url").value
        let category_id = document.getElementById("id").value
        
        let bookFormData = {
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
            body: JSON.stringify(bookFormData)
        }
    
        fetch(this.BASE_URL, configObj)
        .then(response => response.json())
        .then(book => {
            const newBook = new Book({id: book.id, ...book.attributes})
            
            newBook.renderBook()
        })
    
            let bookForm = document.getElementById("books-form")
            bookForm.reset()
    }


    static sendPatch(book){

        let bookInfo = { 
            likes: likes,
            remarks: remarks,
        }

        let configObj = { 
            method :"PATCH",
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json"
            },
            body: JSON.stringify(bookInfo)
        }

        fetch(`${this.BASE_URL}/${book.id}`, configObj)
        .then(response => response.json())
        .then(book => {

            book.renderBook()
        })

    }

    //DELETE

    static deleteBook(id){
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`${BASE_URL}/books/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)

            let book = document.getElementById(`data-${id}`)
            book.remove()
        })

    }
    
} 









