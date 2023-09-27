let btn = document.querySelectorAll(".button");
for( let i = 0; i < btn.length; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        let btnStyle = this.innerHTML;
        sound(btnStyle);
    });
}
document.addEventListener("keydown", function(event){
    //"keydown" lets the user play using the keyboard
    sound(event.key);
});
function sound(key) {
    switch(key) {
        case "w":
            let sound1 = new Audio("sounds/sounds_tom-1.mp3");
            sound1.play();
            break;
        case "a":
            let sound2 = new Audio("sounds/sounds_tom-2.mp3");
            sound2.play();
            break;
        case "s":
            let sound3 = new Audio("sounds/sounds_tom-3.mp3");
            sound3.play();
            break;
        case "d":
            let sound4 = new Audio("sounds/sounds_tom-4.mp3");
            sound4.play();
            break;
        case "j":
            let sound5 = new Audio("sounds/sounds_snare.mp3");
            sound5.play();
            break;
        case "k":
            let sound6 = new Audio("sounds/sounds_crash.mp3");
            sound6.play();
            break;
        case "l":
            let sound7 = new Audio("sounds/sounds_kick-bass.mp3");
            sound7.play();
            break;
        default:
            console.log(key);
    }
}
