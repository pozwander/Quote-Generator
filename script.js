document.addEventListener('DOMContentLoaded', function () {
    const getQuoteBtn = document.getElementById('getQuoteBtn'); // Get Quote Button Element
    const quoteDisplay = document.getElementById('quoteDisplay'); // Get Quote Display Element

    if (getQuoteBtn && quoteDisplay) { // Function for Both Variable
        getQuoteBtn.addEventListener('click', function () {
            fetch('quotes.json') // On Click Fetch Data From "urdata.json"
                .then(response => response.json())
                .then(data => {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const randomQuote = data[randomIndex];
                    displayQuote(randomQuote);
                    console.warn("Working!"); // Log "working" if fetching and displaying quote was successful
                })
                .catch(error => {
                    console.error('Error fetching quotes:', error);
                    console.log('Error!'); // Log "error" if there was an error fetching quotes
                });
        });

        function displayQuote(quote) {
            quoteDisplay.innerHTML = `<p>"${quote.quote}"</p><p>- ${quote.author}</p>`;
        }
    } else {
        console.error('Button or quote display element not found.');
    }
});


