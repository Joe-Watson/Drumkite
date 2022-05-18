// Detecting Key
var button = document.querySelectorAll(".drum")
var numberOfButton = document.querySelectorAll(".drum").length
for (i = 0; i < numberOfButton; i++) {
    button[i].addEventListener("click", function handle() {

        var buttonKey = this.innerHTML
        takeKey(buttonKey)
        buttonAnimation(buttonKey)


    })
}
// Detecting Keyborad press
document.addEventListener("keypress", function(event) {
    takeKey(event.key)
    buttonAnimation(event.key)

})
var borderBgColor = document.querySelectorAll('.drum')

function takeKey(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;
        case "a":
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;

        case "s":
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;

    }

}

function buttonAnimation(currentKey) {
    var getButton = document.querySelector("." + currentKey)
    getButton.classList.add("pressed")
    setTimeout(function() {
        getButton.classList.remove("pressed")
    }, 100)
}