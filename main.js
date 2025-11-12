function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerText = `${quote.quote}`;
    document.getElementById('author').innerText = `- ${quote.author}`;
}
