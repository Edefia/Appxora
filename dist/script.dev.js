"use strict";

// script to handle sidemenu
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars"); // Open button

var closeMenuBtn = document.querySelector(".fa-xmark"); // Close button

var menuLinks = document.querySelectorAll("#sidemenu a"); // All links inside the menu
// Function to open the menu

function openmenu() {
  sidemen.style.right = "0";
  sidemen.style.display = "block";
  menuToggle.style.display = "none"; // Hide menu button

  closeMenuBtn.style.display = "block"; // Show close button

  document.body.style.overflow = "hidden"; // Prevent background scrolling

  sidemen.classList.add("active");
} // Function to close the menu


function closemenu() {
  sidemen.style.right = "-100%"; // Completely hide the menu

  document.body.style.overflow = ""; // Restore background scrolling

  sidemen.classList.remove("active");
  menuToggle.style.display = "block"; // Show menu button

  closeMenuBtn.style.display = "none"; // Hide close button
} // Close menu when clicking a link inside it


menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closemenu(); // Close menu
  });
}); // Close menu when clicking outside of it

document.addEventListener("click", function (event) {
  if (!sidemen.contains(event.target) && !menuToggle.contains(event.target)) {
    closemenu();
  }
}); // Add event listeners to menu buttons

if (menuToggle) {
  menuToggle.addEventListener("click", openmenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closemenu);
} // Script to handle call and email triggers apps
// Function to initiate a phone call


function callNumber(phoneNumber) {
  window.location.href = "tel:".concat(phoneNumber);
} // Function to send an email


function sendEmail(email) {
  window.location.href = "mailto:".concat(email);
} // Script to handle form


var scriptURL = 'https://script.google.com/macros/s/AKfycbx57QUQIOr31Wl4v6X3zfUViQZx_RWhRL4JsZevHG0dBxge1PbKb3B5mfa06bY9gIzD/exec';
var form = document.forms['submit-to-google-sheet'];
var msg = document.getElementById("msg");
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    msg.innerHTML = "Message sent succesfully";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })["catch"](function (error) {
    return console.error('Error!', error.message);
  });
}); // Script to handle about page tab-titles

document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".tab-links");
  var tabContainer = document.querySelector(".tab-titles");
  var activeIndex = 0; // Track the current active tab index

  tabLinks.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabLinks.forEach(function (link) {
        return link.classList.remove("active-link");
      }); // Add active class to the clicked tab

      this.classList.add("active-link"); // Calculate scrolling direction

      if (index > activeIndex) {
        // If clicked tab is to the right of the active tab, move it to the leftmost part
        tabContainer.scrollTo({
          left: this.offsetLeft - tabContainer.offsetLeft,
          behavior: "smooth"
        });
      } else if (index < activeIndex) {
        // If clicked tab is to the left of the active tab, move it to the rightmost visible part
        tabContainer.scrollTo({
          left: this.offsetLeft - tabContainer.offsetLeft - tabContainer.clientWidth + this.clientWidth,
          behavior: "smooth"
        });
      } // Update active tab index


      activeIndex = index;
    });
  });
}); // script to handle the about page animation

document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.querySelector("#about");
  var aboutImage = document.querySelector(".about-col-1 img");
  var aboutText = document.querySelector(".about-col-2");
  var tabTitles = document.querySelector(".tab-titles");

  function revealOnScroll() {
    var sectionPos = aboutSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3; // Triggers slightly before full view

    if (sectionPos < screenPos) {
      aboutSection.classList.add("show");
      aboutImage.classList.add("show");
      aboutText.classList.add("show");
      tabTitles.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case it's already in view
}); // script for handling services animation

document.addEventListener("DOMContentLoaded", function () {
  var serviceSection = document.querySelector("#service");
  var serviceCards = document.querySelectorAll(".services-list div");

  function revealOnScroll() {
    var sectionPos = serviceSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      serviceSection.classList.add("show"); // Add staggered delay for each service card

      serviceCards.forEach(function (card, index) {
        setTimeout(function () {
          card.classList.add("show");
        }, index * 200); // 200ms delay per card
      });
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case it's already in view
}); // script to handle animation of portfolio

document.addEventListener("DOMContentLoaded", function () {
  var portfolioSection = document.querySelector("#portfolio");
  var portfolioItems = document.querySelectorAll(".portfolio-list .work");

  function revealOnScroll() {
    var sectionPos = portfolioSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      portfolioSection.classList.add("show"); // Add staggered effect for each portfolio card

      portfolioItems.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.add("show");
        }, index * 200); // 200ms delay per item
      });
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case it's already in view
}); // script to handle contact section

document.addEventListener("DOMContentLoaded", function () {
  var contactSection = document.querySelector("#contact");
  var contactLeft = document.querySelector(".contact-left");
  var contactRight = document.querySelector(".contact-right");

  function revealOnScroll() {
    var sectionPos = contactSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      contactSection.classList.add("show"); // Delay animation for left and right elements

      setTimeout(function () {
        return contactLeft.classList.add("show");
      }, 200);
      setTimeout(function () {
        return contactRight.classList.add("show");
      }, 400);
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case it's already in view
});