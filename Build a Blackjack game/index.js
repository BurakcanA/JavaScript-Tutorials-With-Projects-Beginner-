


let sum = 0


let cards = []

let hasBlackJack = false
let isAlive= true

console.log(sum)


let message = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl=document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "Arnold",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips


function startGame(){

    isAlive=true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum= firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardEl.textContent += cards[index] + " "
    }
    if (sum <= 20) {
        message.textContent = "Do you want to draw a new card? 🙂"
        sumEl.textContent = "Sum: " + sum
    } else if (sum === 21) {
        message.textContent = "Wohoo! You've got Blackjack! 🥳"
        sumEl.textContent = "Sum: " + sum
        hasBlackJack = true
    } else {
        message.textContent = "You're out of the game! 😭"
        sumEl.textContent = "Sum: " + sum
        isAlive = false
    }
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else{
        message.textContent = "You should start again!"
    }
}


function randomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
