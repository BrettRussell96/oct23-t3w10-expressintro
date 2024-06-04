// Run the server

const serverInstance = require("./app");
const PokemonRouter = require("./routers/pokemonRoutes");

serverInstance.listen( 3000,() => {
    console.log("Server is running")
});