

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
