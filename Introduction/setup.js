// console.log("Hello World");

// const a = [];
// let b = "";


// const arr = [1,2,3,4,5,6];

// const result = arr.reduce((acc , curr) => acc < curr);

// console.log(result);


// const a = {
//     name: {
//         firstName : {
//             lastName : "Kalamadi"
//         }
//     }
// }

// console.log(a && a.name && a.name.firstName && a.name.firstName.lastName);




// let age = 20;

// if(age <= 10)
//     console.log("You are underage");
// else if(age >= 11 && age <= 25)
//     console.log("you are teenage");
// else if(age >= 26 && age <= 52)
//     console.log("You are adult");
// else
//     console.log("You are senior citizen");


// var num = 100;

// function fun(){
//     console.log(num);
//     var num = 500;
    
// }

// console.log(fun());


// let age = 23;


// switch(true){
//     case (age < 12) :
//         console.log("You are underage");
//         break;
//     case (age >= 12 && age < 25):
//         console.log("You are teenage");
//         break;
//     case (age >= 25 && age < 52):
//         console.log("You are audlt");
//         break;
//     case (age >= 52):
//         console.log("you are sinior citizen");
//         break;
//     default:
//         console.log("Please enter valid age"); 
// }


// var num = 500;

// function fun(){
//     console.log(num);
    
//     var num = 100;
// }


// console.log(fun());
// console.log(num);


// console.log(new Date().getDay());


function fun(type){
    switch(type){
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
            console.log("Today is Saturday");
            break;
        default:
            console.log("Nan kai eionda agolla guru");
    }
}

fun(new Date().getDay());



