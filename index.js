window.onload = buttonPressed

function init() {
    let answer = document.createTextNode("Hello World!")
    let foo = document.getElementById("computer-answer")
    foo.appendChild(answer)
}

function buttonPressed() {
    let btn = document.getElementById("rock")
    btn.addEventListener("click", init)
}
