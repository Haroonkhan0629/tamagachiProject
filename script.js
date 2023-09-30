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

    ageUp() {
        pet.age += 1
        if (time > 0) {
            setTimeout(ageUp, time)
        }
    }

}

const pet = new Tamagotchi()

let time = 60000
pet.ageUp()

function update() {
    
}

function decreaseHunger() {
   pet.hunger --
   document.getElementById("hunger").html = pet.hunger
}

function decreaseSleepiness() {
    pet.sleepiness --
    document.getElementById("sleepiness").html = pet.sleepiness
}

function decreaseBoredom() {
    pet.boredom --
    document.getElementById("boredom").html = pet.boredom
}
