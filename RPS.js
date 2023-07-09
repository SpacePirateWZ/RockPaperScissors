
function getComputerChoice() {
    const values = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * values.length)
    return values[randomIndex];
}

console.log(getComputerChoice())

