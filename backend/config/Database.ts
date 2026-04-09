import { Sequelize } from "sequelize";
import dotenv from "dotenv";
 
dotenv.config();

const DB_NAME = process.env.DB_NAME || 'auth_db';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: Number(DB_PORT),
    logging: false
})

export default db;
