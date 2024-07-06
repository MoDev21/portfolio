document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carrousel');
    const prevBtn = carousel.querySelector('.previous');
    const nextBtn = carousel.querySelector('.next');
    const works_sides = carousel.querySelectorAll('.home__work_sides')
    const works = Array.from(works_sides);
    const works_center = carousel.querySelector('.home__work_center');
    let currentIndex = 0;

    function showWork(index) {
        works.forEach((work, i) => {
            if (i === index) {
                work.classList.add('home__work_center');
                work.classList.remove('home__work_sides');
            } else {
                work.classList.add('home__work_sides');
                work.classList.remove('home__work_center');
            }
        });
    }

    works_center.addEventListener('click', () => {
        works_center.classList.add('home__work_center_animation');
        works_sides[1].classList.add('home__work_sides_animation');
        console.log('works_center.classList.add');
        // setTimeout(() => {
        //     works_center.classList.remove('home__work_center_animation');
        //     console.log('works_center.classList.remove');
        // }, 1000);
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + works.length) % works.length;
        showWork(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % works.length;
        showWork(currentIndex);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
