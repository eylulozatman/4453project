module.exports = {
    dbConfig: {
        authentication: {
            type: 'default',
            options: {
                userName: 'dbservereylul', // Replace with your Azure SQL Database username
                password: 'P123p123'  // Replace with your Azure SQL Database password
            }
        },
        server: 'dbservereylul.database.windows.net',
        options: {
            database: 'petdb', // Replace with your database name
            encrypt: true,     // Encrypt connection
            trustServerCertificate: false, // Do not trust the server certificate
            rowCollectionOnRequestCompletion: true
        }
    }
};
