const express = require('express');

// Create an Express application
const app = express();

// Define handlers for different routes
app.get('/', (req, res) => {
    res.send('This is the homepage');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page');
});

// Default route handler for 404 Not Found
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
