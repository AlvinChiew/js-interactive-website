function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currVal - 1;
    if (newVal < 0) {
        newVal = 0;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}