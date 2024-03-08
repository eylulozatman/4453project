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

            // 5 adet pet eklemek için insert into kullan
            await connection.request().query('INSERT INTO pets (id, name) VALUES (1, \'Max\')');
            await connection.request().query('INSERT INTO pets (id, name) VALUES (2, \'Buddy\')');
            await connection.request().query('INSERT INTO pets (id, name) VALUES (3, \'Charlie\')');
            await connection.request().query('INSERT INTO pets (id, name) VALUES (4, \'Lucy\')');
            await connection.request().query('INSERT INTO pets (id, name) VALUES (5, \'Molly\')');

            console.log('5 pets added successfully.');
        } catch (error) {
            console.error("Error creating 5 pets:", error);
            throw error;
        }
    }
};
