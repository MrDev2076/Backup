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
                        body {
                            background-color: #f4f6f9;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            color: #333;
                            padding: 20px;
                            margin: 0; /* Remove default margin */
                        }
                        .resume-container {
                            background-color: #fff;
                            padding: 20px; /* Reduced padding */
                            border-radius: 8px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            max-width: 800px;
                            margin: 0 auto;
                            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...'); /* Your actual base64 image */
                            background-repeat: no-repeat;
                            background-size: cover; /* Adjust the size of the background image */
                            background-attachment: fixed; /* Keep background fixed */
                        }
                        .resume-header {
                            text-align: center;
                            margin-bottom: 20px; /* Reduced margin */
                        }
                        .resume-header h1 {
                            font-size: 2rem; /* Slightly smaller font */
                            font-weight: bold;
                            margin-bottom: 5px;
                        }
                        .resume-header p {
                            font-size: 1rem; /* Slightly smaller font */
                            color: #555;
                        }
                        .section-title {
                            font-size: 1.2rem; /* Slightly smaller font */
                            margin: 15px 0; /* Reduced margin */
                            position: relative;
                            padding-bottom: 5px;
                        }
                        .section-title::after {
                            content: "";
                            position: absolute;
                            width: 30px; /* Adjusted for smaller sections */
                            height: 2px; /* Thinner line */
                            background-color: #007bff;
                            left: 0;
                            bottom: 0;
                        }
                        .list-group {
                            list-style: none;
                            padding: 0;
                        }
                        .list-group-item {
                            border: none;
                            padding-left: 10px;
                            padding-right: 0;
                            margin: 5px 0; /* Add spacing between items */
                        }
                        .list-group-item i {
                            margin-right: 10px;
                            color: #007bff;
                        }
                        .skills-list li {
                            display: inline-block;
                            background-color: #007bff;
                            color: #fff;
                            padding: 8px 12px;
                            margin: 5px 5px 0 10px;
                            border-radius: 20px;
                            font-size: 0.9rem;
                        }
                        @media print {
                            body {
                                margin: 0;
                                padding: 0;
                            }
                            .resume-container {
                                padding: 10px; /* Adjust for print */
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="resume-container">
                        <div class="resume-header">
                            <h1>${userData.name}</h1>
                            <p>
                                <i class="fas fa-envelope"></i> ${userData.email} | 
                                <i class="fas fa-phone"></i> ${userData.phone}
                            </p>
                        </div>

                        ${userData.about ? `
                        <div class="section">
                            <h2 class="section-title">About</h2>
                            <p>${userData.about}</p>
                        </div>` : ''}

                        ${userData.address ? `
                        <div class="section">
                            <h2 class="section-title">Address</h2>
                            <p>${userData.address}</p>
                        </div>` : ''}

                        ${userData.education ? `
                        <div class="section">
                            <h2 class="section-title">Education</h2>
                            <ul class="list-group">
                                ${userData.education.split('\n').map(edu => `
                                    <li class="list-group-item">
                                        <i class="fas fa-graduation-cap"></i> ${edu}
                                    </li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${userData.experience ? `
                        <div class="section">
                            <h2 class="section-title">Experience</h2>
                            <ul class="list-group">
                                ${userData.experience.split('\n').map(exp => `
                                    <li class="list-group-item">
                                        <i class="fas fa-briefcase"></i> ${exp}
                                    </li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${userData.certifications ? `
                        <div class="section">
                            <h2 class="section-title">Certifications</h2>
                            <ul class="list-group">
                                ${userData.certifications.split('\n').map(cert => `
                                    <li class="list-group-item">
                                        <i class="fas fa-certificate"></i> ${cert}
                                    </li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${userData.workshops ? `
                        <div class="section">
                            <h2 class="section-title">Workshops & Training</h2>
                            <ul class="list-group">
                                ${userData.workshops.split('\n').map(workshop => `
                                    <li class="list-group-item">
                                        <i class="fas fa-chalkboard-teacher"></i> ${workshop}
                                    </li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${userData.languages ? `
                        <div class="section">
                            <h2 class="section-title">Languages</h2>
                            <ul class="list-group">
                                ${userData.languages.split(',').map(language => `
                                    <li class="list-group-item">
                                        <i class="fas fa-language"></i> ${language.trim()}
                                    </li>`).join('')}
                            </ul>
                        </div>` : ''}

                        ${userData.skills ? `
                        <div class="section">
                            <h2 class="section-title">Skills</h2>
                            <ul class="skills-list">
                                ${userData.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                            </ul>
                        </div>` : ''}
                    </div>
                </body>
            </html>
        `;

        pdf.create(html, { format: 'A4', orientation: 'portrait', type: "pdf", border: "10mm" }).toBuffer((err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer); // Resolve the promise with the PDF buffer
            }
        });
    });
};

module.exports = { generatePDF };
