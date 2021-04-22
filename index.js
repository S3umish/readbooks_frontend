const BASE_URL = "http://localhost:3000"
// const booksApi = new BooksApi

const newCategory = document.getElementById("new-category")
const submitButton = document.getElementById("submitButton")
 

const list = document.getElementById("List-of-Books")
const bookShowPage = document.getElementById("display-books")

const bookShow = document.getElementById("book-show")

const form = document.getElementById("book-form")


const categoryForm = document.getElementById("new-category-form")


form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
    e.preventDefault()

    BookApi.bookCreate()
    form.reset()    
}


BookApi.fetchBooks()


