const URL = "http://localhost:3000/api/quote";

const textElement = document.querySelector(".quote");
const btn = document.querySelector(".new-quote-btn");


const getRandomQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return randomIndex;
}

const fetchAndDisplayRandomQuote = async () => {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const quotes = await response.json();
            console.log(quotes); // Log all quotes to inspect the data
            if (quotes.length > 0) {
                // const randomQuote = getRandomQuote(quotes);
                const index = getRandomQuote(quotes);
                const randomQuote = quotes[index].quote
                textElement.innerText = randomQuote;
            } else {
                textElement.innerText = "No quotes available";
            }
        } else {
            console.log("Error fetching data: " + response.statusText);
        }
    } catch (error) {
        console.log("Error fetching data: " + error.message);
    }
}

btn.addEventListener("click", fetchAndDisplayRandomQuote);

