var ship = setShip();
var hit = [];
var guesses = 0;

function setShip(){
    return [1,2,3];
}

function notEnded(){
    return hit.length < 3;
}

function checkAndSetHit(gridNum){
    if(ship.indexOf(gridNum)>-1 && hit.indexOf(gridNum)==-1 ){
        hit.push(gridNum);
        return "Ship is hit!";
    }
    else{
        return "Miss!!";
    }
}

alert("We are starting a game now!");

while(notEnded()){
    var userInput = prompt("Enter a number between 0 & 6", "-1");
    guesses++;
    alert(checkAndSetHit(parseInt(userInput)));
}
alert("Congratulations!! Ship is destroyed! You took "+guesses+" number of guesses");

