const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Joke extends Model {}

Joke.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
        },
        setup: {
            type: DataTypes.STRING,
        },
        punchline: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: "joke",
        timestamps: false
    }
);
module.exports = Joke;