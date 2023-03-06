let fondo = querySelector('.elementor-nav-menu--dropdown');
let menu = querySelector('.elementor-menu-toggle');

fondo.addEventListener('click', function(){
    'use strict';
    fondo.style.display = 'none';
    fondo.style.display = 'block';
})

toggleMenu(show){ 
    
    //let isDropdownVisible = this.elements.$menuToggle.hasClass('elementor-active');
    const isDropdownVisibleComplete = this.elements.$dropdownMenu.hasClass('elementor-active');   

    if('boolean' !== typeof show){
        show = !isDropdownVisibleComplete;
    }

    // this.elements.$menuToggle.addClass('aria-expanded', show);
    // this.elements.$dropdownMenu.toggleClass('aria-hidden', !show);
    // this.elements.$menuToggle.addClass('elementor-active', show);
    // this.elements.$dropdownMenu.toggleClas('elementor-active', !show);
    // this.toggleNavLinksTabIndex(show);

    this.elements.$dropdownMenu.addClass('elementor-active', show);
    this.elements.$menuToggle.toggleClass('aria-expanded', !show);
    this.elements.$dropdownMenu.toggleClass('aria-hidden', show);
    this.toggleNavLinksTabIndex(show);

    if (show && this.getElementSettings('full_width')){
        this.stretchElement.stretch();
    }

}