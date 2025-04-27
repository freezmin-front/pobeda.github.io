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

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', DisplayContent);
DisplayContent();

function DisplayContent() {
  const TriggerBottom = (window.innerHeight / 5) * 4;


  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < TriggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove("show");
    }
  });
}