const music = document.querySelector('#twetarImg');
const audio = new Audio("music/twetar.mp3");



function playAudio() {
    music.addEventListener('click', () => {
        audio.play()
    });
    
}


playAudio();