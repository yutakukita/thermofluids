document.addEventListener('DOMContentLoaded', function () {
    // 1. Image Slider (Master)
    var main = new Splide('#img-slide', {
        type      : 'loop',
        autoplay  : true,
        resetProgress: false,
        perPage   : 1,
        perMove   : 1,
        gap       : 500,
        interval  : 8000,
        speed     : 2000,
        focus     : 'center',
        rewind    : true,
        pagination: false,
        arrows    : false,
        updateOnMove: true,
    });

    // 2. Text Slider (Slave)
    var text = new Splide('#text-slide', {
    type: 'fade',
    rewind: true,
    perPage: 1,
    pagination: false,
    arrows: false,
    });

    // 3. Sync and Mount
    main.sync(text);
    main.mount();
    text.mount();
});

document.addEventListener('DOMContentLoaded', () => {
    // 2. Sticky Navigation - Triggered after passing the Header
    // 2. Sticky Navigation - Triggers exactly when the nav touches the top
    const nav = document.querySelector('.global-nav');

    if (nav) {
        // Capture the initial position of the nav from the top of the page
        const navTop = nav.offsetTop;

        window.addEventListener('scroll', () => {
            // Check if the scroll position has reached or passed the nav's position
            if (window.scrollY > navTop) {
                nav.classList.add('nav_fixed');
            } else {
                nav.classList.remove('nav_fixed');
            }
        });
    }   

    // 3. Performance-Focused Animations (Intersection Observer)
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-left, .fade-right, .fade-up')
            .forEach(el => observer.observe(el));

    // 4. Navigation Syncing (Active Link)
    const sections = document.querySelectorAll('.sec-scroll-point');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                currentId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('current-position');
            if (link.getAttribute('href').includes(currentId) && currentId !== "") {
                link.classList.add('current-position');
            } else if (window.scrollY < 200 && link.getAttribute('href') === "#") {
                link.classList.add('current-position');
            }
        });
    });
});