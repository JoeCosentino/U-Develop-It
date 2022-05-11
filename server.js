const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

// console.log(process.env);

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to sql database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: process.env.PASSWORD,
      database: 'election'
    },
    console.log('Connected to the election database.')
);

// returns all data in the candidates table
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 15`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// this belongs at the botton of the file
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// I am trying to write the 'mysql.createConnection' expression in the module 12.2.3, and I am using a process.env for my password so that I don't need to upload my mysql password to github, however whenever I try to do 'npm start' now, it is showing an error and kicks me out of the server. I checked and my password seems to be stored correctly in the process.env variable.

// Thank you