class Category{

    static allCategories = []

    static categoryContainer = document.getElementById("catagory_container")

    constructor(category){
        this.id = category.id
        this.name = category.name

        this.active = false

        this.element = document.createElement('button')

        Category.allCategories.push(this)
    }

    books(){
        return Book.allBooks.filter((book) => book.categoryId === parseInt(this.id))
    }


    renderCategory(){

        let categoryButton = document.createElement("button")

        categoryButton.value = `${this.id}`
        categoryButton.innerText = this.name
    
        categoryForm.append(categoryButton)

    }

    renderCategoryToDom(){
        Category.categoryContainer.renderCategory()
         this.addListeners()
      }

     addListeners(){
      this.element.addEventListener('click', this.setActiveCategory)
     }

    setActivecategory = (e) => {
        let chooseCategory
        Category.allCategories.forEach(c=>{

            if(c.element === this.element && !this.active){
                
                c.element.classList.add('activated')
                c.active = true
                chooseCategory = c
            } else{
                c.element.classList.remove('activated')
                c.active = false
            }
            
        }) 
        
        Book.filterByCategory(chooseCategory)

    }

    addToDropDown(){
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        dropdown.append(option)
    }


}



