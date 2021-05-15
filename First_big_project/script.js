const toggleIcon = document.querySelector('.toggle')

toggleIcon.addEventListener('click', openMenu)

function openMenu () {
    const menu = document.querySelector('.nav')

    menu.classList.toggle('opened')
}