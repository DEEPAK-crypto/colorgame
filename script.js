var mode = 6;
var colors = generateRandomColor(mode);
var message = document.querySelector("#message")
var blocks = document.querySelectorAll("#block");
var head = document.querySelector("h1"); //top division
var correct = pickColor(); //correct color
document.querySelector("#color").textContent = correct;
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");


easyButton.addEventListener("click", function() {
    mode = 3;
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    colors = generateRandomColor(mode);
    correct = pickColor();
    document.querySelector("#color").textContent = correct;

    for (var i = 0; i < blocks.length; i++) {
        if (colors[i])
            blocks[i].style.backgroundColor = colors[i];
        else
            blocks[i].style.display = "none";

    }


});
hardButton.addEventListener("click", function() {
    mode = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColor(mode);
    correct = pickColor();
    document.querySelector("#color").textContent = correct;
    for (var i = 0; i < blocks.length; i++) {
        if (i > 2)
            blocks[i].style.display = "block";
        blocks[i].style.backgroundColor = colors[i];
    }
})

resetButton.addEventListener("click", function() {
    message.textContent = "";
    resetButton.textContent = "New Colors";
    colors = generateRandomColor(mode);
    correct = pickColor();
    document.querySelector("#color").textContent = correct;
    for (var i = 0; i < blocks.length; i++)
        blocks[i].style.backgroundColor = colors[i];
    head.style.backgroundColor = "#376bb3";

});


for (var i = 0; i < blocks.length; i++) {
    //add blocks color
    blocks[i].style.backgroundColor = colors[i];
    //add event listener
    blocks[i].addEventListener("click", function() {
        if (this.style.backgroundColor === correct)
            correctAnswer();
        else {
            this.style.backgroundColor = "#2a302c";
            message.textContent = "Try again!";
            message.style.color = "red";
        }
    });
}

function correctAnswer() {
    resetButton.textContent = "Reset";
    console.log("correct");
    message.textContent = "Correct";
    message.style.color = "green";
    for (var i = 0; i < blocks.length; i++)
        blocks[i].style.backgroundColor = correct;
    head.style.backgroundColor = correct;

}

function pickColor() {

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = [];

    for (var i = 0; i < num; i++)
        arr.push(generateColor());
    return arr;
}

function generateColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var col = "rgb(" + red + ", " + green + ", " + blue + ")";
    return col;
}