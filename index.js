let homeTotal = 0;
let guestTotal = 0;
document.getElementById("home-score").textContent = homeTotal;
document.getElementById("guest-score").textContent = guestTotal;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeResult = 0;
let guestResult = 0;
function addOneHome(){  
    homeResult += 1; 
    homeScore.innerText = homeResult;
}
function addTwoHome(){
    homeResult += 2; 
    homeScore.innerText = homeResult;
}
function addThreeHome(){
    homeResult += 3; 
    homeScore.innerText = homeResult; 
}
function addOneGuest(){
    guestResult += 1; 
    guestScore.innerText = guestResult
}
function addTwoGuest(){
    guestResult += 2; 
    guestScore.innerText = guestResult    
}
function addThreeGuest(){
    guestResult += 3; 
    guestScore.innerText = guestResult
    
}
