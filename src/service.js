
const BASEURL = "http://localhost:3000/"

function fetchBooks(){
    return fetch(`${BASEURL}/books`)
    .then(response => response.json())
    .then(data => {

        data["data"].forEach(book => {
                const newBook = new Book({id: book.id, ...book.attributes})
                newBook.renderBook()
        })
        
    })

}


//CREATE
function newBookForm(){
    let bookForm = document.getElementById("books-form")
    bookForm.addEventListener("submit", bookFormSubmit)
}


function bookFormSubmit(event){
    event.preventDefault()
    let title = document.getElementById("title").value
    let likes = document.getElementById("likes").value
    let remarks = document.getElementById("remarks").value
    let image_url = document.getElementById("image_url").value
    let category_id = document.getElementById("id").value
    
    let book = {
        title: title, 
        likes: likes,
        remarks: remarks,
        image_url: image_url,
        category_id: category_id
    }
    fetch(`${BASEURL}/books`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(project)
    })

    .then(response =>  {
        response.json()
    })
    .then(json => {
        console.log(json)
        window.location.reload()
    })
}







