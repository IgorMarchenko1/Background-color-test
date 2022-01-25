const button = document.getElementById("btn");
const color = document.querySelector(".color");



const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

button.addEventListener("click", () => {
    let hexColor = generatedHex();
    document.body.style.backgroundColor = hexColor;
    colors.textContent = hexColor;
});

function generatedHex() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor;

}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}