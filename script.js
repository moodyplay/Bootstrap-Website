document.addEventListener("DOMContentLoaded", function () {
    const el_autohide = document.querySelector('.navbar-autohide');
    const el_showCase = document.getElementById("container");
    const menuToggle = document.getElementById('navmenu')
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })

    navbar_height = document.querySelector('.navbar').offsetHeight;
    el_showCase.style.paddingTop = navbar_height + 'px';

    if (el_autohide) {
        let last_scroll_top = 0;
        let isNavbarOpen = false;

        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                if (isNavbarOpen) {
                    bsCollapse.hide();
                    isNavbarOpen = false;
                }
            } else {
                if (isNavbarOpen) {
                    bsCollapse.hide();
                    isNavbarOpen = false;
                }

                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });

        
        window.addEventListener('touchstart', function (e) {
            
            if (isNavbarOpen && !menuToggle.contains(e.target)) {
                bsCollapse.hide();
                isNavbarOpen = false;
            }
        });

        
        menuToggle.addEventListener('show.bs.collapse', function () {
            isNavbarOpen = true;
        });

        
        menuToggle.addEventListener('hidden.bs.collapse', function () {
            isNavbarOpen = false;
        });
    }
    const navLinks = document.querySelectorAll('.nav-item','up');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.querySelector('a').getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    const scrollTopButton = document.querySelector('.up');
    scrollTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
