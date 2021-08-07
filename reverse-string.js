// how to revers a string

var text = "welcome to developer world";

console.log(text.length);

console.log(text.indexOf("c"));

console.log(text[7]);

function reverseText(text){
    let newtext ='';
    for(let letters of text){
        newtext = letters + newtext;// 'ew'
    }
    return newtext;
}

console.log(reverseText(text));