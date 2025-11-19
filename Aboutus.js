// Sticky Navigation Bar
window.onscroll = function() {
    stickyNavBar();
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
}

// Scroll to Top Button
var scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑ Scroll to Top";
scrollTopBtn.id = "scrollTopBtn";
document.body.appendChild(scrollTopBtn);

// Show the scroll-to-top button when the user scrolls down 200px
window.onscroll = function() {
    // Show or hide the scroll-to-top button
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to top when the button is clicked
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};
