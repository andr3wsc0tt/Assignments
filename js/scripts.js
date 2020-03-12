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

function drawEyes(x1, y1)
{
    ctx.font = "9px Arial";
    ctx.fillText("x", x1, y1);
}
function drawMan(guesses) {
    switch (guesses) {
        case 6:
            drawCircle(150, 25, 10, 0, 2 * Math.PI); // head
            break;
        case 5:
            drawLine(150, 35, 150, 55); // neck
            break;
        case 4:
            drawLine(125, 55, 150, 55); // left arm
            break;
        case 3:
            drawLine(175, 55, 150, 55); // right arm
            break;
        case 2:
            drawLine(150, 55, 150, 80); // body
            break;
        case 1:
            drawLine(150, 80, 135, 95); // left leg
            break;
        case 0:
            drawLine(150, 80, 165, 95); // right leg
            drawEyes(145, 25); // left eye
            drawEyes(151, 25); // right eye
            drawCircle(150, 32, 5, Math.PI+0.2, -0.2);
            break;
    }
}
function buildNoose()
{
    drawLine(5, 130, 55, 130);
    drawLine(30, 130, 30, 10);
    drawLine(30, 10, 150, 10);
    drawLine(150, 10, 150, 15);
}

function Hangman(Guesses, Word) {

    this.Guesses = Guesses;
    this.Word = Word;
    this.alive = true;

    this.hidden = [...Array(Word.length).keys()];
    this.shown = [];

    buildNoose();

    this.makeGuess = function (letter) {
        var finalword = "";

        if (this.Word.includes(letter)) {
            for (let i = 0; i < this.Word.length; i++) {
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

        for (var show = 0; show < Word.length; show++) {
            if (this.shown.includes(show)) {
                finalword += Word[show];

            }
            else
                finalword += "-";
        }


        var guessedList = document.getElementById('letterguess');
        guessedList.textContent += ` ${letter}`;

        var wordStat = document.getElementById('guess');
        wordStat.textContent = finalword;
        

    }

    this.playGame = function (letter) {
        this.makeGuess(letter);
        if (this.shown.length == this.Word.length)
            alert("YOU WIN!");
        if (Game.Guesses == 0)
        {
            var wordStat = document.getElementById('guess');
            wordStat.textContent = this.Word;
            setTimeout(function(){
                alert("GAME OVER");
            },2);
            setTimeout(function(){
                location.reload();
            },2);
        }
    }

}
var wordlist = `Ant
Antelope
Ape
Ass
Badger
Bat
Bear
Beaver
Bird
Boar
Camel
Canary
Cat
Cheetah
Chicken
Chimpanzee
Chipmunk
Cow
Crab
Crocodile
Deer
Dog
Dolphin
Donkey
Duck
Eagle
Elephant
Ferret
Fish
Fox
Frog
Goat
Hamster
Hare
Horse
Kangaroo
Leopard
Lion
Lizard
Mole
Monkey
Mousedeer
Mule
Ostritch
Otter
Panda
Parrot
Pig
Polecat
Porcupine
Rabbit
Rat
Rhinoceros
Seal
Sheep
Snake
Squirrel
Tapir
Toad
Tiger
Tortoise
Walrus
Whale
Wolf
Zebra`.toUpperCase();

wordlist = wordlist.split('\n');
var randomNum = Math.floor((Math.random() * wordlist.length) + 1);

Game = new Hangman(7, wordlist[randomNum]);

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
