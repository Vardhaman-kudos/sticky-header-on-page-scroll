const stickyHeader = document.querySelector('.site-header');

window.addEventListener("scroll", function() {
  const scroll = window.scrollY;

  if (scroll >= 1) {
    stickyHeader.classList.add('header-sticky');
  } else {
    stickyHeader.classList.remove('header-sticky');
  }
});