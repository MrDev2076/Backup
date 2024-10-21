const express = require('express');
const router = express.Router();
const pdfGenerator = require('../utils/pdfGenerator'); // Import PDF generator utility

// Route to handle form submission and render preview
router.post('/submit', (req, res) => {
    console.log('Received user data:', req.body);
    res.render('preview', { user: req.body }); // Render the preview.ejs template
});

// Route to generate PDF
router.post('/generate-pdf', async (req, res) => {
    const userData = req.body;
    const pdfBuffer = await pdfGenerator.generatePDF(userData); // Call PDF generation function

    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
    });

    res.send(pdfBuffer); // Send PDF back to client
});

module.exports = router;
