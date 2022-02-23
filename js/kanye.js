const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (quotes) => {
  const quoteBox = document.getElementById("quote");
  quoteBox.innerText = quotes.quote;
};
