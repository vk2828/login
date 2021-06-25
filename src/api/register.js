const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async(req, res) => {
    const { fullName, email, password } = req.body;
    // const {
    //     fullName: req.body.fullName,
    //     email: req.body.email,
    //     password: req.body.password
    // }



    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsUser) {
        return res.json({ message: "User already exists!" });
    }

    const newUser = new User({ fullName, email, password });
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.json({ error: "Cannot register" });
    });

    if (savedUser) res.json({ message: "Thanks" });
});

module.exports = router;






//////////////////////
/*const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 *
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 *
app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.user.name)
});*/