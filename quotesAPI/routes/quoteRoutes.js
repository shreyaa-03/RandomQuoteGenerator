const express = require("express")
const { getQuotes, postQuote } = require("../controllers/qouteController")
const router = express.Router()

router.route('/quote').get(getQuotes).post(postQuote)

module.exports = router