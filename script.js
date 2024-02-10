document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form fields
        const idTypeCheckboxes = document.querySelectorAll('input[name="id-type"]:checked');
        const studentNumber = document.getElementById('student-number').value.trim();
        const firstName = document.getElementById('first-name').value.trim();
        const middleName = document.getElementById('middle-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const dob = document.getElementById('dob').value;
        const college = document.getElementById('college').value.trim();
        const course = document.getElementById('course').value.trim();
        const homeAddress = document.getElementById('home-address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const emergencyName = document.getElementById('emergency-name').value.trim();
        const emergencyPhone = document.getElementById('emergency-phone').value.trim();
        const emergencyAddress = document.getElementById('emergency-address').value.trim();

        // Validate form fields
        let isValid = true;

        if (idTypeCheckboxes.length === 0) {
            alert('Please select at least one ID type.');
            isValid = false;
        }

        if (!studentNumber) {
            alert('Please enter your student number.');
            isValid = false;
        }

        if (!firstName) {
            alert('Please enter your first name.');
            isValid = false;
        }

        if (!lastName) {
            alert('Please enter your last name.');
            isValid = false;
        }

        if (!gender) {
            alert('Please select your gender.');
            isValid = false;
        }

        if (!dob) {
            alert('Please select your date of birth.');
            isValid = false;
        }

        if (!college) {
            alert('Please enter your college.');
            isValid = false;
        }

        if (!course) {
            alert('Please enter your course.');
            isValid = false;
        }

        if (!homeAddress) {
            alert('Please enter your home address.');
            isValid = false;
        }

        if (!phone) {
            alert('Please enter your phone/mobile number.');
            isValid = false;
        }

        if (!email) {
            alert('Please enter your email address.');
            isValid = false;
        }

        if (!emergencyName) {
            alert('Please enter the emergency contact name.');
            isValid = false;
        }

        if (!emergencyPhone) {
            alert('Please enter the emergency contact phone/mobile number.');
            isValid = false;
        }

        if (!emergencyAddress) {
            alert('Please enter the emergency contact address.');
            isValid = false;
        }

        // If form is valid, you can submit it to the server
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset form fields
        }
    });
});
