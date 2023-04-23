const navSlide = () => {
  const menu = document.querySelector('.nav-links');
  const burger = document.querySelector('.menu');
  const links = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle menu and burger class
    menu.classList.toggle('nav-active');
    burger.classList.toggle('menu-active');

    // animate links            
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });
  });
}

navSlide();
