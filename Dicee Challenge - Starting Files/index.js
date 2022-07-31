function randomNumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumber2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function winner() {
    var rand1 = randomNumber1(1, 6);
    var rand2 = randomNumber2(1, 6);

    console.log("random 1" + rand1);
    console.log("random 2" + rand2);

    if (rand1 < rand2) {
        document.querySelector("h1").textContent = "PLAYER 2 WIN 🏆";
        document.querySelector("h1").style.fontSize = "6.5rem";
    }
    else if (rand1 === rand2) {
        document.querySelector("h1").textContent = "SERI";
    }
    else {
        document.querySelector("h1").textContent = "🏆 PLAYER 1 WIN!!";
        document.querySelector("h1").style.fontSize = "6.5rem";
    }

    images1(rand1);
    images2(rand2);
}


function images1(rand1) {
    var img1 = document.querySelector(".img1");

    var disk = "images/dice" + rand1 + ".png";
    return img1.src = disk;
}


function images2(rand2) {

    console.log(rand2);

    var img2 = document.querySelector(".img2");

    if (rand2 === 1) {
        return img2.src = "images/dice1.png"
    }
    else if (rand2 === 2) {
        return img2.src = "images/dice2.png"
    }
    else if (rand2 === 3) {
        return img2.src = "images/dice3.png"
    }
    else if (rand2 === 4) {
        return img2.src = "images/dice4.png"
    }
    else if (rand2 === 5) {
        return img2.src = "images/dice5.png"
    }
    else if (rand2 === 6) {
        return img2.src = "images/dice6.png"
    }

    img2.appendChild(img2);
    return rand2;
}

winner();