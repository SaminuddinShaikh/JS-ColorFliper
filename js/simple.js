simpColor = ["greenyellow", "indianred", "#cf226a", "rgb(16, 132, 209)"];

const colorBtn = document.querySelector("#color-button");
const colorName = document.querySelector(".color-num");

colorBtn.addEventListener("click", function () {
    var randomNum = generateRandomNum();
    console.log(randomNum);
    document.body.style.backgroundColor = simpColor[randomNum];
    colorName.innerText = simpColor[randomNum];
})

function generateRandomNum() {
    return Math.floor(Math.random() * simpColor.length);
}