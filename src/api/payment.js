//yahi wo page hai jiske lie authentication banaya hai ab aise set karna hai ki specific banda hi iss page ko access kar paye..
//yaha par passport authenticaton ka use karenge

const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/payment", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.send("Hello this is the Vishal's page")
});

module.exports = router;