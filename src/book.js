
class Book {

    static all = []

    constructor(book){
        this.id = book.id
        this.title = book.title
        this.image_url = book.image_url
        // this.likes = book.likes
        this.remarks = book.remarks
        this.category_id = book.category_id

        // this.element = document.createElement('div')
        // this.element.id = `book-${id}`
        // this.element.dataset.id = id 

        // this.element.addEventListener('click', this.handleItemClick)

        Book.all.push(this)
    }

    handleItemClick = (e) => {
        if (e.target.innerText === "Edit"){
            // OLD 
            // renderEditForm(e.target)

            // NEW OO
            this.createEditFields(e.target)

            e.target.innerText = "Save"
        }else if(e.target.innerText === "Remove"){
            // OLD
            // deleteItem(e) 

            // NEW OO
            this.deleteItem(e)
        } else if(e.target.innerText === "Save"){ 
           // OLD
            // patchElement(e.target.parentElement)
            
            // NEW OO
            this.saveUpdatedItem()

            e.target.innerText = "Edit"
        }
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
    

        let newButton = document.createElement("button")
        newButton.setAttribute('data-id', this.id)
        newButton.classname = "show-btn"
        newButton.id ="showButton"
        newButton.innerText = "Edit";

        let delButton = document.createElement("button")
        delButton.setAttribute('data-id', this.id)
        delButton.classname = "del-btn"
        delButton.id ="delButton"
        delButton.innerText = "Remove";

        divCard.append(H2, Img , H4, newButton, delButton);

        bookShow.append(divCard)
     
    }

    
    
}