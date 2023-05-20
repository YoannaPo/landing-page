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
// const firstSection = document.querySelector('#section1');
// const secondSection = document.querySelector('#section2');
// const thirdSection = document.querySelector('#section3');
// const fourthSection = document.querySelector('#section4');

const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const toTheTopButton = document.querySelector('#to-the-top');

// console.log(sections);
// console.log(sections[0]);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* @description Function below will:
* Scroll the viewport to sec by it's id
* @param (sec-id)
*/
// Scroll to anchor ID using scrollTO event
function scrollToSec(id) {
    const sec = document.getElementById(id);
    sec.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}

/**
 * @description If you scroll down 25px from the top of the document, 
 * this will show the button
 */
window.onscroll = function() {scrollIsVisibleBtn()};

function scrollIsVisibleBtn() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    toTheTopButton.style.display = "block";
  } else {
    toTheTopButton.style.display = "none";
  }
}

/**
 * @description When you clicks on the button, scroll to the top of the document
 */
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport
function toggleActiveSection() {
    const active = "active-class";
    let running = document.getElementsByClassName(active);
    for (let section of sections) {
        const allSections = section.getBoundingClientRect().top + section.getBoundingClientRect().bottom;
        if (allSections < window.innerHeight) {
            running[0].classList.remove(active);
            section.classList.add(active);

        }
    }
}


// build the nav

/** 
 * @description The 'for of loop' will:
 * Loop through all sections
 * Create a list item
 * Set the list item's class to 'navbar__liItem'
* Create an anchor item 
* Add the section name to the innerText
 * Append the list item to the navbar
*/
for (let section of sections) {
    const navLiItem = document.createElement('li');
    navLiItem.className = "navbar__liItem";
    const id = section.id;
    const navA = document.createElement('a');
    navA.textContent = section.dataset.nav;
    navA.href = `#${section.id}`;
    const navBar = document.getElementById('navbar__list');
    navLiItem.setAttribute('class', 'menu__link');
    navLiItem.appendChild(navA);
    navList.appendChild(navLiItem);

    navLiItem.addEventListener('click', function () {
        scrollToSec(id);
    });
    navBar.appendChild(navLiItem);
};

/** 
 * @description fuction that add an active state to navigation
 *  items when a section is in the viewport
 */

//Add class 'active' to section when near top of viewport
function addOrRemoveActiveNav() {
    //const active = "active-class";
    const allLinks = document.querySelectorAll('.menu__link a');
    for (let section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if the section is in the viewport
    if (sectionTop <= 0 && sectionBottom > 0) {
    // Loop through each navigation link
        allLinks.forEach(link => {
      // Remove the active class from all links
        link.classList.remove('active2');
    // Add the active class to the link that corresponds to the current section
        if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active2');
        }
    });
  }
}
}

/**
 * End Main Functions
 * 
*/


// Set sections as active
/**
 * @description Listens when  a section is scrolled 
 * Sets section to active
 */
window.addEventListener('scroll', toggleActiveSection);
window.addEventListener('scroll', addOrRemoveActiveNav);