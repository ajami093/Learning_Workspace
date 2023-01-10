var list = document.querySelectorAll(".drum");

for (var i=0; i<list.length; i++){
    list[i].addEventListener("click", function (){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
}
