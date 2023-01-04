const express = require("express");
const router = express.Router();

const ARTICLES = require("./mock-articles");

//** Get all Articles */
router.get("/", (request, response) => {
    console.log("Request", request);
    response.send(ARTICLES);
});

//** Get Article by key */
router.get("/:key", (request, response) => {
    response.send(ARTICLES.filter(article => article.key === request.params.key)[0]);
});

module.exports = router;