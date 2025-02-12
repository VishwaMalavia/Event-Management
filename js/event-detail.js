inquiry = () => {
    // Get input values
    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let eventDetails = document.getElementById("event-details").value.trim();

    let nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
    let phoneRegex = /^[0-9]{10}$/; // Only numbers, exactly 10 digits

    // Validation checks
    if (!nameRegex.test(name)) {
        return;
    }
    if (!emailRegex.test(email)) {
        return;
    }
    if (!phoneRegex.test(phone)) {
        return;
    }
    if (eventDetails.length < 10) {
        return;
    }
    // Clear form fields

    document.getElementById('inquiryForm').reset();
    showPopup(true);
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}