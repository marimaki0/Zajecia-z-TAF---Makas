const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const changeColorButton = document.getElementById('changeColor');
let counterValue = 0;

incrementButton.addEventListener('click', () => {
    counterValue++; 
    counterElement.textContent = counterValue; 
});

changeColorButton.addEventListener('click', () => {
    counterElement.classList.toggle('red');
});
