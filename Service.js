// JS/service.js

// Wait for the page to load fully
document.addEventListener("DOMContentLoaded", () => {
    console.log("Service page loaded!");

    // Example dresses — replace image paths with yours
    const dresses = [
        {
            name: "Elegant Red Dress",
            description: "Perfect for a classy evening look.",
            image: "images/red_dress.jpg"
        },
        {
            name: "Floral Summer Dress",
            description: "Light and breezy for warm days.",
            image: "images/floral_dress.jpg"
        },
        {
            name: "Classic Black Dress",
            description: "Timeless and sophisticated.",
            image: "images/black_dress.jpg"
        },
        {
            name: "Royal Blue Gown",
            description: "Shine bright in this elegant gown.",
            image: "images/blue_dress.jpg"
        }
    ];

    // Get the service container
    const container = document.querySelector(".service-container");

    // Create a section for all dresses
    const dressList = document.createElement("div");
    dressList.classList.add("dress-list");

    // Add each dress dynamically
    dresses.forEach(dress => {
        const item = document.createElement("div");
        item.classList.add("service-item");

        item.innerHTML = `
            <img src="${dress.image}" alt="${dress.name}">
            <h2>${dress.name}</h2>
            <p>${dress.description}</p>
            <button>Add to Cart</button>
        `;

        // Add click functionality
        const button = item.querySelector("button");
        button.addEventListener("click", () => {
            alert(`"${dress.name}" has been added to your cart 🛒`);
        });

        dressList.appendChild(item);
    });

    // Add the dynamically created list to the page
    container.appendChild(dressList);
});
