const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("input", onChange);

function onChange() {
    const text = inputRef.value.trim();
    const lengthRequired = parseInt(inputRef.getAttribute("data-length"));
    inputRef.classList.remove("valid", "invalid");
    if (text.length === lengthRequired) {
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.add("invalid");
    }
}