function changeColor(){
    const input = document.querySelector("#color");
    const backgroundCode = document.querySelector(".editor-back");

    backgroundCode.style.backgroundColor = input.value;
}