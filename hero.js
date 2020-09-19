const gridSquares = document.createDocumentFragment();
const grid = document.querySelector(".grid");
const heros = document.querySelectorAll(".hero");
const timeLeft = document.querySelector("#time-left");
const mainContent = document.querySelector(".main-content");
let result = 0;

const images = [
    '<img class="hero" id="hero1" src="images/lion.svg">',
    '<img class="hero" id="hero2" src="images/pig.svg">',
    '<img class="hero" id="hero3" src="images/zoology.svg">'
];

function introduction() {
    let introContent = document.createElement('div');
    introContent.className = "row";
    introContent.innerHTML = '<h1>Select your hero:</h1><section class="heroes">'+
                             images[0]+images[1]+images[2]+
                             '<button id="start">Start the game</button>';
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
            selectedHero = img.getAttribute("src");
            console.log(selectedHero);

            el = document.getElementById('start');
            el.addEventListener("click",start,false);
           
        })
    })
}

function hideIntro() {
    mainContent.innerHTML = '';
}

function start() {

    hideIntro();
    runGame();
    
    for(let i=0; i<16; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = i;
        newDiv.className = "square";
        gridSquares.appendChild(newDiv);
    }
    
    grid.appendChild(gridSquares);
    const square = document.querySelectorAll(".square");

    let ScoreHeader = document.createElement('h2');
    ScoreHeader.textContent = 'Your score';
    mainContent.appendChild(ScoreHeader);
    
    let scoreText = document.createElement('div');
    scoreText.id = 'score';
    let score = document.querySelector('#score');
    console.log(scoreText);
    mainContent.appendChild(scoreText);


    function randomSquare() {
        let randomPosition = square[Math.floor(Math.random() * 16)];
        square.forEach(className => {
            className.classList.remove("target");
            for (let i=0; i<square.length; i++) {
                square[i].style.backgroundImage='none';
            }
        })

        randomPosition.classList.add("target");
        randomPosition.style.backgroundImage='url('+selectedHero+')';
        hitPosition = randomPosition.id;

        square.forEach(id => {
            id.addEventListener('mouseup', () => {
                if(id.id === hitPosition) {
                    result = result + 1;
                    scoreText.textContent = result;
                }
            })
        })
    }
    
    function runGame() {
        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            const interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
                //console.log(timer);
                

                if (timer === 0) {
                    clearInterval(interval);
                    endGame();
                }
                timer--;
               
            }, 1000);

        }

        let timerId;
        timerId = setInterval(randomSquare, 1000);
        let startingTime = 60 * 0.1;

        let newDiv = document.createElement('div');
        let newHeader = document.createElement('h2');
        newHeader.textContent = "Time left";
        newDiv.id = 'time-left';

        mainContent.appendChild(newHeader);
        mainContent.appendChild(newDiv);

        let display = document.querySelector('#time-left');
        startTimer(startingTime, display);
    }

    function endGame() {
        grid.textContent = "";
    }
}

function countDown() {
    let currentTimeLeft = 60000;
}


let timerId = setInterval(countDown, 10000);

introduction();
