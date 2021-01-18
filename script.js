let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*Renderiza o desenho que vai acontecer no plano, no caso um plano 2d*/ 
let box = 32; /*Tamanho em pixel dos quadrados da tela */
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen";    /*fillStyle trabalha o estilo do canvas/context */
    context.fillRect(0, 0, 16 * box, 16 * box); /*Desenha o retangulo onde vai acontecer o jogo / parametros: x, y, altura, largura*/
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    var img = document.getElementById("maca");
    context.drawImage(img, food.x, food.y);
    /*context.fillRect(food.x, food.y, box, box);*/
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right" && snake[0].y >= 0 && snake[0].y < 16 * box) direction = "left";
    if(event.keyCode == 38 && direction != "down" && snake[0].x >= 0 && snake[0].x < 16 * box) direction = "up";
    if(event.keyCode == 39 && direction != "left" && snake[0].y >= 0 && snake[0].y < 16 * box) direction = "right";
    if(event.keyCode == 40 && direction != "up" && snake[0].x >= 0 && snake[0].x < 16 * box) direction = "down";
}

function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            alert('Game Over');
            clearInterval(jogo);
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = 0; 

function velocidade1() {
    clearInterval(jogo);
    snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    jogo = setInterval(iniciarJogo, 150);
}

function velocidade2() {
    clearInterval(jogo);
    snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    jogo = setInterval(iniciarJogo, 100);
}

function velocidade3() {
    clearInterval(jogo);
    snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    jogo = setInterval(iniciarJogo, 85);
}