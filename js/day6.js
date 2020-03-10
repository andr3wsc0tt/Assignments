class Hangman
{
    makeGuess = function()
    {

    }

    playGame = function ()
    {

    }
}
Game = new Hangman();

var x = document.getElementById('formGet');
x.addEventListener('submit', Game, function(event) {
    event.preventDefault();
});
