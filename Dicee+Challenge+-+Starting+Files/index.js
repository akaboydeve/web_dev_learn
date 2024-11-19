var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");
var title = document.querySelector("h1");
isRefresed = false;
if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!";
}
else {
    if (randomNumber1 > randomNumber2) {
        title.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        title.innerHTML = "Player 2 Wins! 🚩";
    }
}