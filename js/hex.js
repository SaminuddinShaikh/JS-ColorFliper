const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorBtn = document.querySelector("#color-button");
const colorName = document.querySelector(".color-num");

colorBtn.addEventListener("click", function () {
    let hexNum = "#";
    for (let i = 0; i < 6; i++) {
        hexNum += hexColor[generateRandomNum()];
    }
    document.body.style.backgroundColor = hexNum;
    colorName.innerText = hexNum;
    console.log(hexNum);
})

function generateRandomNum() {
    return Math.floor(Math.random() * hexColor.length);
}