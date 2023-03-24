var randonNumber1;
randonNumber1= Math.floor(((Math.random()*6)+1));
randonNumber2= Math.floor(((Math.random()*6)+1));
var imgAdd1=("images\\dice"+randonNumber1+".png");
var imgAdd2=("images\\dice"+randonNumber2+".png");
if (randonNumber1===randonNumber2){
 document.querySelector("h1").innerText="DRAW 🤔";
}
else if (randonNumber1>randonNumber2) {
 document.querySelector("h1").innerText="PLAYER 1 WIN 💪";
}
else{
  document.querySelector("h1").innerText="PLAYER 2 WIN 💪";
}
document.querySelector(".dice-img1").setAttribute("src",imgAdd1);
document.querySelector(".dice-img2").setAttribute("src",imgAdd2);
