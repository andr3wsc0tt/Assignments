var canvas = document.getElementById('hangCanvas');
var ctx = canvas.getContext("2d");
function drawCircle(x, y, r, s0, e0) {
    ctx.beginPath();
    ctx.arc(x, y, r, s0, e0);
    ctx.stroke();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function drawEyes(x1, y1) {
    ctx.font = "9px Arial";
    ctx.fillText("x", x1, y1);
}
function happyEyes(x1, y1) {
    ctx.font = "9px Arial";
    ctx.fillText("> <", x1, y1);
}
function drawMan(guesses) {
    if (guesses === void 0) { guesses = -1; }
    switch (guesses) {
        case 6:
            drawCircle(150, 25, 10, 0, 2 * Math.PI);
            break;
        case 5:
            drawLine(150, 35, 150, 55);
            break;
        case 4:
            drawLine(125, 55, 150, 55);
            break;
        case 3:
            drawLine(175, 55, 150, 55);
            break;
        case 2:
            drawLine(150, 55, 150, 80);
            break;
        case 1:
            drawLine(150, 80, 135, 95);
            break;
        case 0:
            drawLine(150, 80, 165, 95);
            drawEyes(145, 25);
            drawEyes(151, 25);
            drawCircle(150, 32, 5, Math.PI + 0.2, -0.2);
            break;
        case -1:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle(150, 25, 10, 0, 2 * Math.PI);
            drawLine(150, 35, 150, 55);
            drawLine(125, 55, 150, 55);
            drawLine(175, 55, 150, 55);
            drawLine(150, 55, 150, 80);
            drawLine(150, 80, 135, 95);
            drawLine(150, 80, 165, 95);
            happyEyes(144, 25);
            drawCircle(150, 27, 5, -0.2, Math.PI + 0.2);
    }
}
function buildNoose() {
    drawLine(5, 130, 55, 130);
    drawLine(30, 130, 30, 10);
    drawLine(30, 10, 150, 10);
    drawLine(150, 10, 150, 15);
}
var Hangman = (function () {
    function Hangman(Guesses, Word) {
        this.Guesses = Guesses;
        this.Word = Word;
        this.hidden = [];
        for (var i = 0; i < Word.length; i++) {
            this.hidden.push(i);
        }
        this.shown = [];
        buildNoose();
    }
    Hangman.prototype.makeGuess = function (letter) {
        var finalword = "";
        if (this.Word.includes(letter)) {
            for (var i = 0; i < this.Word.length; i++) {
                if (this.Word[i] == letter && !this.shown.includes(i)) {
                    this.hidden.splice(i, 1);
                    this.shown.push(i);
                }
            }
        }
        else {
            this.Guesses -= 1;
            drawMan(this.Guesses);
        }
        for (var show = 0; show < this.Word.length; show++) {
            if (this.shown.includes(show)) {
                finalword += this.Word[show];
            }
            else
                finalword += "-";
        }
        var guessedList = document.getElementById('letterguess');
        guessedList.textContent += " " + letter;
        var wordStat = document.getElementById('guess');
        wordStat.textContent = finalword;
    };
    Hangman.prototype.playGame = function (letter) {
        this.makeGuess(letter);
        if (this.shown.length == this.Word.length) {
            drawMan();
            alert("YOU WIN!");
        }
        if (Game.Guesses == 0) {
            var wordStat = document.getElementById('guess');
            wordStat.textContent = this.Word;
            setTimeout(function () {
                alert("GAME OVER");
            }, 2);
            setTimeout(function () {
                location.reload();
            }, 2);
        }
    };
    return Hangman;
}());
var words = "Ant\nAntelope\nApe\nAss\nBadger\nBat\nBear\nBeaver\nBird\nBoar\nCamel\nCanary\nCat\nCheetah\nChicken\nChimpanzee\nChipmunk\nCow\nCrab\nCrocodile\nDeer\nDog\nDolphin\nDonkey\nDuck\nEagle\nElephant\nFerret\nFish\nFox\nFrog\nGoat\nHamster\nHare\nHorse\nKangaroo\nLeopard\nLion\nLizard\nMole\nMonkey\nMousedeer\nMule\nOstritch\nOtter\nPanda\nParrot\nPig\nPolecat\nPorcupine\nRabbit\nRat\nRhinoceros\nSeal\nSheep\nSnake\nSquirrel\nTapir\nToad\nTiger\nTortoise\nWalrus\nWhale\nWolf\nZebra".toUpperCase();
var wordlist = words.split('\n');
var randomNum = Math.floor((Math.random() * wordlist.length));
var Game = new Hangman(7, wordlist[randomNum]);
var wordStat = document.getElementById('guess');
wordStat.textContent = '-'.repeat(Game.Word.length);
var x = document.getElementById('formGet');
x.addEventListener('submit', function (event) {
    event.preventDefault();
    var letter = document.getElementById('letter').value;
    letter = letter.toUpperCase();
    if (letter.length == 1)
        Game.playGame(letter);
    document.getElementById('letter').value = "";
});
//# sourceMappingURL=main.js.map