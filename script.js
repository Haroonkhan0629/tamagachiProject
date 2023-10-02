let titleEl = document.getElementById("title")
let petName = prompt("What is your pet's name")
titleEl.innerHTML = `I am ${petName}, your pet!`


class Tamagotchi {
    constructor() {
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 1
    }

}

const pet = new Tamagotchi()

intervalTimer = setInterval(function () {
    document.getElementById("age").textContent = pet.age += 1
    document.getElementById("hunger").textContent = pet.hunger += 1
    document.getElementById("boredom").textContent = pet.boredom += 1
    document.getElementById("sleepiness").textContent = pet.sleepiness += 1
    if(pet.hunger >= 10) {
        $("h1").fadeOut(3000, function(){
            $("h1").html("<h1>YOUR PET STARVED TO DEATH</h1>").fadeIn(3000)
        })
    } if(pet.sleepiness >= 10) {
        $("h1").fadeOut(3000, function(){
            $("h1").html("<h1>YOUR PET DIED FROM INSOMNIA</h1>").fadeIn(3000)
        })
    } if(pet.boredom >= 10) {
        $("h1").fadeOut(3000, function(){
            $("h1").html("<h1>YOUR PET DIED FROM ISOLATION</h1>").fadeIn(3000)
        })
    }
}, 5000)

intervalTimer = setTimeout(function() {
    alert("Your pet has transformed!")
    document.getElementById("pet").src = "https://media.giphy.com/media/sPD8vBqQxd4s0/giphy.gif"
    $("#pet").css({
        "transform": "scale(1)"
    })
}, 20000)

function decreaseHunger() {
    if (pet.hunger === 1) {
        alert("Your Pet is not hungry")
    } else {
        pet.hunger--
        document.getElementById("hunger").textContent = pet.hunger
        $("body").css({
            "background-image": "url('https://i.pinimg.com/736x/75/4a/71/754a715e67e774962781e3609ef065e5.jpg')",
            "background-size": "100% 100%",

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
            "background-image": "url('https://tse4.mm.bing.net/th?id=OIP.WzLjG_i9M582QWuruDib7wHaEK&pid=Api&P=0&h=220')",
            "background-size": "100% 100%",
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
            "background-image": "url('https://media.wired.com/photos/5f84c1d34dbf8ba438224a83/master/w_2560%2Cc_limit/OpEd-Internet-Digital-Parks-690130756.jpg')",
            "background-size": "100% 100%"
        })
    }
}

