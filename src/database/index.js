const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 100000 }
});

sequelize.sync();

(async() => {
    try {
        await sequelize.authenticate();
        console.log("Connection successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

module.exports = sequelize;