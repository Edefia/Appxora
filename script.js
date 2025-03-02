// script to handle sidemenu
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars"); // Open button
var closeMenuBtn = document.querySelector(".fa-xmark"); // Close button
var menuLinks = document.querySelectorAll("#sidemenu a"); // All links inside the menu

// Function to open the menu
function openmenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "0";
        sidemen.style.display = "block";
        menuToggle.style.display = "none"; // Hide menu button
        closeMenuBtn.style.display = "block"; // Show close button
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        sidemen.classList.add("active");
    }
}

// Function to close the menu
function closemenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "-100%"; // Fully hide the menu
        document.body.style.overflow = ""; // Restore scrolling
        sidemen.classList.remove("active");
        menuToggle.style.display = "block"; // Show menu button
        closeMenuBtn.style.display = "none"; // Hide close button
    }
}
// Close menu when clicking a link inside it
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closemenu(); // Close menu
    });
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!sidemen.contains(event.target) && !menuToggle.contains(event.target)) {
        closemenu();
    }
});


// Add event listeners to menu buttons
if (menuToggle) {
    menuToggle.addEventListener("click", openmenu);
}
if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closemenu);
}




// Script to handle call and email triggers apps
         // Function to initiate a phone call
         function callNumber(phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }

        // Function to send an email
        function sendEmail(email) {
            window.location.href = `mailto:${email}`;
        }

// Script to handle form
// const scriptURL = 'https://script.google.com/macros/s/AKfycbx57QUQIOr31Wl4v6X3zfUViQZx_RWhRL4JsZevHG0dBxge1PbKb3B5mfa06bY9gIzD/exec'
//     const form = document.forms['submit-to-google-sheet']
//     const msg = document.getElementById("msg")
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => {
//             msg.innerHTML = "Message sent succesfully"
//             setTimeout(function(){
//                 msg.innerHTML = ""
//             }, 5000)
//             form.reset()
//         })
//         .catch(error => console.error('Error!', error.message))
//     })
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        // ✅ Replace with your Google Form POST URL
        const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScveozYvHRoYbGG4_VB5t7Cit58ArKgGB0DcWeyDgQZ1v1x1g/formResponse";

        // ✅ Replace with actual entry IDs
        const formPayload = new URLSearchParams();
        formPayload.append("entry.1053221750", formData.get("Name"));  // Name field
        formPayload.append("entry.998078091", formData.get("Email")); // Email field
        formPayload.append("entry.1458466013", formData.get("Message")); // Message field

        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            body: formPayload
        }).then(() => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(() => msg.innerHTML = "", 5000);
            contactForm.reset();
        }).catch((error) => console.error("Error sending message:", error));
    });
});



    // Script to handle about page tab-titles
    document.addEventListener("DOMContentLoaded", function () {
        const tabLinks = document.querySelectorAll(".tab-links");
        const tabContainer = document.querySelector(".tab-titles");
    
        let activeIndex = 0; // Track the current active tab index
    
        tabLinks.forEach((tab, index) => {
            tab.addEventListener("click", function () {
                // Remove active class from all tabs
                tabLinks.forEach((link) => link.classList.remove("active-link"));
    
                // Add active class to the clicked tab
                this.classList.add("active-link");
    
                // Calculate scrolling direction
                if (index > activeIndex) {
                    // If clicked tab is to the right of the active tab, move it to the leftmost part
                    tabContainer.scrollTo({
                        left: this.offsetLeft - tabContainer.offsetLeft,
                        behavior: "smooth",
                    });
                } else if (index < activeIndex) {
                    // If clicked tab is to the left of the active tab, move it to the rightmost visible part
                    tabContainer.scrollTo({
                        left: this.offsetLeft - tabContainer.offsetLeft - tabContainer.clientWidth + this.clientWidth,
                        behavior: "smooth",
                    });
                }
    
                // Update active tab index
                activeIndex = index;
            });
        });
    });

    
    
//    script to handle all animations on viewport
    document.addEventListener("DOMContentLoaded", function () {
        const animatedSections = document.querySelectorAll("#about, #service, #portfolio, #contact");
        const animatedElements = document.querySelectorAll(
            ".about-col-1 img, .about-col-2, .tab-titles, .services-list div, .work, .contact-left, .contact-right"
        );
    
        function checkScroll() {
            animatedSections.forEach((section) => {
                const sectionPos = section.getBoundingClientRect().top;
                const screenPos = window.innerHeight * 0.8;
    
                if (sectionPos < screenPos) {
                    section.classList.add("show");
                } else {
                    section.classList.remove("show"); // Reset when out of view
                }
            });
    
            animatedElements.forEach((element) => {
                const elementPos = element.getBoundingClientRect().top;
                const screenPos = window.innerHeight * 0.85;
    
                if (elementPos < screenPos) {
                    element.classList.add("show");
                } else {
                    element.classList.remove("show"); // Reset when out of view
                }
            });
        }
    
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run once in case elements are already in view
    });


    // script to handle contact form animation
    document.addEventListener("DOMContentLoaded", function () {
        const contactSection = document.querySelector("#contact");
        const contactElements = document.querySelectorAll(".contact-left, .contact-right");
    
        function checkScroll() {
            const contactPos = contactSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight * 0.8;
    
            if (contactPos < screenPos) {
                contactSection.classList.add("show");
                contactElements.forEach(el => el.classList.add("show"));
            } else {
                contactSection.classList.remove("show");
                contactElements.forEach(el => el.classList.remove("show"));
            }
        }
    
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run once on page load
    });
    
    