document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carrousel');
    const prevBtn = carousel.querySelector('.previous');
    const nextBtn = carousel.querySelector('.next');
    const categories = carousel.querySelectorAll('.categories > div')
    const categories_div = document.querySelector('.categories');
    const categories_array = Array.from(categories);
    const categories_center = carousel.querySelector('.home__categorie_center');
    const categories_array_reordered = document.createDocumentFragment();
    const categorie_details_object_array = [{'images_url': '/images/ab817f161830163.63cb810c22ead.jpg', 'title': 'Work', 'description': 'lorem ipsum'}, {'images_url': '/images/4139e280592771.5ce5873dc3d84.png', 'title': 'Work', 'description': 'lorem ipsum'}, {'images_url': 'images/1e83c5161747711.63ca1cff04aca.jpg', 'title': 'Work', 'description': 'lorem ipsum'}];
    let currentIndex = 0;
    console.log(categories);
    function showcategorie() {
        categorie_details_object_array.forEach((c, i) => {
            const categorie = document.createElement('div');
            
            categories_div.append(categorie);
            console.log(categories_div.children[i]);
            if (i !== 1) {
                
                categories_div.children[i].classList.add('home__categorie_sides');
            }
            else {
                categories_div.children[i].classList.add('home__categorie_center');
            }
        });
    }

    showcategorie();

    categories_div.addEventListener('click', () => {
        categories[1].classList.add('home__categorie_center_animation');
        categories[2].classList.add('home__categorie_sides_animation');
        setTimeout(() => {
            // categories.forEach((categorie, i) => {;
            //     categorie.classList.add('home__categorie_sides');
            //     categories_array.appendChild(categories_array_reordered);
            // });
            categories[0].remove();
            categories_div.append(categories_array[0]);
        }, 950);
        console.log('categories_center.classList.add');
        // setTimeout(() => {
        //     categories_center.classList.remove('home__categorie_center_animation');
        //     console.log('categories_center.classList.remove');
        // }, 1000);
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + categories.length) % categories.length;
        showcategorie(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % categories.length;
        showcategorie(currentIndex);
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
    
    // Smooth scrolling with wheel
    const sections = document.querySelectorAll('section, header, footer');
    let currentSectionIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            const targetSection = sections[index];
            const targetPosition = targetSection.offsetTop - window.innerHeight * 0;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            console.log('sections.length:'+ sections.length);
            setTimeout(() => {
                isScrolling = false;
                console.log('isScrolling: ' + isScrolling);
            }, 1000); // Adjust this value based on your scroll animation duration
        }
    }
    window.addEventListener('wheel', function(event) {

        if (event.deltaY > 0) {
            // Scrolling down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            // Scrolling up
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }

        scrollToSection(currentSectionIndex);
    });

    // Optional: Update current section on regular scroll
    window.addEventListener('scroll', function() {


        const scrollPosition = window.scrollY;
        for (let i = 0; i < sections.length; i++) {
            if (scrollPosition >= sections[i].offsetTop - window.innerHeight / 2) {
                console.log('section length: ', sections.length);
                currentSectionIndex = i;
            }
        }
    });
});
