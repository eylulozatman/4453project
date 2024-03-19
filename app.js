const express = require('express');
const bodyParser = require('body-parser');
const petRoutes = require('./petRoute');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/pets', petRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
