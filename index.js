
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



