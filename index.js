
let cards = []

let sum = 0
let message = ""

let isAlive = false
let hasBlackJack = false

messageEl = document.querySelector("#message-el")
sumEl = document.querySelector("#sum")
cardsEl = document.querySelector("#cards")

function getRandomNum()
{
    let value = Math.floor(Math.random() * 13) + 1  
    if (value === 1)
    {
        return 11
    }
    else if(value >= 11)
    {
        return 10
    }
    else
    {
        return value
    }
}
let i = 0

function resetParams()
{
    cards = []
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    cards.push(getRandomNum())
    cards.push(getRandomNum())
    sum = cards[0] + cards[1]
    i = 0
    isAlive = true
    hasBlackJack = false
}

function startGame()
{

    resetParams()
    renderGame()
}


cardsEl.textContent = "Cards: "
function renderGame()
{
    for (let j = i; j < cards.length; j++)
    {
        cardsEl.textContent += cards[j] + " " 
        i += 1
    }
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20)
    {
        message = "Hit or Stand?"
    }
    else if (sum === 21)
    {
        message = "Wohoo! You won!!!"
        hasBlackJack = true
    }
    else
    {
        message = "You are out of the game! Start the game again"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if ((isAlive) && (hasBlackJack === false))
    {
        let card = getRandomNum()
        sum += card

        cards.push(card)
        renderGame()
    }
    
}