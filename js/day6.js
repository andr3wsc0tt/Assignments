function Hangman(Guesses, Word){
    
    this.Guesses = Guesses;
    this.Word = Word;
    this.alive = true;

    this.hidden = [...Array(Word.length).keys()];
    this.shown = [];

    this.makeGuess = function()
    {
        var finalword = "";
        var letter = window.prompt("Choose a letter");

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
        }
        
        for (var show = 0; show < Word.length; show++)
        {
            if (this.shown.includes(show))
            {
                finalword += Word[show];

            }
            else
            finalword += "*";
        }
        console.log(finalword);
    }  

    this.playGame = function()
    {
        while (this.Guesses > 0 && this.shown.length != this.Word.length)
        {
            console.log(this.shown.length);
            console.log(this.Word.length);
            this.makeGuess();
        }
    }

}

Game = new Hangman(5, "HELLO");
Game.playGame();