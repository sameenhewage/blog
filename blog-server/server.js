const express = require("express");
const app = express();
const CORS = require("cors");
let CORS_OPTIONS = {
    origin: [
        'http://localhost:4200',
        'http://localhost:8000',
    ]
}

app.use(CORS(CORS_OPTIONS));

app.get("/", (request, response) => {
    response.send("GET");
})


//Import routes
const articleRoutes = require("./routes/article");

//MIDDLEWEARES
app.use("/articles", articleRoutes)

app.listen(8000, () => {
    console.log("Server is started and listening");
});