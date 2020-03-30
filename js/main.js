/* capture main nav */
const nav = document.querySelector('#main');

/* capture nav links */
const navLinks = document.querySelectorAll('#main a');

/*event listner add to navLinks*/

navLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

/*function to call the smoothscroll function */

function navbarLinkClick(event) {
  smoothScroll(event); // call the smoothScroll function
}

//smoothScrolling function

function smoothScroll(event) {
  console.log(event.target);
}


/*get top of nav bar */
const topOfNav = nav.offsetTop;

/* function to fixNav */

function fixNav() {
  if (window.scrollY > topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);