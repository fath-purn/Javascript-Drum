
// memanggil button dan fungsi untuk klik langsung
var drumNumbersLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNumbersLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

// klik dengan keyboard
addEventListener("keypress", function() {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {

    switch(key){
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a" :
            new Audio('sounds/tom-2.mp3').play();
        case "s" :
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d" :
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j" :
            new Audio('sounds/snare.mp3').play();
            break;
        case "k" :
            new Audio('sounds/crash.mp3').play();
            break;
        case "l" :
            new Audio('sounds/kick-bass.mp3').play();
            break;
        default:
            // console.log(event);
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150)
}








// function anotherEvent(typeOfEvent, callback){

//     var eventType = {
//         type: "keypress",
//         key: "p",
//         duration: 2
//     }

//     if(eventType.type === typeOfEvent){
//         callback(eventType);
//     }
// }

// anotherEvent("keypress", function (event) {console.log(event)});




// function playDrum(){
    
//     document.querySelector(".w").addEventListener("click", function () { 
//         new Audio('sounds/tom-1.mp3').play();
//         console.log("tom-1");
//     })
//     document.querySelector(".a").addEventListener("click", function () { 
//         new Audio('sounds/tom-2.mp3').play();
//         console.log("tom-2");
//     })
//     document.querySelector(".s").addEventListener("click", function () { 
//         new Audio('sounds/tom-3.mp3').play();
//         console.log("tom-3");
//     })
//     document.querySelector(".d").addEventListener("click", function () { 
//         new Audio('sounds/tom-4.mp3').play();
//         console.log("tom-4");
//     })
//     document.querySelector(".j").addEventListener("click", function () { 
//         new Audio('sounds/snare.mp3').play();
//         console.log("snare");
//     })
//     document.querySelector(".k").addEventListener("click", function () { 
//         new Audio('sounds/crash.mp3').play();
//         console.log("crash");
//     })
//     document.querySelector(".l").addEventListener("click", function () { 
//         new Audio('sounds/kick-bass.mp3').play();
//         console.log("kick-bass");
//     })

// }

// playDrum();


// function drumImages(){

//     var newImages = document.createElement("img");
    
//     // crash
//     document.querySelector(".w").appendChild(newImages);
//     var crashImage = document.querySelector(".w img");
//     crashImage.src = "images/crash.png";
// }
