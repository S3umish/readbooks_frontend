


1) // edit and delete switch  - example...add event Listener on creation of button and Book.js


// switch to edit , save and delete buttons
// function handleEditClick(e){
//     if (e.target.innerText === "Edit"){
//         this.createEditFields(e.target)
//     }else if(e.target.innerText === "Remove"){
//         BookApi.deleteBook(id)
//     }else if(e.target.innerText === "Save"){
//         this.saveUpdatedBook()
//         e.target.innerText = "Edit"
//     }

2) Book.js 
 handleItemClick = (e) => {
        if (e.target.innerText === "Edit"){
            this.createEditFields(e.target)

            e.target.innerText = "Save"
        }else if(e.target.innerText === "Remove"){
    
            BookApi.deleteBook(e)
        } else if(e.target.innerText === "Save"){ 
        
            this.saveUpdatedItem()

            e.target.innerText = "Edit"
        }
    }

    // static editButton = document.querySelector("#showButton")
    // static delButton =  document.querySelector("delButton")
       
3) edit button :html
 // let newButton = document.createElement("button")
        // newButton.setAttribute('data-id', this.id)
        // newButton.classname = "show-btn"
        // newButton.id ="showButton"
        // newButton.innerText = "Edit";
        // newButton.addEventListener("click",EventTarget)


4) patch 


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

        fetch(`${BookApi.baseURL}/${book.id}`, configObj)
        .then(response => response.json())
        .then(book => {

            book.renderBook()
        })

        let form = document.querySelector("#create-book-form")
        form.reset()
    
    }


5) edited handleBook for delete

// function handleBookClick(e){
//      e.preventdefault
//     const id  = e.target.dataset.id
//     BookApi.deleteBook(id)
//  }


 











const bookShow = document.getElementById("book-show")
BookApi.fetchBooks()
CategoryApi.fetchCategories()

function createBookForm() {

    let bookForm = document.getElementById("create-book-form")

    bookForm.innerHTML = `
    
    <h2>"Add Books In Collection Below !"</h2>
        <form name ="Create Book" class="form-inline">
            <div class ="form-group">
            <input type ="title" class="form-control" id="title" placeholder ="Enter Book Title">
            </div>
            <div class ="form-group">
            <input type ="img_url" class="form-control" id="img_url" placeholder ="Enter Book Image Link">
            </div>
            <div class ="form-group">
            <input type ="likes" class="form-control" id="likes" placeholder ="Enter Likes for the Book">
            </div>
            <div class ="form-group">
            <input type ="remarks" class="form-control" id="remarks" placeholder ="Enter Remarks">
            </div>
            <select id="options" class="custom-select" style="width:160px">
                <option selected>Select Category</option>
                <option value="To Read">To Read</option>
                <option value="Reading">Reading</option>
                <option value="Finished">Finished</option>   
            </select>
            <button type="submit" class="btn btn-success">Add Book</button>       
        </form>
    `;

    // add eventListener to form

    bookForm.addEventListener("submit", bookCreate)
    
}
