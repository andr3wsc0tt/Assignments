var canvas = document.getElementById('hangCanvas');
var ctx = canvas.getContext("2d");

function drawCircle()
{
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLine()
{
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();
}

function Hangman(Guesses, Word){
    
    this.Guesses = Guesses;
    this.Word = Word;
    this.alive = true;

    this.hidden = [...Array(Word.length).keys()];
    this.shown = [];

    this.makeGuess = function(letter)
    {
        var finalword = "";

        if (this.Word.includes(letter))
        {
            for (let i = 0; i < this.Word.length; i++)
            {
                if (this.Word[i] == letter && !this.shown.includes(i))
                {
                    this.hidden.splice(i, 1);
                    this.shown.push(i);
                }
            }
        }
        else
        {
            this.Guesses -= 1;
            drawCircle();
            drawLine();
        }
        
        for (var show = 0; show < Word.length; show++)
        {
            if (this.shown.includes(show))
            {
                finalword += Word[show];

            }
            else
            finalword += "-";
        }


        var guessedList = document.getElementById('formGet');
        var guess = document.createElement('p');
        guess.textContent = letter;
        guessedList.appendChild(guess);

        var wordStat = document.getElementById('wordStatus');
        var word = document.createElement('p');
        word.textContent = finalword;
        wordStat.append(word);


    }  

    this.playGame = function(letter)
    {
        this.makeGuess(letter);
        if (this.Guesses == 0)
            alert("GAME OVER");
        if (this.shown.length == this.Word.length)
            alert("YOU WIN!");
    }

}

Game = new Hangman(5, "HELLO");

var x = document.getElementById('formGet');
x.addEventListener('submit', function(event) {
    event.preventDefault();

    var letter = document.getElementById('letter').value;
    Game.playGame(letter);
});
