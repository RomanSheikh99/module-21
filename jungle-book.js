// how many animale in jungle calculate

function animaleInJUngle(miles){
    if(miles <= 0){
        const print = ("You Can't See Any Animale");
        return print;
    }else if(miles <= 10 && miles > 0){
        let animales = miles * 10;// bcz anime dencity in this area is 10.
        const print = ("You see " + animales + " Animales (max)");
        return print;
    }else if(miles <= 20 && miles > 10){
        let firstStageAnimales = 10*10;
        let secStage = miles - 10;
        let secStageAnimales = secStage*35;// bcz anime dencity in this area is 35;
        let animales = firstStageAnimales + secStageAnimales;
        const print = ("You see " + animales + " Animales (max)");
        return print;
    }else if(miles <= 50 && miles > 20){
        let firstStageAnimales = 10*10;
        let secStageAnimales = (20 - 10)*35;
        let thrdStage = miles - 20;
        let thrdStageAnimales = thrdStage*70;// bcz anime dencity in this area is 70;
        let animales = firstStageAnimales + secStageAnimales + thrdStageAnimales;
        const print = ("You see " + animales + " Animales (max)");
        return print;
    }else if(miles <= 200 && miles > 50){
        let firstStageAnimales = 10*10;
        let secStageAnimales = (20 - 10)*35;
        let thrdStageAnimales = (50 - 20)*70;
        let lastStage = miles - 50;
        let lastStageAnimales = lastStage*100;// bcz anime dencity in this area is 100;
        let animales = firstStageAnimales + secStageAnimales + thrdStageAnimales + lastStageAnimales;
        const print = ("You see " + animales + " Animales (max)");
        return print;
    }else{
        const print = ("You are out of the jungle");
        return print;
    }
}

console.log(animaleInJUngle(25));