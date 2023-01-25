var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) +1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) +1;
var randomDiceImg1 = "dice"+randomNumber1+".png";
var randomDiceImg2 = "dice"+randomNumber2+".png";
var randomImgSrc1 = "images/"+randomDiceImg1;
var randomImgSrc2 = "images/"+randomDiceImg2;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSrc1);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSrc2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won! refresh to roll dice!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "No one won! refresh to roll dice!";
}
else{
    document.querySelector("h1").innerHTML = "Player2 won! refresh to roll dice!";
}