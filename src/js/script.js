

document.addEventListener('DOMContentLoaded', function() {
    
    
    // Carousel functionality
    const carousel = document.querySelector('.carrousel');
    const prevBtn = carousel.querySelector('.previous');
    const nextBtn = carousel.querySelector('.next');
    // const categories = carousel.querySelectorAll('.categories > div');
    const categories_div = document.querySelector('.categories');
    // const categories_array = Array.from(categories);
    // const categories_center_container = document.querySelector('.home__categorie_center_container');
    // const categories_right_container = document.querySelector('.home__categorie_right_container');
    // const categories_left_container = document.querySelector('.home__categorie_left_container');
    const categories_center = document.querySelector('.home__categorie_center');
    const categories_right = document.querySelector('.home__categorie_right');
    const categories_left = document.querySelector('.home__categorie_left');
    const categories_array_reordered = document.createDocumentFragment();
    const home__portfolio = document.querySelector('#home__portfolio');
    const categorie_details_object_array = [
        {'id': 1, 'images_url': '/images/ab817f161830163.63cb810c22ead.jpg', 'title': 'Work', 'description': 'lorem ipsum'}, 
        {'id': 2, 'images_url': '/images/4139e280592771.5ce5873dc3d84.png', 'title': 'Work', 'description': 'lorem ipsum'}, 
        {'id': 3, 'images_url': '/images/1e83c5161747711.63ca1cff04aca.jpg', 'title': 'Work', 'description': 'lorem ipsum'},
        {'id': 4, 'images_url': '/images/the_chosen.jpg', 'title': 'Work', 'description': 'lorem ipsum'},
        {'id': 5, 'images_url': '/images/BingWallpaper-2019-01-23.jpg', 'title': 'Work', 'description': 'lorem ipsum'},
        {'id': 6, 'images_url': '/images/agentBananaV2.png', 'title': 'Work', 'description': 'lorem ipsum'},
        
    ];
    const dropDownMenuCategoryArray = ['web dev', 'mobile dev', 'design', 'more'];
    let currentIndex = 0;
    // console.log(categories);
    function showcategorie() {
        categorie_details_object_array.forEach((c, i) => {
            if (i <= 2) {
                // const categorie = document.createElement('div');
                // categories_div.append(categorie);
                console.log(categories_div.children[i]);
                // if (i === 0) {
                //     categories_div.children[i].classList.add('home__categorie_left');
                // }
                // else if (i === 1) {
                //     categories_div.children[i].classList.add('home__categorie_center');
                // }
                // else {
                //     categories_div.children[i].classList.add('home__categorie_right');
                // }
                categories_div.children[i].style.backgroundImage  = `url(${categorie_details_object_array[i].images_url})`;
            }
            
            // if (i !== 1) {
            //     categories_div.children[i].classList.add('home__categorie_sides');
            // }
            // else {
            //     categories_div.children[i].classList.add('home__categorie_center');
            // }
        });
    }

    showcategorie();

    categories_left.addEventListener('click', () => {
        console.log('left');
        categories_right.classList.add('right-to-center_animation');
        categories_center.classList.add('center-to-left_animation');
        categories_left.classList.add('left-to-right_animation');
        console.log(reorderCategorie_details_object_array(categorie_details_object_array));

        this.onanimationend = () => {
            console.log('onanimationend');
            categories_right.classList.remove('right-to-center_animation');
            categories_center.classList.remove('center-to-left_animation');
            categories_left.classList.remove('left-to-right_animation');
        }
        for (let i = 0; i < categorie_details_object_array.length; i++) {
            categories_div.children[i].style.backgroundImage  = `url(${categorie_details_object_array[i].images_url})`;
            console.log(categories_div.children[i].style.backgroundImage);
        }
    });



    categories_right.addEventListener('click', () => {
        console.log('right');
        categories_left.classList.add('left-to-center_animation');
        categories_center.classList.add('center-to-right_animation');
        categories_right.classList.add('right-to-left_animation');
        console.log(reverseReorderCategorie_details_object_array(categorie_details_object_array));

        this.onanimationend = () => {
            categories_left.classList.remove('left-to-center_animation');
            categories_center.classList.remove('center-to-right_animation');
            categories_right.classList.remove('right-to-left_animation');
        }
        for (let i = 0; i < categorie_details_object_array.length; i++) {
            categories_div.children[i].style.backgroundImage  = `url(${categorie_details_object_array[i].images_url})`;
            console.log(i + ' ' + categories_div.children[i].style.backgroundImage);
        }

    });

    function reorderCategorie_details_object_array(array) {
        const last_element = array.splice(array.length - 1, 1);
        array.unshift(...last_element);
        return array;
    }

    function reverseReorderCategorie_details_object_array(array) {
        const fisrt_element = array.splice(0, 1);
        console.log(fisrt_element);
        array.push(...fisrt_element);
        return array;
    }




    categories_div.addEventListener('scroll', () => {
        categories_div.style.setProperty("--scroll-categories", categories_div.scrollLeft / (categories_div.scrollWidth - categories_div.clientWidth));
        // categories_div.style.setProperty("--scroll-categories", categories_div.offsetLeft);
        console.log('sdww ' + categories_div.children[1].offsetLeft);
        for (let i = 0; i < categories_div.children.length; i++) {
            categories_div.children[i].style.animation = 'big_middle 1s linear reverse';
            categories_div.children[i].style.animationPlayState = 'paused';
            categories_div.children[i].style.animationDelay = 'calc(var(--scroll-categories) * -1s)'; 
        }
        
    });



    

    window.addEventListener("scroll", () => {
        document.body.style.setProperty("--scroll-body", window.scrollY / (document.body.offsetHeight - window.innerHeight));
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
    const classListNameArray = ['blue_circle', 'yellow_circle', 'color_changer', 'color_changer_v2'];
    const firstSpan = document.querySelector('.mosaic_container');
    const secondSpan = document.querySelector('.carrousel');
    const thirdSpan = document.querySelector('.about_container');
    let isClicked = false;

    
    // firstSpan.addEventListener('click', (e) => {                                                                 
    //     console.log(e.target.id);
    //     if (!isClicked) {
    //         isClicked = true;
    //         firstSpan.classList.add('blue_circle');
    //     }
    //     else {
    //         isClicked = false;
    //         firstSpan.classList.remove('blue_circle');
    //     }
    // });
    const targetSections = sections[currentSectionIndex];

    function sectionDetection(index) {
        console.log(index); 
        if (index >= 0 && index < sections.length){
            const targetPosition = targetSections.offsetTop - window.innerHeight * 0; 
            
            const currentPosition = window.scrollY;
            console.log('currentSectionIndex: ' + currentPosition);
            if (currentPosition >= targetPosition) {
                currentSectionIndex = sections[targetSections];
                window.removeEventListener('wheel', sectionDetection);
                isScrolling = false;
                
            }
        }

    }
    


    var counter = 0;
    window.addEventListener('wheel', handleScrollEvent(targetSections));

    function handleScrollEvent(event) {
        // counter++;
        // console.log('counter: '+ counter);
        if (event.deltaY > 0) {
            // Scrolling down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            // Scrolling up
            currentSectionIndex = Math.min(currentSectionIndex - 1, sections.length + 1);
        }

        sectionDetection(currentSectionIndex);
    }



    const options = {
        root: document.querySelector('#sections'),
        rootMargin: '100px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                console.log(entry);
                if (entry.target.getAttribute('id') === 'header') {
                    document.querySelector('.carrousel').classList.remove('carrousel_animation');
                    document.querySelector('.carrousel').classList.add('carrousel_animation_goes_down');
                    console.log('home');
                }
                if (entry.target.getAttribute('id') === 'home__portfolio') {
                    document.querySelector('.carrousel').classList.add('carrousel_animation');
                    document.querySelector('.carrousel').classList.remove('carrousel_animation_goes_down');
                    console.log('home__portfolio');
                }
                if (entry.target.getAttribute('id') === 'about') {
                    document.querySelector('.carrousel').classList.remove('carrousel_animation');
                    document.querySelector('.carrousel').classList.add('carrousel_animation_goes_down');
                    console.log('about');
                }
                // entry.target.classList.add('active');

                // observer.unobserve(entry.target);
            }
        });
    };

    


    
    const observer = new IntersectionObserver(callback, options) 

    document.querySelectorAll('section, header, footer').forEach(entry => {
        console.log(entry);
        observer.observe(entry);
    });
    let currentStart = 0 
    let currentEnd = 0 
    let wheelCounter = 0
    window.addEventListener('wheel', () => {
        wheelCounter += 1;
        
        const bodyContainer = document.querySelector('.home_section_container');

        console.log(wheelCounter);
        if ((wheelCounter < 2)) {
            if (event.deltaY > 0) {
                currentEnd-= 25;
                // currentStart-= 25;
                anim_scroll_handler(currentStart, currentEnd, bodyContainer, 'down');
                
                if (currentEnd === 0) {
                    currentStart = 0;
                }
                else {
                    currentStart -= 25; 
                }
                
                console.log('down currentEnd ' + currentEnd + ' currentStart ' + currentStart);
            }
            else if (event.deltaY < 0) {
                
                currentEnd+= 25;
                // currentStart+= 25;
                anim_scroll_handler(currentStart, currentEnd, bodyContainer, 'up');
                if (currentEnd === 0) {
                    currentStart = 0;
                }
                else {
                    currentStart += 25; 
                }
                console.log('up currentEnd ' + currentEnd + ' currentStart ' + currentStart);

                
            }
    
        }



        console.log(event.deltaY);
        



    });

    function anim_scroll_handler(start, end, bodyContainer, directionName = 'up') {

        const root = document.documentElement
        bodyContainer.style.animation = `header_move_${directionName} 1s forwards` ;
        root.style.setProperty("--anim_scroll_start", `${start}%`);
        root.style.setProperty("--anim_scroll_end",  `${end}%`);
        
        console.log(bodyContainer.style.animation);


        bodyContainer.onanimationend = (event) => {
            if (event.animationName === `header_move_${directionName}`) {
                console.log('animation ended');
                bodyContainer.style.animation = 'none';
                bodyContainer.style.transform = 'translateY(var(--anim_scroll_end))';
                wheelCounter = 0;        
            }
                     
        }
    }
});
