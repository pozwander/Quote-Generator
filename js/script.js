document.addEventListener("DOMContentLoaded", function() {
  const quoteContainer = document.getElementById("quoteContainer");
  const categoryBtns = document.querySelectorAll(".categoryBtn");

  async function getQuotes() {
    const response = await fetch('quotes.json');
    const data = await response.json();
    return data;
  }

  function generateRandomQuote(category) {
    const normalizedCategory = category.toLowerCase(); // Normalize category name
    getQuotes().then(quotes => {
      const filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === normalizedCategory);
      if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const { author, quote } = filteredQuotes[randomIndex];
        quoteContainer.innerHTML = `<p>"${quote}" - ${author}</p>`;
      } else {
        quoteContainer.innerHTML = "<p>No quotes found in this category.</p>";
      }
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const category = this.getAttribute("data-category");
      generateRandomQuote(category);
    });
  });
});
