document.addEventListener('DOMContentLoaded', function () {
    // Hero sliders
    const imageSliderElement = document.querySelector('#img-slide');
    const textSliderElement = document.querySelector('#text-slide');

    if (imageSliderElement && textSliderElement && typeof Splide !== 'undefined') {
        const imageSlider = new Splide('#img-slide', {
            type: 'loop',
            autoplay: true,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            gap: 500,
            interval: 8000,
            speed: 2000,
            focus: 'center',
            rewind: true,
            pagination: false,
            arrows: false,
            updateOnMove: true,
        });

        const textSlider = new Splide('#text-slide', {
            type: 'fade',
            rewind: true,
            perPage: 1,
            pagination: false,
            arrows: false,
        });

        imageSlider.sync(textSlider);
        imageSlider.mount();
        textSlider.mount();
    }

    // Sticky navigation and section-aware state
    const nav = document.querySelector('.global-nav');

    // Scroll-triggered reveals run once per element.
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-left, .fade-right')
        .forEach(el => observer.observe(el));

    // Active navigation link
    const sections = document.querySelectorAll('.sec-scroll-point');
    const navLinks = document.querySelectorAll('.nav-link');
    const isHomepage = document.body.id === 'home-page';
    const alternateSectionIds = new Set(['research', 'opportunities']);

    if (nav) {
        const header = document.querySelector('header');
        let navTop = nav.offsetTop;

        const updateNavTop = () => {
            navTop = header
                ? header.offsetTop + header.offsetHeight - nav.offsetHeight
                : nav.offsetTop;
        };

        const updateNavigation = () => {
            const isFixed = window.scrollY > navTop;
            nav.classList.toggle('nav_fixed', isFixed);

            let currentId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                    currentId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('current-position');
                if (link.getAttribute('href').includes(currentId) && currentId !== '') {
                    link.classList.add('current-position');
                } else if (window.scrollY < 200 && link.getAttribute('href') === '#') {
                    link.classList.add('current-position');
                }
            });

            let sectionBehindNav = null;
            if (isHomepage && isFixed) {
                const navMidpoint = nav.offsetHeight / 2;
                sectionBehindNav = Array.from(sections).find(section => {
                    const bounds = section.getBoundingClientRect();
                    return bounds.top <= navMidpoint && bounds.bottom > navMidpoint;
                });
            }

            nav.classList.toggle(
                'nav_alt',
                Boolean(sectionBehindNav && alternateSectionIds.has(sectionBehindNav.id)),
            );
        };

        window.addEventListener('scroll', updateNavigation);

        if (isHomepage) {
            window.addEventListener('resize', () => {
                updateNavTop();
                updateNavigation();
            });
            window.addEventListener('hashchange', updateNavigation);
            window.addEventListener('load', updateNavigation);

            updateNavTop();
            updateNavigation();
        }
    }
});
