document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('open');
    });

    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

    const modal = document.getElementById('heroModal');
    const modalImage1 = document.getElementById('modalImage1');
    const modalBiography = document.getElementById('modalBiography');
    const modalFeat = document.getElementById('modalFeat');
    const modalAchievements = document.getElementById('modalAchievements');
    const closeBtn = document.querySelector('.close');
    const heroCards = document.querySelectorAll('.hero-card');

    function openModal(heroData) {
        modalImage1.src = heroData.images[0]; 
        modalBiography.textContent = heroData.biography;
        modalFeat.textContent = heroData.feat;
        modalAchievements.textContent = heroData.achievements;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    heroCards.forEach(card => {
        card.addEventListener('click', function() {
            const heroData = JSON.parse(this.dataset.hero);
            openModal(heroData);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});