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

const pet = new Tamagotchi()

intervalTimer = setInterval(function () {
    document.getElementById("age").textContent = pet.age += 1
    document.getElementById("hunger").textContent = pet.hunger += 1
    document.getElementById("boredom").textContent = pet.boredom += 1
    document.getElementById("sleepiness").textContent = pet.sleepiness += 1
    if (pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10) {
        $("body").fadeOut(3000, function () {
            $("body").css({
                "background-image": "url('https://cdnb.artstation.com/p/assets/video_clips/images/046/206/795/large/sammie-cabrera-thumb.jpg?1644536086')",
                "background-size": "100% 100%",
            }).fadeIn(3000)
        })
        $("h1").fadeOut(3000, function () {
            $("h1").html("<h1>YOUR PET DIED</h1>").fadeIn(3000)
        })
    }
}, 5000)

intervalTimer = setTimeout(function () {
    alert("Your pet has transformed!")
    document.getElementById("pet").src = "https://media.giphy.com/media/sPD8vBqQxd4s0/giphy.gif"
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

// I found .animate() method on javascript MDN. I am choosing to transform the element with the id of "pet" which is the image of the pet. It's animated
// to move from where it is to 300 px across the x axis and then back -250px. The duration takes 4 seconds total and it runs continuously. 
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


