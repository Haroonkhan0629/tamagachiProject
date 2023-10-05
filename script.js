let titleEl = document.getElementById("title")
let petName = prompt("What is your pet's name")
titleEl.innerHTML = `${petName}`


class Tamagotchi {
    constructor() {
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 1
    }

}

class Tamagotchi2 {
    constructor() {
        this.age = 1
    }
}

const pet = new Tamagotchi()
const baby = new Tamagotchi2()

intervalTimer = setInterval(function () {
    document.getElementById("age").textContent = pet.age += 1
    document.getElementById("hunger").textContent = pet.hunger += 1
    document.getElementById("boredom").textContent = pet.boredom += 1
    document.getElementById("sleepiness").textContent = pet.sleepiness += 1
    if (pet.age >= 10) {
        document.getElementById("baby-tag").textContent = `Baby's Age: ${baby.age += 1}`
    }
    if (pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10) {
        $("body").fadeOut(3000, function () {
            $("body").css({
                "background-image": "url('https://cdnb.artstation.com/p/assets/video_clips/images/046/206/795/large/sammie-cabrera-thumb.jpg?1644536086')",
                "background-size": "cover",
                "background-repeat": "no-repeat"
            }).fadeIn(3000)
        })
        $("h1").fadeOut(3000, function () {
            $("h1").html("<h1>YOUR PET DIED</h1>").fadeIn(3000)
        })
        $("h3").fadeOut(3000, function () {
            $("h3:eq(0)").html(" <a href=/game.html <h1> Play Again </h1> </a>").fadeIn(3000)
        })
        $("button").fadeOut(3000)
        $("#pet").fadeOut(3000)
        $("#baby").fadeOut(3000)
    }
}, 5000)

intervalTimer = setTimeout(function () {
    alert("Your pet has transformed!")
    document.getElementById("pet").src = "https://media.giphy.com/media/sPD8vBqQxd4s0/giphy.gif"
}, 20000)

intervalTimer = setTimeout(function () {
    alert("Your pet had a baby!")
    document.getElementById("baby").src = "https://media.giphy.com/media/CBvjuhJncUt6U/200.gif"
    $("#baby-tag").html("<h3>Baby's Age: </h3>").fadeIn(1000)
}, 45000)

function decreaseHunger() {
    if (pet.hunger === 1) {
        alert("Your Pet is not hungry")
    } else {
        pet.hunger--
        document.getElementById("hunger").textContent = pet.hunger
        $("body").css({
            "background-image": "url('https://i.redd.it/67t58ofv0osx.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat"

        })
    }
}

function decreaseSleepiness() {
    if (pet.sleepiness === 1) {
        alert("Your pet is not sleepy")
    } else {
        pet.sleepiness--
        document.getElementById("sleepiness").textContent = pet.sleepiness
        $("body").css({
            "background-image": "url('https://i.pinimg.com/originals/63/05/f1/6305f137bc0ad1304bab7e4bccf396ca.gif')",
            "background-size": "cover",
            "background-repeat": "no-repeat"
        })
    }
}

function decreaseBoredom() {
    if (pet.boredom === 1) {
        alert("Your pet is not bored")
    } else {
        pet.boredom--
        document.getElementById("boredom").textContent = pet.boredom
        $("body").css({
            "background-image": "url('https://camilaxiao.files.wordpress.com/2021/02/gym-pixel-art-fight-beat-em-up-game-interior-background-8bit-16bit.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat"
        })
    }
}

document.getElementById("pet").animate(
    [
        { transform: "translateX(0px)" },
        { transform: "translateX(200px)" },
        { transform: "translateX(-50px)" }
    ],
    {
        duration: 8000,
        iterations: Infinity,
    }
)

document.getElementById("baby").animate(
    [
        { transform: "translateX(0px)" },
        { transform: "translateX(-200px)" },
        { transform: "translateX(50px)" }
    ],
    {
        duration: 8000,
        iterations: Infinity
    }
)