const express = require('express');

// Create an Express application
const app = express();

// Define handlers for different routes
app.get('/', (req, res) => {
    res.send(`
        <h1>This is the homepage</h1>
        <a href="/about"><button>About</button></a>
        <a href="/contact"><button>Contact</button></a>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>This is the about page</h1>
        <a href="/"><button>Home</button></a>
        <a href="/contact"><button>Contact</button></a>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>This is the contact page</h1>
        <a href="/"><button>Home</button></a>
        <a href="/about"><button>About</button></a>
    `);
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
