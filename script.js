let count = 0;

// HTML elements ko select karna
const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

function updateCounter() {
    countElement.textContent = count;
}

increaseButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseButton.addEventListener("click", function () {
    count--;
    updateCounter();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});