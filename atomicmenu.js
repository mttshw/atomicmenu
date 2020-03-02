function atomicMenu() { 
    const atomicmenu = document.getElementsByClassName('atomicmenu');

    function atomicMenuCheckWidths(menuitems) {
        let menuitemswidth = 0;
        for (x = 0; x < menuitems.length; x++) {
            const menuitemwidth = menuitems[x].clientWidth;
            // const menuitempadding = (menuitems[x].style.paddingLeft + menuitems[x].style.paddingRight);
            // const menuitemmargin = (menuitems[x].style.marginLeft + menuitems[x].style.marginRight);
            menuitemswidth = menuitemswidth + menuitemwidth;

        }
        return (menuitemswidth+70);
    }

    for (i = 0; i < atomicmenu.length; i++) {
        const menuitems = atomicmenu[i].getElementsByClassName('atomicmenu-option');
        const menucontainer = atomicmenu[i].getElementsByClassName('atomicmenu-container');
        const atomicmenutoggle = atomicmenu[i].getElementsByClassName('atomicmenu-toggle');

        const menuwidth = atomicmenu[i].clientWidth;

        menuitemswidth = atomicMenuCheckWidths(menuitems);

        if( menuitemswidth >= menuwidth ) {
            menucontainer[0].classList.add('atomicmenu-inactive');
            menucontainer[0].classList.remove('atomicmenu-active');

            atomicmenutoggle[0].classList.add('atomicmenu-active');
            atomicmenutoggle[0].classList.remove('atomicmenu-inactive');

        } else {
            menucontainer[0].classList.add('atomicmenu-active');
            menucontainer[0].classList.remove('atomicmenu-inactive');

            atomicmenutoggle[0].classList.add('atomicmenu-inactive');
            atomicmenutoggle[0].classList.remove('atomicmenu-active');

            menuitemswidth = atomicMenuCheckWidths(menuitems);

            if( menuitemswidth >= menuwidth ) {
                menucontainer[0].classList.add('atomicmenu-inactive');
                menucontainer[0].classList.remove('atomicmenu-active');

                atomicmenutoggle[0].classList.add('atomicmenu-active');
                atomicmenutoggle[0].classList.remove('atomicmenu-inactive');
            }
        }

        atomicmenutoggle[0].onclick = function() {
            if( this.classList.contains('atomicmenu-toggleopen') ) {
                atomicmenutoggle[0].classList.remove('atomicmenu-toggleopen');
                menucontainer[0].classList.remove('atomicmenu-open');
            } else {
                atomicmenutoggle[0].classList.add('atomicmenu-toggleopen');
                menucontainer[0].classList.add('atomicmenu-open');
            }
            return false;
        }
    }
}
// on ready
document.addEventListener("DOMContentLoaded", function() {
    atomicMenu();
    window.onresize = atomicMenu;
});
