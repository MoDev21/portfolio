

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
        {'images_url': '/images/ab817f161830163.63cb810c22ead.jpg', 'title': 'Work', 'description': 'lorem ipsum'}, 
        {'images_url': '/images/4139e280592771.5ce5873dc3d84.png', 'title': 'Work', 'description': 'lorem ipsum'}, 
        {'images_url': '/images/1e83c5161747711.63ca1cff04aca.jpg', 'title': 'Work', 'description': 'lorem ipsum'}
        // {'images_url': '/images/the_chosen.jpg', 'title': 'Work', 'description': 'lorem ipsum'}
        
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
        categories_left.classList.add('left-to-center_animation');
        categories_center.classList.add('center-to-right_animation');
        categories_right.classList.add('right-to-left_animation');
        setTimeout(() => {
            console.log(reorderCategorie_details_object_array(categorie_details_object_array));
            for (let i = 0; i < categorie_details_object_array.length; i++) {
                categories_div.children[i].style.backgroundImage  = `url(${categorie_details_object_array[i].images_url})`;
            }
            // categories_left.style.backgroundImage = `url(${categorie_details_object_array[2].images_url})`;
            // categories_center.style.backgroundImage = `url(${categorie_details_object_array[0].images_url})`;
            // categories_right.style.backgroundImage = `url(${categorie_details_object_array[1].images_url})`;
            categories_left.classList.remove('left-to-center_animation');
            categories_center.classList.remove('center-to-right_animation');
            categories_right.classList.remove('right-to-left_animation');
        }, 1200);
        // categories_right.classList.remove('right-to-center_animation');
        // categories_center.classList.remove('center-to-left_animation');
        // categories_left.classList.remove('left-to-right_animation');
    });



    categories_right.addEventListener('click', () => {
        console.log('right');
        categories_left.classList.remove('left-to-center_animation');
        categories_center.classList.remove('center-to-right_animation');
        categories_right.classList.remove('right-to-left_animation');
    });

    function reorderCategorie_details_object_array(array) {
        const last_element = array.pop();
        array.unshift(last_element);
        return array;
    }

    categories_div.addEventListener('click', () => {
        for (let i = 0; i < categories_div.children.length; i++) {
            categories_div.children[i].classList.add('home__sie_sides_animation');
            
            setTimeout(() => {
                categories_div.children[i].classList.remove('home__sie_sides_animation');
            }, 950);
        }
    });

    // function slideLeft() {
        
    // }

    // home__portfolio.addEventListener('click', () => {
    //     categories_div.classList.add('categories_animation');
    //     setTimeout(() => {
    //         categories_div.classList.remove('categories_animation');
    //     }, 950);
    // });

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

    
    // categories_div.addEventListener('click', () => {
    //     categories[1].classList.add('home__categorie_center_animation');
    //     categories[2].classList.add('home__categorie_sides_animation');
    //     setTimeout(() => {
    //         // categories.forEach((categorie, i) => {;
    //         //     categorie.classList.add('home__categorie_sides');
    //         //     categories_array.appendChild(categories_array_reordered);
    //         // });
    //         categories[0].remove();
    //         categories_div.append(categories_array[0]);
    //     }, 950);
    //     console.log('categories_center.classList.add');
    //     // setTimeout(() => {
    //     //     categories_center.classList.remove('home__categorie_center_animation');
    //     //     console.log('categories_center.classList.remove');
    //     // }, 1000);
    // });
    
    // prevBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex - 1 + categories.length) % categories.length;
    //     showcategorie(currentIndex);
    // });

    // nextBtn.addEventListener('click', () => {
    //     currentIndex = (currentIndex + 1) % categories.length;
    //     showcategorie(currentIndex);
    // });

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
    // const sections = document.querySelectorAll('section, header, footer');
    // let currentSectionIndex = 0;
    // let isScrolling = false;
    // const classListNameArray = ['blue_circle', 'yellow_circle', 'color_changer', 'color_changer_v2'];
    // const firstSpan = document.querySelector('.mosaic_container');
    // const secondSpan = document.querySelector('.carrousel');
    // const thirdSpan = document.querySelector('.about_container');
    // let isClicked = false;

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

    // function scrollToSection(index) {
    //     if (index >= 0 && index < sections.length) {
    //         isScrolling = true;
    //         const targetSection = sections[index];
    //         const targetPosition = targetSection.offsetTop - window.innerHeight * 0;
    //         window.removeEventListener('wheel', scrollToSection);
            
    //         window.scrollTo({
    //             top: targetPosition,
    //             behavior: 'smooth'
    //         });

    //         function classListNameChange() {
    //             for (let i = 0; i < classListNameArray.length; i++) {
    //                 bluecircle.classList.remove(classListNameArray[i]);
    //             }
                
    //             if (currentSectionIndex !== 0) {
    //                 bluecircle.classList.add(classListNameArray[currentSectionIndex]);
    //             }
                
    //         }
        
            

    //         switch (index) {
    //             case 0:
    //                 // firstSpan.style.animation = 'turn_to_shrink_animation 1s linear forwards';
    //                 // firstSpan.style.animationPlayState = 'paused';
    //                 // firstSpan.style.animationDelay = 'calc(var(--scroll-body) * -1s)'; 
                    

    //                 // secondSpan.style.animation = 'view_carrousel 1s linear reverse';
    //                 // secondSpan.style.animationPlayState = 'paused';
    //                 // secondSpan.style.animationDelay = 'calc(var(--scroll-body) * -2s)'; 

    //                 console.log(firstSpan);
     
    //                 break;
    //             case 1:

    //                 // secondSpan.style.animation = 'turn_to_shrink_animation 1s linear reverse';
    //                 // secondSpan.style.animationPlayState = 'paused';
    //                 // secondSpan.style.animationDelay = 'calc(var(--scroll) * -1s)';
    //                 const glob = require('glob');

    //                 glob('/src/js/**/*.js', (err, files) => {
    //                     if (err) {
    //                         console.error(err);
    //                     } else {
    //                         files.forEach((file) => {
    //                         const fileName = path.basename(file);
    //                         console.log(fileName);
    //                         });
    //                     }
    //                 });
    //                 console.log(`index 553 `);
    //                 break;
    //             case 2:
    //                 // secondSpan.style.animation = 'turn_to_shrink_animation 1s linear reverse';
    //                 // secondSpan.style.animationPlayState = 'paused';
    //                 // secondSpan.style.animationDelay = 'calc(var(--scroll) * -1s)'; 
    //                 console.log(index);     
    //                 break;
    //             case 3:
    //                 // thirdSpan.style.animation = 'turn_to_shrink_animation 1s linear forwards';
    //                 // thirdSpan.style.animationPlayState = 'paused';
    //                 // thirdSpan.style.animationDelay = 'calc(var(--scroll) * -1s)'; 
    //                 console.log(index);         
    //                 break;
    //             case 4:
    //             default:
    //                 break;
    //         }

    //         console.log('sections.length:'+ index);
    //         setTimeout(() => {
    //             isScrolling = false;
    //         }, 1000); // Adjust this value based on your scroll animation duration
    //     }
    // }


    // var counter = 0;
    // window.addEventListener('wheel', handleScrollEvent);

    // function handleScrollEvent(event) {
    //     // counter++;
    //     // console.log('counter: '+ counter);
    //     if (event.deltaY > 0) {
    //         // Scrolling down
    //         currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    //     } else {
    //         // Scrolling up
    //         currentSectionIndex = Math.min(currentSectionIndex - 1, sections.length + 1);
    //     }

    //     scrollToSection(currentSectionIndex);
    // }

    // const bluecircle = document.querySelector('.blue_circle');

    // // Optional: Update current section on regular scroll
    // window.addEventListener('wheel', function() {


    //     const scrollPosition = window.scrollY;
    //     for (let i = 0; i < sections.length; i++) {
    //         if (scrollPosition >= sections[i].offsetTop - window.innerHeight / 2) {
    //             // console.log('section length: ', (((scrollPosition / sections[i].offsetTop) * 100) - 50) + '%');
    //             // console.log('current section index: ', (sections[i].offsetTop - window.innerHeight / 2));

    //             currentSectionIndex = i;
    //             // bluecircle.style.borderRadius = (((scrollPosition / sections[i].offsetTop) * 100) - 50) + '%';
    //             sections.forEach((section, index) => {
    //                 window.addEventListener("scroll", () => {
    //                     const sectionTop = section.offsetTop;
    //                     const sectionHeight = section.offsetHeight;
    //                     const scrollPosition = window.scrollY;
                        
    //                     if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
    //                         const sectionProgress = (scrollPosition - sectionTop) / sectionHeight;
    //                         section.style.setProperty("--scroll", sectionProgress);
    //                         // console.log(`Section ${index + 1} scroll progress:`, sectionProgress);
    //                     }
    //                 }, false);
    //             });
                
    //         }
    //     }
    // });

    const options = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
    }, options);
    
    document.querySelectorAll('.scroll-trigger').forEach(el => {
        observer.observe(el);
    });

    
});
