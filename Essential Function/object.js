// let product =  {
// 	name : "iPhone 16 pro",
// 	company : "Apple",
// 	price : 120000,
// 	warantty : " 1 Year ",
// 	color : "Black"
// }


// let count = Object.entries(product);

// console.log(count.length);


// const y = 10;
// y = 99;
// console.log(y);

// const z;


// const obj = {
//     x : 10,
//     y : 20
// }
// obj.x = 99;
// console.log(obj.x);
// obj.name = "User";
// console.log(obj);
// obj = {a : 20, b : 30};
// console.log(obj);



// const product = {
//     name : "I Phone 16 Pro max",
//     price : 150000
// }
// Object.seal(product);

// product.name = "I Phone 15 Pro Max";
// console.log(product);



// const Product = {
//     name : "I Phone 15 Pro max",
//     price : 80000
// }

// Object.freeze(Product);

// Product.company = "Apple"; // Adding new key value pairs not allowed
// Product.name = "I Phone 16 Pro max";  // Updating existing key value pair not allowed
// delete Product.name;  // deleting existing key value pair not allowed

// console.log(Product);


// console.log(Object.isFrozen(Product));
// console.log(Object.isSealed(Product));



// const obj = {x : 10, y : 20}

// Object.freeze(obj);

// console.log(Object.isSealed(obj));
// console.log(Object.isFrozen(obj));

// const Product = {
//     name : "I Phone 15 Pro max",
//     price : 80000
// }

// Object.preventExtensions(Product);

// Product.company = "Apple"; // it will not allow to add new key value pair
// delete Product.price; // it will allow to delete existing key value pair

// console.log(Product);


// const Product = {
// }

// Object.defineProperties(Product, {
//     name:{
//         value : "I Phone 13 pro max",
//         writable : false , // this will not allow to update this value
//         configurable : false // this will not allow to delete this 
//     },
//     price : {}
// })
// Product.name = "I Phone 14 Pro max";
// delete Product.name;
// console.log(Product.name);


// const Product = {
//     name : "I Phone 15 Pro Max",
//     price : 80000,
//     Company : "Aplle"
// }

// let keys = Object.keys(Product);

// for(let key of keys){
//     Object.defineProperty(Product, key, {writable : false, configurable : false});
// }
// Object.preventExtensions(Product);

// Product.Company = "Samsung";
// delete Product.price;
// Product.Owner = "User";

// console.log(Product);










// let students = [
//     {firstName : "Rajakumar", lastName : "Kalamadi"},
//     {firstName : 'Anil', lastName : "Kalamadi"},
//     {firstName : "Prakash", lastName : "Kalamadi"}
// ]


// for(let student of students){
//     for(let name in student){
//         console.log(`${name} : ${student[name]}`);
        
//     }
// }


// console.log(typeof null);


// let str = "Rajakumar";

// console.log(str.at(0));



    // let str = new String("Rajakumar")

    // console.log(typeof str);


//     let person = {
//         isHuman : false,

//         hum: function(){
//             console.log("Helli");
            
//         }
//     }


//     let me = Object.create(person);

// me.isHuman = true;

// console.log(me);



// let obj = {
//     name : "Rajakumar",
//     Address : {
//         village : "Jadar Boblad",
//         taluka : "Jath",
//         District : "Sangli"
//     },
//     getName : function(){
//         console.log(`My name is ${this.name} and my address is ${this.Address.village}`);
        
//     }
// }
   
// obj.getName();



// function fun(){
//     return this;
// }


// console.log(fun());


// function statement
// first calass function
// anonymuous function 
// IIFE
// HOF
// arrow function 



// let obj = {
//     name : "Rajakumar",
//     getName : () =>{
//         console.log(this.name);
//     }
// }


// obj.getName(); 


// let obj = {
//     name : "Rajakumar",
//     getName :function (){
//         console.log(this.name);
//     },
//     address: {
//         village : "Jadar Boblad",
//         taluka : "Jath",
//         District : 'Sangli'
//     }
// }



// let keys = Object.keys(obj.address);

// console.log(keys);


// let target = {a : 5, b : 10};
// let source = {a : 10, b : 5, c : 10};

// let newTarget = Object.assign({}, target,source);

// console.log(newTarget);
// console.log(target);
// console.log(target === newTarget);




// const obj = {
//     isHuman : false,
//     getFun : function(){
//         console.log(`My name is ${this.name} is human ? ${this.isHuman}`);
        
//     }
// }



// let newObject = Object.create(obj);
// newObject.name = "Rajakumar";
// newObject.isHuman = true;



// newObject.getFun();



const obj = {
    name : "Rajakumar"
}


Object.defineProperties(obj,{
    name :{
        value : "Kalamadi",
        writable : false,
        configurable : false,
        enumerable : true
    }, 
    surename : {
        value : "username already given in name section",
        writable : false,
        configurable : false,
        enumerable : true
    }
})

obj.name = "User can not edit this option";


console.log(obj);


