const BASE_URL = "http://localhost:3000"


const list = document.querySelector("#List-of-Books")

const bookShowPage = document.getElementById("display-books")

const submitButton = document.getElementById("create-button")

const dropdown = document.querySelector("#cat-dropdown")


const bookShow = document.querySelector("#book-show")
// bookShow.addEventListener("click",handleBookClick)



const form = document.querySelector("#create-book-form")
form.addEventListener("submit", handleFormSubmit)



function handleFormSubmit(e) {
    e.preventDefault()  
    BookApi.formHandler() 
    form.reset() 
      
}




BookApi.fetchBooks()
CategoryApi.fetchCategories()


