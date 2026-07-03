const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dummy API is running!');
});

app.get('/api/hello', (req, res) => {
    res.json({
        message: 'Hello from Azure API'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});