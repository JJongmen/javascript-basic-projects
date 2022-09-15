const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const count = document.querySelector('.cnt');

btnIncrease.addEventListener('click', function () {
    count.textContent++;
    changeColor();

})

btnDecrease.addEventListener('click', function () {
    count.textContent--;
    changeColor();
})

btnReset.addEventListener('click', function () {
    count.textContent = 0;
    changeColor();
})

function changeColor() {
    let cnt = count.textContent;
    if (cnt > 0) {
        count.style.color = 'green';
    } else if (cnt < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}