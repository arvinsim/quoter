// Generate a random color that is not too light
function generateColor() {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 50) + 50; // 50% to 100%
    const randomLightness = Math.floor(Math.random() * 30) + 30;
    return `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
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
