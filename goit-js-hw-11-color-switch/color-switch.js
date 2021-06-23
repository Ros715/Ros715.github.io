const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');

let timerRetValue = null;

buttonStartRef.addEventListener('click', () => {
    timerRetValue = setInterval(() => {
        const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
        bodyRef.setAttribute('style', `background-color: ${color};`);
    }, 1000);
})

buttonStopRef.addEventListener('click', () => {
    if (timerRetValue != null) {
        clearInterval(timerRetValue);
        timerRetValue = null;
    }
})
