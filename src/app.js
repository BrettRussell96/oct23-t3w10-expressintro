// Declare and configure the server

const express = require('express');
const PokemonRouter = require("./routers/pokemonRoutes");
const serverInstance = express();

// Raw JSON in body allowed
serverInstance.use(express.json());
// Form data in body allowed
serverInstance.use(express.urlencoded({extended: true}));


// Every route that begins with /pokemon gets passed to PokemonRouter
serverInstance.use("/pokemon", PokemonRouter);


serverInstance.get("/", (request, response) => {
     console.log("someone visited the homepage of the server.");

     response.json({
        message: "Hello world!"
     });
});

serverInstance.post("/", (request, response) =>{

    console.log(request.body);

    response.json({
        message: "Recieved data:",
        requestData: request.body
    })
})

// Make the instance available for other files to use
module.exports = serverInstance;