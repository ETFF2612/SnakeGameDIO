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
document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "Direita") direction ="Esquerda"; 
    if(event.keyCode == 38 && direction != "Baixo") direction ="Cima";
    if(event.keyCode == 39 && direction != "Esquerda") direction ="Direita"; 
    if(event.keyCode == 40 && direction != "Cima") direction ="Baixo";
}


}
function start(){
    if(snake[0].x > 15 * box && direction == "Direita") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "Esquerda") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "Baixo") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "Cima") snake[0].y = 16 * box;

    criarBG();
    CreateSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if (direction == "Direita") snakeX += box;
    if (direction == "Esquerda") snakeX -= box;
    if (direction == "Cima") snakeY -= box;
    if (direction == "Baixo") snakeY += box;

    snake.pop();

    let newhead = {
        x: snakeX , 
        y: snakeY
    }
    snake.unshift(newhead);
}

let game = setInterval(start, 100)


