let box = document.querySelectorAll('div')
let mouse_enter = document.querySelector('.mouse_enter')

box.forEach((bxs) => {
    bxs.onmouseenter = () => {
        bxs.classList.add('mouse_enter')
    }
})