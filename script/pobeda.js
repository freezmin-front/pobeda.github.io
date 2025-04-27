document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
})

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.navbar ul');
const nextArrow = document.querySelector('.next-arrow');

nextArrow.addEventListener('click', () => {
  const scrollAmount = navList.offsetWidth;

  navList.scrollLeft += scrollAmount;

});

nextArrow.addEventListener('click', () => {
  const scrollAmount = navList.offsetWidth;
  if (navList.scrollLeft + scrollAmount < navList.scrollWidth) { 
    navList.scrollLeft += scrollAmount;
  } else {
    navList.scrollLeft = 0;
  }
});