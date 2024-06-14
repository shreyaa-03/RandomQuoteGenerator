const asyncHandler = require("express-async-handler");
const Quote = require("../models/quoteModel");

// GET -> /api/qoute
const getQuotes = asyncHandler(async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
 
});
// const getQuotes = asyncHandler(async (req, res) => {
//   const quotes = await Quote.find();
//   if (quotes.length > 0) {
//       const randomIndex = Math.floor(Math.random() * quotes.length);
//       const randomQuote = quotes[randomIndex];
//       res.json(randomQuote); // Return a single quote object
//   } else {
//       res.status(404).json({ message: "No quotes found" });
//   }
// });

//POST -> /api/qoute
const postQuote = asyncHandler(async (req, res) => {
  const { quote } = req.body;
  const addQoute = await Quote.create({
    quote: quote,
  });
  if (!addQoute) {
    res.status(400);
    throw new Error("Error Adding new qoute");
  }
  res.json({ quote: addQoute });
});

module.exports = { getQuotes, postQuote };
