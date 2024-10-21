document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const educationTextarea = document.getElementById('education');
    const experienceTextarea = document.getElementById('experience');
    const skillsInput = document.getElementById('skills');
 //   const profilePicInput = document.getElementById('profile-pic');
    const summaryTextarea = document.getElementById('summary');
    const objectiveTextarea = document.getElementById('objective');
    const certificationsTextarea = document.getElementById('certifications');
    const achievementsTextarea = document.getElementById('achievements');
    const projectsTextarea = document.getElementById('projects');
    const publicationsTextarea = document.getElementById('publications');
    const languagesInput = document.getElementById('languages');
    const awardsTextarea = document.getElementById('awards');
    const hobbiesInput = document.getElementById('hobbies');
    const interestsInput = document.getElementById('interests');
    const volunteerTextarea = document.getElementById('volunteer');
    const referencesTextarea = document.getElementById('references');
    const portfolioInput = document.getElementById('portfolio');
    const trainingsTextarea = document.getElementById('trainings');
    const workshopsTextarea = document.getElementById('workshops');
    const gitlinkInput = document.getElementById('gitlink');
    const linkedinInput = document.getElementById('linkedin');
    const socialMediaTextarea = document.getElementById('social-media');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        // Validate contact (ensure it is a valid phone number format)
        const contactRegex = /^[0-9]{10}$/;  // Simple validation for a 10-digit phone number
        if (contactInput.value.trim() === '') {
            alert('Please enter your contact number.');
            isValid = false;
        } else if (!contactRegex.test(contactInput.value.trim())) {
            alert('Please enter a valid 10-digit contact number.');
            isValid = false;
        }

        // Validate profile picture format
     //   const allowedImageExtensions = /(\.jpg|\.jpeg|\.png|\.img)$/i;
    //    if (profilePicInput.files.length > 0) {
      //      const file = profilePicInput.files[0];
        //    if (!allowedImageExtensions.test(file.name)) {
          //      alert('Please upload a valid image (jpg, jpeg, png, img).');
            //    isValid = false;
     //       }
     //   }

        // Validate education
        if (educationTextarea.value.trim() === '') {
            alert('Please enter your education details.');
            isValid = false;
        }

        // Validate experience
        if (experienceTextarea.value.trim() === '') {
            alert('Please enter your experience details.');
            isValid = false;
        }

        // Validate skills
        if (skillsInput.value.trim() === '') {
            alert('Please enter your skills.');
            isValid = false;
        }

        // Optional validation for portfolio (should be a valid URL if provided)
        const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/[\w\d#?&%=~\-.]*)?$/;
        if (portfolioInput.value.trim() !== '' && !urlRegex.test(portfolioInput.value.trim())) {
            alert('Please enter a valid portfolio URL.');
            isValid = false;
        }

        // Validate GitHub URL (optional but must be a valid URL if entered)
        if (gitlinkInput.value.trim() !== '' && !urlRegex.test(gitlinkInput.value.trim())) {
            alert('Please enter a valid GitHub profile URL.');
            isValid = false;
        }

        // Validate LinkedIn URL (optional but must be a valid URL if entered)
        if (linkedinInput.value.trim() !== '' && !urlRegex.test(linkedinInput.value.trim())) {
            alert('Please enter a valid LinkedIn profile URL.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();  // Prevent form submission if invalid
        }
    });

    // Character counters for the text areas
    const charCounters = {
        education: document.createElement('span'),
        experience: document.createElement('span'),
        summary: document.createElement('span'),
        objective: document.createElement('span'),
        certifications: document.createElement('span'),
        achievements: document.createElement('span'),
        projects: document.createElement('span'),
        publications: document.createElement('span'),
        awards: document.createElement('span'),
        volunteer: document.createElement('span'),
        references: document.createElement('span'),
        trainings: document.createElement('span'),
        workshops: document.createElement('span'),
        socialMedia: document.createElement('span')
    };

    function updateCharCount(textarea, counter) {
        counter.textContent = `Characters: ${textarea.value.length}`;
    }

    Object.entries(charCounters).forEach(([field, counter]) => {
        const textarea = document.getElementById(field);
        textarea.parentNode.insertBefore(counter, textarea.nextSibling);
        textarea.addEventListener('input', () => updateCharCount(textarea, counter));
        updateCharCount(textarea, counter); // Initialize count on page load
    });
});
