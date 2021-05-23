const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");
inputRef.addEventListener("input", report);

function report() {
    const text = inputRef.value;
    console.log("report ", text);
    outputRef.textContent = (text === "") ? "незнакомец": text;
}