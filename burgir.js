
(() => {
    const navMenu = document.querySelector(".nav-menu"),
    closeNav = document.querySelector(".close-nav-menu"),
    openNav = document.querySelector(".open-nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 850;

    openNav.addEventListener('click', toggleNav);
    closeNav.addEventListener('click', toggleNav);
    menuOverlay.addEventListener('click', toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            event.preventDefault();
            const menuItmHasChildren = event.target.parentElement;
            
            if(menuItmHasChildren.classList.contains("active")){
                collapseSubmenu();
            }
            else{
                if(navMenu.querySelector(".menu-item-has-children.active")){
                    collapseSubmenu();
                }
                menuItmHasChildren.classList.add("active");
                const subMenu = menuItmHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                }
            }
    });
    
    function collapseSubmenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
    }

    function resizeFix(){
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubmenu();
        }
    }

    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }

    });

})();