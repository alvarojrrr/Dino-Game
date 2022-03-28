const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
var points = 0;


    

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}


function jump(){    

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval);
            //Descendo            
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);                            
        } else {
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';        
        }        
    }, 20);     
}

function createCactus(){
    const cactus = document.createElement('div');
    let randomTime = Math.random() * 8000;
    let cactusPosition = 1000;    


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {      
        if(cactusPosition < -60){                        
            clearInterval(leftInterval);
            background.removeChild(cactus);
            points = points + 100;
        } else if (cactusPosition > 0 && cactusPosition < 45 && position < 45){
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo<br> Sua pontuação foi de: ' + points + '</h1>'
            
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';                        
        }   
    }, 30);

    setTimeout(createCactus, randomTime);  
    
    
}

function showPoints(){
   

   
    
}




createCactus();
document.addEventListener('keyup', handleKeyUp);