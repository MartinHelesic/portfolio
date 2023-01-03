const HAMBURGER = document.querySelector('.hamburger')
const MENU = document.querySelector('.menu')
const ACTIVE_TOGGLE_CLASS = 'is-active'
const SIDE_MENU_TOGGLE_CLASS = 'menu--show'

export const initHamburgerMenu = () => {
    if (HAMBURGER == undefined) {
        return
    }

    HAMBURGER.addEventListener('click', () => {
        HAMBURGER.classList.toggle(ACTIVE_TOGGLE_CLASS)
        MENU.classList.toggle(SIDE_MENU_TOGGLE_CLASS)
    })
}