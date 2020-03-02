var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 1.5;
var dy = -1.5;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 1;
var brickColumnCount = 5;
var brickWidth = 25;
var brickHeight = 10;
var brickPadding = 5;
var brickOffsetTop = 35;
var brickOffsetLeft = 15;

var bricks = [];

var score = 0;
for(var c=0; c < brickColumnCount; c++)
{
    bricks[c] = [];
    for(var r=0; r < brickRowCount; r++)
    {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks()
{
    for (var c=0; c < brickColumnCount; c++)
    {
        for (var r=0; r < brickRowCount; r++)
        {
            if (bricks[c][r].status == 1)
            {
                var brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius)
        dx = -dx;

    if (y + dy < ballRadius)
    {
        dy = -dy;
    }
    else if (y + dy > canvas.height-ballRadius)
    {
        if(x > paddleX && x < paddleX + paddleWidth)
        {
            dy = -dy;
        }
        else
        {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }

    x += dx;
    y += dy;

    if(rightPressed)
    {
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width)
        {
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if (leftPressed)
    {
        paddleX -= 7;
        if (paddleX < 0)
            paddleX = 0;
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e)
{
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = true;
    }
}

function keyUpHandler(e)
{
    if(e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft")
    {
        leftPressed = false;
    }
}

function collisionDetection()
{
    for (var c=0; c < brickColumnCount; c++)
    {
        for (var r=0; r < brickRowCount; r++)
        {
            var b = bricks[c][r];
            if (b.status == 1)
            {
                if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight)
                {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score === brickRowCount*brickColumnCount)
                    {
                        alert("YOU WIN, CONGRATS!!!");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }
}

function drawScore()
{
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText('Score: '+score, 8 , 20);
}

var interval = setInterval(draw, 10);