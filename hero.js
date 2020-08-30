const gridSquares = document.createDocumentFragment();
const heros = document.querySelectorAll(".hero");
const timeLeft = document.querySelector("#time-left");
const mainContent = document.querySelector(".main-content");
let score = document.querySelector("#score");
let result = 0;

const images = [
    '<img class="hero" id="hero1" src="images/lion.svg">',
    '<img class="hero" id="hero2" src="images/pig.svg">',
    '<img class="hero" id="hero3" src="images/zoology.svg">'
];

const backgroundImages = {
    hero1:'images/lion.svg',
    hero2:'images/pig.svg',
    hero3:'images/zoology.svg',
}

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
        
                function start()
            {
                runGame();
                console.log(el);
                //el = document.getElementById('start');
                //el.style.backgroundImage='url('+selectedHero+')';


                for(let i=0; i<16; i++) {
                    let newDiv = document.createElement('div');
                    newDiv.id = i;
                    newDiv.className = "square";
                    gridSquares.appendChild(newDiv);
                }
                
                document.getElementsByClassName("grid")[0].appendChild(gridSquares);
                
                const square = document.querySelectorAll(".square");



                
                
                function randomSquare() {
                    const qqq = document.querySelectorAll('.target');
                    const styles = {
                        backgroundImage: 'url('+selectedHero+')'
                    };

                    qqq[0].style.backgroundImage='url('+selectedHero+')';

                    square.forEach(className => {
                        className.classList.remove("target");
                        //target.style.backgroundImage='none';
                        
                    })
                    let randomPosition = square[Math.floor(Math.random() * 16)];
                    randomPosition.classList.add("target");

                    //target[0].style.backgroundImage='url('+selectedHero+')';

                    

                        
                        //target[i].style.backgroundImage='url('+selectedHero+')';
                        //target[i].style.backgroundImage='';

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
                    timerId = setInterval(randomSquare, 4000)
                }
            }
        })


    })
}





function countDown() {
    let currentTimeLeft = 60000;
    //currentTime--;
    //timeLeft.textContent = currentTime;
}


let timerId = setInterval(countDown, 4000);

introduction();
//