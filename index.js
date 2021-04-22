const BASE_URL = "http://localhost:3000"
const booksApi = new BooksApi
const newCategory = document.getElementById("new-category")
const submitButton = document.getElementById("submitButton")
 

const list = document.getElementById("List-of-Books")

const bookShow = document.getElementById("book-show")


const categoryForm = document.getElementById("new-category-form")


//READ
// newBookForm()
booksApi.fetchBooks()


//CREATE
function newBookForm(){
    let bookForm = document.getElementById("books-form")
    bookForm.addEventListener("submit", bookFormSubmit)
}

//DELETE

function deleteBook(id){
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




