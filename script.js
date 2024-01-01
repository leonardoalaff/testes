const iconeMenu = document.querySelector('.input-menu')
const iconeMenuX = document.querySelector('.icone-menu-x')
const iconeMenuListras = document.querySelector('.icone-menu-listras')
const ul = document.querySelector('.ul')
const checkAlface = document.querySelector('#check-alface')
const labelAlface = document.querySelector('.label-alface')
const precoTexto = document.querySelector('.preco-texto')
const textoP = document.querySelector('.textop')
const h1 = document.querySelector('.h1')

iconeMenu.addEventListener('change', () => {
    iconeMenuX.classList.toggle('active')
    iconeMenuListras.classList.toggle('active')
    ul.classList.toggle('active')
})

checkAlface.addEventListener('change', () => {
    labelAlface.classList.toggle('active')

    precoTexto.classList.toggle('active')
    textoP.classList.toggle('active')
    h1.classList.toggle('active')
})