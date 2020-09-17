const phrases = [
    "A blessing in disguise",
    "A dime a dozen",
    "Beat around the bush",
    "Cut somebody some slack",
    "Get something out of your system",
    "Hang in there",
    "Make a long story short",
    "Break a leg"
]

var result = 0;
var wins= 0;
var loses =0;


var random = Math.floor(Math.random() * phrases.length) + 1;

var entry = phrases[random].toUpperCase();
console.log(entry);

// var entry = "Break a leg".toUpperCase();
// entry = entry.toUpperCase();
var alph = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase();

var currentImage = 0;

var shownEntry = "";

function transformPasspord() {
    for (var i = 0; i < entry.length; i++) {
        if (entry.charAt(i) == " ") {
            shownEntry += " ";
        } else shownEntry += "-";
    }

    console.log(shownEntry);
}

function refreshPassword() {
    document.getElementById("board").innerHTML = shownEntry;
}

function setResult(number){
    result+=number;
    document.getElementById("result").innerHTML=result;
}


window.onload = init;

function init() {
    transformPasspord();
    setResult(0);

    wins=0;
    loses=0;
    setTable(wins,loses);

    refreshPassword();
    setAlphabet();
}

function setAlphabet() {
    var alphabetLetters = "";
    for (var i = 0; i < 26; i++) {
        // alphabetLetters += '<div class="letter" id="letter'+i+'" onclick="checkLetter('+i+')">'+alph.charAt(i)+'</div>';
        alphabetLetters += '<button class="letter_button" id="letter' + i + '" onclick="checkLetter(' + i + ')">' + alph.charAt(i) + '</button>';

        if ((i + 1) % 5 == 0) alphabetLetters += '<div style="clear:both"></div>';
    }


    document.getElementById("alphabet").innerHTML = alphabetLetters;
}


function checkLetter(num) {
    var letter = document.getElementById("letter" + num);
    letter.disabled=true;
    if (entry.indexOf(alph.charAt(num)) != -1) {

        letter.className += " correct";

    } else {
        letter.className += " wrong deactive";
        changeImg();
    }
    for (var i = 0; i < entry.length; i++) {
        if (entry.charAt(i) == alph[num]) {
            shownEntry = shownEntry.changeLetter(i, alph[num]);
        }
    }

    refreshPassword();

    if (entry == shownEntry) won();
    else if (currentImage == 9) lose();
}

function revealLetter() {

}

function changeImg() {
    currentImage++;
    if (currentImage > 9) {
        lose();
    }
    document.getElementById("image").setAttribute("src", "img/s" + currentImage + ".jpg");
}

String.prototype.changeLetter = function (place, char) {
    if (place > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, place) + char + this.substr(place + 1);
    }
}

function lose() {
    alert("You have lost game...");
    loses++;
    setTable(wins,loses);
    setResult(-10);
    newBoard();
}

function won() {
    alert("You have won the game!!! :)");
    wins++;
    setTable(wins,loses);
    setResult(10);
    newBoard();
    
}

function newBoard() {
    currentImage = -1;
    shownEntry = "";
    changeImg();

    random = Math.floor(Math.random() * phrases.length) + 1;

    entry = phrases[random].toUpperCase();

    transformPasspord();
    refreshPassword();
    setAlphabet();

}

function setTable(winsNum,losesNum){
    document.getElementById("wins").innerHTML=winsNum;
    document.getElementById("loses").innerHTML=losesNum;
}
