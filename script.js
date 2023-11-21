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
});
