# Atomic Menu
By Matt Shaw

A hamburger menu that doesn't need a breakpoint. The idea of Atomic Menu is that it'll only collapse to a hamburger when the screen width is too small to contain it.

## How to set up

To use, your HTML needs to look something like this:

    <nav class="atomicmenu atomicmenu-lighttheme">
        <div class="atomicmenu-container">
            <a class="atomicmenu-option" href="/" >How it Works</a> 
            <a class="atomicmenu-option" href="/" >Pricing</a> 
            <a class="atomicmenu-option" href="/" >About</a> 
            <a class="atomicmenu-option" href="/" >Careers</a> 
            <a class="atomicmenu-option" href="/" >Sign Up</a> 
        </div>
        <button class="atomicmenu-toggle v-mid tr pa3">Menu</button>
    </nav>

* `.atomicmenu` needs to be applied to the outer container,
* `.atomicmenu-container` needs to be applied to the menu
* `.atomicmenu-option` needs to be applied to all the menu options
* and `.atomicmenu-toggle` needs to be applied to your hamburger toggle
* You also might need to use `.atomicmenu-lighttheme` or `.atomicmenu-darktheme` depending on the styling you want, but you may just want to set up your own custom styles.
