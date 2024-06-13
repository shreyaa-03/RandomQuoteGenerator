const asyncHandler = require("express-async-handler");
const Quote = require("../models/quoteModel");

//GET -> /api/qoute
const getQuotes = asyncHandler(async (req, res) => {
  const qoutes = await Quote.find();
  res.json({ qoutes: qoutes });
});

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
