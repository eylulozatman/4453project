const { ConnectionPool } = require('mssql');
const config = require('./config');

const pool = new ConnectionPool(config.dbConfig);

async function createTable() {
    try {
        await pool.connect();
        const request = pool.request();
        await request.query(`
            IF OBJECT_ID('dbo.pets', 'U') IS NULL
            BEGIN
                CREATE TABLE pets (
                    id INT IDENTITY(1,1) PRIMARY KEY,
                    name NVARCHAR(255) NOT NULL
                );
            END
        `);
        console.log("Table 'pets' created successfully.");
    } catch (error) {
        console.error("Error creating table:", error);
        throw error; // Propagate error to caller
    } finally {
        pool.close();
    }
}

module.exports = {
    pool,
    createTable
};
