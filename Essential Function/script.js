// function multiply(num1, num2){
//     return num1 * num2;
//     console.log(10);      
// }

// const ans = multiply(10,2);


// console.log(ans);

// console.log(10**8);


// function noReturn() {
//     console.log("No return here!");
// }

// const output = noReturn(); // Logs "No return here!" and output is undefined
// console.log(output);



// function f(x){
//     x = x * 2;
//     x = x - 1;
//     x = x / 2;

//     return x;
// }

// function g(value){

//     let ans = f(value);

//     ans = ans * 10;


//     return ans;

// }


// let ans = g(10);

// function functionName(parameter = defaultValue) {
//     // Function body
// }

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// greet("Alice"); // Output: Hello, Alice!



// function greeting(value = 10){
//     console.log(`Hello user what is your name ${value}`);
// }


// greeting(null);


// function functionName(...restParameter) {
//     // restParameter is an array containing all additional arguments
// }


// function greet(greeting, ...names) {
//     return `${greeting}, ${names.join(", ")}!`;
// }

// console.log(greet("Hello", "Alice", "Bob", "Charlie")); 
// // Output: Hello, Alice, Bob, Charlie!



// function names(...values){

// //    for(let name in values){
// //     console.log(values[name]);
// //    }

//     for(let name of values){
//         console.log(name);
        
//     }
// }


// names("Rajakumar","Praaksh","Kalamadi","Anil");


// console.log(Math.abs(5));
// console.log(Math.abs(-5));

// console.log(Math.abs(5.5));


// console.log(Math.floor(8.5));

// console.log(Math.ceil(9.5));
// console.log(Math.round(8.4));

// console.log(Math.round(8.6));



// Math.min

// console.log(Math.min(-10,2,-5,6));

// // Math.max()

// console.log(Math.max(10,20,30,40,560,120));

// // Math.sqrt() it will give any number square root 

// console.log(Math.sqrt(100));

// // Math.PI it will return PI value


// console.log(Math.PI);


// // Math.random() this method will return random number between 0 to 1 but it  will not take any argument

// console.log(Math.random());


// console.log(new Date().getDay());


function getDay(day){
    switch(day){
        case 0:
            console.log("Today is Sunday");
            break;
            
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3: 
            console.log("Today is Wensday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6: 
            console.log("Today is Saturdy");
            break;
        default:
            console.log("Sorry Something went wrong we will resolve soon !!!");   
            
    }
}


getDay(new Date().getDay());






