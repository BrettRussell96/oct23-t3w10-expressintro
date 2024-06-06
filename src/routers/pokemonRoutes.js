const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	response.json({message:"Router route activated!"});
});


router.get("/random", (request, response) => {
    let queryParams = request.query;
	response.json({
        message:"Random Pokemon route activated!",
        queryParams: queryParams
    })
});


router.get("/getbyid/:pokemonNumber", (request, response) => {

    let retrievedNumberFromUrl = request.params.pokemonNumber;

    response.json({
        number: retrievedNumberFromUrl
    });
});


router.post("/", (request, response) => {
	response.json({message:"Nah nah no POSTing here buddy!"})
});

module.exports = router;