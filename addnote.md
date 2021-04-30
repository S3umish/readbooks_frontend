


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



6)//static findById() {

    //  return this.allCategories.find(category => category.id === this.id)
     
    // }


    // static chooseCategory(){
    //      return this.allCategories.filter(category => category.name === this.name)
    // }



    // static findByCategoryId(){
    //     let c = Category.allCategories
    //     console.log(c)
    //     const toRead = c.find(c => c.id === "4")
    //     console.log(toRead.name)
    //     const reading = c.find(c => c.id === "5")
    //     console.log(reading.name)
    //     const finished = c.find(c => c.id === "6")
    //     console.log(finished.name)
    // }




    // filterByCategory(){

    //     let categoryBooks = document.querySelector("#category-form")
        
    //     categoryBooks.innerHTML = ""

    //     Book.all.forEach(b =>{
    //         if((b.category_id == this.id) || (this.id == 0))
    //             return Book.renderBook()
    //         }
           
    //     )
  
    // }


    /// book filter Category 

    // handleFilter =(e) => {
    //     e.preventDefault
    //     debugger
    //     let toRead = document.querySelector("#category-4")
    //     toRead.addEventListener("click",this.bookfilter)
    //     console.log("clicked To Read")
       

    //     let reading = document.querySelector("#category-5")
    //     reading.addEventListener("click",this.bookfilter)
    //     console.log("clicked To Reading")

    //     let finished = document.querySelector("#category-6")
    //     finished.addEventListener("click",this.bookfilter)
    //     console.log("clicked Finsihed")

    // }

    // static filterByCategory(){
    //     debugger
        
    //     Book.all.forEach(b => {

    //         //Book.all.map(b => b.category_id)
    //         // gives all category ids
  
    //         if(this.handleFilter){

    //             for (const book of Book.all){

    //                 if (book.element === this.element.category_id === "4"){ 
    //                 console.log("To Read")

    //                 } else {
    //                     book.element === this.element.category_id === "5"
    //                     console.log("Reading")
    //                 }
                    
    //             } 

    //         } else {

    //             for (const book of Book.all){
    //                 book.element === this.element.category_id === "6"
    //                 console.log("Finished")
    //             }
    //         }


    //     }
            
            
            
    //     )}

 8) Inside Book.js
      // const catObj = Category.category_id
                    // for (const book of Book.all){
                    //     console.log(chooseCategory)
                    //     if (book.category_id === parseInt(chooseCategory.id)){
                    //             book.element.style.display = ""
                    //     } else {
                    //             // book.element.style.display = "none"
                    //             console.log(book)
                    //     }}



 











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





    // static filterByCategory(chooseCategory){

    //         // Book.all.map(b => b.category_id)

    //         // console.log(category_id)
        
    //         // return this.renderBook

    //     let c = parseInt(chooseCategory.id)
    //     //  debugger
    //     for (const book of Book.all){
           
    //         // if choose Category , we want  to return a filter using book.category_id -= c logic 
    //         //otherwise return all the books

    //         if (book.category_id === c ){
    //             console.log(book)
    //              return this.renderBookCategory()
    //         } else { 
    //              return this.renderBook()
    //         }

            // if (book.category_id === c) {
            //     Book.renderBookCategory()

            // } else{
            //     Book.renderBook()
            // }


        
        //  }
    
        
        // }






