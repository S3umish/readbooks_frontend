class Category{

    static allCategories = []
    
    static categoryForm = document.querySelector("#category-form")


    constructor(category){
        this.id = category.id
        this.name = category.name

        this.active = false

        this.element = document.createElement('button')

        Category.allCategories.push(this)
    }

    books(){
        return Book.all.filter((book) => book.category_id === parseInt(this.id))
    }


    render(){

        this.element.innerText = this.name 
        this.element.id = `category-${this.id}`
        return this.element

    }

    addToDom(){

        Category.categoryForm.append(this.render())
         this.addListeners()
    }

    addListeners(){
       
      this.element.addEventListener('click', this.setActiveCategory)
    }

    setActivecategory = (e) => {
        let chooseCategory
        Category.allCategories.forEach(c => {

            if(c.element === this.element && !this.active){
                
                c.element.classList.add('activated')
                c.active = true
                chooseCategory = c
            } else{
                c.element.classList.remove('activated')
                c.active = false
            }
            
        }) 
        
        //   Book.filterByCategory(chooseCategory)

    }

    // static findById(id) {

    //     // return this.allCategories.find(category => category.id === id)
    // }

    // static chooseCategory(){
    //     // return this.allCategories.filter(category => category.name === this.name)
    // }


    // static filterByCategory(e){

    //     let chooseCategory = Category.allCategories.forEach(c => {
    //         if (c.element === this.element === "To Read")
    //     })
    //     debugger

    //     let filerCat = this.allCategories.filter(category => category.name.includes()
    //         console.log(filterCat)
    //     }
            
    //     ))

    // addToDropDown(){
    //     const option = document.createElement('option')
    //     option.value  = this.id 
    //     option.innerText = this.name
    //     dropdown.append(option)
    // }


    }
   
