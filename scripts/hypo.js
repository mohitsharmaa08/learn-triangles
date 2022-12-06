const sideA = document.getElementById("sideA");
const sideB = document.getElementById("sideB");
const calculateHypoBtn = document.getElementById("calculateHypo");
const message = document.getElementById("message");

function isFloat(value){
    let n = value;
    let res = n % 1 !== 0; //Number(n) === n &&
    if(!res){
        return false;
    }
    return true;
}

function sendUpdate(msg){
    message.innerText = msg;
}

function checkSide(side){
    let val = Number(side.value);
    sendUpdate("");
    if(val === 0){
        sendUpdate(`Side ${side.name} cannot be zero.`);
        return false;
    }else if(isNaN(val)){
        sendUpdate(`Side ${side.name} cannot be word, only number type.`);
        return false;
    }else if(val < 0){
        sendUpdate(`Side ${side.name} cannot be negative number`);
        return false;
    }else if(isFloat(val)){
        sendUpdate(`Side ${side.name} cannot be floating-type number`);
        return false;
    }
    return true;
}

function calculateHypotenuse(){
    sendUpdate("");
    if(checkSide(sideA) && checkSide(sideB)){
        let a = Number(sideA.value);
        let b = Number(sideB.value);
        console.log({a},{b});
        a *= a;
        b *= b;
        console.log({a},{b});
        let c = Math.sqrt(a+b);
        c = Math.trunc(c);
        sendUpdate(`Hypotenuse of a triangle is: ${c}`);
    }
}

calculateHypoBtn.addEventListener("click",calculateHypotenuse);