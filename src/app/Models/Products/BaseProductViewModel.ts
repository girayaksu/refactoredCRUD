export abstract class BaseProductViewModel{
    productName:string;
    price:number;
    stock:number;
    categoryId:number;
    constructor(productName:string,price:number,stock:number,categoryId:number){
        this.productName = productName;
        this.price = price;
        this.stock = stock;
        this.categoryId = categoryId;
    }
}
