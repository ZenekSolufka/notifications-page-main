const btn = document.querySelector('.btn')
const number = document.querySelector('.button')
const color = document.querySelector('.color')
const colorr = document.querySelector('.color-second')
const colorrr = document.querySelector('.color-third')


btn.addEventListener('click', () => {
    number.innerText = '0'
    color.classList.remove('color')
    colorr.classList.remove('color-second')
    colorrr.classList.remove('color-third')
})