const inputRef = document.getElementById("font-size-control");
//display.log(inputRef);
inputRef.addEventListener("input", onChange);
const outputRef = document.getElementById("text");

function onChange() {
    outputRef.style = `font-size: ${inputRef.value}px;`;
}