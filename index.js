
// GENERAL

let image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

// FIRST DICE

let randomNumber1 = Math.floor(Math.random() * 6)

let firstImage = image[randomNumber1]

document.querySelector(".img1").setAttribute("src", firstImage)

console.log(randomNumber1)


// SECOND DICE

let randomNumber2 = Math.floor(Math.random() * 6)

let secondImage = image[randomNumber2]

document.querySelector(".img2").setAttribute("src", secondImage)

// WHO WIN ?

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🔥Joueur 1 Gagnant!"
    }
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Joueur 2 Gagnant!🔥"
        }
else{
    document.querySelector("h1").innerHTML = "Egalite!"
}