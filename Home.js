// 1. Search Form Validation
document.getElementById('searchForm').addEventListener('submit', function(event) {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === "") {
        alert("Please enter a search term!");
        event.preventDefault(); // Prevent form submission
    }
});

// 2. Dynamic Greeting Message
document.addEventListener("DOMContentLoaded", function() {
    function displayGreeting() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var greetingMessage = "";
        
        if (hours < 12) {
            greetingMessage = "Good Morning!";
        } else if (hours < 18) {
            greetingMessage = "Good Afternoon!";
        } else {
            greetingMessage = "Good Evening!";
        }

        var greetingElement = document.createElement("h3");
        greetingElement.textContent = greetingMessage;
        document.querySelector("section").prepend(greetingElement);  // Add greeting at the top of the section
    }

    displayGreeting();
});

// 3. Image Carousel (for homepage image)
let imageIndex = 0;
const images = [
    "images/homepage picture.jpg", // First image
    "images/second_image.jpg",     // Second image (replace with your actual path)
    "images/third_image.jpg"       // Third image (replace with your actual path)
];

function changeImage() {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById('homepageImage').src = images[imageIndex];
}

// Change image every 5 seconds
setInterval(changeImage, 5000); // Adjust timing as needed
