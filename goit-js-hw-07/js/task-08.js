const controlsRef = document.getElementById("controls");
const inputRef = controlsRef.querySelector("input");
const renderBtnRef = controlsRef.querySelector("button[data-action='render']");
const destroyBtnRef = controlsRef.querySelector("button[data-action='destroy']");
renderBtnRef.addEventListener('click', render);
destroyBtnRef.addEventListener('click', destroy);
const boxesRef = document.getElementById("boxes");

function render() {
    //console.log("render",inputRef.value);
    createBoxes(parseInt(inputRef.value));
}

function destroy() {
    //console.log("destroy");
    destroyBoxes();
}

function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; ++i) {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        let htmlText = `<div style='width: ${size}px; height: ${size}px; background-color: rgb(${R},${G},${B});'></div>`;
        boxesRef.insertAdjacentHTML("beforeend", htmlText);

        size += 10;
    }
}

function destroyBoxes() {
    while (boxesRef.childElementCount > 0) {
        boxesRef.removeChild(boxesRef.childNodes[0]);
    }
}