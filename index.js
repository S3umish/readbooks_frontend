const BASE_URL = "http://localhost:3000"


const categoryForm = document.getElementById("category-form")

const list = document.querySelector("#List-of-Books")

const bookShowPage = document.getElementById("display-books")


// const titleInput = document.querySelector("#input-title")
// const imageInput = document.querySelector("#input-image")
// const remarksInput = document.querySelector("#input-remarks")
const submitButton = document.getElementById("create-button")

// const categoryId = document.querySelector("#categories")

const dropdown = document.querySelector("#cat-dropdown")


const bookShow = document.querySelector("#book-show")
bookShow.addEventListener("click",handleBookClick)

const form = document.querySelector("#create-book-form")
form.addEventListener("submit", handleFormSubmit)



function handleFormSubmit(e) {
    console.log("clicked")
    e.preventDefault()
    
    BookApi.formHandler()
    
}

function handleBookClick(e){
     e.preventdefault
    // const id  = e.target.dataset.id
    // BookApi.deleteBook()
 }



 



BookApi.fetchBooks()
CategoryApi.fetchCategories()


