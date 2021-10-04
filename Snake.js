let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "Direita";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0 , 0 ,16 * box, 16 * box );
}
function CreateSnake() {
    for(i=0 ; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect (snake[i].x ,snake[i].y, box , box);
    }
}
function start(){
    criarBG();
    CreateSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if (direction == "Direita") snakeX += box;
    if (direction == "Esquerda") snakeX -= box;
    if (direction == "Cima") snakeY += box;
    if (direction == "Baixo") snakeY -= box;

    snake.pop();

    let newhead = {
        x: snakeX , 
        y: snakeY
    }
    snake.unshift(newhead);
}

let game = setInterval(start, 100)


