const gridSquares = document.createDocumentFragment();
const heros = document.querySelectorAll(".hero");
const timeLeft = document.querySelector("#time-left");
const mainContent = document.querySelector(".main-content");
let score = document.querySelector("#score");
let result = 0;

function introduction() {
    let introContent = document.createElement('div');
    introContent.className = "row";
    introContent.innerHTML = '<h1>Select your hero:</h1><section class="heroes">'+
    '<img class="hero" src="images/lion.svg"><img class="hero" src="images/pig.svg"><img class="hero" src="images/zoology.svg"></section>'+
    '<button>Start the game</button>';
    mainContent.appendChild(introContent);
    const heroes = document.querySelectorAll(".hero");

    heroes.forEach(img => {

        var imgs = heroes;
        for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function() {
            (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
            this.classList.add('active');
          });
        }

        img.addEventListener('mouseup', () => {
            console.log(img);
        })
    })
}

for(let i=0; i<16; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.className = "square";
    gridSquares.appendChild(newDiv);
}

document.getElementsByClassName("grid")[0].appendChild(gridSquares);

const square = document.querySelectorAll(".square");

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("target");
    })
    let randomPosition = square[Math.floor(Math.random() * 16)];
    randomPosition.classList.add("target");
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        
        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function runGame() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500)
}

function countDown() {
    let currentTimeLeft = 60000;
    //currentTime--;
    //timeLeft.textContent = currentTime;
}


let timerId = setInterval(countDown, 1000);

introduction();
runGame();