// Function to handle smooth scrolling to the target element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}

// Add event listeners to the navigation links to trigger scrolling
// Add event listeners to the navigation links to trigger scrolling
const aboutLink = document.querySelector('a[href="#about"]');
const skillsLink = document.querySelector('a[href="#skills"]');

if (aboutLink) {
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    scrollToElement("about"); // Scroll to the "firstSection" section
  });
}

if (skillsLink) {
  skillsLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    scrollToElement("skills"); // Scroll to the "skills" section
  });
}

// Add an event listener to toggle the navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav ul");

  // Add click event listener to the hamburger menu
  hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});

// // Randomly change the image every 2.9 seconds
// var image = document.getElementById("imageToggle");
// let images = [
//   "Images/Hinata/hina.jpeg",
//   "Images/Hinata/hinata_hyuga_by_linartg_df0yup0-fullview.jpg",
// ];

setInterval(function () {
  let random = Math.floor(Math.random() * 2);
  image.src = images[random];
}, 2900);

// Select the navigation element by its id
const navbar = document.getElementById("navbar");

// Function to add or remove a CSS class based on scroll position
function toggleNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
}

// Add an event listener to the window's scroll event
window.addEventListener("scroll", toggleNavbar);

// Call the function initially to set the initial state
toggleNavbar();

// Initialize Typed.js
var typed = new Typed("#element", {
  strings: [
    "Ninja of Hyuga Clan.",
    "Genin.",
    "Healer ",
    "Supporter of Naruto Uzumaki.",
    "Medic-Nin",
  ],
  typeSpeed: 120,
  loop: true,
});

// GitHub button click event
var githubButton = document.getElementById("githubButton");
if (githubButton) {
  githubButton.addEventListener("click", function () {
    // Redirect to the GitHub URL
    window.location.href = "https://naruto.fandom.com/wiki/Konohagakure";
  });
}
