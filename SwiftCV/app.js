const express = require('express');
const bodyParser = require('body-parser');
const resumeRoutes = require('./routes/resumeRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // To serve static files (like CSS, JS)

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Basic route for the root URL
app.get('/', (req, res) => {
    res.render('form'); // Render the form.ejs template
});

// Use the resume routes
app.use('/api', resumeRoutes); // Prefix your routes with '/api'

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
