const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("change", onChange);

function onChange() {
    const text = inputRef.value;
    const lengthRequired = parseInt(inputRef.getAttribute("data-length"));
    inputRef.classList.remove("valid", "invalid");
    if (text.length === lengthRequired) {
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.add("invalid");
    }
}