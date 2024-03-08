const { ConnectionPool } = require('mssql');
const config = require('./config');

const pool = new ConnectionPool(config.dbConfig);

module.exports = {
    getAllPets: async () => {
        try {
            const connection = await pool.connect();
            const result = await connection.request().query('SELECT * FROM pets');
            return result.recordset;
        } catch (error) {
            console.error("Error getting all pets:", error);
            throw error;
        }
    },

    getPetById: async (id) => {
        try {
            const connection = await pool.connect();
            const result = await connection.request().input('id', id).query('SELECT * FROM pets WHERE id = @id');
            return result.recordset[0];
        } catch (error) {
            console.error("Error getting pet by ID:", error);
            throw error;
        }
    },

    createPet: async (name) => {
        try {
            const connection = await pool.connect();
            const result = await connection.request().input('name', name).query('INSERT INTO pets (name) VALUES (@name); SELECT SCOPE_IDENTITY() AS id');
            return result.recordset[0];
        } catch (error) {
            console.error("Error creating pet:", error);
            throw error;
        }
    },

    deletePet: async (id) => {
        try {
            const connection = await pool.connect();
            await connection.request().input('id', id).query('DELETE FROM pets WHERE id = @id');
        } catch (error) {
            console.error("Error deleting pet:", error);
            throw error;
        }
    },
    
    create5pets: async () => {
        try {
            const connection = await pool.connect();

            await connection.request().query('INSERT INTO pets (name) VALUES (\'Max\')');
            await connection.request().query('INSERT INTO pets (name) VALUES (\'Buddy\')');
            await connection.request().query('INSERT INTO pets (name) VALUES (\'Charlie\')');
            await connection.request().query('INSERT INTO pets (name) VALUES (\'Lucy\')');
            await connection.request().query('INSERT INTO pets (name) VALUES (\'Molly\')');
            

            console.log('5 pets added successfully.');
        } catch (error) {
            console.error("Error creating 5 pets:", error);
            throw error;
        }
    }
};
