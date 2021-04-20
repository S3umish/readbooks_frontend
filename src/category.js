class Category{

    static allCategories = []

    constructor(category){
        this.id = category.id
        this.name = category.name
        Category.allCategories.push(this)
    }

    
}

