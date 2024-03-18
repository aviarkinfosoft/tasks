const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Mock user authentication middleware
const isAuthenticated = (req, res, next) => {
    // For demonstration purposes, let's assume user is authenticated
    req.isAuthenticated = true;
    next();
};

// Secure route requiring authentication
app.get('/secure-route', isAuthenticated, (req, res) => {
    res.send("This is a secure route. <a href='/'>Go back</a>");
});

// Public route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home Screen</h1><a href='/secure-route'>Go to Secure Route</a>");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
