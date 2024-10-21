const express = require('express');
const router = express.Router();
const { generateResume } = require('../utils/pdfGenerator');
const path = require('path');

router.post('/generate', (req, res) => {
    // Capture the form data
    const userData = req.body;

    // Debugging: Log the entire request body to check incoming data
    console.log('Received user data:', userData);

    // Validate that userData and userData.name are defined
    
   // if (req.body.header.profilePicture) {
   //     let userProfilePicture = req.body.header.profilePicture.replace('C:\\Users\\', '/user/');
  //  } else {
        // Handle case where profilePicture is undefined
   //     console.error('Profile picture path is undefined.');
  //  }
    
      
    

    // Construct the PDF path
    const pdfPath = path.join(__dirname, '../generated_pdfs', `resume_${userData.name.replace(/\s+/g, '_')}.pdf`);

    // Generate the PDF and send it back
    generateResume(userData, (error) => {
        if (error) {
            console.error(`Error generating PDF: ${error.message}`);
            return res.status(500).send('Error generating PDF');
        }

        // Ensure the PDF file exists before trying to send it
        res.sendFile(pdfPath, (err) => {
            if (err) {
                console.error(`Error sending file: ${err.message}`);
                res.status(err.status || 500).end();
            } else {
                console.log('PDF sent successfully');
            }
        });
    });
});

module.exports = router;
