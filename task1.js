// Show alert when booking button is clicked
function bookNow() {
    alert("Thank you! Our team will contact you soon.");
}

// Contact button interaction
function contactUs() {
    alert("Call us at +91 XXXXXXXX or visit our office in Eluru.");
}

// Simple form validation (if you add form later)
function validateForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Change header color on scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#1b263b";
    } else {
        header.style.background = "#0d1b2a";
    }
});
function submitForm(event) {
    event.preventDefault();
    alert("Thank you! We received your details.");
}
