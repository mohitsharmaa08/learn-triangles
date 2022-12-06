const angleA = document.getElementById("angle-a");
const angleC = document.getElementById("angle-c");
const angleB = document.getElementById("angle-b");
const isTriangleBtn = document.getElementById("is-triangle");
const message = document.getElementById("istrop");

function isFloat(value){
    let n = value;
    let res = n % 1 !== 0; //Number(n) === n &&
    if(!res){
        return false;
    }
    return true;
}

function checkAngle(angle){
       updateMessage("");
       let value = Number(angle.value);
       console.log({value},angle.name);
        if(value === 0){
            updateMessage(`Angle ${angle.name} cannot be zero`);
            return false;
        }else if(isNaN(value)){
            updateMessage(`Angle ${angle.name} cannot be words`);
            return false;
        }else if(value < 0){
            updateMessage(`Angle ${angle.name} cannot be negative number`);
            return false;
        }else if(isFloat(value)){
            updateMessage(`Angle ${angle.name} cannot be floating-type number`);
            return false;
        }
        return true;
}

function updateMessage(msg){
    message.innerText = msg;
}

function solveAngle(a,b,c){
    let sumOfAngles = a+b+c;
    if(sumOfAngles  === 180){
        return true;
    }
    return false;
}

function isTriangle(){
    
    updateMessage("");

    if(checkAngle(angleA) && checkAngle(angleB) && checkAngle(angleC)){
            let a = Number(angleA.value);
            let b = Number(angleB.value);
            let c = Number(angleC.value);
            if(solveAngle(a,b,c)){
                updateMessage("It's a traingle.");
            }else{
                updateMessage("Not a triangle.");
            }   
    }
}

isTriangleBtn.addEventListener("click",isTriangle);