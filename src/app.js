// Declare and configure the server

const express = require('express');
const serverInstance = express();
const {body, validationResult} = require("express-validator");

// Raw JSON in body allowed
serverInstance.use(express.json());
// Form data in body allowed
serverInstance.use(express.urlencoded({extended: true}));

const {readAuthData, verifyAuthData} = require("./middleware/authentication");

serverInstance.use(readAuthData);
serverInstance.use(verifyAuthData);


// Every route that begins with /pokemon gets passed to PokemonRouter
const PokemonRouter = require("./routers/pokemonRoutes");
serverInstance.use("/pokemon", PokemonRouter);


serverInstance.get("/", (request, response) => {
     console.log("someone visited the homepage of the server.");

     response.json({
        message: "Hello world!"
     });
});

serverInstance.post(
    "/", // path
    body("username").notEmpty().isLength({min: 4, max: 10}), // middleware in route chain
    (request, response) => { // final stop in route chain
        
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            response.status(400).json({
                message: "Bad username",
                errors: errors.array()
            });
        }

        console.log(request.body);

        response.json({
            message: "Recieved data:",
            requestData: request.body
    })
});

serverInstance.put("/", (request, response) => {
	response.json({message:"Put request received"})
});

serverInstance.patch("/", (request, response) => {
	response.json({message:"Patch request received"})
});

serverInstance.delete("/", (request, response) => {
	response.json({message:"Delete request received"})
});

// Make the instance available for other files to use
module.exports = serverInstance;