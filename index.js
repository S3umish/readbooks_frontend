

const newCategory = document.getElementById("new-category")
const submitButton = document.getElementById("submitButton")
 

const list = document.getElementById("List-of-Books")
// const bookForm = document.getElementById("book-form")

const bookShow = document.getElementById("book-show")


const categoryForm = document.getElementById("new-category-form")

// categoryForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     const categoryName = e.target.categoryName.value
//     Category.generateCategory(categoryName)
// })


fetchBooks()
