const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //     notNull: { args: true, msg: "You must enter a name" }
        // },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = User;