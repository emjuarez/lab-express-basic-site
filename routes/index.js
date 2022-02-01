// 1. IMPORTACIONES

const express    = require("express");
// const res        = require("express/lib/response");
const router     = express.Router();

//2. RUTEO
router.get("/", (req,res) =>{

    res.render("index")
} )

router.get("/about", (req,res) => {
    res.render("about")
})

router.get("/works", (req, rest) => {
    res.render("works")
})
// 3. EXPORTACION

module.exports = router