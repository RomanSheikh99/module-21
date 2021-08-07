
function divisible(num){
    for(i = 1; i <= num; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i + " is foobar");
        }else if(i % 5 == 0){
            console.log(i + " is bar")
        }else if(i % 3 == 0){
            console.log(i + " is foo")
        }else {
            console.log(i);
        }
    }
}

divisible(50);