// let result = (function (x){
//     return x ** x;
// })(10);

// console.log(result);


// function hof(x, fn){
    // hof ------> is a higher order function 
//    let ans = x ** x;
//     fn(ans);


    // fn ---------- > is a call back function
// }

// hof(10, function(value){
//     console.log(`powered value is ${value}`);
// })



// setTimeout(()=>{
//     console.log("This is a call back and setTime out is higher order function");
// }, 1000);


// console.log("Start");

// setTimeout(()=>{
//     console.log("Timer is done");
// },10);

// for(let i=0; i< 10000000000; i++){}

// console.log("end");



// let sample_Array = [10,20,30,40,50,60];

// console.log(sample_Array.at(-1));
// console.log(sample_Array.length);
// console.log(sample_Array.splice(0,2,"Rajakumar"));
// console.log(sample_Array);
// let arr2 = sample_Array.splice(0,2);
// let arr = sample_Array.slice(0,3);

// console.log(arr);
// console.log(arr2);
// console.log(sample_Array);


// console.log(sample_Array.toString());
// console.log(sample_Array.join(" "));

// let new_arr = sample_Array.push(100);
// let arr = sample_Array.unshift(200);
// console.log(new_arr);
// console.log(arr);
// console.log(sample_Array);
// let arr2 = sample_Array.pop();
// let arr3 = sample_Array.shift();
// console.log(arr3);
// console.log(arr2);
// console.log(sample_Array);

// let addFun = function(arr, pos,pos2, value,value2){
    

//     for(let i=arr.length+1; i > pos2; i--){

//         arr[i] = arr[i-2];
//     }
//     arr[pos] = value;
//     arr[pos2] = value2;
//     return arr;
// }
// let sample_Array2 = [10,20,30,40,50,60];
// let position = 2;
// let position2 = 3;
// let value = 100;
// let value2 = 200;
// let ans = addFun(sample_Array2,position,position2,value,value2);

// console.log(ans);


// const fruits = ["banana","orange","apple","mango"];

// for(let i=0; i < fruits.length;i++){
//     console.log(fruits[i]);
    
// }


// for(let i of fruits){
//     console.log(i);
// }

// for(let i=fruits.length-1; i >=0; i--){
//     console.log(fruits[i]);
// }

// for(let i in fruits){
//     console.log(fruits[i]);
// }

// fruits.forEach((item)=> console.log(item));

// let i=0;
// while( i < fruits.length){
//     console.log(fruits[i++]);
// }


// let ans = fruits.forEach((item)=> console.log(item));
// console.log(ans);


// for(let item of fruits){
//     console.log(fruits.indexOf(item));
    
// }






// let array = new Array(3);

// array[0] = "Rajakumar";
// array[1] = "Prakash";
// array[2] = "Kalamadi";
// array[3] = "Anil";
// console.log(array);








