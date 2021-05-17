const refs = {
    incBtn: document.querySelector('[data-action="increment"]'),
    decBtn: document.querySelector('[data-action="decrement"]'),
};
refs.incBtn.addEventListener('click', increment);
refs.decBtn.addEventListener('click', decrement);




let counterValue = 0;
const counter = document.getElementById("value");

function increment() {
    ++counterValue;
    counter.textContent = counterValue;
}

function decrement() {
    --counterValue;
    counter.textContent = counterValue;
}

