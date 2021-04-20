class ApiService{

    static baseURL = 'http://localhost:3000/books'

    static getBooks(){
        
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(data => {
           
            data["data"].forEach(book => {
                const i = new Book({id: book.id, ...book.attributes} )
                 console.log(i)
            })
        })
    }

    static baseURL = 'http://localhost:3000/categories'
        

    static getCategories(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(element => {
                const c = new Category({id: element.id, ...element.attributes}) 
                console.log(c)
            })
        })
    }

}