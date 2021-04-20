class ApiService{

    static baseBookURL = 'http://localhost:3000/books'

    static fetchBooks(){
        return fetch(`${this.baseBookURL}`,{
            headers: {
                'Content-Type': 'application/json',
            }
        })

        .then(res => res.json())
    }

    static baseCategoryURL = 'http://localhost:3000/categories'
    static fetchCategory(){
        return fetch(`${this.baseCategoryURL}`,{
            headers: {
                'Content-Type': 'application/json',
            }            
        })
        .then(res => res.json())
    }

}