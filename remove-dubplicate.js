// how to remove dublicate element from an array 

// using for loop 

function removeDulicate(oldArray){
    let newArray = [];
    for(let i = 0; i < oldArray.length; i++){
        let element = oldArray[i];
        if(newArray.indexOf(element) == -1){
            newArray.push(element);
        }
    }
    let result = "Total Element was Old Array = "+oldArray.length+" ti\n"+"New Element in New Array = "+newArray.length+" ti\n"+"New Array is = "+newArray;
    return result;
}

var studentNames = ["asik", "sojid", "billal", "sanu", "montu", "biku", "ismail", "sanjid", "billal", "asik", "pabbu", "sojid", "sanu", "ismail", "pinto", "ismail", "montu", "sifat"]

console.log(removeDulicate(studentNames));

// using for of loop

function reArrange(old){
    let newArray = [];
    for(let items of old){
        if(newArray.indexOf(items)== -1){
            newArray.push(items);
        }
    }
    let result = "Total Element was Old Array = "+old.length+" ti\n"+"New Element in New Array = "+newArray.length+" ti\n"+"New Array is = "+newArray;
    return result;
}

let picnicFess=[23,45,34,34,45,34,25,33,23,34,35,63,56,33,36,36,33,46,36,63,78,35,45,45,74,47,35]

console.log(reArrange(picnicFess));