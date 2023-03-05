let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function getRandomEmoji() {
    let randomEmoji =  Math.floor(Math.random() * fighters.length)
    return randomEmoji
}

fightButton.addEventListener("click", function() {
    
    let firstEmoji = getRandomEmoji()
    let secondEmoji = getRandomEmoji()
    
    stageEl.textContent = fighters[firstEmoji] + " vs " + fighters[secondEmoji]
})
