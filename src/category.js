class Category{

    static allCategories = []

    constructor(category){
        this.id = category.id
        this.name = category.name
        Category.allCategories.push(this)
    }

    static generateCategory() {
        const categoryData = apiService.fetchCategory()
            .then(data => 
                data.forEach(category => {
                    const newCategory = new Category(category)
                    console.log(newCategory)
                })
            )
       

    }
}

