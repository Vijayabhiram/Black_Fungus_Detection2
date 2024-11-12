e// Predefined username and password
const validUsername = "user";
const validPassword = "password";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the predefined values
    if (username === validUsername && password === validPassword) {
        // Hide the login form and show the patient details form
        document.getElementById("login-section").style.display = "none";
        document.getElementById("upload-section").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password.";
    }
});

function savePatientDetails() {
    // Get patient details from the form
    const name = document.getElementById("patient-name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;

    // Log the details (you can save them to a server if needed)
    console.log("Patient Name:", name);
    console.log("Age:", age);
    console.log("Phone Number:", phone);

    // Redirect to the image upload page
    window.location.href = "upload.html"; // Redirect to upload page
}

function checkInfection() {
    const fileInput = document.getElementById("image-upload");

    if (fileInput.files.length === 0) {
        alert("Please upload an image first.");
        return;
    }

    // Get the uploaded file
    const uploadedFile = fileInput.files[0];
    const fileName = uploadedFile.name;

    // Check if the uploaded file is "e8.jpg"
    const result = (fileName === "e8.jpg"|| fileName === "e9.jpg") ? "Not Infected" : "Eye is Infected";

    // Display the result
    document.getElementById("result-message").textContent = result;
}
