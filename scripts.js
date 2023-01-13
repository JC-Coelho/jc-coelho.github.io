function stickyElement(e) {
  /*
  var header = document.querySelector('.header');
  var headerHeight = getComputedStyle(header).height.split('px')[0];
*/
  var navbar = document.querySelector('.navbar');
  var navHeight = getComputedStyle(navbar).height.split('px')[0]
  //var scrollValue = window.scrollY;

  document.documentElement.style.setProperty('--nav-height', navHeight + "px");
  console.log("navbar height=" + navHeight)
/*
  if (scrollValue > headerHeight){
    navbar.classList.add('sticky');

  } else if (scrollValue < headerHeight){
    navbar.classList.remove('sticky');

  }
  */
}

window.addEventListener('scroll', stickyElement);
