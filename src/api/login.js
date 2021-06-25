const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const userEmail = await User.findOne({ where: { email } }).catch((err) => {
        console.log("Error: ", err);
    });
    if (!userEmail) //agar email input email ke equal nahi to error
        return res.json({ message: "Email and password does not  matched" });
    if (userEmail.password !== password) //ager input password saved password ke equal nahi to error
        return res.json({ message: "Email and password dose not matched" });

    //yaha par jwtTokens banayenge to authentication me kaam aata hai login ke time pe issi token ke help se hum exact data access kr payenge
    const jwtToken = jwt.sign({ id: userEmail.id, email: userEmail.email }, process.env.JWT_SECRET);
    res.json({ message: "Welcome", token: jwtToken });
});


module.exports = router;