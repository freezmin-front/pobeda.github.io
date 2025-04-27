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
    
    const timeline = document.querySelector('.timeline');
    const years = document.querySelectorAll('.year');
    const videoItems = document.querySelectorAll('.video-item');
    const navigationButtons = document.querySelectorAll('.navigation button');
    const container = document.querySelector('.container');
    const prevYearButton = document.getElementById('prevYear');
    const nextYearButton = document.getElementById('nextYear');


    var modal = document.getElementById("videoModal");


    var iframe = document.getElementById("videoIframe");

    var span = document.getElementsByClassName("close")[0];

    function activateYear(yearElement) {
      years.forEach(year => year.classList.remove('active'));
      yearElement.classList.add('active');
    }

    function showVideos(year) {
      videoItems.forEach(item => {
        if (item.dataset.year === year) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    function getActiveYearIndex() {
      return Array.from(years).findIndex(year => year.classList.contains('active'));
    }

    function switchYear(direction) {
      const activeIndex = getActiveYearIndex();
      let newIndex = activeIndex + direction;

      // Проверка границ
      if (newIndex < 0) {
        newIndex = years.length - 1; 
      } else if (newIndex >= years.length) {
        newIndex = 0; 
      }

      const newActiveYear = years[newIndex];
      activateYear(newActiveYear);
      showVideos(newActiveYear.dataset.year);
      timeline.scrollLeft = newActiveYear.offsetLeft - (timeline.offsetWidth - newActiveYear.offsetWidth) / 2;


    }

    prevYearButton.addEventListener('click', () => switchYear(-1));
    nextYearButton.addEventListener('click', () => switchYear(1));

    years.forEach(year => {
      year.addEventListener('click', function () {
        const yearValue = this.dataset.year;
        activateYear(this);
        showVideos(yearValue);
      });
    });


    videoItems.forEach(item => {
      item.addEventListener('click', function () {
        const videoId = this.dataset.videoId; 
        const embedUrl = "https://www.youtube.com/embed/" + videoId; 

        iframe.src = embedUrl;

        modal.style.display = "block";
      });
    });

    span.onclick = function () {
      modal.style.display = "none";
      iframe.src = ""; 
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = ""; 
      }
    }

    activateYear(document.querySelector('.year[data-year="1941"]'));
    showVideos('1941');
    timeline.scrollLeft = document.querySelector('.year[data-year="1941"]').offsetLeft - (timeline.offsetWidth - document.querySelector('.year[data-year="1941"]').offsetWidth) / 2;