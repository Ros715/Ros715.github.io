const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById("name-output");
inputRef.addEventListener("input", report);

function report() {
    const text = inputRef.value.trim();
    //console.log("report ", text);
    outputRef.textContent = (text === "") ? "незнакомец" : text;
}