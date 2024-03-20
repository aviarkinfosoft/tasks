import express from "express"
import path from "path";
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
