const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const montanha1 = document.querySelector('.montanha1');
const montanha2 = document.querySelector('.montanha2');
const audioJump = new Audio('./music/som do Mário pulando.mp3');
const audioMusica= new Audio('./music/MÚSICA TEMA DO SUPER MARIO WORLD.mp3');
var placar = 0;

const jump = () => {
    audioJump.play();
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const reload = () => {
    document.addEventListener('keydown', window.location.reload());
}

const loop = setInterval(() => {

    audioMusica.play();

    const positionPipe = pipe.offsetLeft;
    const positionMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    const positionMontanha1 = montanha1.offsetLeft;
    const positionMontanha2 = montanha2.offsetLeft;

    if ( positionPipe <= 95 && positionPipe > 0 && positionMario < 70){
       
        audioMusica.pause();

        const audioGameOver = new Audio('./music/Som do Mario Morrendo  - Efeito Sonoro HD.mp3');

        audioGameOver.play();
        
        pipe.style.animation = "none";
        pipe.style.left = `${positionPipe}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${positionMario}px`;

        montanha1.style.animation = "none";
        montanha1.style.left = `${positionMontanha1}px`;

        montanha2.style.animation = "none";
        montanha2.style.left = `${positionMontanha2}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '35px';

        clearInterval(loop);

        gameOver.style.visibility = 'visible';

        document.addEventListener('keydown', reload);

    } else {
        placar++;
        document.getElementById("placar").innerText = placar;
    }
})

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
