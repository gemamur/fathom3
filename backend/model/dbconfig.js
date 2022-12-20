import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test-db", "user", "pass", {
    dialect: "sqlite",
    host: "./sqlite"
});

export default sequelize;