const express = require('express');
const app = express();
const db = require('./db'); // your db.js

app.use(express.json()); // for parsing JSON

// test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// example: get all teachers
app.get('/teachers', (req, res) => {
    const query = 'SELECT * FROM teachers';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
