const pdf = require('html-pdf');
const path = require('path');
const fs = require('fs');

const generatePDF = (userData) => {
    return new Promise((resolve, reject) => {
        const html = `
            <html>
                <head>
                    <title>Resume</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                        h1 { text-align: center; }
                    </style>
                </head>
                <body>
                    <h1>${userData.name}</h1>
                    <p>Email: ${userData.email}</p>
                    <p>Phone: ${userData.phone}</p>
                    ${userData.about ? `<h3>About</h3><p>${userData.about}</p>` : ''}
                    ${userData.address ? `<h3>Address</h3><p>${userData.address}</p>` : ''}
                    ${userData.education ? `<h3>Education</h3><p>${userData.education}</p>` : ''}
                    ${userData.experience ? `<h3>Experience</h3><p>${userData.experience}</p>` : ''}
                    ${userData.certifications ? `<h3>Certifications</h3><p>${userData.certifications}</p>` : ''}
                    ${userData.workshops ? `<h3>Workshops & Training</h3><p>${userData.workshops}</p>` : ''}
                    ${userData.languages ? `<h3>Languages</h3><p>${userData.languages}</p>` : ''}
                    ${userData.skills ? `<h3>Skills</h3><p>${userData.skills}</p>` : ''}
                </body>
            </html>
        `;

        pdf.create(html).toBuffer((err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer); // Resolve the promise with the PDF buffer
            }
        });
    });
};

module.exports = { generatePDF };
