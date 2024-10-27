
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let countBackground = document.getElementById("count-background");
let wellcomeEl = document.getElementById("wellcome-el")

let count = 0;
let roteted = 0;
let direction = true;

console.log(countEl);

function increment() {

    count += 1;
    countEl.innerText = count;

    rotation()

    console.log(count);
}

function rotation() {

    if (direction == true) {

        roteted += 360;

        countBackground.style.transform = "rotateX(" + roteted + "deg)";
        countBackground.style.transition = "transform 1s ease-in-out";
        direction = false;

    } else {

        roteted -= 360;

        countBackground.style.transform = "rotateY(" + roteted + "deg)";
        countBackground.style.transition = "transform 1s ease-in-out";
        direction = true;

    }

}


saveEl.innerText = "Previous entries : "

function save() {

    let saveNumber = count + " - ";

    saveEl.innerText += saveNumber
    countEl.textContent = 0
    count = 0

    console.log(saveNumber)

}


