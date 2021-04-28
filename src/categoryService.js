class CategoryApi {

    static BASEURL = "http://localhost:3000/categories"
    
    static fetchCategories(){

        fetch(this.BASEURL)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(element => {                
                const newCategory = new Category({id: element.id, ...element.attributes})
                // console.log(newCategory)
                newCategory.renderCategory()
                // newCategory.addToDropDown()
            })        

        })
    }

}