const BASE_URL = "http://localhost:3000"
// const BookApi = new BooksApi

const categoryForm = document.getElementById("category-form")

const list = document.getElementById("List-of-Books")

const bookShowPage = document.getElementById("display-books")

const categories = document.getElementById("categories")
const titleInput = document.getElementById("input-title")
const imageInput = document.getElementById("input-image")
const likesInput = document.getElementById("input-likes")
const remarksInput = document.getElementById("input-remarks")
const submitButton = document.getElementById("submitButton")

const bookShow = document.getElementById("book-show")
bookShow.addEventListener("click",handleBookClick)

const form = document.getElementById("create-book-form")
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventdefault()
    BookApi.postBook()
}

function handleBookClick(e){
     e.preventdefault
    const id  = e.target.dataset.id
    BookApi.deleteBook()
}


BookApi.fetchBooks()
CategoryApi.fetchCategories()


