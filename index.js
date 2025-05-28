var randonnumber1 =  Math.floor(Math.random()*6)+1;;
var randomdiceImage1 = "dice" + randonnumber1 + ".png"
var randomImagesource1 = "./images/" + randomdiceImage1;
var imageLeft = document.querySelectorAll("img")[0];
imageLeft.setAttribute("src", randomImagesource1);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdiceImage2 = "dice" + randomnumber2 + ".png";
var randomImagesource2 = "./images/" + randomdiceImage2;
var imageRight = document.querySelectorAll("img")[1];
imageRight.setAttribute("src", randomImagesource2);

if(randonnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomnumber2>randonnumber1){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}