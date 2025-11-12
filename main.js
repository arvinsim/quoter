// Generate a random color that is not too light
function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBackgroundColor() {
    const color = generateColor();
    document.getElementById('background').style.backgroundColor = color;
}


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerText = `${quote.quote}`;
    document.getElementById('author').innerText = `- ${quote.author}`;
}

function runOnLoad() {
    setBackgroundColor();
    displayRandomQuote();

}
