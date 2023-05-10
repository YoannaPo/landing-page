/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const firstSection = document.querySelector('#section1');
const secondSection = document.querySelector('#section2');
const thirdSection = document.querySelector('#section3');
const fourthSection = document.querySelector('#section4');

const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/** 
 * @description The 'for of loop' will:
 * Loop through all sections
 * Create a list item
 * Create an anchor item
 * Set the list item's class to 'navbar__liItem'
 * Add the section name to the innerText
 * Append the list item to the navbar
*/
for (const section of sections) {
    const navLiItem = document.createElement('li');
    navLiItem.className = "navbar__liItem";
    const navA = document.createElement('a');
    navA.textContent = section.dataset.nav;
    navA.href = `#${section.id}`;
    navLiItem.appendChild(navA);
    navList.appendChild(navLiItem);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active