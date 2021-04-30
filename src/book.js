
class Book {

    static all = []

    static list = document.querySelector("#List-of-Books")

    constructor(book){
        this.id = book.id
        this.title = book.title
        this.image_url = book.image_url
        this.remarks = book.remarks
        this.category_id = book.category_id

        Book.all.push(this)
    }

   

    renderBook(){

        let divCard = document.createElement("div")
        divCard.id = "cardID"
        divCard.className ="card"

        let H2 = document.createElement("h4")
        H2.innerText = this.title;

       
        let H4 = document.createElement("h6")
        H4.innerText = this.remarks;

        let Img = document.createElement("img")
        Img.className ="book-avatar"
        Img.src = this.image_url;

        let delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";
        delButton.addEventListener("click",this.handleDelete)

        divCard.append(H2, Img , H4, delButton);

        bookShow.append(divCard)
     
    }

    handleDelete = (e) => {
        e.preventDefault
        console.log(this)
        e.target.parentElement.remove()
        BookApi.deleteBook(this.id)
    }


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


    // static filterByCategory(chooseCategory){
            
    //     if (chooseCategory){
    //         const catObj = Category.category_id
            // for (const book of Book.all){
            //     console.log(chooseCategory)
            //     if (book.category_id === parseInt(chooseCategory.id)){
            //             book.element.style.display = ""
            //     } else {
            //             // book.element.style.display = "none"
            //             console.log(book)
            //     }}

    //         } else {

    //         for (const book of Book.all){
    //                 book.element.style.display = ""
    //         }}
    // }


    renderBookCategory(){

        let divCard = document.createElement("div")
        divCard.id = "cardID"
        divCard.className ="card"

        let H2 = document.createElement("h4")
        H2.innerText = this.title;

        let H3 = document.createElement("h6")
        H4.innerText = this.category_id;

        let H4 = document.createElement("h6")
        H4.innerText = this.remarks;

        let Img = document.createElement("img")
        Img.className ="book-avatar"
        Img.src = this.image_url;

        let delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";
        delButton.addEventListener("click",this.handleDelete)

        divCard.append(H2, H3, Img , H4, delButton);

        bookShow.append(divCard)
     
    }



    static filterByCategory(chooseCategory){

            // Book.all.map(b => b.category_id)

            // console.log(category_id)
        
            // return this.renderBook

        let c = parseInt(chooseCategory.id)
        //  debugger
        for (const book of Book.all){
           
            // if choose Category , we want  to return a filter using book.category_id -= c logic 
            //otherwise return all the books

            if (book.category_id === c ){
                console.log(book)
                 return this.renderBookCategory()
            } else { 
                 return this.renderBook()
            }

            // if (book.category_id === c) {
            //     Book.renderBookCategory()

            // } else{
            //     Book.renderBook()
            // }


        
         }
    
        
        }






}       
