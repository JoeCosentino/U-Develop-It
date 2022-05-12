const express = require('express');
const db = require('./db/connection');

const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');

// this is to see everything in the process environment
// console.log(process.env);

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
// by adding the /api prefix here, we can remove it from the individual route
// expressions after we move them to their new home
// (to use apiRoutes)
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// this belongs at the botton of the file
// to start server after DB connection

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
