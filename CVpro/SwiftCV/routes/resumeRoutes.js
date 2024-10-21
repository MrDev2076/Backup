const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const fs = require('fs');

router.post('/submit', (req, res) => {
    const { name, email, phone, about, address, education, experience, certifications, workshops, languages, skills } = req.body;

    // Create a PDF document
    const doc = new PDFDocument();
    let filename = encodeURIComponent(name) + '.pdf';
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    // Pipe the PDF into the response
    doc.pipe(res);

    // Add content to the PDF
    doc.fontSize(25).text(name, { align: 'center' });
    doc.fontSize(12).text(`Email: ${email}`);
    doc.text(`Phone: ${phone}`);

    if (about) {
        doc.text(`About: ${about}`);
    }
    if (address) {
        doc.text(`Address: ${address}`);
    }
    if (education) {
        doc.text(`Education: ${education}`);
    }
    if (experience) {
        doc.text(`Experience: ${experience}`);
    }
    if (certifications) {
        doc.text(`Certifications: ${certifications}`);
    }
    if (workshops) {
        doc.text(`Workshops & Training: ${workshops}`);
    }
    if (languages) {
        doc.text(`Languages: ${languages}`);
    }
    if (skills) {
        doc.text(`Skills: ${skills}`);
    }

    // Finalize the PDF and end the stream
    doc.end();
});

module.exports = router;
