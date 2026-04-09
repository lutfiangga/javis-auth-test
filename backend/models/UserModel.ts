import { DataTypes } from "sequelize";
import db from "@config/Database";

const Users = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refreshToken: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

export default Users;
