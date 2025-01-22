const log = require("jsvu/shared/log");

class Product{

    name;
    price;
    category;
    description;
    rating;

    addToCart(){
        console.log("Product added to cart");
        
    }
    removeFromCart(){
        console.log("Removed product from cart");
        
    }
    displayTheProduct(){
        console.log("Product displayed ");
        
    }
    buyProduct(){
        console.log("Product bought");
        
    }
}