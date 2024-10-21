const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

// Ensure the output directory exists
const outputDir = path.join(__dirname, '../generated_pdfs');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function generateResume(userData, callback) {
    const templatePath = path.join(__dirname, '../views/resume_template.html');
    const filePath = path.join(outputDir, `resume_${userData.name.replace(/\s+/g, '_')}.pdf`);

    // Read the HTML template
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading template: ${err.message}`);
            return callback(err);
        }

        // Handle optional profile picture
        let profilePicHtml = '';
        if (userData.profilePic) {
            profilePicHtml = `<img src="${userData.profilePic}" alt="Profile Picture" class="img-thumbnail rounded-circle" width="150" height="150">`;
        }

        // Replace placeholders with user data
        const html = data
            .replace(/{{name}}/g, userData.name || 'N/A')
            .replace(/{{contact}}/g, userData.contact || 'N/A')
         //   .replace(/{{profile_pic}}/g, profilePicHtml || '')
            .replace(/{{summary}}/g, userData.summary || '')
            .replace(/{{objective}}/g, userData.objective || '')
            .replace(/{{education}}/g, userData.education || 'N/A')
            .replace(/{{experience}}/g, userData.experience || 'N/A')
            .replace(/{{skills}}/g, userData.skills || 'N/A')
            .replace(/{{certifications}}/g, userData.certifications || '')
            .replace(/{{projects}}/g, userData.projects || '')
            .replace(/{{languages}}/g, userData.languages || '')
            .replace(/{{hobbies}}/g, userData.hobbies || '')
            .replace(/{{portfolio}}/g, userData.portfolio || '')
            .replace(/{{achievements}}/g, userData.achievements || '')
            .replace(/{{volunteer}}/g, userData.volunteer || '')
            .replace(/{{gitlink}}/g, userData.gitlink || '')
            .replace(/{{linkedin}}/g, userData.linkedin || '')
            .replace(/{{social_media}}/g, userData.socialMedia || '');

        // Generate the PDF from HTML
        pdf.create(html).toFile(filePath, (err, res) => {
            if (err) {
                console.error(`Error creating PDF: ${err.message}`);
                return callback(err);
            }
            console.log(`PDF generated at: ${res.filename}`);
            callback(null, res.filename); // Return the filename in callback
        });
    });
}

module.exports = { generateResume };
