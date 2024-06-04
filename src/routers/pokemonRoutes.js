const expresas = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({message: "Router route activated!"});
});


module.exports = router;