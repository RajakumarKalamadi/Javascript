function concatFun(fName, lName){
    let first = fName.length;
    let last = lName.length;
    let alternative = '';
    let count = 0;
    for(let i=0; i<first; i++){
        
        if(count >= fName.length || count >= lName.length){
            break;
        }
        alternative += fName[i];
        alternative += lName[i];
        count++;
    }
    if(count < fName.length){
        for(let i=count; i<fName.length;i++){
            alternative += fName[i];
        }
    }else if(count < lName.length){
        for(let i=count; i<lName.length;i++){
            alternative += lName[i];
        }
    }
    return alternative;
}

let ans_1 = concatFun("Rajakumar","Kalamadi");

console.log(ans_1);




function myFun(firstName, lastName){
    let alternative = '';
    let maxLength = Math.max(firstName.length, lastName.length);
    for(let i=0; i<maxLength;i++){
        if(i < firstName.length){
            alternative += firstName[i];
        }
        if(i < lastName.length){
            alternative+= lastName[i];
        }
    }

    return alternative;
}

let ans = myFun("Rajakumar","Kalamadi");
console.log(ans);
