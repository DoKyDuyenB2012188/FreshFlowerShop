class Product{
    constructor(){
        this.data = products;
    }
    findNewProduct(){
       return this.data.filter((product) => product.newitem == true);
    }
    findSaleProduct(){
        return this.data.filter((product) => product.isale == true);
    }
    findOccasion(occasion){
        return this.data.filter((product) => {
             return product.occasion.every((item)=> occasion.includes(item));
        })
    }
    findStyle(style){
        return this.data.filter((product) => {
            return product.style.every((item)=> style.includes(item));
       })
    }
    findObject(object){
        return this.data.filter((product) => {
            return product.object.every((item)=> object.includes(item));
       })
    }
    findColor(color){
        return this.data.filter((product) => {
            return product.color.every((item)=> color.includes(item));
       })
    }
    addProduct(){}
    deleteProduct(){}
    updateProduct(){}
}
