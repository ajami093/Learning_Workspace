function playSound(letter) {
    switch (letter) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
            
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default: 
            console.log(this.innerHTLM);
            break;
    }
}
var list = document.querySelectorAll(".drum");

for (var i=0; i<list.length; i++){
    list[i].addEventListener("click", function (){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener('keydown', function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    var actBtn = document.querySelector('.' + currentKey)
    actBtn.classList.add('pressed');
    setTimeout(() => {
        actBtn.classList.remove('pressed'); 
    }, 100);
    
}