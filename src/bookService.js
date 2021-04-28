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
            document
                .querySelectorAll(".show-btn")
                .forEach((btn) => btn.addEventListener("click",showBook))
    
            document
                .querySelectorAll(".del-btn")
                .forEach((btn) => btn.addEventListener("click", delBook))            
        })
    }

    
    static postBook(){
        
        let bookFormData = {
            title: titleInput.value, 
            likes: likesInput.value,
            remarks: remarksInput.value,
            image_url: imageInput.value,
            category_id: categories.value
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
        .then(data => {
            const book = data.data
            const b = new Book({id: book.id, ...book.attributes})
            b.renderBook()
        })

        document.querySelector("book-show").innerHTML += newBook.renderBook()
    
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

        fetch(`${this.BASE_URL}/${book.id}`, configObj)
        .then(response => response.json())
        .then(book => {

            book.renderBook()
        })

        let form = document.getElementById("create-book-form")
         form.reset()
    
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

        fetch(`${BASE_URL}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)

        })

    }


    
} 
