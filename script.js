// JavaScript file: script.js

// Implementing functionality for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Implementing functionality for the marquee
document.querySelector(".latest-posts marquee").behavior = "scroll";
document.querySelector(".latest-posts marquee").direction = "left";
